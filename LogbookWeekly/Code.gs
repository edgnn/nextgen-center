/**
 * Google Apps Script - Logbook Database Backend
 * ==============================================
 * PETUNJUK SETUP:
 * 1. Buat Google Spreadsheet baru
 * 2. Buka Extensions → Apps Script
 * 3. Hapus semua kode default, lalu paste seluruh kode ini
 * 4. Klik "Deploy" → "New deployment"
 * 5. Pilih type: "Web app"
 * 6. Execute as: "Me"
 * 7. Who has access: "Anyone"
 * 8. Klik "Deploy" dan copy URL-nya
 * 9. Paste URL tersebut di Settings logbook.html
 *
 * PENTING: Setiap kali update kode, buat deployment BARU
 * (Deploy → Manage deployments → New version)
 *
 * KOLOM SPREADSHEET (dibuat otomatis):
 * A: id | B: date | C: type | D: title | E: descriptions (JSON)
 * F: description | G: pic | H: category | I: status | J: priority
 * K: notes | L: createdAt | M: updatedAt
 */

var SHEET_NAME = 'Logbook';
var HEADERS = ['id', 'date', 'type', 'title', 'descriptions', 'description', 'pic', 'category', 'status', 'priority', 'notes', 'createdAt', 'updatedAt'];

// ===== UTILITY =====

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function rowToEntry(row) {
  const entry = {};
  HEADERS.forEach((h, i) => {
    if (h === 'descriptions') {
      try {
        entry[h] = JSON.parse(row[i] || '[]');
      } catch (e) {
        entry[h] = [];
      }
    } else {
      entry[h] = row[i] || '';
    }
  });
  return entry;
}

function entryToRow(entry) {
  return HEADERS.map(h => {
    if (h === 'descriptions') {
      return JSON.stringify(entry[h] || []);
    }
    return entry[h] || '';
  });
}

function findRowById(sheet, id) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(id)) return i + 1;
  }
  return -1;
}

/**
 * JSONP response wrapper — bypasses CORS by returning JS callback
 * If 'callback' param present → JSONP, otherwise → plain JSON
 */
function makeResponse(data, callback) {
  if (callback) {
    const js = callback + '(' + JSON.stringify(data) + ')';
    return ContentService
      .createTextOutput(js)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== CORE OPERATIONS =====

function handleGetAll(sheet) {
  const data = sheet.getDataRange().getValues();
  const entries = [];
  for (let i = 1; i < data.length; i++) {
    if (data[i][0]) entries.push(rowToEntry(data[i]));
  }
  return { success: true, data: entries };
}

function handleSave(sheet, entry) {
  if (!entry || !entry.id) {
    return { success: false, error: 'Missing entry or id' };
  }
  const rowNum = findRowById(sheet, entry.id);
  const rowData = entryToRow(entry);
  if (rowNum === -1) {
    sheet.appendRow(rowData);
  } else {
    sheet.getRange(rowNum, 1, 1, HEADERS.length).setValues([rowData]);
  }
  return { success: true, action: rowNum === -1 ? 'created' : 'updated' };
}

function handleDelete(sheet, id) {
  if (!id) return { success: false, error: 'Missing id' };
  const rowNum = findRowById(sheet, id);
  if (rowNum === -1) return { success: false, error: 'Entry not found' };
  sheet.deleteRow(rowNum);
  return { success: true, action: 'deleted' };
}

function handleSyncAll(sheet, entries) {
  if (!Array.isArray(entries)) {
    return { success: false, error: 'Missing entries array' };
  }
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.deleteRows(2, lastRow - 1);
  }
  if (entries.length > 0) {
    const rows = entries.map(e => entryToRow(e));
    sheet.getRange(2, 1, rows.length, HEADERS.length).setValues(rows);
  }
  return { success: true, action: 'synced', count: entries.length };
}

// ===== HTTP HANDLERS =====

/**
 * doGet handles ALL operations (including writes) via URL params.
 * This enables JSONP which bypasses CORS completely.
 *
 * Parameters:
 *   action   = getAll | save | delete | syncAll
 *   callback = JSONP callback name (optional)
 *   data     = URL-encoded JSON payload (for save/delete/syncAll)
 */
function doGet(e) {
  try {
    const sheet = getOrCreateSheet();
    const p = (e && e.parameter) || {};
    const action = p.action || 'getAll';
    const callback = p.callback || null;

    let result;

    if (action === 'getAll') {
      result = handleGetAll(sheet);
    } else if (action === 'save') {
      const payload = JSON.parse(decodeURIComponent(p.data || '{}'));
      result = handleSave(sheet, payload.entry || payload);
    } else if (action === 'delete') {
      const id = p.id || (p.data ? JSON.parse(decodeURIComponent(p.data)).id : null);
      result = handleDelete(sheet, id);
    } else if (action === 'syncAll') {
      const payload = JSON.parse(decodeURIComponent(p.data || '{}'));
      result = handleSyncAll(sheet, payload.entries || payload);
    } else {
      result = { success: false, error: 'Unknown action: ' + action };
    }

    return makeResponse(result, callback);
  } catch (err) {
    const callback = (e && e.parameter && e.parameter.callback) || null;
    return makeResponse({ success: false, error: err.message }, callback);
  }
}

/**
 * doPost kept for backward compatibility (e.g. direct API calls)
 */
function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    const body = JSON.parse(e.postData.contents);
    const action = body.action || 'save';

    let result;
    if (action === 'save') {
      result = handleSave(sheet, body.entry);
    } else if (action === 'delete') {
      result = handleDelete(sheet, body.id);
    } else if (action === 'syncAll') {
      result = handleSyncAll(sheet, body.entries);
    } else {
      result = { success: false, error: 'Unknown action' };
    }

    return makeResponse(result, null);
  } catch (err) {
    return makeResponse({ success: false, error: err.message }, null);
  }
}
