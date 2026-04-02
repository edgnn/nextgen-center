/* ============================================
   JADWAL POSKO IDUL FITRI 2026 - APPLICATION LOGIC
   ============================================ */

// ============================================
// DATA - EMPLOYEES (Reguler + Tambahan)
// ============================================
const poskoEmployees = [
    // Karyawan Posko Idul Fitri 2026 - Semua SHIFTING
    { id: 1, name: "Mochamad Razky Adiantoro", nik: "", category: "SHIFTING" },
    { id: 2, name: "Julius Ruben AP Sibarani", nik: "", category: "SHIFTING" },
    { id: 3, name: "Fitra Malik", nik: "", category: "SHIFTING" },
    { id: 4, name: "Muhammad Fikri", nik: "", category: "SHIFTING" },
    { id: 5, name: "Muhammad Taufik", nik: "213504", category: "SHIFTING" },
    { id: 6, name: "Muhammad Yarham", nik: "213500", category: "SHIFTING" },
    { id: 7, name: "Fachri Ilmawandi", nik: "213494", category: "SHIFTING" },
    { id: 8, name: "Andry Wahyudi", nik: "213497", category: "SHIFTING" },
    { id: 9, name: "Youngky Ramadhan", nik: "226840", category: "SHIFTING" },
    { id: 10, name: "Ali Ridho Salatin", nik: "213496", category: "SHIFTING" },
    { id: 11, name: "Edi Gunawan", nik: "213502", category: "SHIFTING" },
    { id: 12, name: "Milan Trista", nik: "213512", category: "SHIFTING" },
    { id: 13, name: "Jajang Haris Hidayat", nik: "213503", category: "SHIFTING" },
    { id: 14, name: "Muhammad Ali Wardhana", nik: "", category: "SHIFTING" },
];

// ============================================
// DATA - SHIFT DESCRIPTIONS
// ============================================
const shiftDescriptions = {
    "A1P": "08.00 - 20.00 (Shift 1 POSKO)",
    "A2P": "20.00 - 08.00 (Shift 2 POSKO)",
    "LIBUR": "LIBUR"
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
// Key: employeeId -> { day: shift }
// Hanya tanggal 13-29 Maret 2026
// ============================================
const poskoScheduleData = {
    // Mochamad Razky Adiantoro
    1: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "A1P", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "A1P", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "A1P", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    // Julius Ruben AP Sibarani
    2: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "A1P", 21: "A1P", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "A1P", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    // Fitra Malik
    3: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "A1P", 24: "LIBUR", 25: "LIBUR", 26: "A1P", 27: "A1P", 28: "LIBUR", 29: "LIBUR" },
    // Muhammad Fikri
    4: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "A1P", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A1P", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "LIBUR", 27: "A1P", 28: "LIBUR", 29: "LIBUR" },
    // Muhammad Taufik
    5: { 13: "LIBUR", 14: "A1P", 15: "A1P", 16: "A2P", 17: "A2P", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A2P", 23: "LIBUR", 24: "A1P", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "A2P", 29: "A2P" },
    // Muhammad Yarham
    6: { 13: "LIBUR", 14: "A1P", 15: "A1P", 16: "A2P", 17: "A2P", 18: "LIBUR", 19: "A1P", 20: "A2P", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "A2P", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "A2P", 29: "A2P" },
    // Fachri Ilmawandi
    7: { 13: "LIBUR", 14: "A2P", 15: "A2P", 16: "LIBUR", 17: "LIBUR", 18: "A2P", 19: "LIBUR", 20: "LIBUR", 21: "A2P", 22: "LIBUR", 23: "A2P", 24: "LIBUR", 25: "LIBUR", 26: "A2P", 27: "A2P", 28: "LIBUR", 29: "LIBUR" },
    // Andry Wahyudi
    8: { 13: "LIBUR", 14: "A2P", 15: "A2P", 16: "LIBUR", 17: "LIBUR", 18: "A1P", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "A1P", 25: "LIBUR", 26: "A2P", 27: "A2P", 28: "LIBUR", 29: "LIBUR" },
    // Youngky Ramadhan
    9: { 13: "A2P", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "A2P", 19: "LIBUR", 20: "LIBUR", 21: "A1P", 22: "LIBUR", 23: "A1P", 24: "LIBUR", 25: "A2P", 26: "LIBUR", 27: "LIBUR", 28: "A1P", 29: "A1P" },
    // Ali Ridho Salatin
    10: { 13: "A2P", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "A1P", 23: "LIBUR", 24: "A2P", 25: "A2P", 26: "LIBUR", 27: "LIBUR", 28: "A1P", 29: "A1P" },
    // Edi Gunawan
    11: { 13: "A1P", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "A2P", 20: "LIBUR", 21: "A2P", 22: "LIBUR", 23: "A2P", 24: "LIBUR", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    // Milan Trista
    12: { 13: "A1P", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "A1P", 19: "A1P", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    // Jajang Haris Hidayat
    13: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "A1P", 17: "A1P", 18: "LIBUR", 19: "A2P", 20: "A2P", 21: "LIBUR", 22: "A2P", 23: "LIBUR", 24: "LIBUR", 25: "A1P", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    // Muhammad Ali Wardhana
    14: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "A1P", 21: "LIBUR", 22: "A1P", 23: "LIBUR", 24: "LIBUR", 25: "A1P", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" }
};

// ============================================
// POSKO CONFIGURATION
// ============================================
const POSKO_START_DAY = 13;
const POSKO_END_DAY = 29;
const POSKO_MONTH = 3; // Maret
const POSKO_YEAR = 2026;

const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

// ============================================
// STATE
// ============================================
let selectedEmployee = "all";
let selectedCategory = "all";

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEmployeeFilter();
    initCategoryFilter();
    renderCalendar();
    initModal();
    updateInfoCards();
    initDashboard();
});

// ============================================
// LIVE DASHBOARD
// ============================================
function initDashboard() {
    updateDashboard();
    setInterval(updateDashboard, 1000);
}

function updateDashboard() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update time
    const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('currentTime').textContent = timeStr;

    // Update date
    const dayFullNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const dateStr = `${dayFullNames[now.getDay()]}, ${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    document.getElementById('currentDate').textContent = dateStr;

    // Determine today's day (within posko range)
    const today = now.getDate();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    // Check if within posko period
    const isInPosko = currentYear === POSKO_YEAR && currentMonth === POSKO_MONTH && today >= POSKO_START_DAY && today <= POSKO_END_DAY;

    const workingNowEl = document.getElementById('workingNow');
    const nextShiftEl = document.getElementById('nextShift');
    const nextShiftTitleEl = document.getElementById('nextShiftTitle');

    if (!isInPosko) {
        workingNowEl.innerHTML = '<div class="dashboard-empty">📅 Di luar periode posko (13-29 Maret 2026)</div>';
        nextShiftEl.innerHTML = '';
        nextShiftTitleEl.textContent = '⏰ Shift Berikutnya';
        return;
    }

    // Determine current shift: A1P = 08:00-20:00, A2P = 20:00-08:00
    let currentShift = null;
    let nextShiftCode = null;
    let nextShiftTime = '';
    let nextShiftLabel = '';

    if (hours >= 8 && hours < 20) {
        currentShift = "A1P";
        nextShiftCode = "A2P";
        nextShiftTime = "20:00";
        nextShiftLabel = "malam ini";
    } else {
        currentShift = "A2P";
        nextShiftCode = "A1P";
        nextShiftTime = "08:00";
        nextShiftLabel = hours < 8 ? "pagi ini" : "besok";
    }

    // Find currently working employees
    const workingEmployees = [];
    poskoEmployees.forEach(emp => {
        const empData = poskoScheduleData[emp.id] || {};
        // For A2 shift after midnight (00:00 - 08:00), check previous day's A2
        let checkDay = today;
        if (currentShift === "A2" && hours < 8 && today > POSKO_START_DAY) {
            checkDay = today - 1;
        }
        const shift = empData[checkDay] || "";
        if (shift === currentShift) {
            workingEmployees.push(emp);
        }
    });

    // Find next shift employees
    const nextShiftEmployees = [];
    let nextDay = today;
    if (currentShift === "A1") {
        // Next is A2 tonight, same day
        nextDay = today;
    } else {
        // Next is A1, could be today (if before 08:00) or tomorrow
        if (hours < 8) {
            nextDay = today;
        } else {
            nextDay = today + 1;
        }
    }

    if (nextDay >= POSKO_START_DAY && nextDay <= POSKO_END_DAY) {
        poskoEmployees.forEach(emp => {
            const empData = poskoScheduleData[emp.id] || {};
            const shift = empData[nextDay] || "";
            if (shift === nextShiftCode) {
                nextShiftEmployees.push(emp);
            }
        });
    }

    // Render working now
    if (workingEmployees.length > 0) {
        workingNowEl.innerHTML = `
            <div class="shift-group">
                <div class="shift-group-header">
                    <span class="shift-cell shift-${currentShift.toLowerCase()}" style="cursor:default; font-size: 0.8rem; padding: 4px 10px;">${currentShift}</span>
                    <span class="shift-group-time">${shiftDescriptions[currentShift]}</span>
                </div>
                <div class="shift-group-count">${workingEmployees.length} orang</div>
                <ul class="employee-list">
                    ${workingEmployees.map(emp => `<li>• ${emp.name}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        workingNowEl.innerHTML = '<div class="dashboard-empty">Tidak ada karyawan yang sedang bekerja saat ini</div>';
    }

    // Render next shift
    nextShiftTitleEl.textContent = `⏰ Shift Berikutnya - ${nextShiftTime} (${nextShiftLabel})`;
    if (nextShiftEmployees.length > 0) {
        nextShiftEl.innerHTML = `
            <div class="shift-group">
                <div class="shift-group-header">
                    <span class="shift-cell shift-${nextShiftCode.toLowerCase()}" style="cursor:default; font-size: 0.8rem; padding: 4px 10px;">${nextShiftCode}</span>
                    <span class="shift-group-time">${shiftDescriptions[nextShiftCode]}</span>
                </div>
                <div class="shift-group-count">${nextShiftEmployees.length} orang</div>
                <ul class="employee-list">
                    ${nextShiftEmployees.map(emp => `<li>• ${emp.name}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        nextShiftEl.innerHTML = '<div class="dashboard-empty">Tidak ada data shift berikutnya</div>';
    }
}

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
// EMPLOYEE FILTER
// ============================================
function initEmployeeFilter() {
    const employeeFilter = document.getElementById('employeeFilter');

    poskoEmployees.forEach(emp => {
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
// CATEGORY FILTER
// ============================================
function initCategoryFilter() {
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        renderCalendar();
    });
}

// ============================================
// INFO CARDS
// ============================================
function updateInfoCards() {
    const el = document.getElementById('totalEmployees');
    if (el) el.textContent = poskoEmployees.length + ' Orang';
}

// ============================================
// CALENDAR RENDERING
// ============================================
function renderCalendar() {
    const container = document.getElementById('calendarContainer');

    // Filter employees by name only
    let filteredEmployees = poskoEmployees;
    if (selectedEmployee !== "all") {
        filteredEmployees = poskoEmployees.filter(emp => emp.id === parseInt(selectedEmployee));
    }

    // Filter employees by category (shift type)
    if (selectedCategory !== "all") {
        filteredEmployees = filteredEmployees.filter(emp => {
            const empData = poskoScheduleData[emp.id] || {};
            return Object.values(empData).some(shift => shift === selectedCategory);
        });
    }

    // Build table HTML
    let html = '<table class="calendar-table">';

    // Header row
    html += '<thead><tr>';
    html += '<th>NAMA</th>';

    for (let day = POSKO_START_DAY; day <= POSKO_END_DAY; day++) {
        const date = new Date(POSKO_YEAR, POSKO_MONTH - 1, day);
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        // Check for national holiday
        const dateKey = `${POSKO_YEAR}-${String(POSKO_MONTH).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const holiday = nationalHolidays[dateKey];
        const isHoliday = !!holiday;

        html += `<th class="${isWeekend ? 'weekend' : ''} ${isHoliday ? 'national-holiday' : ''} date-clickable" 
            ${isHoliday ? `title="${holiday}"` : ''} 
            data-day="${day}">
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

    if (filteredEmployees.length > 0) {
        filteredEmployees.forEach(emp => {
            html += renderEmployeeRow(emp);
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

function renderEmployeeRow(employee) {
    const empData = poskoScheduleData[employee.id] || {};

    let html = '<tr>';
    html += `<td>${employee.name}</td>`;

    for (let day = POSKO_START_DAY; day <= POSKO_END_DAY; day++) {
        const date = new Date(POSKO_YEAR, POSKO_MONTH - 1, day);
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        // Check for national holiday
        const dateKey = `${POSKO_YEAR}-${String(POSKO_MONTH).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isHoliday = !!nationalHolidays[dateKey];

        const shift = empData[day] || "";

        // Apply shift filter: only show the selected shift type
        const showShift = shift && shift !== "LIBUR" && (selectedCategory === "all" || shift === selectedCategory);
        const shiftClass = showShift ? `shift-${shift.toLowerCase()}` : "";

        // Add weekend or holiday class for background color
        const cellClass = isWeekend || isHoliday ? 'weekend' : '';

        html += `<td class="${cellClass}">`;
        if (showShift) {
            html += `<span class="shift-cell ${shiftClass}" 
                          data-employee="${employee.name}"
                          data-date="${day}"
                          data-shift="${shift}">
                ${shift}
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
    const shift = cell.dataset.shift;

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    // Check for national holiday
    const dateKey = `${POSKO_YEAR}-${String(POSKO_MONTH).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const holiday = nationalHolidays[dateKey];

    modalTitle.textContent = `Detail Jadwal Posko`;

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
                <span class="modal-info-value">${date} Maret 2026</span>
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

function handleDateClick(e) {
    const th = e.currentTarget;
    const day = parseInt(th.dataset.day);

    const dateKey = `${POSKO_YEAR}-${String(POSKO_MONTH).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const holiday = nationalHolidays[dateKey];
    const date = new Date(POSKO_YEAR, POSKO_MONTH - 1, day);
    const dayOfWeek = date.getDay();

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = `📅 Info Kehadiran Posko - ${day} Maret 2026`;

    // Categorize employees by their shift status
    let working = [];
    let libur = [];

    poskoEmployees.forEach(emp => {
        const empData = poskoScheduleData[emp.id] || {};
        const shift = empData[day] || "";

        if (shift && shift !== "LIBUR") {
            working.push({
                name: emp.name,
                shift: shift,
                time: shiftDescriptions[shift] || shift
            });
        } else if (shift === "LIBUR") {
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

    let noDataHtml = '';
    if (working.length === 0 && libur.length === 0) {
        noDataHtml = '<p class="no-data">Belum ada data jadwal untuk tanggal ini. Silakan isi data di poskoScheduleData.</p>';
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
            ${noDataHtml}
        </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}
