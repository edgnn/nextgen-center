/* ============================================
   DAILY ACTIVITY REPORT - APPLICATION LOGIC
   ============================================ */

// ============================================
// DATA - EMPLOYEES (with NIK)
// ============================================
const employees = [
    { id: 1, name: "Youngky Ramadhan", nik: "107522", category: "SHIFTING" },
    { id: 2, name: "Ali Ridho Salatin", nik: "213496", category: "SHIFTING" },
    { id: 3, name: "Fachri Ilmawandi", nik: "213494", category: "SHIFTING" },
    { id: 4, name: "Andry Wahyudi", nik: "213497", category: "SHIFTING" },
    { id: 5, name: "Muhammad Taufik", nik: "213504", category: "SHIFTING" },
    { id: 6, name: "M Yarham", nik: "213500", category: "SHIFTING" },
    { id: 7, name: "Edi Gunawan", nik: "213502", category: "OFFICE HOUR" },
    { id: 8, name: "Milan Trista", nik: "213512", category: "OFFICE HOUR" },
    { id: 9, name: "Jajang Haris Hidayat", nik: "213503", category: "OFFICE HOUR" },
    { id: 10, name: "Juwarti", nik: "213513", category: "OFFICE HOUR" }
];

// ============================================
// DATA - COMPANY INFO
// ============================================
const companyInfo = {
    jabatan: "SUPPORT INFRASTRUKTUR",
    dept: "NEXTGEN SERVICE MANAGEMENT",
    atasan1: { name: "HAFIDH AL AFIF", nik: "890641" },
    atasan2: { name: "", nik: "" }
};

// ============================================
// DATA - INDONESIAN NATIONAL HOLIDAYS
// ============================================
const nationalHolidays = {
    // 2025
    "2025-01-01": "Tahun Baru Masehi",
    "2025-01-27": "Isra Mi'raj",
    "2025-01-29": "Tahun Baru Imlek",
    "2025-03-29": "Hari Raya Nyepi",
    "2025-03-30": "Idul Fitri 1446 H",
    "2025-03-31": "Idul Fitri 1446 H",
    "2025-04-01": "Cuti Bersama Idul Fitri",
    "2025-04-02": "Cuti Bersama Idul Fitri",
    "2025-04-03": "Cuti Bersama Idul Fitri",
    "2025-04-04": "Cuti Bersama Idul Fitri",
    "2025-04-18": "Wafat Isa Al-Masih",
    "2025-05-01": "Hari Buruh",
    "2025-05-12": "Hari Raya Waisak",
    "2025-05-29": "Kenaikan Isa Al-Masih",
    "2025-06-01": "Hari Lahir Pancasila",
    "2025-06-06": "Idul Adha 1446 H",
    "2025-06-07": "Cuti Bersama Idul Adha",
    "2025-06-27": "Tahun Baru Islam 1447 H",
    "2025-08-17": "Hari Kemerdekaan RI",
    "2025-09-05": "Maulid Nabi Muhammad SAW",
    "2025-12-25": "Hari Raya Natal",
    "2025-12-26": "Cuti Bersama Natal",
    // 2026
    "2026-01-01": "Tahun Baru Masehi",
    "2026-01-16": "Isra Mi'raj",
    "2026-02-17": "Tahun Baru Imlek",
    "2026-03-19": "Idul Fitri 1447 H",
    "2026-03-20": "Idul Fitri 1447 H",
    "2026-03-21": "Hari Raya Nyepi",
    "2026-04-03": "Wafat Isa Al-Masih",
    "2026-05-01": "Hari Buruh",
    "2026-05-14": "Kenaikan Isa Al-Masih",
    "2026-05-26": "Idul Adha 1447 H",
    "2026-05-31": "Hari Raya Waisak",
    "2026-06-01": "Hari Lahir Pancasila",
    "2026-06-16": "Tahun Baru Islam 1448 H",
    "2026-08-17": "Hari Kemerdekaan RI",
    "2026-08-25": "Maulid Nabi Muhammad SAW",
    "2026-12-25": "Hari Raya Natal"
};

// ============================================
// DATA - SCHEDULE (copy from app.js)
// ============================================
const scheduleData = {
    // NOVEMBER 2025
    "2025-11": {
        1: { 1: "LIBUR", 2: "LIBUR", 3: "S1", 4: "O1", 5: "S2", 6: "O2", 7: "LIBUR", 8: "LIBUR", 9: "S1", 10: "O1", 11: "S2", 12: "O2", 13: "LIBUR", 14: "LIBUR", 15: "S1", 16: "O1", 17: "S2", 18: "O2", 19: "LIBUR", 20: "LIBUR", 21: "S1", 22: "O1", 23: "S2", 24: "O2", 25: "LIBUR", 26: "LIBUR", 27: "S1", 28: "O1", 29: "O2", 30: "O2" },
        2: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "S1", 5: "O2", 6: "S2", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "S1", 11: "O2", 12: "S2", 13: "LIBUR", 14: "LIBUR", 15: "O1", 16: "S1", 17: "O2", 18: "S2", 19: "LIBUR", 20: "LIBUR", 21: "O1", 22: "S1", 23: "O2", 24: "S2", 25: "LIBUR", 26: "LIBUR", 27: "O1", 28: "S1", 29: "O2", 30: "O2" },
        3: { 1: "S1", 2: "O1", 3: "S2", 4: "O2", 5: "LIBUR", 6: "LIBUR", 7: "S1", 8: "O1", 9: "S2", 10: "O2", 11: "LIBUR", 12: "LIBUR", 13: "S1", 14: "O1", 15: "S2", 16: "O2", 17: "LIBUR", 18: "LIBUR", 19: "S1", 20: "O1", 21: "S2", 22: "O2", 23: "LIBUR", 24: "LIBUR", 25: "S1", 26: "O1", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR" },
        4: { 1: "O1", 2: "S1", 3: "O2", 4: "S2", 5: "LIBUR", 6: "LIBUR", 7: "O1", 8: "S1", 9: "O2", 10: "S2", 11: "LIBUR", 12: "LIBUR", 13: "O1", 14: "S1", 15: "O2", 16: "S2", 17: "LIBUR", 18: "LIBUR", 19: "O1", 20: "S1", 21: "O2", 22: "S2", 23: "LIBUR", 24: "LIBUR", 25: "O1", 26: "S1", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR" },
        5: { 1: "S2", 2: "O2", 3: "LIBUR", 4: "LIBUR", 5: "O1", 6: "S1", 7: "S2", 8: "O2", 9: "LIBUR", 10: "LIBUR", 11: "O1", 12: "S1", 13: "S2", 14: "O2", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "S1", 19: "S2", 20: "O2", 21: "LIBUR", 22: "LIBUR", 23: "O1", 24: "S1", 25: "S2", 26: "O2", 27: "LIBUR", 28: "LIBUR", 29: "O1", 30: "O1" },
        6: { 1: "O2", 2: "S2", 3: "LIBUR", 4: "LIBUR", 5: "S1", 6: "O1", 7: "O2", 8: "S2", 9: "LIBUR", 10: "LIBUR", 11: "S1", 12: "O1", 13: "O2", 14: "S2", 15: "LIBUR", 16: "LIBUR", 17: "S1", 18: "O1", 19: "O2", 20: "S2", 21: "LIBUR", 22: "LIBUR", 23: "S1", 24: "O1", 25: "O2", 26: "O2", 27: "LIBUR", 28: "LIBUR", 29: "S1", 30: "O1" },
        7: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "H1", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "H2", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "LIBUR", 23: "H2", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "LIBUR", 30: "LIBUR" },
        8: { 1: "LIBUR", 2: "H1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "LIBUR", 9: "H1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "H2", 23: "LIBUR", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "LIBUR", 30: "LIBUR" },
        9: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "H2", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "LIBUR", 23: "H1", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "H1", 30: "LIBUR" },
        10: { 1: "H1", 2: "LIBUR", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "LIBUR", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "LIBUR", 16: "H1", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "LIBUR", 23: "LIBUR", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "LIBUR", 30: "H1" }
    },
    // DECEMBER 2025
    "2025-12": {
        1: { 1: "LIBUR", 2: "LIBUR", 3: "S1", 4: "O1", 5: "S2", 6: "O2", 7: "LIBUR", 8: "LIBUR", 9: "S1", 10: "O1", 11: "O2", 12: "O2", 13: "LIBUR", 14: "LIBUR", 15: "O1", 16: "O1", 17: "S2", 18: "O2", 19: "LIBUR", 20: "O1", 21: "S1", 22: "O1", 23: "O2", 24: "O2", 25: "LIBUR", 26: "A1", 27: "O1", 28: "O1", 29: "O2", 30: "O2", 31: "LIBUR" },
        2: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "S1", 5: "O2", 6: "S2", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "S1", 11: "O2", 12: "S2", 13: "O2", 14: "LIBUR", 15: "S1", 16: "O1", 17: "O2", 18: "S2", 19: "LIBUR", 20: "LIBUR", 21: "O1", 22: "S1", 23: "O2", 24: "S2", 25: "LIBUR", 26: "LIBUR", 27: "O1", 28: "S1", 29: "O2", 30: "O2", 31: "LIBUR" },
        3: { 1: "S1", 2: "O1", 3: "S2", 4: "O2", 5: "O2", 6: "LIBUR", 7: "S1", 8: "O1", 9: "O2", 10: "O2", 11: "LIBUR", 12: "LIBUR", 13: "S1", 14: "O1", 15: "O2", 16: "O2", 17: "O2", 18: "LIBUR", 19: "S1", 20: "O1", 21: "O2", 22: "O2", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "A1", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR", 31: "O1" },
        4: { 1: "O1", 2: "S1", 3: "O2", 4: "O2", 5: "LIBUR", 6: "O1", 7: "O1", 8: "S1", 9: "O2", 10: "S2", 11: "LIBUR", 12: "O1", 13: "O1", 14: "S1", 15: "O2", 16: "O2", 17: "LIBUR", 18: "LIBUR", 19: "O1", 20: "O1", 21: "O2", 22: "S2", 23: "LIBUR", 24: "LIBUR", 25: "A1", 26: "LIBUR", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR", 31: "O1" },
        5: { 1: "O2", 2: "O2", 3: "O2", 4: "LIBUR", 5: "O1", 6: "S1", 7: "O2", 8: "O2", 9: "O2", 10: "LIBUR", 11: "O1", 12: "S1", 13: "O2", 14: "O2", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "S1", 19: "O2", 20: "O2", 21: "LIBUR", 22: "LIBUR", 23: "O1", 24: "S1", 25: "A2", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "S1", 30: "O1", 31: "O2" },
        6: { 1: "O2", 2: "O2", 3: "LIBUR", 4: "LIBUR", 5: "S1", 6: "O1", 7: "O2", 8: "O2", 9: "LIBUR", 10: "LIBUR", 11: "O1", 12: "O1", 13: "O2", 14: "S2", 15: "O2", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O2", 20: "S2", 21: "O2", 22: "LIBUR", 23: "O1", 24: "O1", 25: "LIBUR", 26: "A2", 27: "LIBUR", 28: "LIBUR", 29: "S1", 30: "O1", 31: "S2" },
        7: { 1: "O1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "LIBUR", 7: "H2", 8: "O1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "LIBUR", 14: "LIBUR", 15: "O1", 16: "O1", 17: "O1", 18: "O1", 19: "O1", 20: "H2", 21: "LIBUR", 22: "O1", 23: "O1", 24: "O1", 25: "LIBUR", 26: "A2", 27: "LIBUR", 28: "LIBUR", 29: "O1", 30: "O1", 31: "O1" },
        8: { 1: "O1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "LIBUR", 7: "LIBUR", 8: "O1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "LIBUR", 14: "H1", 15: "O1", 16: "O1", 17: "O1", 18: "O1", 19: "O1", 20: "LIBUR", 21: "LIBUR", 22: "O1", 23: "O1", 24: "O1", 25: "A1", 26: "LIBUR", 27: "LIBUR", 28: "H1", 29: "O1", 30: "O1", 31: "O1" },
        9: { 1: "O1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "H1", 7: "LIBUR", 8: "O1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "H2", 14: "LIBUR", 15: "O1", 16: "O1", 17: "O1", 18: "O1", 19: "O1", 20: "LIBUR", 21: "LIBUR", 22: "O1", 23: "O1", 24: "O1", 25: "A2", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "O1", 30: "O1", 31: "O1" },
        10: { 1: "O1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "LIBUR", 7: "LIBUR", 8: "O1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "H1", 14: "LIBUR", 15: "O1", 16: "O1", 17: "O1", 18: "O1", 19: "O1", 20: "LIBUR", 21: "H1", 22: "O1", 23: "O1", 24: "O1", 25: "LIBUR", 26: "LIBUR", 27: "H1", 28: "LIBUR", 29: "O1", 30: "O1", 31: "O1" }
    },
    // JANUARY 2026
    "2026-01": {
        1: { 1: "LIBUR", 2: "O1", 3: "S1", 4: "S2", 5: "O2", 6: "LIBUR", 7: "LIBUR", 8: "O1", 9: "S1", 10: "S2", 11: "O2", 12: "LIBUR", 13: "LIBUR", 14: "O1", 15: "O1", 16: "LIBUR", 17: "S2", 18: "LIBUR", 19: "LIBUR", 20: "O1", 21: "S1", 22: "S2", 23: "O2", 24: "LIBUR", 25: "O1", 26: "O1", 27: "S1", 28: "S2", 29: "O2", 30: "LIBUR", 31: "LIBUR" },
        2: { 1: "LIBUR", 2: "S1", 3: "O1", 4: "O2", 5: "S2", 6: "LIBUR", 7: "LIBUR", 8: "O1", 9: "O1", 10: "O2", 11: "S2", 12: "LIBUR", 13: "LIBUR", 14: "S1", 15: "O1", 16: "A1", 17: "O2", 18: "LIBUR", 19: "LIBUR", 20: "O1", 21: "O1", 22: "O2", 23: "O2", 24: "LIBUR", 25: "LIBUR", 26: "O1", 27: "O1", 28: "O2", 29: "S2", 30: "O2", 31: "LIBUR" },
        3: { 1: "A1", 2: "O2", 3: "O2", 4: "LIBUR", 5: "LIBUR", 6: "S1", 7: "O1", 8: "O2", 9: "O2", 10: "LIBUR", 11: "LIBUR", 12: "S1", 13: "O1", 14: "O2", 15: "O2", 16: "LIBUR", 17: "LIBUR", 18: "S1", 19: "O1", 20: "O2", 21: "O2", 22: "LIBUR", 23: "LIBUR", 24: "S1", 25: "O1", 26: "O2", 27: "S2", 28: "LIBUR", 29: "LIBUR", 30: "O1", 31: "O1" },
        4: { 1: "LIBUR", 2: "O2", 3: "O2", 4: "LIBUR", 5: "LIBUR", 6: "O1", 7: "O1", 8: "O2", 9: "O2", 10: "LIBUR", 11: "LIBUR", 12: "O1", 13: "S1", 14: "O2", 15: "S2", 16: "A2", 17: "LIBUR", 18: "O1", 19: "O1", 20: "O2", 21: "S2", 22: "LIBUR", 23: "LIBUR", 24: "O1", 25: "O1", 26: "O2", 27: "S2", 28: "LIBUR", 29: "LIBUR", 30: "O1", 31: "O1" },
        5: { 1: "A2", 2: "LIBUR", 3: "O1", 4: "O1", 5: "S1", 6: "S2", 7: "O2", 8: "LIBUR", 9: "LIBUR", 10: "O1", 11: "S1", 12: "S2", 13: "O2", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "S1", 18: "O2", 19: "O2", 20: "LIBUR", 21: "LIBUR", 22: "O1", 23: "O1", 24: "O2", 25: "O2", 26: "LIBUR", 27: "LIBUR", 28: "O1", 29: "O1", 30: "O2", 31: "O2" },
        6: { 1: "A2", 2: "LIBUR", 3: "LIBUR", 4: "O1", 5: "O1", 6: "O2", 7: "S2", 8: "O2", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O2", 13: "S2", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "O2", 19: "O2", 20: "LIBUR", 21: "LIBUR", 22: "S1", 23: "O1", 24: "O2", 25: "S2", 26: "LIBUR", 27: "LIBUR", 28: "O1", 29: "O1", 30: "S2", 31: "O2" },
        7: { 1: "LIBUR", 2: "O1", 3: "LIBUR", 4: "LIBUR", 5: "O1", 6: "O1", 7: "O1", 8: "O1", 9: "O1", 10: "LIBUR", 11: "LIBUR", 12: "O1", 13: "O1", 14: "O1", 15: "O1", 16: "A2", 17: "LIBUR", 18: "H2", 19: "O1", 20: "O1", 21: "O1", 22: "O1", 23: "O1", 24: "LIBUR", 25: "H2", 26: "O1", 27: "O1", 28: "O1", 29: "O1", 30: "O1", 31: "LIBUR" },
        8: { 1: "A1", 2: "O1", 3: "LIBUR", 4: "LIBUR", 5: "O1", 6: "O1", 7: "O1", 8: "O1", 9: "O1", 10: "LIBUR", 11: "LIBUR", 12: "O1", 13: "O1", 14: "O1", 15: "O1", 16: "LIBUR", 17: "LIBUR", 18: "H1", 19: "O1", 20: "O1", 21: "O1", 22: "O1", 23: "O1", 24: "LIBUR", 25: "LIBUR", 26: "O1", 27: "O1", 28: "O1", 29: "O1", 30: "O1", 31: "H1" },
        9: { 1: "LIBUR", 2: "O1", 3: "LIBUR", 4: "LIBUR", 5: "O1", 6: "O1", 7: "O1", 8: "O1", 9: "O1", 10: "H1", 11: "LIBUR", 12: "O1", 13: "O1", 14: "O1", 15: "O1", 16: "A1", 17: "LIBUR", 18: "LIBUR", 19: "O1", 20: "O1", 21: "O1", 22: "O1", 23: "O1", 24: "H2", 25: "LIBUR", 26: "O1", 27: "O1", 28: "O1", 29: "O1", 30: "O1", 31: "LIBUR" },
        10: { 1: "LIBUR", 2: "O1", 3: "LIBUR", 4: "LIBUR", 5: "O1", 6: "O1", 7: "O1", 8: "O1", 9: "O1", 10: "LIBUR", 11: "H1", 12: "O1", 13: "O1", 14: "O1", 15: "O1", 16: "LIBUR", 17: "H1", 18: "LIBUR", 19: "O1", 20: "O1", 21: "O1", 22: "O1", 23: "O1", 24: "LIBUR", 25: "H1", 26: "O1", 27: "O1", 28: "O1", 29: "O1", 30: "O1", 31: "LIBUR" }
    }
};

// ============================================
// CONFIGURATION
// ============================================
const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const dayNamesShort = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

// Shift working hours
const shiftWorkingHours = {
    "O1": { start: "08:00", end: "17:00" },
    "O2": { start: "20:00", end: "05:00" },
    "S1": { start: "08:00", end: "20:00" },
    "S2": { start: "20:00", end: "08:00" },
    "R1": { start: "08:00", end: "20:00" },
    "R2": { start: "08:00", end: "23:00" },
    "H1": { start: "08:00", end: "17:00" },
    "H2": { start: "15:00", end: "23:00" },
    "A1": { start: "08:00", end: "20:00" },
    "A2": { start: "20:00", end: "08:00" }
};

// Overtime configuration
const overtimeConfig = {
    "S1": { hours: 3, description: "Overtime 3 Jam (17:00 - 20:00)" },
    "S2": { hours: 3, description: "Overtime 3 Jam (5.00 - 8.00)" },
    "A1": { hours: 12, description: "Overtime 12 Jam (8.00 - 20.00)" },
    "A2": { hours: 12, description: "Overtime 12 Jam (20.00 - 8.00)" }
};

// ============================================
// STATE
// ============================================
let currentEmployee = null;
let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();
let activityData = []; // Store editable data

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSelectors();
    initEventListeners();
});

// ============================================
// THEME MANAGEMENT
// ============================================
function initTheme() {
    const savedTheme = localStorage.getItem('jadwal-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('jadwal-theme', newTheme);
}

// ============================================
// SELECTORS
// ============================================
function initSelectors() {
    const employeeSelect = document.getElementById('employeeSelect');
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');

    // Populate employees
    employees.forEach(emp => {
        const option = document.createElement('option');
        option.value = emp.id;
        option.textContent = `${emp.name} (${emp.nik})`;
        employeeSelect.appendChild(option);
    });

    // Populate months
    monthNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = name;
        if (index + 1 === currentMonth) option.selected = true;
        monthSelect.appendChild(option);
    });

    // Populate years
    [2024, 2025, 2026].forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === currentYear) option.selected = true;
        yearSelect.appendChild(option);
    });
}

// ============================================
// EVENT LISTENERS
// ============================================
function initEventListeners() {
    document.getElementById('loadDataBtn').addEventListener('click', loadData);
    document.getElementById('downloadBtn').addEventListener('click', downloadExcel);
    document.getElementById('downloadPdfBtn').addEventListener('click', downloadPdf);
}

// ============================================
// DATA LOADING
// ============================================
function loadData() {
    const employeeId = parseInt(document.getElementById('employeeSelect').value);
    const month = parseInt(document.getElementById('monthSelect').value);
    const year = parseInt(document.getElementById('yearSelect').value);

    if (!employeeId) {
        alert('Pilih karyawan terlebih dahulu');
        return;
    }

    currentEmployee = employees.find(emp => emp.id === employeeId);
    currentMonth = month;
    currentYear = year;

    // Show sections
    document.getElementById('logoHeader').style.display = 'flex';
    document.getElementById('employeeInfoCard').style.display = 'block';
    document.getElementById('tableWrapper').style.display = 'block';
    document.getElementById('signatureSection').style.display = 'grid';
    document.getElementById('actionBar').style.display = 'flex';

    // Update employee info
    updateEmployeeInfo();

    // Build activity data
    buildActivityData();

    // Render table
    renderTable();

    // Update signatures
    updateSignatures();
}

// ============================================
// UPDATE EMPLOYEE INFO
// ============================================
function updateEmployeeInfo() {
    document.getElementById('infoNik').textContent = currentEmployee.nik;
    document.getElementById('infoNama').textContent = currentEmployee.name.toUpperCase();
    document.getElementById('infoJabatan').textContent = companyInfo.jabatan;
    document.getElementById('infoDept').textContent = companyInfo.dept;
}

// ============================================
// BUILD ACTIVITY DATA
// ============================================
function buildActivityData() {
    const monthKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
    const monthData = scheduleData[monthKey] || {};
    const empSchedule = monthData[currentEmployee.id] || {};
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

    activityData = [];

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth - 1, day);
        const dayOfWeek = date.getDay();
        const dateKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        const shift = empSchedule[day] || "";
        const isHoliday = !!nationalHolidays[dateKey];
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const isLibur = shift === "LIBUR" || !shift;

        // Determine HADIR status
        let hadir = "WFO";
        if (isLibur) {
            if (dayOfWeek === 0) hadir = "MINGGU";
            else if (dayOfWeek === 6) hadir = "SABTU";
            else hadir = "LIBUR";
        } else if (isHoliday) {
            hadir = "LIBUR NASIONAL";
        }

        // Get working hours
        let startTime = "";
        let endTime = "";
        if (shift && shift !== "LIBUR" && shiftWorkingHours[shift]) {
            startTime = shiftWorkingHours[shift].start;
            endTime = shiftWorkingHours[shift].end;
        }

        // Get Daily Activity text
        let dailyActivity = "";
        if (isLibur) {
            dailyActivity = "LIBUR";
        } else if (isHoliday || shift === "A1" || shift === "A2") {
            dailyActivity = "LEMBUR HARI BESAR NASIONAL";
        } else if (isWeekend) {
            dailyActivity = "LEMBUR Monitoring Surveillance SDWAN & Neucentrix";
        } else {
            dailyActivity = "Monitoring Surveillance SDWAN & Neucentrix";
        }

        // Get Keterangan
        let keterangan = "";
        if (!isLibur && shift) {
            if (overtimeConfig[shift]) {
                keterangan = overtimeConfig[shift].description;
            } else {
                keterangan = "Shift";
            }
        }

        activityData.push({
            no: day,
            date: date,
            dateStr: `${day} ${monthNames[currentMonth - 1]} ${currentYear}`,
            dayName: dayNamesShort[dayOfWeek],
            hadir: hadir,
            startTime: startTime,
            endTime: endTime,
            dailyActivity: dailyActivity,
            keterangan: keterangan,
            isWeekend: isWeekend,
            isHoliday: isHoliday,
            isLibur: isLibur,
            holidayName: nationalHolidays[dateKey] || ""
        });
    }
}

// ============================================
// RENDER TABLE
// ============================================
function renderTable() {
    const tbody = document.getElementById('activityTableBody');

    let html = '';
    activityData.forEach((row, index) => {
        let rowClass = '';
        if (row.isLibur) rowClass = 'libur-row';
        else if (row.isHoliday) rowClass = 'holiday-row';
        else if (row.isWeekend) rowClass = 'weekend-row';

        html += `
            <tr class="${rowClass}">
                <td class="col-no">${row.no}</td>
                <td class="col-tanggal">
                    ${row.dateStr}
                    <span class="day-badge ${row.isHoliday ? 'holiday' : (row.isWeekend ? 'weekend' : '')}" 
                          ${row.holidayName ? `title="${row.holidayName}"` : ''}>
                        ${row.dayName}
                    </span>
                </td>
                <td class="col-hadir">${row.hadir}</td>
                <td class="col-start editable-cell">
                    <input type="text" value="${row.startTime}" 
                           placeholder="HH:MM"
                           pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                           data-index="${index}" data-field="startTime"
                           onchange="updateStartTimeAndOvertime(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-end editable-cell">
                    <input type="text" value="${row.endTime}" 
                           placeholder="HH:MM"
                           pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                           data-index="${index}" data-field="endTime"
                           data-start-time="${row.startTime}"
                           id="endTime-${index}"
                           onchange="updateEndTimeAndOvertime(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-activity editable-cell">
                    <input type="text" value="${row.dailyActivity}" 
                           data-index="${index}" data-field="dailyActivity"
                           onchange="updateActivityData(this)">
                </td>
                <td class="col-keterangan editable-cell">
                    <input type="text" value="${row.keterangan}" 
                           data-index="${index}" data-field="keterangan"
                           id="keterangan-${index}"
                           onchange="updateActivityData(this)">
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

// ============================================
// UPDATE ACTIVITY DATA
// ============================================
function updateActivityData(input) {
    const index = parseInt(input.dataset.index);
    const field = input.dataset.field;
    activityData[index][field] = input.value;
}

// ============================================
// FORMAT TIME INPUT (24-hour format HH:MM)
// ============================================
function formatTimeInput(input) {
    let value = input.value;

    // Remove non-numeric and non-colon characters
    value = value.replace(/[^0-9:]/g, '');

    // Auto-add colon after 2 digits if not present
    if (value.length === 2 && !value.includes(':')) {
        value = value + ':';
    }

    // Limit to 5 characters (HH:MM)
    if (value.length > 5) {
        value = value.substring(0, 5);
    }

    // Validate hours (00-23)
    if (value.length >= 2) {
        let hours = parseInt(value.substring(0, 2));
        if (hours > 23) {
            value = '23' + value.substring(2);
        }
    }

    // Validate minutes (00-59)
    if (value.length === 5) {
        let minutes = parseInt(value.substring(3, 5));
        if (minutes > 59) {
            value = value.substring(0, 3) + '59';
        }
    }

    input.value = value;
}

// ============================================
// UPDATE END TIME AND CALCULATE OVERTIME
// ============================================
function updateEndTimeAndOvertime(input) {
    const index = parseInt(input.dataset.index);
    const newEndTime = input.value;
    const row = activityData[index];

    // Update end time in data
    activityData[index].endTime = newEndTime;

    // Get current start time from data (may have been updated)
    const startTime = activityData[index].startTime;

    // Calculate overtime based on context
    let overtimeInfo = "";

    if (startTime && newEndTime) {
        if (row.isLibur || row.isWeekend || row.isHoliday) {
            // For libur/weekend/holiday: calculate total hours as lembur
            overtimeInfo = calculateWeekendOvertime(startTime, newEndTime, row);
        } else {
            // For regular days: calculate overtime from default end time
            overtimeInfo = calculateOvertime(startTime, newEndTime, row);
        }
    }

    // Update keterangan field
    activityData[index].keterangan = overtimeInfo;

    // Update keterangan input in the DOM
    const keteranganInput = document.getElementById(`keterangan-${index}`);
    if (keteranganInput) {
        keteranganInput.value = overtimeInfo;
    }
}

// ============================================
// UPDATE START TIME AND CALCULATE OVERTIME
// ============================================
function updateStartTimeAndOvertime(input) {
    const index = parseInt(input.dataset.index);
    const newStartTime = input.value;
    const row = activityData[index];

    // Update start time in data
    activityData[index].startTime = newStartTime;

    // Update the data-start-time attribute on the end time input
    const endTimeInput = document.getElementById(`endTime-${index}`);
    if (endTimeInput) {
        endTimeInput.dataset.startTime = newStartTime;
    }

    // Get current end time
    const endTime = activityData[index].endTime;

    // Calculate overtime based on context
    let overtimeInfo = "";

    if (newStartTime && endTime) {
        if (row.isLibur || row.isWeekend || row.isHoliday) {
            // For libur/weekend/holiday: calculate total hours as lembur
            overtimeInfo = calculateWeekendOvertime(newStartTime, endTime, row);
        } else {
            // For regular days: calculate overtime from default end time
            overtimeInfo = calculateOvertime(newStartTime, endTime, row);
        }
    }

    // Update keterangan field
    activityData[index].keterangan = overtimeInfo;

    // Update keterangan input in the DOM
    const keteranganInput = document.getElementById(`keterangan-${index}`);
    if (keteranganInput) {
        keteranganInput.value = overtimeInfo;
    }
}

// ============================================
// CALCULATE WEEKEND/LIBUR OVERTIME (Total hours worked)
// ============================================
function calculateWeekendOvertime(startTime, endTime, row) {
    if (!startTime || !endTime) return "";

    // Parse times
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);

    // Convert to minutes from midnight
    let startMinutes = startHour * 60 + startMin;
    let endMinutes = endHour * 60 + endMin;

    // Handle overnight shift (end time is next day)
    if (endMinutes <= startMinutes) {
        endMinutes += 24 * 60; // Add 24 hours
    }

    // Calculate total work duration in hours
    const totalMinutes = endMinutes - startMinutes;
    const totalHours = totalMinutes / 60;
    const roundedHours = Math.round(totalHours * 10) / 10; // Round to 1 decimal

    if (roundedHours > 0) {
        if (row.isHoliday) {
            return `Lembur Hari Besar ${roundedHours} Jam (${startTime} - ${endTime})`;
        } else if (row.isWeekend) {
            return `Lembur Weekend ${roundedHours} Jam (${startTime} - ${endTime})`;
        } else {
            return `Lembur ${roundedHours} Jam (${startTime} - ${endTime})`;
        }
    }

    return "";
}

// ============================================
// CALCULATE OVERTIME HOURS
// ============================================
function calculateOvertime(startTime, endTime, row) {
    if (!startTime || !endTime) return "";

    // Define default end times for each shift type
    const shiftDefaultEndTimes = {
        "O1": "17:00",  // Office Hour Day: 08:00 - 17:00
        "O2": "05:00",  // Office Hour Night: 20:00 - 05:00
        "S1": "20:00",  // Shift Day: 08:00 - 20:00
        "S2": "08:00",  // Shift Night: 20:00 - 08:00
        "H1": "17:00",  // Half Day: 08:00 - 17:00
        "H2": "23:00",  // Half Night: 15:00 - 23:00
        "R1": "20:00",  // Reserved 1
        "R2": "23:00",  // Reserved 2
        "A1": "20:00",  // Holiday Day: 08:00 - 20:00
        "A2": "08:00"   // Holiday Night: 20:00 - 08:00
    };

    // Determine shift type based on start time
    let shiftType = "O1"; // Default
    const [startHour] = startTime.split(':').map(Number);

    if (startHour === 20) {
        shiftType = "O2"; // Night shift starting at 20:00
    } else if (startHour === 8) {
        shiftType = "O1"; // Day shift starting at 08:00
    } else if (startHour === 15) {
        shiftType = "H2"; // Half shift starting at 15:00
    }

    // Get default end time for this shift
    const defaultEndTime = shiftDefaultEndTimes[shiftType] || "17:00";

    // Parse times
    const [defaultEndHour, defaultEndMin] = defaultEndTime.split(':').map(Number);
    const [newEndHour, newEndMin] = endTime.split(':').map(Number);

    // Convert to minutes from midnight
    let defaultEndMinutes = defaultEndHour * 60 + defaultEndMin;
    let newEndMinutes = newEndHour * 60 + newEndMin;

    // Handle overnight shift (O2, S2, A2)
    if (shiftType === "O2" || shiftType === "S2" || shiftType === "A2") {
        // For overnight shifts, add 24 hours if end time is in morning
        if (defaultEndMinutes < 12 * 60) defaultEndMinutes += 24 * 60;
        if (newEndMinutes < 12 * 60) newEndMinutes += 24 * 60;
    }

    // Calculate overtime in minutes
    const overtimeMinutes = newEndMinutes - defaultEndMinutes;

    if (overtimeMinutes > 0) {
        // Convert to hours
        const overtimeHours = overtimeMinutes / 60;
        const roundedOT = Math.round(overtimeHours * 10) / 10; // Round to 1 decimal

        // Format: Overtime X Jam (defaultEnd - newEnd)
        return `Overtime ${roundedOT} Jam (${defaultEndTime} - ${endTime})`;
    } else if (row.isHoliday) {
        return `Lembur Hari Besar Nasional (${startTime} - ${endTime})`;
    } else if (row.isWeekend && !row.isLibur) {
        return `Lembur Weekend (${startTime} - ${endTime})`;
    }

    return "Shift";
}

// ============================================
// UPDATE SIGNATURES
// ============================================
function updateSignatures() {
    document.getElementById('sigPekerja').textContent = `(${currentEmployee.name.toUpperCase()})`;
    document.getElementById('sigPekerjaNik').textContent = `NIK : ${currentEmployee.nik}`;
}
// ============================================
// DOWNLOAD EXCEL (Using ExcelJS with Image Support)
// ============================================
async function downloadExcel() {
    if (!currentEmployee || activityData.length === 0) {
        alert('Muat data terlebih dahulu');
        return;
    }

    try {
        // Create workbook and worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Kertas kerja');

        // ===============================
        // PAGE SETUP - FIT TO 1 PAGE
        // ===============================
        worksheet.pageSetup = {
            paperSize: 9, // A4 Paper
            orientation: 'landscape', // Landscape untuk muat lebih banyak kolom
            fitToPage: true, // Enable fit to page
            fitToWidth: 1, // Fit to 1 page width
            fitToHeight: 1, // Fit to 1 page height
            horizontalCentered: true, // Center horizontally
            verticalCentered: false, // Don't center vertically
            margins: {
                left: 0.25,
                right: 0.25,
                top: 0.5,
                bottom: 0.5,
                header: 0.3,
                footer: 0.3
            },
            printArea: null // Will be set after adding all content
        };

        // Set column widths (Optimized for A4 Landscape - 1 page fit)
        worksheet.columns = [
            { width: 4 },   // A - NO (reduced)
            { width: 18 },  // B - TANGGAL (reduced)
            { width: 12 },  // C - HADIR (reduced)
            { width: 7 },   // D - Start (reduced)
            { width: 7 },   // E - End (reduced)
            { width: 45 },  // F - DAILY ACTIVITY (reduced)
            { width: 30 },  // G - KETERANGAN (reduced)
        ];

        // ===============================
        // HEADER SECTION (Rows 1-3)
        // A1:G3 merged - Logo left, Title center
        // ===============================

        // Add rows 1-3 first
        worksheet.addRow([]); // Row 1
        worksheet.addRow([]); // Row 2  
        worksheet.addRow([]); // Row 3

        // Merge entire header area A1:G3
        worksheet.mergeCells('A1:G3');

        // Set header cell content - Title centered with space for logo
        const headerCell = worksheet.getCell('A1');
        headerCell.value = '                                        Daily Activity';
        headerCell.font = { bold: true, size: 28 };
        headerCell.alignment = { horizontal: 'center', vertical: 'middle' };

        // Set row heights for header
        worksheet.getRow(1).height = 25;
        worksheet.getRow(2).height = 25;
        worksheet.getRow(3).height = 25;

        // Load and add logo image
        try {
            const logoResponse = await fetch('infomedia-logo.png');
            const logoBlob = await logoResponse.blob();
            const logoBase64 = await blobToBase64(logoBlob);

            const logoId = workbook.addImage({
                base64: logoBase64,
                extension: 'png',
            });

            // Add logo to worksheet (top-left corner inside merged area)
            worksheet.addImage(logoId, {
                tl: { col: 0, row: 0 },
                ext: { width: 180, height: 60 }
            });
        } catch (logoError) {
            console.warn('Could not load logo:', logoError);
        }

        // ===============================
        // INFO SECTION (Rows 4-7)
        // A4:G7 merged - NIK, Nama, Jabatan, Dept
        // ===============================

        // Add rows 4-7
        worksheet.addRow([]); // Row 4
        worksheet.addRow([]); // Row 5
        worksheet.addRow([]); // Row 6
        worksheet.addRow([]); // Row 7

        // Merge info area A4:G7
        worksheet.mergeCells('A4:G7');

        // Set info cell content with aligned colons using fixed spacing
        const infoCell = worksheet.getCell('A4');
        infoCell.value = `NIK / Perner   : ${currentEmployee.nik}\nNama             : ${currentEmployee.name.toUpperCase()}\nJabatan          : ${companyInfo.jabatan}\nDept / Divisi  : ${companyInfo.dept}`;
        infoCell.alignment = { vertical: 'top', wrapText: true };
        infoCell.font = { size: 11 };

        // ===============================
        // TABLE HEADER (Row 8)
        // ===============================
        const tableHeaderRow = worksheet.addRow(['NO', 'TANGGAL', 'HADIR', 'Start', 'End', 'DAILY ACTIVITY', 'KETERANGAN']);
        tableHeaderRow.eachCell((cell) => {
            cell.font = { bold: true };
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE0E0E0' }
            };
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });

        // ===============================
        // DATA ROWS (Row 9 onwards)
        // ===============================
        const dataStartRow = 9;
        activityData.forEach((row, index) => {
            const dataRow = worksheet.addRow([
                row.no,
                row.dateStr,
                row.hadir,
                row.startTime,
                row.endTime,
                row.dailyActivity,
                row.keterangan
            ]);

            dataRow.eachCell((cell) => {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });

            // Highlight weekend/holiday rows
            if (row.isLibur || row.isHoliday || row.isWeekend) {
                dataRow.eachCell((cell) => {
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: row.isHoliday ? 'FFFFD9D9' : (row.isWeekend ? 'FFFFF3CD' : 'FFF0F0F0') }
                    };
                });
            }
        });

        // ===============================
        // SIGNATURE SECTION
        // Calculate start row based on data length
        // ===============================
        const lastDataRow = dataStartRow + activityData.length - 1;
        const sigStartRow = lastDataRow + 2; // 1 empty row after data

        // Add empty row after data
        worksheet.addRow([]);

        // Signature section spans 6 rows (e.g., 43-48 for 31 days of data)
        // Add 6 rows for signature section
        for (let i = 0; i < 6; i++) {
            worksheet.addRow([]);
        }

        const sigEndRow = sigStartRow + 5;

        // Merge Pekerja section (A:E, 6 rows)
        worksheet.mergeCells(`A${sigStartRow}:E${sigEndRow}`);
        const pekerjaCell = worksheet.getCell(`A${sigStartRow}`);
        pekerjaCell.value = `Pekerja\n\n\n\n(${currentEmployee.name.toUpperCase()})\nNIK: ${currentEmployee.nik}`;
        pekerjaCell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        pekerjaCell.font = { size: 11 };

        // Merge Atasan 1 section (F, 6 rows)
        worksheet.mergeCells(`F${sigStartRow}:F${sigEndRow}`);
        const atasan1Cell = worksheet.getCell(`F${sigStartRow}`);
        atasan1Cell.value = `Atasan 1\n\n\n\n(${companyInfo.atasan1.name})\nNIK: ${companyInfo.atasan1.nik}`;
        atasan1Cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        atasan1Cell.font = { size: 11 };

        // Merge Atasan 2 section (G, 6 rows)
        worksheet.mergeCells(`G${sigStartRow}:G${sigEndRow}`);
        const atasan2Cell = worksheet.getCell(`G${sigStartRow}`);
        atasan2Cell.value = `Atasan 2\n\n\n\n\n(……………………………)`;
        atasan2Cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        atasan2Cell.font = { size: 11 };

        // ===============================
        // SET PRINT AREA - Cover all content
        // ===============================
        worksheet.pageSetup.printArea = `A1:G${sigEndRow}`;

        // ===============================
        // COMPACT ROW HEIGHTS FOR BETTER FIT
        // ===============================
        // Adjust data row heights to be more compact
        for (let i = dataStartRow; i <= lastDataRow; i++) {
            worksheet.getRow(i).height = 15; // Compact height for data rows
        }

        // Adjust signature row heights
        for (let i = sigStartRow; i <= sigEndRow; i++) {
            worksheet.getRow(i).height = 18; // Slightly taller for signature section
        }

        // Generate filename
        const monthNameUpper = monthNames[currentMonth - 1].toUpperCase();
        const employeeNameFile = currentEmployee.name.toUpperCase().replace(/ /g, '_');
        const filename = `Daily_Activity_Penggajian_${monthNameUpper}_${currentYear}_${employeeNameFile}_${currentEmployee.nik}.xlsx`;

        // Download file
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

    } catch (error) {
        console.error('Error generating Excel:', error);
        alert('Error generating Excel: ' + error.message);
    }
}

// Helper function to convert blob to base64
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// ============================================
// DOWNLOAD PDF (Using html2pdf.js)
// ============================================
async function downloadPdf() {
    if (!currentEmployee || activityData.length === 0) {
        alert('Muat data terlebih dahulu');
        return;
    }

    // Show loading state
    const pdfBtn = document.getElementById('downloadPdfBtn');
    const originalText = pdfBtn.innerHTML;
    pdfBtn.innerHTML = '⏳ Generating PDF...';
    pdfBtn.disabled = true;

    try {
        // Create a container for PDF content - must be visible for html2canvas
        const pdfContainer = document.createElement('div');
        pdfContainer.id = 'pdf-content';
        pdfContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 1100px;
            padding: 20px;
            background: white;
            font-family: Arial, sans-serif;
            font-size: 11px;
            color: #1a1a1a;
            z-index: -9999;
            opacity: 0;
            pointer-events: none;
        `;

        // Build PDF content HTML
        pdfContainer.innerHTML = buildPdfContent();
        document.body.appendChild(pdfContainer);

        // Wait for DOM to update and images to load
        await new Promise(resolve => setTimeout(resolve, 500));

        // Generate filename
        const monthNameUpper = monthNames[currentMonth - 1].toUpperCase();
        const employeeNameFile = currentEmployee.name.toUpperCase().replace(/ /g, '_');
        const filename = `Daily_Activity_${monthNameUpper}_${currentYear}_${employeeNameFile}.pdf`;

        // Make container temporarily visible for rendering
        pdfContainer.style.opacity = '1';
        pdfContainer.style.zIndex = '9999';

        // Configure html2pdf options for 1-page fit
        const options = {
            margin: [5, 5, 5, 5],
            filename: filename,
            image: { type: 'jpeg', quality: 0.95 },
            html2canvas: {
                scale: 1.5,
                useCORS: true,
                allowTaint: true,
                logging: false,
                width: 1100,
                windowWidth: 1100
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'landscape'
            },
            pagebreak: { mode: 'avoid-all' }
        };

        // Generate PDF
        await html2pdf().set(options).from(pdfContainer).save();

        // Cleanup
        document.body.removeChild(pdfContainer);

    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF: ' + error.message);
    } finally {
        // Restore button state
        pdfBtn.innerHTML = originalText;
        pdfBtn.disabled = false;
    }
}

// ============================================
// BUILD PDF CONTENT HTML
// ============================================
function buildPdfContent() {
    let html = '';

    // Header with logo and title
    html += `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
            <img src="infomedia-logo.png" alt="Logo" style="height: 50px;">
            <h1 style="font-size: 24px; font-weight: 700; margin: 0; text-align: center; flex: 1;">Daily Activity</h1>
            <div style="width: 100px;"></div>
        </div>
    `;

    // Employee info
    html += `
        <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-left: 3px solid #3b82f6;">
            <div style="margin-bottom: 4px;"><strong>NIK / Perner</strong> : ${currentEmployee.nik}</div>
            <div style="margin-bottom: 4px;"><strong>Nama</strong> : ${currentEmployee.name.toUpperCase()}</div>
            <div style="margin-bottom: 4px;"><strong>Jabatan</strong> : ${companyInfo.jabatan}</div>
            <div><strong>Dept / Divisi</strong> : ${companyInfo.dept}</div>
        </div>
    `;

    // Activity table
    html += `
        <table style="width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 15px;">
            <thead>
                <tr style="background: #e5e7eb;">
                    <th style="border: 1px solid #d1d5db; padding: 6px 4px; width: 25px;">NO</th>
                    <th style="border: 1px solid #d1d5db; padding: 6px 4px; width: 100px;">TANGGAL</th>
                    <th style="border: 1px solid #d1d5db; padding: 6px 4px; width: 70px;">HADIR</th>
                    <th style="border: 1px solid #d1d5db; padding: 6px 4px; width: 45px;">Start</th>
                    <th style="border: 1px solid #d1d5db; padding: 6px 4px; width: 45px;">End</th>
                    <th style="border: 1px solid #d1d5db; padding: 6px 4px;">DAILY ACTIVITY</th>
                    <th style="border: 1px solid #d1d5db; padding: 6px 4px; width: 150px;">KETERANGAN</th>
                </tr>
            </thead>
            <tbody>
    `;

    activityData.forEach(row => {
        let bgColor = 'white';
        if (row.isHoliday) bgColor = '#fef2f2';
        else if (row.isWeekend) bgColor = '#fffbeb';
        else if (row.isLibur) bgColor = '#f3f4f6';

        html += `
            <tr style="background: ${bgColor};">
                <td style="border: 1px solid #d1d5db; padding: 4px; text-align: center;">${row.no}</td>
                <td style="border: 1px solid #d1d5db; padding: 4px;">${row.dateStr}</td>
                <td style="border: 1px solid #d1d5db; padding: 4px;">${row.hadir}</td>
                <td style="border: 1px solid #d1d5db; padding: 4px; text-align: center;">${row.startTime}</td>
                <td style="border: 1px solid #d1d5db; padding: 4px; text-align: center;">${row.endTime}</td>
                <td style="border: 1px solid #d1d5db; padding: 4px;">${row.dailyActivity}</td>
                <td style="border: 1px solid #d1d5db; padding: 4px;">${row.keterangan}</td>
            </tr>
        `;
    });

    html += '</tbody></table>';

    // Signature section
    html += `
        <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <div style="text-align: center; width: 30%;">
                <div style="margin-bottom: 50px;">Pekerja</div>
                <div style="border-top: 1px solid #000; padding-top: 5px;">
                    <strong>(${currentEmployee.name.toUpperCase()})</strong><br>
                    <span style="font-size: 10px;">NIK: ${currentEmployee.nik}</span>
                </div>
            </div>
            <div style="text-align: center; width: 30%;">
                <div style="margin-bottom: 50px;">Atasan 1</div>
                <div style="border-top: 1px solid #000; padding-top: 5px;">
                    <strong>(${companyInfo.atasan1.name})</strong><br>
                    <span style="font-size: 10px;">NIK: ${companyInfo.atasan1.nik}</span>
                </div>
            </div>
            <div style="text-align: center; width: 30%;">
                <div style="margin-bottom: 50px;">Atasan 2</div>
                <div style="border-top: 1px solid #000; padding-top: 5px;">
                    <strong>(……………………………)</strong><br>
                    <span style="font-size: 10px;">&nbsp;</span>
                </div>
            </div>
        </div>
    `;

    return html;
}
