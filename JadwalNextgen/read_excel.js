const XLSX = require('xlsx');
const path = require('path');

const filePath = path.join(__dirname, 'Jadwal Nextgen Ceenter.xlsx');
const wb = XLSX.readFile(filePath);

// List all sheet names
console.log("=== SHEET NAMES ===");
console.log(wb.SheetNames);

// Try to find April 2026 sheet
wb.SheetNames.forEach(name => {
    console.log(`\n=== SHEET: ${name} ===`);
    const ws = wb.Sheets[name];
    const range = XLSX.utils.decode_range(ws['!ref']);
    console.log(`Range: ${ws['!ref']}`);
    console.log(`Rows: ${range.s.r} to ${range.e.r}, Cols: ${range.s.c} to ${range.e.c}`);
    
    // Print all data as JSON for inspection
    const data = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
    data.forEach((row, i) => {
        if (row.some(cell => cell !== "")) {
            console.log(`Row ${i}: ${JSON.stringify(row)}`);
        }
    });
});
