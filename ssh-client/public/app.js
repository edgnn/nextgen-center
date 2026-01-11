// ===================================
// Web SSH Client - Main Application
// ===================================

class SSHClient {
    constructor() {
        this.sessions = [];
        this.activeSessionId = null;
        this.terminals = new Map();
        this.connections = new Map();
        this.recentSessions = [];
        this.savedSessions = [];

        this.init();
    }

    init() {
        this.loadSettings();
        this.loadSavedSessions();
        this.setupEventListeners();
        this.renderRecentSessions();
        this.renderSavedSessions();
    }

    // ===================================
    // Event Listeners
    // ===================================
    setupEventListeners() {
        // Quick Connect Button
        document.getElementById('quickConnectBtn').addEventListener('click', () => this.openConnectModal());
        document.getElementById('welcomeConnectBtn').addEventListener('click', () => this.openConnectModal());
        document.getElementById('newTabBtn').addEventListener('click', () => this.openConnectModal());

        // Modal
        document.getElementById('closeModal').addEventListener('click', () => this.closeConnectModal());
        document.getElementById('cancelConnect').addEventListener('click', () => this.closeConnectModal());
        document.getElementById('connectModal').addEventListener('click', (e) => {
            if (e.target.id === 'connectModal') this.closeConnectModal();
        });

        // Connect Form
        document.getElementById('connectForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.connect();
        });

        // Auth Tabs
        document.querySelectorAll('.form-tab').forEach(tab => {
            tab.addEventListener('click', () => this.switchAuthMethod(tab.dataset.auth));
        });

        // Password Toggle
        document.getElementById('togglePassword').addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const input = document.getElementById('password');
            btn.classList.toggle('active');
            input.type = input.type === 'password' ? 'text' : 'password';
        });

        // Save Session Checkbox
        document.getElementById('saveSession').addEventListener('change', (e) => {
            document.getElementById('sessionNameGroup').classList.toggle('hidden', !e.target.checked);
        });

        // Theme Toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

        // Sidebar Toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => this.toggleSidebar());
        document.getElementById('sidebarShowBtn').addEventListener('click', () => this.toggleSidebar());

        // Saved Sessions Header
        document.getElementById('savedSessionsHeader').addEventListener('click', () => {
            const header = document.getElementById('savedSessionsHeader');
            const items = document.getElementById('savedSessions');
            header.classList.toggle('expanded');
            items.classList.toggle('collapsed');
        });

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Window Resize
        window.addEventListener('resize', () => this.resizeActiveTerminal());
    }

    // ===================================
    // Modal Management
    // ===================================
    openConnectModal() {
        document.getElementById('connectModal').classList.add('active');
        document.getElementById('host').focus();
    }

    closeConnectModal() {
        document.getElementById('connectModal').classList.remove('active');
        document.getElementById('connectForm').reset();
        document.getElementById('sessionNameGroup').classList.add('hidden');
        this.switchAuthMethod('password');
    }

    switchAuthMethod(method) {
        document.querySelectorAll('.form-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.auth === method);
        });
        document.getElementById('passwordAuth').classList.toggle('hidden', method !== 'password');
        document.getElementById('keyAuth').classList.toggle('hidden', method !== 'key');
    }

    // ===================================
    // Connection Management
    // ===================================
    connect() {
        const formData = new FormData(document.getElementById('connectForm'));
        const config = {
            host: formData.get('host'),
            port: parseInt(formData.get('port')) || 22,
            username: formData.get('username'),
            password: formData.get('password'),
            privateKey: formData.get('privateKey'),
            passphrase: formData.get('passphrase')
        };

        if (!config.host || !config.username) {
            alert('Please enter host and username');
            return;
        }

        // Save session if requested
        if (formData.get('saveSession')) {
            const sessionName = formData.get('sessionName') || `${config.username}@${config.host}`;
            this.saveSession({
                name: sessionName,
                host: config.host,
                port: config.port,
                username: config.username
            });
        }

        // Add to recent
        this.addToRecent({
            host: config.host,
            port: config.port,
            username: config.username
        });

        this.closeConnectModal();
        this.createSession(config);
    }

    createSession(config) {
        const sessionId = 'session-' + Date.now();
        const session = {
            id: sessionId,
            config: config,
            status: 'connecting'
        };

        this.sessions.push(session);
        this.createTab(session);
        this.createTerminal(session);
        this.activateSession(sessionId);
        this.connectSSH(session);

        // Hide welcome screen
        document.getElementById('welcomeScreen').classList.add('hidden');
    }

    connectSSH(session) {
        const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const ws = new WebSocket(`${wsProtocol}//${window.location.host}`);

        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: 'connect',
                host: session.config.host,
                port: session.config.port,
                username: session.config.username,
                password: session.config.password,
                privateKey: session.config.privateKey
            }));
            this.updateSessionStatus(session.id, 'connecting');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const terminal = this.terminals.get(session.id);

            switch (data.type) {
                case 'connected':
                    this.updateSessionStatus(session.id, 'connected');
                    this.updateStatusBar(session);
                    break;

                case 'data':
                    if (terminal) {
                        terminal.write(data.data);
                    }
                    break;

                case 'disconnected':
                    this.updateSessionStatus(session.id, 'disconnected');
                    if (terminal) {
                        terminal.write('\r\n\x1b[31mConnection closed.\x1b[0m\r\n');
                    }
                    break;

                case 'error':
                    this.updateSessionStatus(session.id, 'disconnected');
                    if (terminal) {
                        terminal.write(`\r\n\x1b[31mError: ${data.message}\x1b[0m\r\n`);
                    }
                    break;
            }
        };

        ws.onclose = () => {
            this.updateSessionStatus(session.id, 'disconnected');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            this.updateSessionStatus(session.id, 'disconnected');
            const terminal = this.terminals.get(session.id);
            if (terminal) {
                terminal.write('\r\n\x1b[31mConnection error. Is the server running?\x1b[0m\r\n');
            }
        };

        this.connections.set(session.id, ws);
    }

    updateSessionStatus(sessionId, status) {
        const session = this.sessions.find(s => s.id === sessionId);
        if (session) {
            session.status = status;
        }

        const tab = document.querySelector(`[data-session-id="${sessionId}"] .tab-status`);
        if (tab) {
            tab.className = 'tab-status ' + status;
        }

        if (sessionId === this.activeSessionId) {
            const indicator = document.getElementById('statusIndicator');
            indicator.className = 'status-indicator ' + status;

            const text = document.getElementById('statusText');
            text.textContent = status.charAt(0).toUpperCase() + status.slice(1);
        }
    }

    updateStatusBar(session) {
        if (session.id !== this.activeSessionId) return;

        document.getElementById('sessionInfo').textContent =
            `${session.config.username}@${session.config.host}:${session.config.port}`;
    }

    // ===================================
    // Tab Management
    // ===================================
    createTab(session) {
        const tabsContainer = document.getElementById('tabs');
        const tab = document.createElement('button');
        tab.className = 'tab';
        tab.dataset.sessionId = session.id;
        tab.innerHTML = `
            <span class="tab-status ${session.status}"></span>
            <span class="tab-label">${session.config.username}@${session.config.host}</span>
            <button class="tab-close" title="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;

        tab.addEventListener('click', (e) => {
            if (!e.target.closest('.tab-close')) {
                this.activateSession(session.id);
            }
        });

        tab.querySelector('.tab-close').addEventListener('click', () => {
            this.closeSession(session.id);
        });

        tabsContainer.appendChild(tab);
    }

    activateSession(sessionId) {
        this.activeSessionId = sessionId;

        // Update tabs
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.sessionId === sessionId);
        });

        // Update terminal views
        document.querySelectorAll('.terminal-view').forEach(view => {
            view.classList.toggle('active', view.dataset.sessionId === sessionId);
        });

        // Focus terminal
        const terminal = this.terminals.get(sessionId);
        if (terminal) {
            terminal.focus();
            this.resizeTerminal(terminal);
        }

        // Update status bar
        const session = this.sessions.find(s => s.id === sessionId);
        if (session) {
            this.updateSessionStatus(sessionId, session.status);
            this.updateStatusBar(session);
        }
    }

    closeSession(sessionId) {
        // Close WebSocket
        const ws = this.connections.get(sessionId);
        if (ws) {
            ws.close();
            this.connections.delete(sessionId);
        }

        // Dispose terminal
        const terminal = this.terminals.get(sessionId);
        if (terminal) {
            terminal.dispose();
            this.terminals.delete(sessionId);
        }

        // Remove tab
        const tab = document.querySelector(`[data-session-id="${sessionId}"]`);
        if (tab) {
            tab.remove();
        }

        // Remove terminal view
        const view = document.querySelector(`.terminal-view[data-session-id="${sessionId}"]`);
        if (view) {
            view.remove();
        }

        // Remove from sessions
        this.sessions = this.sessions.filter(s => s.id !== sessionId);

        // Activate another session or show welcome
        if (this.sessions.length > 0) {
            this.activateSession(this.sessions[this.sessions.length - 1].id);
        } else {
            this.activeSessionId = null;
            document.getElementById('welcomeScreen').classList.remove('hidden');
            document.getElementById('statusIndicator').className = 'status-indicator disconnected';
            document.getElementById('statusText').textContent = 'Not Connected';
            document.getElementById('sessionInfo').textContent = '-';
        }
    }

    // ===================================
    // Terminal Management
    // ===================================
    createTerminal(session) {
        const terminalsContainer = document.getElementById('terminals');
        const view = document.createElement('div');
        view.className = 'terminal-view active';
        view.dataset.sessionId = session.id;
        terminalsContainer.appendChild(view);

        const terminal = new Terminal({
            cursorBlink: true,
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
            theme: {
                background: '#0d1117',
                foreground: '#e6edf3',
                cursor: '#58a6ff',
                cursorAccent: '#0d1117',
                selection: 'rgba(88, 166, 255, 0.3)',
                black: '#484f58',
                red: '#ff7b72',
                green: '#3fb950',
                yellow: '#d29922',
                blue: '#58a6ff',
                magenta: '#bc8cff',
                cyan: '#39c5cf',
                white: '#b1bac4',
                brightBlack: '#6e7681',
                brightRed: '#ffa198',
                brightGreen: '#56d364',
                brightYellow: '#e3b341',
                brightBlue: '#79c0ff',
                brightMagenta: '#d2a8ff',
                brightCyan: '#56d4dd',
                brightWhite: '#f0f6fc'
            }
        });

        const fitAddon = new FitAddon.FitAddon();
        const webLinksAddon = new WebLinksAddon.WebLinksAddon();

        terminal.loadAddon(fitAddon);
        terminal.loadAddon(webLinksAddon);

        terminal.open(view);
        fitAddon.fit();

        terminal.write('Connecting to ' + session.config.host + '...\r\n');

        // Handle terminal input
        terminal.onData((data) => {
            const ws = this.connections.get(session.id);
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ type: 'data', data: data }));
            }
        });

        // Handle resize
        terminal.onResize((size) => {
            const ws = this.connections.get(session.id);
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({
                    type: 'resize',
                    cols: size.cols,
                    rows: size.rows
                }));
            }
            document.getElementById('terminalSize').textContent = `${size.cols}x${size.rows}`;
        });

        this.terminals.set(session.id, terminal);
        terminal._fitAddon = fitAddon;
    }

    resizeActiveTerminal() {
        if (this.activeSessionId) {
            const terminal = this.terminals.get(this.activeSessionId);
            if (terminal) {
                this.resizeTerminal(terminal);
            }
        }
    }

    resizeTerminal(terminal) {
        if (terminal._fitAddon) {
            setTimeout(() => {
                terminal._fitAddon.fit();
            }, 100);
        }
    }

    // ===================================
    // Session Storage
    // ===================================
    addToRecent(sessionInfo) {
        this.recentSessions = this.recentSessions.filter(
            s => !(s.host === sessionInfo.host && s.username === sessionInfo.username)
        );
        this.recentSessions.unshift({
            ...sessionInfo,
            timestamp: Date.now()
        });
        this.recentSessions = this.recentSessions.slice(0, 10);
        localStorage.setItem('sshRecentSessions', JSON.stringify(this.recentSessions));
        this.renderRecentSessions();
    }

    saveSession(sessionInfo) {
        const existing = this.savedSessions.findIndex(s => s.name === sessionInfo.name);
        if (existing >= 0) {
            this.savedSessions[existing] = sessionInfo;
        } else {
            this.savedSessions.push(sessionInfo);
        }
        localStorage.setItem('sshSavedSessions', JSON.stringify(this.savedSessions));
        this.renderSavedSessions();
    }

    loadSavedSessions() {
        try {
            this.recentSessions = JSON.parse(localStorage.getItem('sshRecentSessions')) || [];
            this.savedSessions = JSON.parse(localStorage.getItem('sshSavedSessions')) || [];
        } catch (e) {
            this.recentSessions = [];
            this.savedSessions = [];
        }
    }

    renderRecentSessions() {
        const container = document.getElementById('recentSessions');
        if (this.recentSessions.length === 0) {
            container.innerHTML = '<div class="empty-state">No recent sessions</div>';
            return;
        }

        container.innerHTML = this.recentSessions.map(session => `
            <div class="tree-item" data-host="${session.host}" data-port="${session.port}" data-username="${session.username}">
                <svg class="tree-item-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span class="tree-item-label">${session.username}@${session.host}</span>
            </div>
        `).join('');

        container.querySelectorAll('.tree-item').forEach(item => {
            item.addEventListener('click', () => {
                this.createSession({
                    host: item.dataset.host,
                    port: parseInt(item.dataset.port),
                    username: item.dataset.username,
                    password: ''
                });
            });
        });
    }

    renderSavedSessions() {
        const container = document.getElementById('savedSessions');
        if (this.savedSessions.length === 0) {
            container.innerHTML = '<div class="empty-state">No saved sessions</div>';
            return;
        }

        container.innerHTML = this.savedSessions.map(session => `
            <div class="tree-item" data-host="${session.host}" data-port="${session.port}" data-username="${session.username}">
                <svg class="tree-item-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span class="tree-item-label">${session.name}</span>
                <span class="tree-item-badge">${session.port}</span>
            </div>
        `).join('');

        container.querySelectorAll('.tree-item').forEach(item => {
            item.addEventListener('click', () => {
                this.openConnectModal();
                document.getElementById('host').value = item.dataset.host;
                document.getElementById('port').value = item.dataset.port;
                document.getElementById('username').value = item.dataset.username;
            });
        });
    }

    // ===================================
    // Settings & Theme
    // ===================================
    loadSettings() {
        const theme = localStorage.getItem('sshTheme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('sshTheme', newTheme);
    }

    toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('collapsed');
        setTimeout(() => this.resizeActiveTerminal(), 300);
    }

    // ===================================
    // Keyboard Shortcuts
    // ===================================
    handleKeyboard(e) {
        // Ctrl+Shift+N - New Connection
        if (e.ctrlKey && e.shiftKey && e.key === 'N') {
            e.preventDefault();
            this.openConnectModal();
        }
        // Ctrl+T - New Tab
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            this.openConnectModal();
        }
        // Ctrl+W - Close Tab
        if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            if (this.activeSessionId) {
                this.closeSession(this.activeSessionId);
            }
        }
        // Escape - Close Modal
        if (e.key === 'Escape') {
            this.closeConnectModal();
        }
        // Ctrl+Tab - Switch Tab
        if (e.ctrlKey && e.key === 'Tab') {
            e.preventDefault();
            const currentIndex = this.sessions.findIndex(s => s.id === this.activeSessionId);
            if (currentIndex >= 0 && this.sessions.length > 1) {
                const nextIndex = (currentIndex + 1) % this.sessions.length;
                this.activateSession(this.sessions[nextIndex].id);
            }
        }
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    window.sshClient = new SSHClient();
});
