# 📊 Database Google Sheets + Apps Script

Dokumentasi lengkap untuk menggunakan Google Sheets sebagai database sederhana dengan Apps Script API.

---

## 📋 Daftar Isi

1. [Persiapan Google Sheets](#1-persiapan-google-sheets)
2. [Setup Apps Script](#2-setup-apps-script)
3. [Deploy sebagai Web App](#3-deploy-sebagai-web-app)
4. [Cara Penggunaan API](#4-cara-penggunaan-api)
5. [Integrasi dengan HTML](#5-integrasi-dengan-html)
6. [Embed di Google Sites](#6-embed-di-google-sites)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Persiapan Google Sheets

### Struktur Data yang Direkomendasikan

Buat Google Sheets dengan struktur:

| ID | Name | Category | Description | Status | Created |
|----|------|----------|-------------|--------|---------|
| 001 | Tutorial SD-WAN | Learning | Materi SD-WAN | Active | 2025-01-01 |
| 002 | Link Cisco | Resource | Link sertifikasi | Active | 2025-01-02 |

**Tips:**
- Baris pertama HARUS berisi header/nama kolom
- Gunakan kolom ID unik di kolom pertama
- Hindari karakter khusus di nama kolom
- Pastikan tidak ada baris kosong di tengah data

---

## 2. Setup Apps Script

### Langkah-langkah:

1. Buka Google Sheets Anda
2. Klik **Extensions** → **Apps Script**
3. Hapus semua kode default
4. Copy-paste seluruh isi file `database-script.gs`
5. Klik **Save** (Ctrl+S)
6. Beri nama project: **Database API**

### Konfigurasi (Opsional)

Edit variabel di bagian atas script:

```javascript
// Jika ingin menggunakan spreadsheet tertentu, masukkan ID-nya
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

// Nama sheet default
const DEFAULT_SHEET = 'Sheet1';
```

**Cara mendapatkan Spreadsheet ID:**
URL spreadsheet: `https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit`

---

## 3. Deploy sebagai Web App

### Langkah-langkah:

1. Di Apps Script Editor, klik **Deploy** → **New deployment**
2. Klik ⚙️ (gear icon) → **Web app**
3. Isi konfigurasi:
   - **Description**: Database API v1
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Klik **Deploy**
5. **Copy URL deployment** - ini adalah API endpoint Anda

### Update Deployment

Setiap kali mengubah script:
1. **Deploy** → **Manage deployments**
2. Klik ✏️ (edit) pada deployment aktif
3. Ubah **Version** ke "New version"
4. Klik **Deploy**

---

## 4. Cara Penggunaan API

### Endpoint Base URL
```
https://script.google.com/macros/s/[DEPLOYMENT_ID]/exec
```

### GET - Mengambil Data

```
// Semua data dari sheet default
GET ?action=getData

// Data dari sheet tertentu
GET ?action=getData&sheet=Sheet1

// Dengan pagination
GET ?action=getData&sheet=Sheet1&limit=10&offset=0
```

**Response:**
```json
{
  "success": true,
  "data": [...],
  "headers": ["ID", "Name", "Category"],
  "total": 100
}
```

### GET - Search Data

```
// Cari di semua kolom
GET ?action=search&query=cisco

// Cari di kolom tertentu
GET ?action=search&column=Category&query=Learning

// Pencarian exact match
GET ?action=search&column=Status&query=Active&exact=true
```

### GET - Ambil Satu Row

```
GET ?action=getRow&id=001
```

### GET - Daftar Sheet

```
GET ?action=getSheets
```

### POST - Tambah Data

```javascript
fetch(API_URL, {
  method: 'POST',
  body: JSON.stringify({
    action: 'addRow',
    sheet: 'Sheet1',
    row: {
      ID: '003',
      Name: 'New Item',
      Category: 'Test',
      Status: 'Draft'
    }
  })
})
```

### POST - Update Data

```javascript
fetch(API_URL, {
  method: 'POST',
  body: JSON.stringify({
    action: 'updateRow',
    sheet: 'Sheet1',
    rowIndex: 5,  // Nomor baris di spreadsheet
    row: {
      Status: 'Active'
    }
  })
})
```

### POST - Hapus Data

```javascript
fetch(API_URL, {
  method: 'POST',
  body: JSON.stringify({
    action: 'deleteRow',
    sheet: 'Sheet1',
    rowIndex: 5
  })
})
```

---

## 5. Integrasi dengan HTML

### Contoh Penggunaan JavaScript

```javascript
const API_URL = 'https://script.google.com/macros/s/xxx/exec';

// Fetch semua data
async function loadData() {
  const response = await fetch(`${API_URL}?action=getData&sheet=Links`);
  const result = await response.json();
  
  if (result.success) {
    console.log('Data:', result.data);
    console.log('Total:', result.total);
  }
}

// Search
async function searchData(query) {
  const response = await fetch(`${API_URL}?action=search&query=${query}`);
  const result = await response.json();
  return result.data;
}

// Add new row
async function addItem(data) {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      action: 'addRow',
      sheet: 'Links',
      row: data
    })
  });
  return response.json();
}
```

### Contoh Implementasi Lengkap

Lihat file `database-integration.html` untuk contoh lengkap dengan:
- Grid & Table view
- Search functionality
- Pagination
- Copy to clipboard

---

## 6. Embed di Google Sites

### Cara Embed HTML dari Google Drive

1. **Upload ke Google Drive**
   - Upload file HTML (misal: `database-integration.html`)
   - Klik kanan → Share → Change to "Anyone with the link"

2. **Dapatkan Embed URL**
   - Salin link share
   - Ubah format URL:
     - Dari: `https://drive.google.com/file/d/[FILE_ID]/view?usp=sharing`
     - Ke: `https://drive.google.com/file/d/[FILE_ID]/preview`

3. **Di Google Sites**
   - Edit halaman
   - Klik **Insert** → **Embed** → **By URL**
   - Paste URL preview
   - Sesuaikan ukuran iframe

### Alternatif: Embed Code

Jika file HTML sederhana:
1. **Insert** → **Embed** → **Embed code**
2. Paste HTML code langsung

**Catatan:** Beberapa fitur JavaScript mungkin terbatas dalam iframe.

---

## 7. Troubleshooting

### Error: "Script function not found"
- Pastikan function `doGet` dan `doPost` ada
- Redeploy dengan version baru

### Error: "Access Denied"
- Pastikan deployment setting: "Anyone" can access
- Cek sharing permission spreadsheet

### Error: "Sheet not found"
- Periksa nama sheet (case-sensitive)
- Pastikan tidak ada spasi di awal/akhir nama

### Data tidak ter-update
- Refresh browser (clear cache)
- Redeploy Apps Script dengan version baru
- Cek apakah ada error di Apps Script Logs

### CORS Error
- Apps Script sudah handle CORS otomatis
- Pastikan menggunakan URL deployment yang benar (bukan editor URL)

### Response lambat
- Normal untuk request pertama (cold start)
- Request berikutnya lebih cepat
- Pertimbangkan caching di client-side

---

## 📁 File dalam Folder Ini

| File | Deskripsi |
|------|-----------|
| `database-script.gs` | Google Apps Script code |
| `database-integration.html` | Contoh HTML dengan integrasi API |
| `README-database.md` | Dokumentasi ini |

---

## 💡 Tips & Best Practices

1. **Keamanan**: Jangan simpan data sensitif di Google Sheets publik
2. **Rate Limiting**: Apps Script punya quota, hindari request berlebihan
3. **Caching**: Implementasi caching di client untuk performa lebih baik
4. **Backup**: Rutin backup data spreadsheet
5. **Versioning**: Gunakan version control untuk Apps Script

---

## 🔗 Resources

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Spreadsheet Service Reference](https://developers.google.com/apps-script/reference/spreadsheet)
- [Web Apps Guide](https://developers.google.com/apps-script/guides/web)

---

*Dibuat untuk Nextgen Center - 2025*
