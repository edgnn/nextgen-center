const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { Client } = require('ssh2');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Store active SSH connections
const sshConnections = new Map();

// WebSocket connection handler
wss.on('connection', (ws) => {
    console.log('New WebSocket connection');
    let sshClient = null;
    let sshStream = null;

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);

            switch (data.type) {
                case 'connect':
                    // Create new SSH connection
                    sshClient = new Client();

                    sshClient.on('ready', () => {
                        console.log('SSH Connection established');
                        ws.send(JSON.stringify({ type: 'connected' }));

                        sshClient.shell({ term: 'xterm-256color', cols: 120, rows: 30 }, (err, stream) => {
                            if (err) {
                                ws.send(JSON.stringify({ type: 'error', message: err.message }));
                                return;
                            }

                            sshStream = stream;

                            stream.on('data', (chunk) => {
                                ws.send(JSON.stringify({ type: 'data', data: chunk.toString('utf8') }));
                            });

                            stream.on('close', () => {
                                ws.send(JSON.stringify({ type: 'disconnected' }));
                                sshClient.end();
                            });

                            stream.stderr.on('data', (chunk) => {
                                ws.send(JSON.stringify({ type: 'data', data: chunk.toString('utf8') }));
                            });
                        });
                    });

                    sshClient.on('error', (err) => {
                        console.error('SSH Error:', err.message);
                        ws.send(JSON.stringify({ type: 'error', message: err.message }));
                    });

                    sshClient.on('close', () => {
                        ws.send(JSON.stringify({ type: 'disconnected' }));
                    });

                    // Connect to SSH server
                    const connectConfig = {
                        host: data.host,
                        port: data.port || 22,
                        username: data.username,
                        readyTimeout: 30000
                    };

                    if (data.password) {
                        connectConfig.password = data.password;
                    } else if (data.privateKey) {
                        connectConfig.privateKey = data.privateKey;
                    }

                    sshClient.connect(connectConfig);
                    break;

                case 'data':
                    // Send data to SSH stream
                    if (sshStream) {
                        sshStream.write(data.data);
                    }
                    break;

                case 'resize':
                    // Resize terminal
                    if (sshStream) {
                        sshStream.setWindow(data.rows, data.cols, data.height, data.width);
                    }
                    break;

                case 'disconnect':
                    // Close SSH connection
                    if (sshClient) {
                        sshClient.end();
                    }
                    break;
            }
        } catch (err) {
            console.error('Message parse error:', err);
        }
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
        if (sshClient) {
            sshClient.end();
        }
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err);
        if (sshClient) {
            sshClient.end();
        }
    });
});

// API endpoint for session management
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'SSH Server is running' });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`\n🚀 Web SSH Client Server running on http://localhost:${PORT}`);
    console.log(`📡 WebSocket server ready for SSH connections\n`);
});
