/* ============================================
   DAILY ACTIVITY POSKO - APPLICATION LOGIC
   ============================================ */

// ============================================
// DATA - EMPLOYEES (Posko Idul Fitri 2026)
// ============================================
const employees = [
    { id: 1, name: "Mochamad Razky Adiantoro", nik: "", category: "SHIFTING" },
    { id: 2, name: "Julius Ruben AP Sibarani", nik: "", category: "SHIFTING" },
    { id: 3, name: "Fitra Malik", nik: "", category: "SHIFTING" },
    { id: 4, name: "Muhammad Fikri", nik: "", category: "SHIFTING" },
    { id: 5, name: "Muhammad Taufik", nik: "213504", category: "SHIFTING" },
    { id: 6, name: "Muhammad Yarham", nik: "213500", category: "SHIFTING" },
    { id: 7, name: "Fachri Ilmawandi", nik: "213494", category: "SHIFTING" },
    { id: 8, name: "Andry Wahyudi", nik: "213497", category: "SHIFTING" },
    { id: 9, name: "Youngky Ramadhan", nik: "107522", category: "SHIFTING" },
    { id: 10, name: "Ali Ridho Salatin", nik: "213496", category: "SHIFTING" },
    { id: 11, name: "Edi Gunawan", nik: "213502", category: "SHIFTING" },
    { id: 12, name: "Milan Trista", nik: "213512", category: "SHIFTING" },
    { id: 13, name: "Jajang Haris Hidayat", nik: "213503", category: "SHIFTING" },
    { id: 14, name: "Muhammad Ali Wardhana", nik: "", category: "SHIFTING" },
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
// DATA - NATIONAL HOLIDAYS (Posko Period)
// ============================================
const nationalHolidays = {
    "2026-03-18": "Cuti Bersama Nyepi",
    "2026-03-19": "Hari Raya Nyepi",
    "2026-03-20": "Cuti Bersama Idul Fitri 1447 H",
    "2026-03-21": "Hari Raya Idul Fitri 1447 H",
    "2026-03-22": "Hari Raya Idul Fitri 1447 H",
    "2026-03-23": "Cuti Bersama Idul Fitri 1447 H",
    "2026-03-24": "Cuti Bersama Idul Fitri 1447 H"
};

// ============================================
// DATA - POSKO SCHEDULE
// ============================================
const poskoScheduleData = {
    1: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "A1", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "A1", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "A1", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    2: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "A1", 21: "A1", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "A1", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    3: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "A1", 24: "LIBUR", 25: "LIBUR", 26: "A1", 27: "A1", 28: "LIBUR", 29: "LIBUR" },
    4: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "A1", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A1", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "LIBUR", 27: "A1", 28: "LIBUR", 29: "LIBUR" },
    5: { 13: "LIBUR", 14: "A1", 15: "A1", 16: "A2", 17: "A2", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A2", 23: "LIBUR", 24: "A1", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "A2", 29: "A2" },
    6: { 13: "LIBUR", 14: "A1", 15: "A1", 16: "A2", 17: "A2", 18: "LIBUR", 19: "A1", 20: "A2", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "A2", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "A2", 29: "A2" },
    7: { 13: "LIBUR", 14: "A2", 15: "A2", 16: "LIBUR", 17: "LIBUR", 18: "A2", 19: "LIBUR", 20: "LIBUR", 21: "A2", 22: "LIBUR", 23: "A2", 24: "LIBUR", 25: "LIBUR", 26: "A2", 27: "A2", 28: "LIBUR", 29: "LIBUR" },
    8: { 13: "LIBUR", 14: "A2", 15: "A2", 16: "LIBUR", 17: "LIBUR", 18: "A1", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "A1", 25: "LIBUR", 26: "A2", 27: "A2", 28: "LIBUR", 29: "LIBUR" },
    9: { 13: "A2", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "A2", 19: "LIBUR", 20: "LIBUR", 21: "A1", 22: "LIBUR", 23: "A1", 24: "LIBUR", 25: "A2", 26: "LIBUR", 27: "LIBUR", 28: "A1", 29: "A1" },
    10: { 13: "A2", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A1", 23: "LIBUR", 24: "A2", 25: "A2", 26: "LIBUR", 27: "LIBUR", 28: "A1", 29: "A1" },
    11: { 13: "A1", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "A2", 20: "LIBUR", 21: "A2", 22: "LIBUR", 23: "A2", 24: "LIBUR", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    12: { 13: "A1", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "A1", 19: "A1", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    13: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "A1", 17: "A1", 18: "LIBUR", 19: "A2", 20: "A2", 21: "LIBUR", 22: "A2", 23: "LIBUR", 24: "LIBUR", 25: "A1", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    14: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "A1", 21: "LIBUR", 22: "A1", 23: "LIBUR", 24: "LIBUR", 25: "A1", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" }
};

// ============================================
// POSKO CONFIGURATION
// ============================================
const POSKO_START_DAY = 13;
const POSKO_END_DAY = 29;
const POSKO_MONTH = 3;
const POSKO_YEAR = 2026;

const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const dayNamesShort = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

// Shift working hours for posko
const shiftWorkingHours = {
    "A1": { start: "08:00", end: "20:00" },
    "A2": { start: "20:00", end: "08:00" }
};

// ============================================
// STATE
// ============================================
let currentEmployee = null;
let activityData = [];

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
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
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
    employees.forEach(emp => {
        const option = document.createElement('option');
        option.value = emp.id;
        option.textContent = emp.nik ? `${emp.name} (${emp.nik})` : emp.name;
        employeeSelect.appendChild(option);
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
    if (!employeeId) {
        alert('Pilih karyawan terlebih dahulu');
        return;
    }

    currentEmployee = employees.find(emp => emp.id === employeeId);

    document.getElementById('logoHeader').style.display = 'flex';
    document.getElementById('employeeInfoCard').style.display = 'block';
    document.getElementById('tableWrapper').style.display = 'block';
    document.getElementById('signatureSection').style.display = 'grid';
    document.getElementById('actionBar').style.display = 'flex';

    updateEmployeeInfo();
    buildActivityData();
    renderTable();
    updateSignatures();
}

// ============================================
// UPDATE EMPLOYEE INFO
// ============================================
function updateEmployeeInfo() {
    document.getElementById('infoNik').textContent = currentEmployee.nik || '-';
    document.getElementById('infoNama').textContent = currentEmployee.name.toUpperCase();
    document.getElementById('infoJabatan').textContent = companyInfo.jabatan;
    document.getElementById('infoDept').textContent = companyInfo.dept;
}

// ============================================
// BUILD ACTIVITY DATA
// ============================================
function buildActivityData() {
    const empSchedule = poskoScheduleData[currentEmployee.id] || {};
    activityData = [];

    let rowNo = 1;
    for (let day = POSKO_START_DAY; day <= POSKO_END_DAY; day++) {
        const date = new Date(POSKO_YEAR, POSKO_MONTH - 1, day);
        const dayOfWeek = date.getDay();
        const dateKey = `${POSKO_YEAR}-${String(POSKO_MONTH).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        const shift = empSchedule[day] || "";
        const isHoliday = !!nationalHolidays[dateKey];
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const isLibur = shift === "LIBUR" || !shift;

        // Determine HADIR status
        let hadir = "WFO";
        if (isLibur) {
            if (dayOfWeek === 0) hadir = "MINGGU";
            else if (dayOfWeek === 6) hadir = "SABTU";
            else if (isHoliday) hadir = "LIBUR NASIONAL";
            else hadir = "LIBUR";
        }

        // Get working hours
        let startTime = "";
        let endTime = "";
        if (shift && shift !== "LIBUR" && shiftWorkingHours[shift]) {
            startTime = shiftWorkingHours[shift].start;
            endTime = shiftWorkingHours[shift].end;
        }

        // Daily Activity text
        let dailyActivity = "";
        if (isLibur) {
            dailyActivity = "LIBUR";
        } else if (shift === "A1") {
            dailyActivity = "Shift 1 Posko Idul Fitri 1447H";
        } else if (shift === "A2") {
            dailyActivity = "Shift 2 Posko Idul Fitri 1447H";
        }

        // Keterangan
        let keterangan = "";
        if (shift === "A1") {
            keterangan = "Posko Idul Fitri 1447H 12 Jam (08:00 - 20:00)";
        } else if (shift === "A2") {
            keterangan = "Posko Idul Fitri 1447H 12 Jam (20:00 - 08:00)";
        }

        activityData.push({
            no: rowNo++,
            date: date,
            dateStr: `${day} ${monthNames[POSKO_MONTH - 1]} ${POSKO_YEAR}`,
            dayName: dayNamesShort[dayOfWeek],
            hadir: hadir,
            startTime: startTime,
            endTime: endTime,
            dailyActivity: dailyActivity,
            keterangan: keterangan,
            isWeekend: isWeekend,
            isHoliday: isHoliday,
            isLibur: isLibur,
            shift: shift,
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
                    <input type="text" value="${row.startTime}" placeholder="HH:MM"
                           data-index="${index}" data-field="startTime"
                           onchange="updateStartTimeAndOvertime(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-end editable-cell">
                    <input type="text" value="${row.endTime}" placeholder="HH:MM"
                           data-index="${index}" data-field="endTime"
                           id="endTime-${index}"
                           onchange="updateEndTimeAndOvertime(this)"
                           oninput="formatTimeInput(this)">
                </td>
                <td class="col-activity editable-cell">
                    <input type="text" value="${row.dailyActivity}" 
                           data-index="${index}" data-field="dailyActivity"
                           id="dailyActivity-${index}"
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
// FORMAT TIME INPUT
// ============================================
function formatTimeInput(input) {
    let value = input.value.replace(/[^0-9:]/g, '');
    if (value.length === 2 && !value.includes(':')) value = value + ':';
    if (value.length > 5) value = value.substring(0, 5);
    if (value.length >= 2) {
        let hours = parseInt(value.substring(0, 2));
        if (hours > 23) value = '23' + value.substring(2);
    }
    if (value.length === 5) {
        let minutes = parseInt(value.substring(3, 5));
        if (minutes > 59) value = value.substring(0, 3) + '59';
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

    activityData[index].endTime = newEndTime;
    const startTime = activityData[index].startTime;

    let overtimeInfo = "";
    if (startTime && newEndTime) {
        overtimeInfo = calculatePoskoHours(startTime, newEndTime);
    }

    activityData[index].keterangan = overtimeInfo;
    const keteranganInput = document.getElementById(`keterangan-${index}`);
    if (keteranganInput) keteranganInput.value = overtimeInfo;
}

// ============================================
// UPDATE START TIME AND CALCULATE OVERTIME
// ============================================
function updateStartTimeAndOvertime(input) {
    const index = parseInt(input.dataset.index);
    const newStartTime = input.value;

    activityData[index].startTime = newStartTime;
    const endTime = activityData[index].endTime;

    let overtimeInfo = "";
    if (newStartTime && endTime) {
        overtimeInfo = calculatePoskoHours(newStartTime, endTime);
    }

    activityData[index].keterangan = overtimeInfo;
    const keteranganInput = document.getElementById(`keterangan-${index}`);
    if (keteranganInput) keteranganInput.value = overtimeInfo;
}

// ============================================
// CALCULATE POSKO HOURS
// ============================================
function calculatePoskoHours(startTime, endTime) {
    if (!startTime || !endTime) return "";

    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);

    let startMinutes = startHour * 60 + startMin;
    let endMinutes = endHour * 60 + endMin;
    if (endMinutes <= startMinutes) endMinutes += 24 * 60;

    const totalMinutes = endMinutes - startMinutes;
    const totalHours = Math.round((totalMinutes / 60) * 10) / 10;

    if (totalHours > 0) {
        return `Posko Idul Fitri 1447H ${totalHours} Jam (${startTime} - ${endTime})`;
    }
    return "";
}

// ============================================
// UPDATE SIGNATURES
// ============================================
function updateSignatures() {
    document.getElementById('sigPekerja').textContent = `(${currentEmployee.name.toUpperCase()})`;
    document.getElementById('sigPekerjaNik').textContent = `NIK : ${currentEmployee.nik || '-'}`;
}

// ============================================
// DOWNLOAD EXCEL
// ============================================
async function downloadExcel() {
    if (!currentEmployee || activityData.length === 0) {
        alert('Muat data terlebih dahulu');
        return;
    }

    try {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Kertas kerja');

        worksheet.pageSetup = {
            paperSize: 9, orientation: 'landscape', fitToPage: true,
            fitToWidth: 1, fitToHeight: 1, horizontalCentered: true,
            verticalCentered: false,
            margins: { left: 0.25, right: 0.25, top: 0.5, bottom: 0.5, header: 0.3, footer: 0.3 }
        };

        worksheet.columns = [
            { width: 4 }, { width: 18 }, { width: 12 },
            { width: 7 }, { width: 7 }, { width: 45 }, { width: 30 },
        ];

        // Header rows
        worksheet.addRow([]); worksheet.addRow([]); worksheet.addRow([]);
        worksheet.mergeCells('A1:G3');
        const headerCell = worksheet.getCell('A1');
        headerCell.value = 'Daily Activity';
        headerCell.font = { bold: true, size: 28 };
        headerCell.alignment = { horizontal: 'center', vertical: 'middle' };
        worksheet.getRow(1).height = 25;
        worksheet.getRow(2).height = 25;
        worksheet.getRow(3).height = 25;

        // Logo kiri (Posko Siaga)
        try {
            const logoResponse = await fetch('Logo Posko 2026.png');
            const logoBlob = await logoResponse.blob();
            const logoBase64 = await blobToBase64(logoBlob);
            const logoId = workbook.addImage({ base64: logoBase64, extension: 'png' });
            worksheet.addImage(logoId, { tl: { col: 0.15, row: 0.4 }, ext: { width: 180, height: 55 } });
        } catch (e) { console.warn('Could not load posko logo:', e); }

        // Logo kanan (DCS)
        try {
            const dcsResponse = await fetch('Logo DCS.png');
            const dcsBlob = await dcsResponse.blob();
            const dcsBase64 = await blobToBase64(dcsBlob);
            const dcsId = workbook.addImage({ base64: dcsBase64, extension: 'png' });
            worksheet.addImage(dcsId, { tl: { col: 5.8, row: 0.4 }, ext: { width: 120, height: 55 } });
        } catch (e) { console.warn('Could not load DCS logo:', e); }

        // Info section
        worksheet.addRow([]); worksheet.addRow([]); worksheet.addRow([]); worksheet.addRow([]);
        worksheet.mergeCells('A4:G7');
        const infoCell = worksheet.getCell('A4');
        infoCell.value = `NIK / Perner   : ${currentEmployee.nik || '-'}\nNama             : ${currentEmployee.name.toUpperCase()}\nJabatan          : ${companyInfo.jabatan}\nDept / Divisi  : ${companyInfo.dept}`;
        infoCell.alignment = { vertical: 'top', wrapText: true };
        infoCell.font = { size: 11 };

        // Table header
        const tableHeaderRow = worksheet.addRow(['NO', 'TANGGAL', 'HADIR', 'Start', 'End', 'DAILY ACTIVITY', 'KETERANGAN']);
        tableHeaderRow.eachCell(cell => {
            cell.font = { bold: true };
            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0E0E0' } };
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
        });

        // Data rows
        const dataStartRow = 9;
        // Sync input fields first
        syncInputFieldsToData();

        activityData.forEach(row => {
            const dataRow = worksheet.addRow([row.no, row.dateStr, row.hadir, row.startTime, row.endTime, row.dailyActivity, row.keterangan]);
            dataRow.eachCell(cell => {
                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            });
            if (row.isLibur || row.isHoliday || row.isWeekend) {
                dataRow.eachCell(cell => {
                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: row.isHoliday ? 'FFFFD9D9' : (row.isWeekend ? 'FFFFF3CD' : 'FFF0F0F0') } };
                });
            }
        });

        // Signature section
        const lastDataRow = dataStartRow + activityData.length - 1;
        const sigStartRow = lastDataRow + 2;
        worksheet.addRow([]);
        for (let i = 0; i < 6; i++) worksheet.addRow([]);
        const sigEndRow = sigStartRow + 5;

        worksheet.mergeCells(`A${sigStartRow}:E${sigEndRow}`);
        const pekerjaCell = worksheet.getCell(`A${sigStartRow}`);
        pekerjaCell.value = `Pekerja\n\n\n\n(${currentEmployee.name.toUpperCase()})\nNIK: ${currentEmployee.nik || '-'}`;
        pekerjaCell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        pekerjaCell.font = { size: 11 };

        worksheet.mergeCells(`F${sigStartRow}:F${sigEndRow}`);
        const atasan1Cell = worksheet.getCell(`F${sigStartRow}`);
        atasan1Cell.value = `Atasan 1\n\n\n\n(${companyInfo.atasan1.name})\nNIK: ${companyInfo.atasan1.nik}`;
        atasan1Cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        atasan1Cell.font = { size: 11 };

        worksheet.mergeCells(`G${sigStartRow}:G${sigEndRow}`);
        const atasan2Cell = worksheet.getCell(`G${sigStartRow}`);
        atasan2Cell.value = `Atasan 2\n\n\n\n\n(……………………………)`;
        atasan2Cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        atasan2Cell.font = { size: 11 };

        worksheet.pageSetup.printArea = `A1:G${sigEndRow}`;
        for (let i = dataStartRow; i <= lastDataRow; i++) worksheet.getRow(i).height = 15;
        for (let i = sigStartRow; i <= sigEndRow; i++) worksheet.getRow(i).height = 18;

        const employeeNameFile = currentEmployee.name.toUpperCase().replace(/ /g, '_');
        const filename = `Daily_Activity_Posko_MARET_2026_${employeeNameFile}${currentEmployee.nik ? '_' + currentEmployee.nik : ''}.xlsx`;

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click();
        document.body.removeChild(a); URL.revokeObjectURL(url);

    } catch (error) {
        console.error('Error generating Excel:', error);
        alert('Error generating Excel: ' + error.message);
    }
}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

// ============================================
// SYNC INPUT FIELDS TO DATA
// ============================================
function syncInputFieldsToData() {
    const tbody = document.getElementById('activityTableBody');
    if (!tbody) return;
    const inputs = tbody.querySelectorAll('input[data-index]');
    inputs.forEach(input => {
        const index = parseInt(input.dataset.index);
        const field = input.dataset.field;
        if (activityData[index] && field) activityData[index][field] = input.value;
    });
}

// ============================================
// DOWNLOAD PDF
// ============================================
async function downloadPdf() {
    if (!currentEmployee || activityData.length === 0) {
        alert('Muat data terlebih dahulu');
        return;
    }

    const pdfBtn = document.getElementById('downloadPdfBtn');
    const originalText = pdfBtn.innerHTML;
    pdfBtn.innerHTML = '⏳ Generating PDF...';
    pdfBtn.disabled = true;

    try {
        syncInputFieldsToData();
        const pdfContainer = document.createElement('div');
        pdfContainer.id = 'pdf-content';
        pdfContainer.style.cssText = 'position:absolute;top:0;left:-9999px;width:1100px;padding:20px;background:white;font-family:Arial,sans-serif;font-size:11px;color:#1a1a1a;';
        pdfContainer.innerHTML = buildPdfContent();
        document.body.appendChild(pdfContainer);
        await new Promise(resolve => setTimeout(resolve, 800));

        const employeeNameFile = currentEmployee.name.toUpperCase().replace(/ /g, '_');
        const filename = `Daily_Activity_Posko_MARET_2026_${employeeNameFile}.pdf`;

        pdfContainer.style.left = '0';
        await new Promise(resolve => setTimeout(resolve, 200));

        await html2pdf().set({
            margin: [5, 5, 5, 5], filename: filename,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, allowTaint: true, logging: false, width: 1100, windowWidth: 1100, scrollX: 0, scrollY: 0 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
            pagebreak: { mode: 'avoid-all' }
        }).from(pdfContainer).save();

        document.body.removeChild(pdfContainer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF: ' + error.message);
    } finally {
        pdfBtn.innerHTML = originalText;
        pdfBtn.disabled = false;
    }
}

// ============================================
// BUILD PDF CONTENT
// ============================================
function buildPdfContent() {
    let html = '';
    html += `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:15px;padding-bottom:10px;border-bottom:2px solid #e5e7eb;">
        <img src="Logo Posko 2026.png" alt="Logo Posko" style="height:50px;">
        <h1 style="font-size:24px;font-weight:700;margin:0;text-align:center;flex:1;">Daily Activity</h1>
        <img src="Logo DCS.png" alt="Logo DCS" style="height:50px;"></div>`;

    html += `<div style="margin-bottom:15px;padding:10px;background:#f0fdf4;border-left:3px solid #15803d;">
        <div style="margin-bottom:4px;"><strong>NIK / Perner</strong> : ${currentEmployee.nik || '-'}</div>
        <div style="margin-bottom:4px;"><strong>Nama</strong> : ${currentEmployee.name.toUpperCase()}</div>
        <div style="margin-bottom:4px;"><strong>Jabatan</strong> : ${companyInfo.jabatan}</div>
        <div><strong>Dept / Divisi</strong> : ${companyInfo.dept}</div></div>`;

    html += `<table style="width:100%;border-collapse:collapse;font-size:10px;margin-bottom:15px;">
        <thead><tr style="background:#e5e7eb;">
        <th style="border:1px solid #d1d5db;padding:6px 4px;width:25px;">NO</th>
        <th style="border:1px solid #d1d5db;padding:6px 4px;width:100px;">TANGGAL</th>
        <th style="border:1px solid #d1d5db;padding:6px 4px;width:70px;">HADIR</th>
        <th style="border:1px solid #d1d5db;padding:6px 4px;width:45px;">Start</th>
        <th style="border:1px solid #d1d5db;padding:6px 4px;width:45px;">End</th>
        <th style="border:1px solid #d1d5db;padding:6px 4px;">DAILY ACTIVITY</th>
        <th style="border:1px solid #d1d5db;padding:6px 4px;width:150px;">KETERANGAN</th>
        </tr></thead><tbody>`;

    activityData.forEach(row => {
        let bgColor = 'white';
        if (row.isHoliday) bgColor = '#fef2f2';
        else if (row.isWeekend) bgColor = '#fffbeb';
        else if (row.isLibur) bgColor = '#f3f4f6';

        html += `<tr style="background:${bgColor};">
            <td style="border:1px solid #d1d5db;padding:4px;text-align:center;">${row.no}</td>
            <td style="border:1px solid #d1d5db;padding:4px;">${row.dateStr}</td>
            <td style="border:1px solid #d1d5db;padding:4px;">${row.hadir}</td>
            <td style="border:1px solid #d1d5db;padding:4px;text-align:center;">${row.startTime}</td>
            <td style="border:1px solid #d1d5db;padding:4px;text-align:center;">${row.endTime}</td>
            <td style="border:1px solid #d1d5db;padding:4px;">${row.dailyActivity}</td>
            <td style="border:1px solid #d1d5db;padding:4px;">${row.keterangan}</td></tr>`;
    });

    html += '</tbody></table>';

    html += `<div style="display:flex;justify-content:space-between;margin-top:20px;">
        <div style="text-align:center;width:30%;"><div style="margin-bottom:50px;">Pekerja</div>
        <div style="border-top:1px solid #000;padding-top:5px;"><strong>(${currentEmployee.name.toUpperCase()})</strong><br>
        <span style="font-size:10px;">NIK: ${currentEmployee.nik || '-'}</span></div></div>
        <div style="text-align:center;width:30%;"><div style="margin-bottom:50px;">Atasan 1</div>
        <div style="border-top:1px solid #000;padding-top:5px;"><strong>(${companyInfo.atasan1.name})</strong><br>
        <span style="font-size:10px;">NIK: ${companyInfo.atasan1.nik}</span></div></div>
        <div style="text-align:center;width:30%;"><div style="margin-bottom:50px;">Atasan 2</div>
        <div style="border-top:1px solid #000;padding-top:5px;"><strong>(……………………………)</strong><br>
        <span style="font-size:10px;">&nbsp;</span></div></div></div>`;

    return html;
}
