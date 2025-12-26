/**
 * Google Apps Script - Database API untuk Nextgen Center
 * 
 * Script ini berfungsi sebagai API sederhana untuk membaca data
 * dari Google Sheets dan menyediakannya ke HTML widgets yang di-embed.
 * 
 * CARA SETUP:
 * 1. Buka Google Sheets yang ingin dijadikan database
 * 2. Klik Extensions > Apps Script
 * 3. Copy-paste seluruh code ini
 * 4. Save dengan nama "Database API"
 * 5. Deploy sebagai Web App:
 *    - Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy URL deployment untuk digunakan di HTML widgets
 */

// ========================================
// KONFIGURASI
// ========================================

// ID Spreadsheet (bisa diubah sesuai kebutuhan)
// Jika kosong, akan menggunakan spreadsheet yang aktif
const SPREADSHEET_ID = '';

// Nama sheet default
const DEFAULT_SHEET = 'Sheet1';

// ========================================
// MAIN FUNCTIONS
// ========================================

/**
 * Handler untuk HTTP GET requests
 * Endpoint utama untuk mengakses data
 */
function doGet(e) {
  try {
    const params = e.parameter;
    const action = params.action || 'getData';
    
    let result;
    
    switch(action) {
      case 'getData':
        result = getData(params);
        break;
      case 'getSheets':
        result = getSheetNames();
        break;
      case 'search':
        result = searchData(params);
        break;
      case 'getRow':
        result = getRowById(params);
        break;
      case 'getColumns':
        result = getColumns(params);
        break;
      default:
        result = { error: 'Unknown action: ' + action };
    }
    
    return createJsonResponse(result);
    
  } catch (error) {
    return createJsonResponse({
      error: error.message,
      stack: error.stack
    });
  }
}

/**
 * Handler untuk HTTP POST requests
 * Untuk menambah atau mengupdate data
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action || 'addRow';
    
    let result;
    
    switch(action) {
      case 'addRow':
        result = addRow(data);
        break;
      case 'updateRow':
        result = updateRow(data);
        break;
      case 'deleteRow':
        result = deleteRow(data);
        break;
      default:
        result = { error: 'Unknown action: ' + action };
    }
    
    return createJsonResponse(result);
    
  } catch (error) {
    return createJsonResponse({
      error: error.message
    });
  }
}

// ========================================
// DATA RETRIEVAL FUNCTIONS
// ========================================

/**
 * Mengambil semua data dari sheet tertentu
 * @param {Object} params - { sheet: 'SheetName', limit: 100, offset: 0 }
 * @returns {Object} - { success: true, data: [...], total: number }
 */
function getData(params) {
  const sheetName = params.sheet || DEFAULT_SHEET;
  const limit = parseInt(params.limit) || 1000;
  const offset = parseInt(params.offset) || 0;
  
  const sheet = getSheet(sheetName);
  const data = sheet.getDataRange().getValues();
  
  if (data.length === 0) {
    return { success: true, data: [], total: 0, headers: [] };
  }
  
  const headers = data[0];
  const rows = data.slice(1); // Skip header row
  
  // Apply pagination
  const paginatedRows = rows.slice(offset, offset + limit);
  
  // Convert to array of objects
  const result = paginatedRows.map((row, index) => {
    const obj = { _rowIndex: offset + index + 2 }; // +2 because of 0-index and header
    headers.forEach((header, i) => {
      obj[header] = row[i];
    });
    return obj;
  });
  
  return {
    success: true,
    data: result,
    headers: headers,
    total: rows.length,
    limit: limit,
    offset: offset
  };
}

/**
 * Mendapatkan daftar nama sheet dalam spreadsheet
 * @returns {Object} - { success: true, sheets: [...] }
 */
function getSheetNames() {
  const spreadsheet = getSpreadsheet();
  const sheets = spreadsheet.getSheets();
  
  return {
    success: true,
    sheets: sheets.map(sheet => ({
      name: sheet.getName(),
      rowCount: sheet.getLastRow(),
      columnCount: sheet.getLastColumn()
    }))
  };
}

/**
 * Mencari data berdasarkan query
 * @param {Object} params - { sheet: 'SheetName', column: 'ColumnName', query: 'searchText' }
 * @returns {Object} - { success: true, data: [...] }
 */
function searchData(params) {
  const sheetName = params.sheet || DEFAULT_SHEET;
  const column = params.column;
  const query = params.query || '';
  const exact = params.exact === 'true';
  
  const sheet = getSheet(sheetName);
  const data = sheet.getDataRange().getValues();
  
  if (data.length === 0) {
    return { success: true, data: [], total: 0 };
  }
  
  const headers = data[0];
  const rows = data.slice(1);
  
  // Find column index
  let searchColumnIndex = -1;
  if (column) {
    searchColumnIndex = headers.indexOf(column);
    if (searchColumnIndex === -1) {
      return { error: 'Column not found: ' + column };
    }
  }
  
  // Filter rows
  const filtered = rows.filter((row, rowIndex) => {
    if (searchColumnIndex >= 0) {
      // Search specific column
      const cellValue = String(row[searchColumnIndex]).toLowerCase();
      const searchValue = query.toLowerCase();
      return exact ? cellValue === searchValue : cellValue.includes(searchValue);
    } else {
      // Search all columns
      return row.some(cell => {
        const cellValue = String(cell).toLowerCase();
        const searchValue = query.toLowerCase();
        return exact ? cellValue === searchValue : cellValue.includes(searchValue);
      });
    }
  });
  
  // Convert to objects
  const result = filtered.map((row, index) => {
    const obj = { _rowIndex: index + 2 };
    headers.forEach((header, i) => {
      obj[header] = row[i];
    });
    return obj;
  });
  
  return {
    success: true,
    data: result,
    total: result.length,
    query: query,
    column: column
  };
}

/**
 * Mendapatkan row berdasarkan ID (kolom pertama)
 * @param {Object} params - { sheet: 'SheetName', id: 'rowId' }
 * @returns {Object} - { success: true, data: {...} }
 */
function getRowById(params) {
  const sheetName = params.sheet || DEFAULT_SHEET;
  const id = params.id;
  
  if (!id) {
    return { error: 'ID is required' };
  }
  
  const sheet = getSheet(sheetName);
  const data = sheet.getDataRange().getValues();
  
  if (data.length === 0) {
    return { success: false, data: null };
  }
  
  const headers = data[0];
  const rows = data.slice(1);
  
  // Find row by first column (ID)
  const rowIndex = rows.findIndex(row => String(row[0]) === String(id));
  
  if (rowIndex === -1) {
    return { success: false, data: null, message: 'Row not found' };
  }
  
  const row = rows[rowIndex];
  const result = { _rowIndex: rowIndex + 2 };
  headers.forEach((header, i) => {
    result[header] = row[i];
  });
  
  return {
    success: true,
    data: result
  };
}

/**
 * Mendapatkan nama kolom dari sheet
 * @param {Object} params - { sheet: 'SheetName' }
 * @returns {Object} - { success: true, columns: [...] }
 */
function getColumns(params) {
  const sheetName = params.sheet || DEFAULT_SHEET;
  const sheet = getSheet(sheetName);
  const data = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
  
  return {
    success: true,
    columns: data[0]
  };
}

// ========================================
// DATA MODIFICATION FUNCTIONS
// ========================================

/**
 * Menambahkan row baru
 * @param {Object} data - { sheet: 'SheetName', row: {...} }
 * @returns {Object} - { success: true, rowIndex: number }
 */
function addRow(data) {
  const sheetName = data.sheet || DEFAULT_SHEET;
  const rowData = data.row;
  
  if (!rowData) {
    return { error: 'Row data is required' };
  }
  
  const sheet = getSheet(sheetName);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // Create row array based on headers
  const newRow = headers.map(header => rowData[header] || '');
  
  // Append row
  sheet.appendRow(newRow);
  
  return {
    success: true,
    rowIndex: sheet.getLastRow(),
    message: 'Row added successfully'
  };
}

/**
 * Mengupdate row yang ada
 * @param {Object} data - { sheet: 'SheetName', rowIndex: number, row: {...} }
 * @returns {Object} - { success: true }
 */
function updateRow(data) {
  const sheetName = data.sheet || DEFAULT_SHEET;
  const rowIndex = data.rowIndex;
  const rowData = data.row;
  
  if (!rowIndex || !rowData) {
    return { error: 'Row index and data are required' };
  }
  
  const sheet = getSheet(sheetName);
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // Update each column
  headers.forEach((header, colIndex) => {
    if (rowData.hasOwnProperty(header)) {
      sheet.getRange(rowIndex, colIndex + 1).setValue(rowData[header]);
    }
  });
  
  return {
    success: true,
    message: 'Row updated successfully'
  };
}

/**
 * Menghapus row
 * @param {Object} data - { sheet: 'SheetName', rowIndex: number }
 * @returns {Object} - { success: true }
 */
function deleteRow(data) {
  const sheetName = data.sheet || DEFAULT_SHEET;
  const rowIndex = data.rowIndex;
  
  if (!rowIndex) {
    return { error: 'Row index is required' };
  }
  
  const sheet = getSheet(sheetName);
  sheet.deleteRow(rowIndex);
  
  return {
    success: true,
    message: 'Row deleted successfully'
  };
}

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Mendapatkan spreadsheet object
 */
function getSpreadsheet() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }
  return SpreadsheetApp.getActiveSpreadsheet();
}

/**
 * Mendapatkan sheet object
 */
function getSheet(sheetName) {
  const spreadsheet = getSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    throw new Error('Sheet not found: ' + sheetName);
  }
  
  return sheet;
}

/**
 * Membuat JSON response dengan CORS headers
 */
function createJsonResponse(data) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

// ========================================
// TEST FUNCTIONS (untuk development)
// ========================================

/**
 * Test function - jalankan dari editor
 */
function testGetData() {
  const result = getData({ sheet: 'Sheet1' });
  Logger.log(JSON.stringify(result, null, 2));
}

function testSearch() {
  const result = searchData({
    sheet: 'Sheet1',
    column: 'Name',
    query: 'test'
  });
  Logger.log(JSON.stringify(result, null, 2));
}
