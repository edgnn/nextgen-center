/* ============================================
   DAILY ACTIVITY REPORT - FORMAT BARU (LAMPIRAN LEMBUR)
   EMPLOYEE'S DAILY TIME SHEET / ABSENSI
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
    companyName: "PT. INFOMEDIA NUSANTARA",
    address1: "Kantor Pusat",
    address2: "Jl. RS Fatmawati No. 77-81",
    address3: "Telp. (021) 7201221, Fax (021) 7201226",
    address4: "Jakarta 12150",
    projectName: "Manage Operation Support DCS",
    workLocation: "Telkom Indibiz Experience Center - Jakarta Pusat",
    manager: { name: "DEOT SISWANTORO, M.M", nik: "720305", role: "Manager" }
};

// ============================================
// DATA - INDONESIAN NATIONAL HOLIDAYS
// ============================================
const nationalHolidays = {
    // 2026
    "2026-01-01": "Tahun Baru Masehi",
    "2026-01-16": "Isra Mi'raj",
    "2026-02-17": "Tahun Baru Imlek",
    "2026-03-18": "Cuti Bersama Nyepi",
    "2026-03-19": "Hari Raya Nyepi",
    "2026-03-20": "Cuti Bersama Idul Fitri 1447 H",
    "2026-03-21": "Hari Raya Idul Fitri 1447 H",
    "2026-03-22": "Hari Raya Idul Fitri 1447 H",
    "2026-03-23": "Cuti Bersama Idul Fitri 1447 H",
    "2026-03-24": "Cuti Bersama Idul Fitri 1447 H",
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
// DATA - SCHEDULE (Format Baru starts from March 2026)
// ============================================
const scheduleData = {
    // MARCH 2026
    "2026-03": {
        // Youngky Ramadhan
        1: { 1: "S2", 2: "LIBUR", 3: "LIBUR", 4: "O1", 5: "O1", 6: "O2", 7: "O2", 8: "LIBUR", 9: "LIBUR", 10: "O1", 11: "S1", 12: "O2", 13: "O2", 14: "LIBUR", 15: "O1", 16: "O1", 17: "O1", 18: "A2", 19: "LIBUR", 20: "LIBUR", 21: "A1", 22: "LIBUR", 23: "A1", 24: "LIBUR", 25: "O2", 26: "LIBUR", 27: "LIBUR", 28: "O1", 29: "O1", 30: "O2", 31: "O2" },
        // Ali Ridho Salatin
        2: { 1: "O2", 2: "LIBUR", 3: "LIBUR", 4: "O1", 5: "O1", 6: "O2", 7: "S2", 8: "O2", 9: "LIBUR", 10: "S1", 11: "O1", 12: "O2", 13: "O2", 14: "LIBUR", 15: "LIBUR", 16: "O1", 17: "O1", 18: "LIBUR", 19: "A2", 20: "LIBUR", 21: "LIBUR", 22: "A1", 23: "LIBUR", 24: "A2", 25: "O2", 26: "LIBUR", 27: "LIBUR", 28: "O1", 29: "O1", 30: "O2", 31: "O2" },
        // Fachri Ilmawandi
        3: { 1: "O1", 2: "S2", 3: "O2", 4: "LIBUR", 5: "LIBUR", 6: "O1", 7: "S1", 8: "O2", 9: "O2", 10: "LIBUR", 11: "LIBUR", 12: "O1", 13: "O1", 14: "O2", 15: "O2", 16: "LIBUR", 17: "LIBUR", 18: "A2", 19: "LIBUR", 20: "A1", 21: "LIBUR", 22: "LIBUR", 23: "A2", 24: "LIBUR", 25: "O1", 26: "O2", 27: "O2", 28: "LIBUR", 29: "O1", 30: "O1", 31: "O1" },
        // Andry Wahyudi
        4: { 1: "O1", 2: "S2", 3: "S2", 4: "LIBUR", 5: "LIBUR", 6: "O1", 7: "O1", 8: "O2", 9: "O2", 10: "LIBUR", 11: "LIBUR", 12: "O1", 13: "S1", 14: "O2", 15: "O2", 16: "LIBUR", 17: "LIBUR", 18: "A1", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A2", 23: "LIBUR", 24: "A1", 25: "O1", 26: "O2", 27: "O2", 28: "O2", 29: "LIBUR", 30: "O1", 31: "O1" },
        // Muhammad Taufik
        5: { 1: "LIBUR", 2: "O1", 3: "S1", 4: "S2", 5: "O2", 6: "LIBUR", 7: "LIBUR", 8: "O1", 9: "O1", 10: "O2", 11: "O2", 12: "LIBUR", 13: "LIBUR", 14: "O1", 15: "O1", 16: "O2", 17: "O2", 18: "LIBUR", 19: "A1", 20: "A2", 21: "A2", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "O1", 27: "O1", 28: "O2", 29: "O2", 30: "LIBUR", 31: "LIBUR" },
        // M Yarham
        6: { 1: "LIBUR", 2: "O1", 3: "O1", 4: "O2", 5: "O2", 6: "O2", 7: "LIBUR", 8: "O1", 9: "S1", 10: "O2", 11: "O2", 12: "LIBUR", 13: "LIBUR", 14: "O1", 15: "O1", 16: "O2", 17: "S2", 18: "LIBUR", 19: "LIBUR", 20: "A1", 21: "A2", 22: "LIBUR", 23: "LIBUR", 24: "A2", 25: "LIBUR", 26: "O1", 27: "O1", 28: "O2", 29: "O2", 30: "LIBUR", 31: "LIBUR" },
        // Edi Gunawan
        7: { 1: "LIBUR", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "LIBUR", 15: "LIBUR", 16: "O1", 17: "O1", 18: "LIBUR", 19: "A2", 20: "LIBUR", 21: "A1", 22: "LIBUR", 23: "A1", 24: "LIBUR", 25: "O1", 26: "O1", 27: "O1", 28: "LIBUR", 29: "LIBUR", 30: "O1", 31: "O1" },
        // Milan Trista
        8: { 1: "LIBUR", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "LIBUR", 15: "LIBUR", 16: "O1", 17: "O1", 18: "A1", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A1", 23: "LIBUR", 24: "A1", 25: "O1", 26: "O1", 27: "O1", 28: "LIBUR", 29: "LIBUR", 30: "O1", 31: "O1" },
        // Jajang Haris Hidayat
        9: { 1: "LIBUR", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "LIBUR", 8: "LIBUR", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "LIBUR", 15: "LIBUR", 16: "O1", 17: "O1", 18: "LIBUR", 19: "A1", 20: "A2", 21: "LIBUR", 22: "A2", 23: "A2", 24: "LIBUR", 25: "O1", 26: "O1", 27: "O1", 28: "LIBUR", 29: "LIBUR", 30: "O1", 31: "O1" },
        // Juwarti
        10: { 1: "H1", 2: "O1", 3: "O1", 4: "O1", 5: "O1", 6: "O1", 7: "LIBUR", 8: "H1", 9: "O1", 10: "O1", 11: "O1", 12: "O1", 13: "O1", 14: "LIBUR", 15: "LIBUR", 16: "O1", 17: "O1", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "O1", 26: "O1", 27: "O1", 28: "LIBUR", 29: "H1", 30: "O1", 31: "O1" }
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

// Shift working hours - split into ABSENSI and LEMBUR
const shiftConfig = {
    "O1": {
        absensi: { masuk: "08.00", keluar: "17.00" },
        lembur: { masuk: "", keluar: "" },
        keterangan: "Monitoring Surveillance SDWAN & Neucentrix",
        jamLembur: 0
    },
    "O2": {
        absensi: { masuk: "20.00", keluar: "05.00" },
        lembur: { masuk: "", keluar: "" },
        keterangan: "Monitoring Surveillance SDWAN & Neucentrix",
        jamLembur: 0
    },
    "S1": {
        absensi: { masuk: "08.00", keluar: "17.00" },
        lembur: { masuk: "17.00", keluar: "20.00" },
        keterangan: "Monitoring Surveillance SDWAN & Neucentrix + Overtime 3 Jam",
        jamLembur: 3
    },
    "S2": {
        absensi: { masuk: "20.00", keluar: "05.00" },
        lembur: { masuk: "05.00", keluar: "08.00" },
        keterangan: "Monitoring Surveillance SDWAN & Neucentrix + Overtime 3 Jam",
        jamLembur: 3
    },
    "H1": {
        absensi: { masuk: "08.00", keluar: "17.00" },
        lembur: { masuk: "08.00", keluar: "17.00" },
        keterangan: "LEMBUR Monitoring Surveillance SDWAN & Neucentrix",
        jamLembur: 8
    },
    "H2": {
        absensi: { masuk: "15.00", keluar: "23.00" },
        lembur: { masuk: "15.00", keluar: "23.00" },
        keterangan: "LEMBUR Monitoring Surveillance SDWAN & Neucentrix",
        jamLembur: 8
    },
    "A1": {
        absensi: { masuk: "08.00", keluar: "20.00" },
        lembur: { masuk: "08.00", keluar: "20.00" },
        keterangan: "LEMBUR HARI BESAR NASIONAL",
        jamLembur: 12
    },
    "A2": {
        absensi: { masuk: "20.00", keluar: "08.00" },
        lembur: { masuk: "20.00", keluar: "08.00" },
        keterangan: "LEMBUR HARI BESAR NASIONAL",
        jamLembur: 12
    }
};

// ============================================
// STATE
// ============================================
let currentEmployee = null;
let currentMonth = 3; // Default to March (format baru mulai Maret)
let currentYear = 2026;
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

    // Populate months (Format baru mulai dari Maret 2026)
    monthNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = name;
        if (index + 1 === currentMonth) option.selected = true;
        monthSelect.appendChild(option);
    });

    // Populate years (mulai 2026)
    [2026].forEach(year => {
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
    document.getElementById('reportTitle').style.display = 'block';
    document.getElementById('employeeInfoCard').style.display = 'block';
    document.getElementById('tableWrapper').style.display = 'block';
    document.getElementById('summarySection').style.display = 'block';
    document.getElementById('signatureSection').style.display = 'grid';
    document.getElementById('actionBar').style.display = 'flex';

    // Update employee info
    updateEmployeeInfo();

    // Build activity data
    buildActivityData();

    // Render table
    renderTable();

    // Update summary
    updateSummary();

    // Update signatures
    updateSignatures();
}

// ============================================
// UPDATE EMPLOYEE INFO
// ============================================
function updateEmployeeInfo() {
    document.getElementById('infoNama').textContent = currentEmployee.name.toUpperCase();
    document.getElementById('infoNik').textContent = currentEmployee.nik;
    document.getElementById('infoPeriode').textContent = `${monthNames[currentMonth - 1]} ${currentYear}`;
    document.getElementById('infoProject').textContent = companyInfo.projectName;
    document.getElementById('infoLokasi').textContent = companyInfo.workLocation;
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

        // Get shift config
        const config = shiftConfig[shift] || null;

        // ABSENSI times
        let absensiMasuk = "";
        let absensiKeluar = "";
        // LEMBUR times
        let lemburMasuk = "";
        let lemburKeluar = "";
        // Keterangan
        let keterangan = "";
        // Status (jam lembur)
        let jamLembur = 0;

        if (!isLibur && config) {
            absensiMasuk = config.absensi.masuk;
            absensiKeluar = config.absensi.keluar;
            lemburMasuk = config.lembur.masuk;
            lemburKeluar = config.lembur.keluar;
            keterangan = config.keterangan;
            jamLembur = config.jamLembur;

            // If holiday name exists and shift is A1/A2, add holiday name
            if (isHoliday && (shift === "A1" || shift === "A2")) {
                keterangan = `LEMBUR HARI BESAR NASIONAL - ${nationalHolidays[dateKey]}`;
            }
        } else if (isLibur) {
            keterangan = "LIBUR";
            if (isHoliday) {
                keterangan = `LIBUR - ${nationalHolidays[dateKey]}`;
            }
        }

        activityData.push({
            no: day,
            date: date,
            dayName: dayNames[dayOfWeek],
            absensiMasuk: absensiMasuk,
            absensiKeluar: absensiKeluar,
            lemburMasuk: lemburMasuk,
            lemburKeluar: lemburKeluar,
            keterangan: keterangan,
            jamLembur: jamLembur,
            isWeekend: isWeekend,
            isHoliday: isHoliday,
            isLibur: isLibur,
            holidayName: nationalHolidays[dateKey] || "",
            shift: shift
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
                <td class="col-tgl">${row.no}</td>
                <td class="col-hari">${row.dayName}</td>
                <td class="col-time editable-cell">
                    <input type="text" value="${row.absensiMasuk}" 
                           placeholder="HH.MM"
                           data-index="${index}" data-field="absensiMasuk"
                           onchange="updateField(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-time editable-cell">
                    <input type="text" value="${row.absensiKeluar}" 
                           placeholder="HH.MM"
                           data-index="${index}" data-field="absensiKeluar"
                           onchange="updateField(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-time editable-cell">
                    <input type="text" value="${row.lemburMasuk}" 
                           placeholder="HH.MM"
                           data-index="${index}" data-field="lemburMasuk"
                           onchange="updateFieldAndRecalc(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-time editable-cell">
                    <input type="text" value="${row.lemburKeluar}" 
                           placeholder="HH.MM"
                           data-index="${index}" data-field="lemburKeluar"
                           onchange="updateFieldAndRecalc(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-keterangan editable-cell">
                    <input type="text" value="${row.keterangan}" 
                           data-index="${index}" data-field="keterangan"
                           onchange="updateField(this)">
                </td>
                <td class="col-status">
                    <input type="number" value="${row.jamLembur || ''}" 
                           placeholder="0"
                           min="0"
                           style="width: 60px; text-align: center;"
                           data-index="${index}" data-field="jamLembur"
                           id="jamLembur-${index}"
                           onchange="updateJamLembur(this)">
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

// ============================================
// UPDATE FIELD
// ============================================
function updateField(input) {
    const index = parseInt(input.dataset.index);
    const field = input.dataset.field;
    activityData[index][field] = input.value;
}

// ============================================
// UPDATE FIELD AND RECALCULATE OVERTIME
// ============================================
function updateFieldAndRecalc(input) {
    const index = parseInt(input.dataset.index);
    const field = input.dataset.field;
    activityData[index][field] = input.value;

    // Recalculate jam lembur based on lembur masuk/keluar
    const row = activityData[index];
    if (row.lemburMasuk && row.lemburKeluar) {
        const jamLembur = calculateHours(row.lemburMasuk, row.lemburKeluar);
        activityData[index].jamLembur = jamLembur;
        const jamInput = document.getElementById(`jamLembur-${index}`);
        if (jamInput) jamInput.value = jamLembur;
    }

    updateSummary();
}

// ============================================
// UPDATE JAM LEMBUR
// ============================================
function updateJamLembur(input) {
    const index = parseInt(input.dataset.index);
    activityData[index].jamLembur = parseInt(input.value) || 0;
    updateSummary();
}

// ============================================
// CALCULATE HOURS BETWEEN TWO TIMES
// ============================================
function calculateHours(startTime, endTime) {
    if (!startTime || !endTime) return 0;

    const [startH, startM] = startTime.replace('.', ':').split(':').map(Number);
    const [endH, endM] = endTime.replace('.', ':').split(':').map(Number);

    let startMinutes = startH * 60 + (startM || 0);
    let endMinutes = endH * 60 + (endM || 0);

    // Handle overnight
    if (endMinutes <= startMinutes) {
        endMinutes += 24 * 60;
    }

    const totalHours = (endMinutes - startMinutes) / 60;
    return Math.round(totalHours);
}

// ============================================
// FORMAT TIME INPUT (HH.MM format with dot)
// ============================================
function formatTimeInput(input) {
    let value = input.value;

    // Remove non-numeric and non-dot characters
    value = value.replace(/[^0-9.]/g, '');

    // Auto-add dot after 2 digits if not present
    if (value.length === 2 && !value.includes('.')) {
        value = value + '.';
    }

    // Limit to 5 characters (HH.MM)
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
// UPDATE SUMMARY
// ============================================
function updateSummary() {
    let workDays = 0;
    let totalOvertimeHours = 0;

    activityData.forEach(row => {
        if (!row.isLibur && row.shift && row.shift !== "LIBUR") {
            workDays++;
        }
        totalOvertimeHours += (row.jamLembur || 0);
    });

    document.getElementById('totalWorkDays').textContent = workDays;
    document.getElementById('totalOvertime').textContent = totalOvertimeHours;
}

// ============================================
// UPDATE SIGNATURES
// ============================================
function updateSignatures() {
    document.getElementById('sigKaryawan').textContent = `(${currentEmployee.name.toUpperCase()})`;
    document.getElementById('sigKaryawanNik').textContent = `NIK: ${currentEmployee.nik}`;
}

// ============================================
// DOWNLOAD EXCEL (Format Lampiran Lembur - TIMESHEET)
// ============================================
async function downloadExcel() {
    if (!currentEmployee || activityData.length === 0) {
        alert('Muat data terlebih dahulu');
        return;
    }

    try {
        // Create workbook and worksheet
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('TIMESHEET');

        // ===============================
        // PAGE SETUP
        // ===============================
        worksheet.pageSetup = {
            paperSize: 9, // A4
            orientation: 'portrait',
            fitToPage: true,
            fitToWidth: 1,
            fitToHeight: 1,
            horizontalCentered: true,
            margins: {
                left: 0.5,
                right: 0.5,
                top: 0.5,
                bottom: 0.5,
                header: 0.3,
                footer: 0.3
            }
        };

        // Set column widths (matching Format Lampiran Lembur.xlsx)
        worksheet.columns = [
            { width: 5.85 },    // A - TGL
            { width: 18.85 },   // B - HARI
            { width: 12 },      // C - ABSENSI MASUK
            { width: 12 },      // D - ABSENSI KELUAR
            { width: 12 },      // E - LEMBUR MASUK
            { width: 12 },      // F - LEMBUR KELUAR
            { width: 60 },      // G - KETERANGAN
            { width: 20 },      // H - STATUS
        ];

        const fontTimesNewRoman = { name: 'Times New Roman', size: 11 };
        const fontBold = { name: 'Times New Roman', size: 11, bold: true };
        const thinBorder = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        };

        // ===============================
        // HEADER SECTION (Rows 1-6) - Logo + Company Info
        // ===============================
        for (let i = 0; i < 6; i++) worksheet.addRow([]);

        // Add logo
        try {
            const logoResponse = await fetch('new logo infomedia.png');
            const logoBlob = await logoResponse.blob();
            const logoBase64 = await blobToBase64(logoBlob);

            const logoId = workbook.addImage({
                base64: logoBase64,
                extension: 'png',
            });

            worksheet.addImage(logoId, {
                tl: { col: 0.1, row: 0.3 },
                ext: { width: 120, height: 80 }
            });
        } catch (logoError) {
            console.warn('Could not load logo:', logoError);
        }

        // Company info
        worksheet.getCell('C1').value = companyInfo.companyName;
        worksheet.getCell('C1').font = fontBold;
        worksheet.getCell('C2').value = companyInfo.address1;
        worksheet.getCell('C2').font = fontBold;
        worksheet.getCell('C3').value = companyInfo.address2;
        worksheet.getCell('C3').font = fontTimesNewRoman;
        worksheet.getCell('C4').value = companyInfo.address3;
        worksheet.getCell('C4').font = fontTimesNewRoman;
        worksheet.getCell('C5').value = companyInfo.address4;
        worksheet.getCell('C5').font = fontTimesNewRoman;

        // ===============================
        // TITLE (Row 7)
        // ===============================
        worksheet.addRow([]);
        worksheet.getCell('C7').value = "EMPLOYEE'S DAILY TIME SHEET / ABSENSI";
        worksheet.getCell('C7').font = fontBold;

        // ===============================
        // EMPLOYEE INFO (Rows 8-11)
        // ===============================
        // Row 8
        worksheet.addRow([]);
        worksheet.getCell('A8').value = "Employee's name";
        worksheet.getCell('A8').font = fontTimesNewRoman;
        worksheet.getCell('G8').value = "Project's Name";
        worksheet.getCell('G8').font = fontTimesNewRoman;

        // Row 9
        worksheet.addRow([]);
        worksheet.getCell('A9').value = 'Nama Pegawai        ';
        worksheet.getCell('A9').font = fontTimesNewRoman;
        worksheet.getCell('C9').value = ': ' + currentEmployee.name.toUpperCase();
        worksheet.getCell('C9').font = fontBold;
        worksheet.getCell('G9').value = 'Nama Project : ' + companyInfo.projectName;
        worksheet.getCell('G9').font = fontTimesNewRoman;

        // Row 10
        worksheet.addRow([]);
        worksheet.getCell('A10').value = 'ID HRIS / PERNER                       ';
        worksheet.getCell('A10').font = fontTimesNewRoman;
        worksheet.getCell('C10').value = ': ' + currentEmployee.nik;
        worksheet.getCell('C10').font = fontBold;
        worksheet.getCell('G10').value = 'Work Location ';
        worksheet.getCell('G10').font = fontTimesNewRoman;

        // Row 11
        worksheet.addRow([]);
        worksheet.getCell('A11').value = 'Periode';
        worksheet.getCell('A11').font = fontTimesNewRoman;
        worksheet.getCell('C11').value = ': ' + monthNames[currentMonth - 1] + ' ' + currentYear;
        worksheet.getCell('C11').font = fontBold;
        worksheet.getCell('G11').value = 'Lokasi Kerja : ' + companyInfo.workLocation;
        worksheet.getCell('G11').font = fontTimesNewRoman;

        // ===============================
        // SPACER ROW (Row 12) - empty row for cleaner print layout
        // ===============================
        worksheet.addRow([]);

        // ===============================
        // TABLE HEADER (Rows 13-14)
        // ===============================
        // Row 13
        worksheet.addRow([]);
        worksheet.getCell('A13').value = 'TGL';
        worksheet.getCell('A13').font = fontTimesNewRoman;
        worksheet.getCell('A13').alignment = { horizontal: 'center', vertical: 'center', wrapText: true };
        worksheet.getCell('A13').border = thinBorder;

        worksheet.getCell('B13').value = 'HARI';
        worksheet.getCell('B13').font = fontTimesNewRoman;
        worksheet.getCell('B13').alignment = { horizontal: 'center', vertical: 'center', wrapText: true };
        worksheet.getCell('B13').border = thinBorder;

        // Merge ABSENSI C13:D13
        worksheet.mergeCells('C13:D13');
        worksheet.getCell('C13').value = 'ABSENSI';
        worksheet.getCell('C13').font = fontTimesNewRoman;
        worksheet.getCell('C13').alignment = { horizontal: 'center' };
        worksheet.getCell('C13').border = thinBorder;
        worksheet.getCell('D13').border = thinBorder;

        // Merge LEMBUR E13:F13
        worksheet.mergeCells('E13:F13');
        worksheet.getCell('E13').value = 'LEMBUR';
        worksheet.getCell('E13').font = fontTimesNewRoman;
        worksheet.getCell('E13').alignment = { horizontal: 'center' };
        worksheet.getCell('E13').border = thinBorder;
        worksheet.getCell('F13').border = thinBorder;

        worksheet.getCell('G13').value = 'KETERANGAN';
        worksheet.getCell('G13').font = fontTimesNewRoman;
        worksheet.getCell('G13').alignment = { horizontal: 'center', vertical: 'center' };
        worksheet.getCell('G13').border = thinBorder;

        worksheet.getCell('H13').value = 'STATUS (JUMLAH JAM LEMBUR)';
        worksheet.getCell('H13').font = fontTimesNewRoman;
        worksheet.getCell('H13').alignment = { horizontal: 'center', vertical: 'center' };
        worksheet.getCell('H13').border = thinBorder;

        // Merge verticals for row 13-14
        worksheet.mergeCells('A13:A14');
        worksheet.mergeCells('B13:B14');
        worksheet.mergeCells('G13:G14');
        worksheet.mergeCells('H13:H14');

        // Row 14 - sub-headers
        worksheet.addRow([]);
        worksheet.getCell('C14').value = 'MASUK';
        worksheet.getCell('C14').font = fontTimesNewRoman;
        worksheet.getCell('C14').alignment = { horizontal: 'center' };
        worksheet.getCell('C14').border = thinBorder;

        worksheet.getCell('D14').value = 'KELUAR';
        worksheet.getCell('D14').font = fontTimesNewRoman;
        worksheet.getCell('D14').alignment = { horizontal: 'center' };
        worksheet.getCell('D14').border = thinBorder;

        worksheet.getCell('E14').value = 'MASUK';
        worksheet.getCell('E14').font = fontTimesNewRoman;
        worksheet.getCell('E14').alignment = { horizontal: 'center' };
        worksheet.getCell('E14').border = thinBorder;

        worksheet.getCell('F14').value = 'KELUAR';
        worksheet.getCell('F14').font = fontTimesNewRoman;
        worksheet.getCell('F14').alignment = { horizontal: 'center' };
        worksheet.getCell('F14').border = thinBorder;

        // ===============================
        // DATA ROWS (Row 15 onwards = row 15 for day 1)
        // ===============================
        const dataStartRow = 15;

        activityData.forEach((row, index) => {
            const excelRow = worksheet.addRow([
                row.no,
                row.dayName,
                row.absensiMasuk,
                row.absensiKeluar,
                row.lemburMasuk,
                row.lemburKeluar,
                row.keterangan,
                row.jamLembur > 0 ? row.jamLembur : ''
            ]);

            excelRow.eachCell((cell, colNumber) => {
                cell.font = fontTimesNewRoman;
                cell.border = thinBorder;

                // Alignments
                if (colNumber === 1) {
                    cell.alignment = { horizontal: 'center', vertical: 'center', wrapText: true };
                } else if (colNumber >= 3 && colNumber <= 6) {
                    cell.alignment = { horizontal: 'center' };
                } else if (colNumber === 7) {
                    cell.alignment = { horizontal: 'left' };
                } else if (colNumber === 8) {
                    cell.alignment = { horizontal: 'center' };
                }
            });

            // Highlight weekend/holiday/libur rows
            if (row.isLibur || row.isHoliday || row.isWeekend) {
                const fillColor = row.isHoliday ? 'FFFFD9D9' : (row.isWeekend ? 'FFFFF3CD' : 'FFF0F0F0');
                excelRow.eachCell((cell) => {
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: fillColor }
                    };
                });
            }
        });

        // ===============================
        // TOTAL SECTION (after data rows)
        // ===============================
        const lastDataRow = dataStartRow + activityData.length - 1;

        // Empty row
        worksheet.addRow([]);

        // TOTAL row
        const totalRow = lastDataRow + 2;
        worksheet.addRow([]);
        worksheet.mergeCells(`B${totalRow}:C${totalRow}`);
        worksheet.getCell(`B${totalRow}`).value = 'TOTAL';
        worksheet.getCell(`B${totalRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`B${totalRow}`).alignment = { horizontal: 'center' };

        // WORK DAY'S row
        const workDaysRow = totalRow + 1;
        worksheet.addRow([]);
        worksheet.getCell(`B${workDaysRow}`).value = "WORK DAY'S ";
        worksheet.getCell(`B${workDaysRow}`).font = { ...fontTimesNewRoman, italic: true };
        worksheet.getCell(`B${workDaysRow}`).alignment = { horizontal: 'center' };
        worksheet.getCell(`C${workDaysRow}`).value = 'NIGHT SHIFT';
        worksheet.getCell(`C${workDaysRow}`).font = { ...fontTimesNewRoman, italic: true };
        worksheet.getCell(`C${workDaysRow}`).alignment = { horizontal: 'center' };

        // HARI KERJA row
        const hariKerjaRow = workDaysRow + 1;
        worksheet.addRow([]);
        worksheet.getCell(`B${hariKerjaRow}`).value = 'HARI KERJA';
        worksheet.getCell(`B${hariKerjaRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`B${hariKerjaRow}`).alignment = { horizontal: 'center' };
        worksheet.getCell(`C${hariKerjaRow}`).value = 'JUMLAH LEMBUR';
        worksheet.getCell(`C${hariKerjaRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`C${hariKerjaRow}`).alignment = { horizontal: 'center' };

        // Calculate totals
        let workDays = 0;
        let totalOvertimeHours = 0;
        activityData.forEach(row => {
            if (!row.isLibur && row.shift && row.shift !== "LIBUR") workDays++;
            totalOvertimeHours += (row.jamLembur || 0);
        });

        // Values on row below labels
        const valuesRow = hariKerjaRow + 1;
        worksheet.addRow([]);
        worksheet.getCell(`B${valuesRow}`).value = workDays;
        worksheet.getCell(`B${valuesRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`B${valuesRow}`).alignment = { horizontal: 'center' };
        
        worksheet.getCell(`C${valuesRow}`).value = totalOvertimeHours;
        worksheet.getCell(`C${valuesRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`C${valuesRow}`).alignment = { horizontal: 'center' };

        // ===============================
        // SIGNATURE SECTION
        // ===============================
        const sigRow1 = valuesRow + 3;
        for (let i = 0; i < 10; i++) worksheet.addRow([]);

        // Dibuat Oleh
        worksheet.getCell(`B${sigRow1}`).value = 'Dibuat Oleh';
        worksheet.getCell(`B${sigRow1}`).font = fontTimesNewRoman;
        worksheet.getCell(`B${sigRow1}`).alignment = { horizontal: 'center' };

        // Diperiksa Oleh
        worksheet.getCell(`D${sigRow1}`).value = 'Diperiksa Oleh';
        worksheet.getCell(`D${sigRow1}`).font = fontTimesNewRoman;
        worksheet.getCell(`D${sigRow1}`).alignment = { horizontal: 'center' };

        // Signature lines (sigRow1 + 5)
        const sigLineRow = sigRow1 + 5;
        worksheet.getCell(`B${sigLineRow}`).value = `(${currentEmployee.name.toUpperCase()})`;
        worksheet.getCell(`B${sigLineRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`B${sigLineRow}`).alignment = { horizontal: 'center' };

        worksheet.getCell(`D${sigLineRow}`).value = `(${companyInfo.manager.name})`;
        worksheet.getCell(`D${sigLineRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`D${sigLineRow}`).alignment = { horizontal: 'center' };

        // Labels
        const sigLabelRow = sigLineRow + 1;
        worksheet.getCell(`B${sigLabelRow}`).value = 'Karyawan';
        worksheet.getCell(`B${sigLabelRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`B${sigLabelRow}`).alignment = { horizontal: 'center' };

        worksheet.getCell(`D${sigLabelRow}`).value = companyInfo.manager.role;
        worksheet.getCell(`D${sigLabelRow}`).font = fontTimesNewRoman;
        worksheet.getCell(`D${sigLabelRow}`).alignment = { horizontal: 'center' };

        // Manager NIK
        worksheet.getCell(`D${sigLabelRow + 1}`).value = `NIK: ${companyInfo.manager.nik}`;
        worksheet.getCell(`D${sigLabelRow + 1}`).font = fontTimesNewRoman;
        worksheet.getCell(`D${sigLabelRow + 1}`).alignment = { horizontal: 'center' };

        // Employee NIK
        worksheet.getCell(`B${sigLabelRow + 1}`).value = `NIK: ${currentEmployee.nik}`;
        worksheet.getCell(`B${sigLabelRow + 1}`).font = fontTimesNewRoman;
        worksheet.getCell(`B${sigLabelRow + 1}`).alignment = { horizontal: 'center' };

        // ===============================
        // SET PRINT AREA
        // ===============================
        worksheet.pageSetup.printArea = `A1:H${sigLabelRow + 2}`;

        // ===============================
        // GENERATE FILENAME & DOWNLOAD
        // ===============================
        const monthNameUpper = monthNames[currentMonth - 1].toUpperCase();
        const employeeNameFile = currentEmployee.name.toUpperCase().replace(/ /g, '_');
        const filename = `Lampiran_Lembur_${monthNameUpper}_${currentYear}_${employeeNameFile}_${currentEmployee.nik}.xlsx`;

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
