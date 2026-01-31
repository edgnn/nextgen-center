/* ============================================
   JADWAL KERJA NEXTGEN - APPLICATION LOGIC
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
// DATA - COMPANY INFO (for Daily Activity Report)
// ============================================
const companyInfo = {
    jabatan: "SUPPORT INFRASTRUKTUR",
    dept: "NEXTGEN SERVICE MANAGEMENT",
    atasan1: { name: "HAFIDH AL AFIF", nik: "890641" },
    atasan2: { name: "", nik: "" }
};

// ============================================
// DATA - SHIFT DESCRIPTIONS
// ============================================
const shiftDescriptions = {
    "O1": "08.00 - 17.00 (8 Jam Kerja Normal)",
    "O2": "20.00 - 05.00 (8 Jam Kerja Normal)",
    "S1": "08.00 - 20.00",
    "S2": "20.00 - 08.00",
    "R1": "08.00 - 20.00",
    "R2": "08.00 - 23.00",
    "H1": "08.00 - 17.00 (Lembur Hari Libur)",
    "H2": "15.00 - 23.00 (Lembur Hari Libur)",
    "A1": "08.00 - 20.00 (Lembur Hari Besar)",
    "A2": "20.00 - 08.00 (Lembur Hari Besar)",
    "LIBUR": "LIBUR"
};

// ============================================
// DATA - INDONESIAN NATIONAL HOLIDAYS
// Format: "YYYY-MM-DD": "Holiday Name"
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
// DATA - SCHEDULE
// Key format: "YYYY-MM" -> { employeeId: { day: shift } }
// ============================================
const scheduleData = {
    // NOVEMBER 2025 (validated from Google Sheet 2025-01-01, L = LIBUR)
    "2025-11": {
        // Youngky Ramadhan
        1: { 1: "LIBUR", 2: "LIBUR", 3: "S1", 4: "O1", 5: "S2", 6: "O2", 7: "LIBUR", 8: "LIBUR", 9: "S1", 10: "O1", 11: "S2", 12: "O2", 13: "LIBUR", 14: "LIBUR", 15: "S1", 16: "O1", 17: "S2", 18: "O2", 19: "LIBUR", 20: "LIBUR", 21: "S1", 22: "O1", 23: "S2", 24: "O2", 25: "LIBUR", 26: "LIBUR", 27: "S1", 28: "O1", 29: "O2", 30: "O2" },
        // Ali Ridho Salatin
        2: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "S1", 5: "O2", 6: "S2", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "S1", 11: "O2", 12: "S2", 13: "LIBUR", 14: "LIBUR", 15: "O1", 16: "S1", 17: "O2", 18: "S2", 19: "LIBUR", 20: "LIBUR", 21: "O1", 22: "S1", 23: "O2", 24: "S2", 25: "LIBUR", 26: "LIBUR", 27: "O1", 28: "S1", 29: "O2", 30: "O2" },
        // Fachri Ilmawandi
        3: { 1: "S1", 2: "O1", 3: "S2", 4: "O2", 5: "LIBUR", 6: "LIBUR", 7: "S1", 8: "O1", 9: "S2", 10: "O2", 11: "LIBUR", 12: "LIBUR", 13: "S1", 14: "O1", 15: "S2", 16: "O2", 17: "LIBUR", 18: "LIBUR", 19: "S1", 20: "O1", 21: "S2", 22: "O2", 23: "LIBUR", 24: "LIBUR", 25: "S1", 26: "O1", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR" },
        // Andry Wahyudi
        4: { 1: "O1", 2: "S1", 3: "O2", 4: "S2", 5: "LIBUR", 6: "LIBUR", 7: "O1", 8: "S1", 9: "O2", 10: "S2", 11: "LIBUR", 12: "LIBUR", 13: "O1", 14: "S1", 15: "O2", 16: "S2", 17: "LIBUR", 18: "LIBUR", 19: "O1", 20: "S1", 21: "O2", 22: "S2", 23: "LIBUR", 24: "LIBUR", 25: "O1", 26: "S1", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR" },
        // Muhammad Taufik
        5: { 1: "S2", 2: "O2", 3: "LIBUR", 4: "LIBUR", 5: "O1", 6: "S1", 7: "S2", 8: "O2", 9: "LIBUR", 10: "LIBUR", 11: "O1", 12: "S1", 13: "S2", 14: "O2", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "S1", 19: "S2", 20: "O2", 21: "LIBUR", 22: "LIBUR", 23: "O1", 24: "S1", 25: "S2", 26: "O2", 27: "LIBUR", 28: "LIBUR", 29: "O1", 30: "O1" },
        // M Yarham
        6: { 1: "O2", 2: "S2", 3: "LIBUR", 4: "LIBUR", 5: "S1", 6: "O1", 7: "O2", 8: "S2", 9: "LIBUR", 10: "LIBUR", 11: "S1", 12: "O1", 13: "O2", 14: "S2", 15: "LIBUR", 16: "LIBUR", 17: "S1", 18: "O1", 19: "O2", 20: "S2", 21: "LIBUR", 22: "LIBUR", 23: "S1", 24: "O1", 25: "O2", 26: "O2", 27: "LIBUR", 28: "LIBUR", 29: "S1", 30: "O1" },
        // Edi Gunawan
        7: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "H1", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "H2", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "LIBUR", 23: "H2", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "LIBUR", 30: "LIBUR" },
        // Milan Trista
        8: { 1: "LIBUR", 2: "H1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "LIBUR", 9: "H1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "H2", 23: "LIBUR", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "LIBUR", 30: "LIBUR" },
        // Jajang Haris Hidayat
        9: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "H2", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "LIBUR", 23: "H1", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "H1", 30: "LIBUR" },
        // Juwarti
        10: { 1: "H1", 2: "LIBUR", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "O1", 8: "LIBUR", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "O1", 15: "LIBUR", 16: "H1", 17: "O1", 18: "O1", 19: "O1", 20: "O1", 21: "O1", 22: "LIBUR", 23: "LIBUR", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "O1", 29: "LIBUR", 30: "H1" }
    },
    // DECEMBER 2025 (from Google Sheet DESEMBER2025 - validated 2026-01-01, colored/empty = LIBUR)
    "2025-12": {
        // Youngky Ramadhan
        1: { 1: "LIBUR", 2: "LIBUR", 3: "S1", 4: "O1", 5: "S2", 6: "O2", 7: "LIBUR", 8: "LIBUR", 9: "S1", 10: "O1", 11: "O2", 12: "O2", 13: "LIBUR", 14: "LIBUR", 15: "O1", 16: "O1", 17: "S2", 18: "O2", 19: "LIBUR", 20: "O1", 21: "S1", 22: "O1", 23: "O2", 24: "O2", 25: "LIBUR", 26: "A1", 27: "O1", 28: "O1", 29: "O2", 30: "O2", 31: "LIBUR" },
        // Ali Ridho Salatin
        2: { 1: "LIBUR", 2: "LIBUR", 3: "O1", 4: "S1", 5: "O2", 6: "S2", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "S1", 11: "O2", 12: "S2", 13: "O2", 14: "LIBUR", 15: "S1", 16: "O1", 17: "O2", 18: "S2", 19: "LIBUR", 20: "LIBUR", 21: "O1", 22: "S1", 23: "O2", 24: "S2", 25: "LIBUR", 26: "LIBUR", 27: "O1", 28: "S1", 29: "O2", 30: "O2", 31: "LIBUR" },
        // Fachri Ilmawandi
        3: { 1: "S1", 2: "O1", 3: "S2", 4: "O2", 5: "O2", 6: "LIBUR", 7: "S1", 8: "O1", 9: "O2", 10: "O2", 11: "LIBUR", 12: "LIBUR", 13: "S1", 14: "O1", 15: "O2", 16: "O2", 17: "O2", 18: "LIBUR", 19: "S1", 20: "O1", 21: "O2", 22: "O2", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "A1", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR", 31: "O1" },
        // Andry Wahyudi
        4: { 1: "O1", 2: "S1", 3: "O2", 4: "O2", 5: "LIBUR", 6: "O1", 7: "O1", 8: "S1", 9: "O2", 10: "S2", 11: "LIBUR", 12: "O1", 13: "O1", 14: "S1", 15: "O2", 16: "O2", 17: "LIBUR", 18: "LIBUR", 19: "O1", 20: "O1", 21: "O2", 22: "S2", 23: "LIBUR", 24: "LIBUR", 25: "A1", 26: "LIBUR", 27: "O2", 28: "O2", 29: "LIBUR", 30: "LIBUR", 31: "O1" },
        // Muhammad Taufik
        5: { 1: "O2", 2: "O2", 3: "O2", 4: "LIBUR", 5: "O1", 6: "S1", 7: "O2", 8: "O2", 9: "O2", 10: "LIBUR", 11: "O1", 12: "S1", 13: "O2", 14: "O2", 15: "LIBUR", 16: "LIBUR", 17: "O1", 18: "S1", 19: "O2", 20: "O2", 21: "LIBUR", 22: "LIBUR", 23: "O1", 24: "S1", 25: "A2", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "S1", 30: "O1", 31: "O2" },
        // M Yarham
        6: { 1: "O2", 2: "O2", 3: "LIBUR", 4: "LIBUR", 5: "S1", 6: "O1", 7: "O2", 8: "O2", 9: "LIBUR", 10: "LIBUR", 11: "O1", 12: "O1", 13: "O2", 14: "S2", 15: "O2", 16: "LIBUR", 17: "O1", 18: "O1", 19: "O2", 20: "S2", 21: "O2", 22: "LIBUR", 23: "O1", 24: "O1", 25: "LIBUR", 26: "A2", 27: "LIBUR", 28: "LIBUR", 29: "S1", 30: "O1", 31: "S2" },
        // Edi Gunawan
        7: { 1: "O1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "LIBUR", 7: "H2", 8: "O1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "LIBUR", 14: "LIBUR", 15: "O1", 16: "O1", 17: "O1", 18: "O1", 19: "O1", 20: "H2", 21: "LIBUR", 22: "O1", 23: "O1", 24: "O1", 25: "LIBUR", 26: "A2", 27: "LIBUR", 28: "LIBUR", 29: "O1", 30: "O1", 31: "O1" },
        // Milan Trista
        8: { 1: "O1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "LIBUR", 7: "LIBUR", 8: "O1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "LIBUR", 14: "H1", 15: "O1", 16: "O1", 17: "O1", 18: "O1", 19: "O1", 20: "LIBUR", 21: "LIBUR", 22: "O1", 23: "O1", 24: "O1", 25: "A1", 26: "LIBUR", 27: "LIBUR", 28: "H1", 29: "O1", 30: "O1", 31: "O1" },
        // Jajang Haris Hidayat
        9: { 1: "O1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "H1", 7: "LIBUR", 8: "O1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "H2", 14: "LIBUR", 15: "O1", 16: "O1", 17: "O1", 18: "O1", 19: "O1", 20: "LIBUR", 21: "LIBUR", 22: "O1", 23: "O1", 24: "O1", 25: "A2", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "O1", 30: "O1", 31: "O1" },
        // Juwarti
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
    },
    // FEBRUARY 2026
    "2026-02": {
        // Youngky Ramadhan
        1: { 1: "O1", 2: "O1", 3: "S1", 4: "S2", 5: "O2", 6: "LIBUR", 7: "LIBUR", 8: "O1", 9: "O1", 10: "S2", 11: "O2", 12: "LIBUR", 13: "LIBUR", 14: "O1", 15: "O1", 16: "LIBUR", 17: "A2", 18: "LIBUR", 19: "LIBUR", 20: "O1", 21: "S1", 22: "O2", 23: "O2", 24: "LIBUR", 25: "LIBUR", 26: "O1", 27: "S1", 28: "O2" },
        // Ali Ridho Salatin
        2: { 1: "LIBUR", 2: "S1", 3: "O1", 4: "O2", 5: "S2", 6: "LIBUR", 7: "O1", 8: "O1", 9: "O1", 10: "O2", 11: "S2", 12: "LIBUR", 13: "LIBUR", 14: "S1", 15: "O1", 16: "A2", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "O1", 21: "O1", 22: "S2", 23: "O2", 24: "LIBUR", 25: "LIBUR", 26: "O1", 27: "O1", 28: "O2" },
        // Fachri Ilmawandi
        3: { 1: "O2", 2: "LIBUR", 3: "LIBUR", 4: "O1", 5: "S1", 6: "S2", 7: "O2", 8: "LIBUR", 9: "LIBUR", 10: "S1", 11: "O1", 12: "O2", 13: "O2", 14: "O2", 15: "LIBUR", 16: "LIBUR", 17: "A2", 18: "O2", 19: "O2", 20: "LIBUR", 21: "O1", 22: "S1", 23: "O1", 24: "O2", 25: "S2", 26: "LIBUR", 27: "LIBUR", 28: "O1" },
        // Andry Wahyudi
        4: { 1: "O2", 2: "LIBUR", 3: "LIBUR", 4: "O1", 5: "O1", 6: "O2", 7: "S2", 8: "LIBUR", 9: "LIBUR", 10: "O1", 11: "O1", 12: "O2", 13: "S2", 14: "LIBUR", 15: "O1", 16: "A1", 17: "LIBUR", 18: "O2", 19: "S2", 20: "LIBUR", 21: "S1", 22: "O1", 23: "O1", 24: "O2", 25: "S2", 26: "LIBUR", 27: "LIBUR", 28: "O1" },
        // Muhammad Taufik
        5: { 1: "O1", 2: "O2", 3: "O2", 4: "LIBUR", 5: "LIBUR", 6: "S1", 7: "LIBUR", 8: "O2", 9: "O2", 10: "LIBUR", 11: "LIBUR", 12: "O2", 13: "S1", 14: "S2", 15: "O2", 16: "LIBUR", 17: "A1", 18: "O1", 19: "S1", 20: "S2", 21: "O2", 22: "LIBUR", 23: "LIBUR", 24: "O1", 25: "O1", 26: "O2", 27: "O2", 28: "LIBUR" },
        // M Yarham
        6: { 1: "LIBUR", 2: "O2", 3: "S2", 4: "LIBUR", 5: "LIBUR", 6: "O1", 7: "S1", 8: "O2", 9: "S2", 10: "LIBUR", 11: "LIBUR", 12: "O1", 13: "S1", 14: "O2", 15: "S2", 16: "LIBUR", 17: "LIBUR", 18: "S1", 19: "O1", 20: "O2", 21: "S2", 22: "LIBUR", 23: "LIBUR", 24: "S1", 25: "O1", 26: "O2", 27: "S2", 28: "LIBUR" },
        // Edi Gunawan
        7: { 1: "H1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "LIBUR", 15: "LIBUR", 16: "A2", 17: "LIBUR", 18: "O1", 19: "O1", 20: "O1", 21: "H2", 22: "LIBUR", 23: "O1", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "LIBUR" },
        // Milan Trista
        8: { 1: "LIBUR", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "H1", 15: "LIBUR", 16: "A1", 17: "LIBUR", 18: "O1", 19: "O1", 20: "O1", 21: "LIBUR", 22: "H2", 23: "O1", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "LIBUR" },
        // Jajang Haris Hidayat
        9: { 1: "LIBUR", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "H1", 8: "H2", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "A1", 18: "O1", 19: "O1", 20: "O1", 21: "LIBUR", 22: "LIBUR", 23: "O1", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "LIBUR" },
        // Juwarti
        10: { 1: "LIBUR", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "LIBUR", 8: "H1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "O1", 19: "O1", 20: "O1", 21: "LIBUR", 22: "H1", 23: "O1", 24: "O1", 25: "O1", 26: "O1", 27: "O1", 28: "H1" }
    }
};

// ============================================
// STATE
// ============================================
const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1; // Current month (1-12)
let selectedEmployee = "all";
let selectedCategory = "all";

// ============================================
// MONTH NAMES
// ============================================
const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initControls();
    initEmployeeFilter();
    renderCalendar();
    initModal();
    initDashboard();
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
// CONTROLS
// ============================================
function initControls() {
    // Month selector
    const monthSelect = document.getElementById('monthSelect');
    monthNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = name;
        if (index + 1 === currentMonth) option.selected = true;
        monthSelect.appendChild(option);
    });

    // Year selector (2024, 2025, 2026)
    const yearSelect = document.getElementById('yearSelect');
    [2024, 2025, 2026].forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === currentYear) option.selected = true;
        yearSelect.appendChild(option);
    });

    // Event listeners
    monthSelect.addEventListener('change', (e) => {
        currentMonth = parseInt(e.target.value);
        renderCalendar();
    });

    yearSelect.addEventListener('change', (e) => {
        currentYear = parseInt(e.target.value);
        renderCalendar();
    });

    // Navigation buttons
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
            if (currentYear < 2024) currentYear = 2024;
        }
        updateSelectors();
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
            if (currentYear > 2026) currentYear = 2026;
        }
        updateSelectors();
        renderCalendar();
    });

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        renderCalendar();
    });
}

function updateSelectors() {
    document.getElementById('monthSelect').value = currentMonth;
    document.getElementById('yearSelect').value = currentYear;
}

// ============================================
// EMPLOYEE FILTER
// ============================================
function initEmployeeFilter() {
    const employeeFilter = document.getElementById('employeeFilter');

    employees.forEach(emp => {
        const option = document.createElement('option');
        option.value = emp.id;
        option.textContent = emp.name;
        employeeFilter.appendChild(option);
    });

    employeeFilter.addEventListener('change', (e) => {
        selectedEmployee = e.target.value;
        renderCalendar();
    });
}

// ============================================
// CALENDAR RENDERING
// ============================================
function renderCalendar() {
    const container = document.getElementById('calendarContainer');
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const monthKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;

    // Filter employees
    let filteredEmployees = employees;
    if (selectedEmployee !== "all") {
        filteredEmployees = employees.filter(emp => emp.id === parseInt(selectedEmployee));
    }
    if (selectedCategory !== "all") {
        filteredEmployees = filteredEmployees.filter(emp => emp.category === selectedCategory);
    }

    // Group by category
    const shiftingEmployees = filteredEmployees.filter(emp => emp.category === "SHIFTING");
    const officeEmployees = filteredEmployees.filter(emp => emp.category === "OFFICE HOUR");

    // Build table HTML
    let html = '<table class="calendar-table">';

    // Header row
    html += '<thead><tr>';
    html += '<th>NAMA</th>';

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth - 1, day);
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        // Check for national holiday
        const dateKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const holiday = nationalHolidays[dateKey];
        const isHoliday = !!holiday;

        html += `<th class="${isWeekend ? 'weekend' : ''} ${isHoliday ? 'national-holiday' : ''} date-clickable" 
            ${isHoliday ? `title="${holiday}"` : ''} 
            data-day="${day}" 
            data-month="${currentMonth}" 
            data-year="${currentYear}">
            <div class="date-header">
                <span class="date-number">${day}</span>
                <span class="date-day">${dayNames[dayOfWeek]}</span>
                ${isHoliday ? `<span class="holiday-indicator" title="${holiday}">🎉</span>` : ''}
            </div>
        </th>`;
    }
    html += '</tr></thead>';

    // Body
    html += '<tbody>';

    // SHIFTING category
    if (shiftingEmployees.length > 0) {
        html += `<tr class="category-row"><td colspan="${daysInMonth + 1}">SHIFTING</td></tr>`;
        shiftingEmployees.forEach(emp => {
            html += renderEmployeeRow(emp, daysInMonth, monthKey);
        });
    }

    // OFFICE HOUR category
    if (officeEmployees.length > 0) {
        html += `<tr class="category-row"><td colspan="${daysInMonth + 1}">OFFICE HOUR</td></tr>`;
        officeEmployees.forEach(emp => {
            html += renderEmployeeRow(emp, daysInMonth, monthKey);
        });
    }

    html += '</tbody></table>';

    container.innerHTML = html;

    // Add click handlers to shift cells
    container.querySelectorAll('.shift-cell').forEach(cell => {
        cell.addEventListener('click', handleShiftClick);
    });

    // Add click handlers to date headers
    container.querySelectorAll('.date-clickable').forEach(th => {
        th.addEventListener('click', handleDateClick);
    });
}

function renderEmployeeRow(employee, daysInMonth, monthKey) {
    const monthData = scheduleData[monthKey] || {};
    const empData = monthData[employee.id] || {};

    let html = '<tr>';
    html += `<td>${employee.name}</td>`;

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentYear, currentMonth - 1, day);
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        // Check for national holiday
        const dateKey = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isHoliday = !!nationalHolidays[dateKey];

        const shift = empData[day] || "";
        const shiftClass = shift ? `shift-${shift.toLowerCase()}` : "";

        // Add weekend or national-holiday-cell class for background color
        const cellClass = isWeekend || isHoliday ? 'weekend' : '';

        html += `<td class="${cellClass}">`;
        if (shift) {
            html += `<span class="shift-cell ${shiftClass}" 
                          data-employee="${employee.name}"
                          data-date="${day}"
                          data-month="${monthNames[currentMonth - 1]}"
                          data-year="${currentYear}"
                          data-shift="${shift}">
                ${shift === "LIBUR" ? "L" : shift}
            </span>`;
        }
        html += '</td>';
    }

    html += '</tr>';
    return html;
}

// ============================================
// MODAL
// ============================================
function initModal() {
    const overlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalClose');

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function handleShiftClick(e) {
    const cell = e.target;
    const employee = cell.dataset.employee;
    const date = cell.dataset.date;
    const month = cell.dataset.month;
    const year = cell.dataset.year;
    const shift = cell.dataset.shift;

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    // Check for national holiday
    const monthIndex = monthNames.indexOf(month) + 1;
    const dateKey = `${year}-${String(monthIndex).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const holiday = nationalHolidays[dateKey];

    modalTitle.textContent = `Detail Jadwal`;

    let holidayHtml = '';
    if (holiday) {
        holidayHtml = `
            <div class="modal-info-item" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%);">
                <span class="modal-info-label">🎉 Hari Libur Nasional</span>
                <span class="modal-info-value" style="color: var(--shift-a1);">${holiday}</span>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-info">
            <div class="modal-info-item">
                <span class="modal-info-label">Karyawan</span>
                <span class="modal-info-value">${employee}</span>
            </div>
            <div class="modal-info-item">
                <span class="modal-info-label">Tanggal</span>
                <span class="modal-info-value">${date} ${month} ${year}</span>
            </div>
            ${holidayHtml}
            <div class="modal-info-item">
                <span class="modal-info-label">Shift</span>
                <span class="modal-info-value">
                    <span class="shift-cell shift-${shift.toLowerCase()}" style="cursor: default;">
                        ${shift === "LIBUR" ? "L" : shift}
                    </span>
                </span>
            </div>
            <div class="modal-info-item">
                <span class="modal-info-label">Jam Kerja</span>
                <span class="modal-info-value">${shiftDescriptions[shift] || "-"}</span>
            </div>
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

// ============================================
// DAILY ATTENDANCE SUMMARY
// ============================================
function handleDateClick(e) {
    const th = e.currentTarget;
    const day = parseInt(th.dataset.day);
    const month = parseInt(th.dataset.month);
    const year = parseInt(th.dataset.year);

    const monthKey = `${year}-${String(month).padStart(2, '0')}`;
    const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const holiday = nationalHolidays[dateKey];
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = `📅 Info Kehadiran - ${day} ${monthNames[month - 1]} ${year}`;

    // Get schedule data for this month
    const monthData = scheduleData[monthKey] || {};

    // Categorize employees by their shift status
    const shiftEmployees = employees.filter(emp => emp.category === "SHIFTING");

    let working = [];
    let libur = [];

    shiftEmployees.forEach(emp => {
        const empData = monthData[emp.id] || {};
        const shift = empData[day] || "";

        if (shift && shift !== "LIBUR") {
            working.push({
                name: emp.name,
                shift: shift,
                time: shiftDescriptions[shift] || shift
            });
        } else {
            libur.push(emp.name);
        }
    });

    // Build HTML
    let holidayHtml = '';
    if (holiday) {
        holidayHtml = `
            <div class="daily-holiday-banner">
                🎉 <strong>${holiday}</strong>
            </div>
        `;
    }

    let workingHtml = '';
    if (working.length > 0) {
        workingHtml = `
            <div class="daily-section">
                <h4 class="daily-section-title">✅ Karyawan Hadir (${working.length} orang)</h4>
                <div class="daily-list">
                    ${working.map(w => `
                        <div class="daily-item working">
                            <span class="daily-name">${w.name}</span>
                            <span class="shift-cell shift-${w.shift.toLowerCase()}">${w.shift}</span>
                            <span class="daily-time">${w.time}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    let liburHtml = '';
    if (libur.length > 0) {
        liburHtml = `
            <div class="daily-section">
                <h4 class="daily-section-title">🏠 Karyawan Libur (${libur.length} orang)</h4>
                <div class="daily-list">
                    ${libur.map(name => `
                        <div class="daily-item libur">
                            <span class="daily-name">${name}</span>
                            <span class="shift-cell shift-libur">L</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="daily-summary">
            <div class="daily-date-info">
                <span class="daily-date-day">${dayNames[dayOfWeek]}</span>
                ${dayOfWeek === 0 || dayOfWeek === 6 ? '<span class="weekend-badge">Weekend</span>' : ''}
            </div>
            ${holidayHtml}
            ${workingHtml}
            ${liburHtml}
            ${working.length === 0 && libur.length === 0 ? '<p class="no-data">Tidak ada data jadwal untuk tanggal ini</p>' : ''}
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

// ============================================
// LIVE DASHBOARD
// ============================================
function initDashboard() {
    updateDashboard();
    // Update every second
    setInterval(updateDashboard, 1000);
}

function updateDashboard() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dayOfWeek = now.getDay();

    // Update time display
    const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('currentTime').textContent = timeStr;

    // Update date display
    const dayNamesLong = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const dateStr = `${dayNamesLong[dayOfWeek]}, ${day} ${monthNames[month - 1]} ${year}`;
    document.getElementById('currentDate').textContent = dateStr;

    // Get current workers
    const monthKey = `${year}-${String(month).padStart(2, '0')}`;
    const monthData = scheduleData[monthKey] || {};

    // Define shift time ranges (in 24h format)
    const shiftTimes = {
        "O1": { start: 8, end: 17 },      // 08:00 - 17:00
        "O2": { start: 20, end: 5 },       // 20:00 - 05:00 (overnight)
        "S1": { start: 8, end: 20 },       // 08:00 - 20:00
        "S2": { start: 20, end: 8 },       // 20:00 - 08:00 (overnight)
        "R1": { start: 8, end: 20 },       // 08:00 - 20:00
        "R2": { start: 8, end: 23 },       // 08:00 - 23:00
        "H1": { start: 8, end: 17 },       // 08:00 - 17:00
        "H2": { start: 15, end: 23 },      // 15:00 - 23:00
        "A1": { start: 8, end: 20 },       // 08:00 - 20:00
        "A2": { start: 20, end: 8 }        // 20:00 - 08:00 (overnight)
    };

    // Check if current time is within shift
    function isInShift(shift, hour) {
        const shiftInfo = shiftTimes[shift];
        if (!shiftInfo) return false;

        if (shiftInfo.end > shiftInfo.start) {
            // Normal shift (same day)
            return hour >= shiftInfo.start && hour < shiftInfo.end;
        } else {
            // Overnight shift
            return hour >= shiftInfo.start || hour < shiftInfo.end;
        }
    }

    // Find working employees
    let workingNowHtml = '';
    let workingCount = 0;

    // Avatar colors based on shift type
    const shiftColors = {
        "O1": "#3b82f6", "O2": "#2563eb",
        "S1": "#8b5cf6", "S2": "#7c3aed",
        "R1": "#10b981", "R2": "#059669",
        "H1": "#f59e0b", "H2": "#d97706",
        "A1": "#ef4444", "A2": "#dc2626"
    };

    // Group employees by shift
    const shiftGroups = {};

    employees.forEach(emp => {
        const empData = monthData[emp.id] || {};
        let shift = empData[day] || "";

        // For overnight shifts, also check previous day's schedule
        if (!shift || shift === "LIBUR") {
            // Check if previous day's overnight shift is still active
            const prevDay = day - 1 > 0 ? day - 1 : null;
            if (prevDay) {
                const prevShift = empData[prevDay];
                if (prevShift && ["O2", "S2", "A2"].includes(prevShift)) {
                    // Check if still in overnight shift
                    if (hours < shiftTimes[prevShift].end) {
                        shift = prevShift;
                    }
                }
            }
        }

        if (shift && shift !== "LIBUR" && isInShift(shift, hours)) {
            if (!shiftGroups[shift]) {
                shiftGroups[shift] = [];
            }
            shiftGroups[shift].push({
                name: emp.name,
                category: emp.category,
                initials: emp.name.split(' ').map(n => n[0]).join('').substring(0, 2)
            });
            workingCount++;
        }
    });

    // Build HTML grouped by shift
    if (workingCount > 0) {
        // Define shift order for display
        const shiftOrder = ["O1", "O2", "S1", "S2", "R1", "R2", "H1", "H2", "A1", "A2"];

        shiftOrder.forEach(shift => {
            if (shiftGroups[shift] && shiftGroups[shift].length > 0) {
                const color = shiftColors[shift];
                const shiftDesc = shiftDescriptions[shift] || shift;

                // Build employee list
                const employeeList = shiftGroups[shift].map(emp => `• ${emp.name}`).join('<br>');

                workingNowHtml += `
                    <div class="shift-group-simple">
                        <div class="shift-header-simple" style="border-left: 4px solid ${color};">
                            <span class="shift-code-badge" style="background: ${color};">${shift}</span>
                            <span class="shift-desc-text">${shiftDesc}</span>
                        </div>
                        <div class="shift-employees-list">
                            ${employeeList}
                        </div>
                    </div>
                `;
            }
        });
    } else {
        workingNowHtml = '<span class="no-workers">Tidak ada karyawan yang sedang bekerja saat ini</span>';
    }

    document.getElementById('workingNow').innerHTML = workingNowHtml;

    // Update section title with count
    const titleEl = document.querySelector('.dashboard-section-title');
    if (titleEl) {
        titleEl.textContent = `👷 Sedang Bekerja Sekarang (${workingCount} orang)`;
    }

    // ========================================
    // NEXT SHIFT CALCULATION
    // ========================================
    let nextShiftHtml = '';
    let nextShiftCount = 0;

    // Determine next shift based on current time
    // Shift times: O1 (08-17), O2 (20-05), S1 (08-20), S2 (20-08), H1 (08-17), H2 (15-23)
    let nextShiftTypes = [];
    let nextStartTime = '';

    if (hours >= 0 && hours < 8) {
        // Before 08:00 - next is morning shift (O1, S1, H1, A1)
        nextShiftTypes = ["O1", "S1", "H1", "A1", "R1", "R2"];
        nextStartTime = "08:00";
    } else if (hours >= 8 && hours < 20) {
        // Between 08:00-20:00 - next is night shift at 20:00
        nextShiftTypes = ["O2", "S2", "A2", "H2"];
        nextStartTime = "20:00";
    } else {
        // After 20:00 - next is morning shift tomorrow at 08:00
        nextShiftTypes = ["O1", "S1", "H1", "A1", "R1", "R2"];
        nextStartTime = "08:00 (besok)";
    }

    // Get employees for next shift
    const nextShiftGroups = {};

    // Determine which day and month to check for next shift
    let checkDay = day;
    let checkMonthKey = monthKey;

    if (hours >= 20) {
        // After 20:00, check tomorrow's schedule
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day + 1 > daysInMonth) {
            // Move to next month
            checkDay = 1;
            const nextMonth = month === 12 ? 1 : month + 1;
            const nextYear = month === 12 ? year + 1 : year;
            checkMonthKey = `${nextYear}-${String(nextMonth).padStart(2, '0')}`;
        } else {
            checkDay = day + 1;
        }
    }

    const checkMonthData = scheduleData[checkMonthKey] || {};

    employees.forEach(emp => {
        const empData = checkMonthData[emp.id] || {};
        const shift = empData[checkDay] || "";

        if (shift && shift !== "LIBUR" && nextShiftTypes.includes(shift)) {
            if (!nextShiftGroups[shift]) {
                nextShiftGroups[shift] = [];
            }
            nextShiftGroups[shift].push({
                name: emp.name,
                category: emp.category
            });
            nextShiftCount++;
        }
    });

    // Build next shift HTML
    if (nextShiftCount > 0) {
        const shiftOrder = ["O1", "O2", "S1", "S2", "R1", "R2", "H1", "H2", "A1", "A2"];

        shiftOrder.forEach(shift => {
            if (nextShiftGroups[shift] && nextShiftGroups[shift].length > 0) {
                const color = shiftColors[shift];
                const shiftDesc = shiftDescriptions[shift] || shift;
                const employeeList = nextShiftGroups[shift].map(emp => `• ${emp.name}`).join('<br>');

                nextShiftHtml += `
                    <div class="shift-group-simple next-shift-group">
                        <div class="shift-header-simple" style="border-left: 4px solid ${color};">
                            <span class="shift-code-badge" style="background: ${color};">${shift}</span>
                            <span class="shift-desc-text">${shiftDesc}</span>
                        </div>
                        <div class="shift-employees-list">
                            ${employeeList}
                        </div>
                    </div>
                `;
            }
        });
    } else {
        nextShiftHtml = '<span class="no-workers">Tidak ada data jadwal untuk shift berikutnya</span>';
    }

    document.getElementById('nextShift').innerHTML = nextShiftHtml;

    // Update next shift title
    const nextTitleEl = document.getElementById('nextShiftTitle');
    if (nextTitleEl) {
        nextTitleEl.textContent = `⏰ Shift Berikutnya - ${nextStartTime} (${nextShiftCount} orang)`;
    }
}

// ============================================
// DAILY ACTIVITY REPORT EXPORT
// ============================================

// Overtime configuration
const overtimeConfig = {
    "S1": { hours: 3, start: "17:00", end: "20:00", description: "Overtime 3 Jam (17:00 - 20:00)" },
    "S2": { hours: 3, start: "05:00", end: "08:00", description: "Overtime 3 Jam (5.00 - 8.00)" },
    "A1": { hours: 12, start: "08:00", end: "20:00", description: "Overtime 12 Jam (8.00 - 20.00)" },
    "A2": { hours: 12, start: "20:00", end: "08:00", description: "Overtime 12 Jam (20.00 - 8.00)" }
};

// Shift working hours configuration
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

// Get HADIR status based on shift and day type
function getHadirStatus(shift, dateKey, dayOfWeek) {
    if (!shift || shift === "LIBUR") {
        // Check if it's weekend
        if (dayOfWeek === 0) return "MINGGU";
        if (dayOfWeek === 6) return "SABTU";
        return "LIBUR";
    }

    // Check if national holiday
    if (nationalHolidays[dateKey]) {
        return "LIBUR NASIONAL";
    }

    return "WFO";
}

// Get Daily Activity text based on day type and shift
function getDailyActivityText(shift, dateKey, dayOfWeek, defaultActivity) {
    if (!shift || shift === "LIBUR") {
        return "LIBUR";
    }

    // Check if national holiday (A1, A2 shifts)
    if (nationalHolidays[dateKey] || shift === "A1" || shift === "A2") {
        return "LEMBUR HARI BESAR NASIONAL";
    }

    // Check if weekend (Saturday = 6, Sunday = 0)
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        return "LEMBUR Monitoring Surveillance SDWAN & Neucentrix";
    }

    // Regular day
    return defaultActivity;
}

// Get Keterangan (remarks) based on shift
function getKeterangan(shift, dateKey) {
    if (!shift || shift === "LIBUR") {
        return "";
    }

    // Check for overtime shifts
    if (overtimeConfig[shift]) {
        return overtimeConfig[shift].description;
    }

    // Regular shift
    return "Shift";
}

// Initialize Download Modal
function initDownloadModal() {
    const overlay = document.getElementById('downloadModalOverlay');
    const closeBtn = document.getElementById('downloadModalClose');
    const openBtn = document.getElementById('openDownloadModal');
    const generateBtn = document.getElementById('generateExcelBtn');

    // Populate employee dropdown
    const employeeSelect = document.getElementById('downloadEmployee');
    employees.forEach(emp => {
        const option = document.createElement('option');
        option.value = emp.id;
        option.textContent = `${emp.name} (${emp.nik})`;
        employeeSelect.appendChild(option);
    });

    // Populate month dropdown
    const monthSelect = document.getElementById('downloadMonth');
    monthNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = name;
        if (index + 1 === currentMonth) option.selected = true;
        monthSelect.appendChild(option);
    });

    // Populate year dropdown
    const yearSelect = document.getElementById('downloadYear');
    [2024, 2025, 2026].forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === currentYear) option.selected = true;
        yearSelect.appendChild(option);
    });

    // Event listeners
    openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    });

    generateBtn.addEventListener('click', generateDailyActivityExcel);
}

// Generate Daily Activity Excel
function generateDailyActivityExcel() {
    const employeeId = parseInt(document.getElementById('downloadEmployee').value);
    const month = parseInt(document.getElementById('downloadMonth').value);
    const year = parseInt(document.getElementById('downloadYear').value);
    const defaultActivity = document.getElementById('defaultActivity').value;

    const employee = employees.find(emp => emp.id === employeeId);
    if (!employee) {
        alert('Pilih karyawan terlebih dahulu');
        return;
    }

    const monthKey = `${year}-${String(month).padStart(2, '0')}`;
    const monthData = scheduleData[monthKey] || {};
    const empSchedule = monthData[employeeId] || {};

    const daysInMonth = new Date(year, month, 0).getDate();

    // Build worksheet data
    const wsData = [];

    // Header rows
    wsData.push(["Daily Activity ", "", "", "", "", "", "", "", "", ""]);
    wsData.push(["NIK / Perner", "", `: ${employee.nik}`, "", "", "", "", "", "", ""]);
    wsData.push(["Nama", "", `:  ${employee.name.toUpperCase()}`, "", "", "", "", "", "", ""]);
    wsData.push(["Jabatan", "", `:  ${companyInfo.jabatan}`, "", "", "", "", "", "", ""]);
    wsData.push(["Dept / Divisi", "", `:  ${companyInfo.dept}`, "", "", "", "", "", "", ""]);
    wsData.push(["NO", "TANGGAL", "HADIR", "WAKTU KERJA", "", "DAILY ACTIVITY", "KETERANGAN", "", "", ""]);
    wsData.push(["", "", "", "Start", "End", "", "", "", "", ""]);

    // Daily data rows
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day);
        const dayOfWeek = date.getDay();
        const dateKey = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        const shift = empSchedule[day] || "";
        const hadir = getHadirStatus(shift, dateKey, dayOfWeek);
        const dailyActivity = getDailyActivityText(shift, dateKey, dayOfWeek, defaultActivity);
        const keterangan = getKeterangan(shift, dateKey);

        // Get working hours
        let startTime = "";
        let endTime = "";
        if (shift && shift !== "LIBUR" && shiftWorkingHours[shift]) {
            startTime = shiftWorkingHours[shift].start;
            endTime = shiftWorkingHours[shift].end;
        }

        wsData.push([
            day,
            date,
            hadir,
            startTime,
            endTime,
            dailyActivity,
            keterangan,
            "",
            "",
            ""
        ]);
    }

    // Footer with signatures
    wsData.push([]);
    wsData.push([
        `Pekerja\n\n\n\n(${employee.name.toUpperCase()})\nNIK : ${employee.nik}`,
        "",
        "",
        "",
        "",
        `Atasan 1\n\n\n\n(${companyInfo.atasan1.name})\nNIK : ${companyInfo.atasan1.nik}`,
        `Atasan 2\n\n\n\n\n(….................................)`,
        "",
        "",
        ""
    ]);

    // Create workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Set column widths
    ws['!cols'] = [
        { wch: 5 },   // NO
        { wch: 12 },  // TANGGAL
        { wch: 16 },  // HADIR
        { wch: 10 },  // Start
        { wch: 10 },  // End
        { wch: 45 },  // DAILY ACTIVITY
        { wch: 30 },  // KETERANGAN
        { wch: 5 },
        { wch: 5 },
        { wch: 5 }
    ];

    // Merge cells for header
    ws['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 9 } },  // Title
        { s: { r: 5, c: 3 }, e: { r: 5, c: 4 } },  // WAKTU KERJA header
    ];

    // Format date cells
    const dateFormat = 'yyyy-mm-dd';
    for (let i = 7; i < 7 + daysInMonth; i++) {
        const cellRef = XLSX.utils.encode_cell({ r: i, c: 1 });
        if (ws[cellRef]) {
            ws[cellRef].t = 'd';
            ws[cellRef].z = dateFormat;
        }
    }

    XLSX.utils.book_append_sheet(wb, ws, "Kertas kerja");

    // Generate filename
    const monthNameUpper = monthNames[month - 1].toUpperCase();
    const employeeNameFile = employee.name.toUpperCase().replace(/ /g, '_');
    const filename = `Daily_Activity_Penggajian_${monthNameUpper}_${year}_${employeeNameFile}_${employee.nik}.xlsx`;

    // Download
    XLSX.writeFile(wb, filename);

    // Close modal
    document.getElementById('downloadModalOverlay').classList.remove('active');
}

// Add init to DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Existing inits are already called, add download modal init
    setTimeout(() => {
        if (document.getElementById('downloadModalOverlay')) {
            initDownloadModal();
        }
    }, 100);
});
