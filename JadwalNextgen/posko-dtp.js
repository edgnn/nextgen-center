/* ============================================
   JADWAL POSKO IDUL FITRI 2026 DTP - APPLICATION LOGIC
   ============================================ */

// ============================================
// DATA - EMPLOYEES (DTP)
// ============================================
const poskoEmployees = [
    // Karyawan Posko Idul Fitri 2026 - DTP
    { id: 1, name: "Dina Nur Ayudia", nik: "", category: "DTP" },
    { id: 2, name: "Fadhlan Azultra", nik: "", category: "DTP" },
    { id: 3, name: "Intan Maharani", nik: "", category: "DTP" },
    { id: 4, name: "M Fiqri Yansyah Ridho", nik: "", category: "DTP" },
    { id: 5, name: "M Razky Adiantoro", nik: "", category: "DTP" },
];

// ============================================
// DATA - SHIFT DESCRIPTIONS
// ============================================
const shiftDescriptions = {
    "P1": "08:00 - 12:00",
    "P2": "13:00 - 17:00",
    "Piket": "Weekday 17:00 - 18:00",
    "R1": "Piket Lebaran 08:00 - 12:00",
    "R2": "Piket Lebaran 13:00 - 17:00",
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
    // Dina Nur Ayudia
    1: { 13: "LIBUR", 14: "LIBUR", 15: "P1", 16: "LIBUR", 17: "Piket", 18: "LIBUR", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "R2", 24: "R1", 25: "Piket", 26: "LIBUR", 27: "LIBUR", 28: "LIBUR", 29: "LIBUR" },
    // Fadhlan Azultra
    2: { 13: "LIBUR", 14: "LIBUR", 15: "LIBUR", 16: "Piket", 17: "LIBUR", 18: "R1", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "Piket", 26: "Piket", 27: "Piket", 28: "LIBUR", 29: "P1" },
    // Intan Maharani
    3: { 13: "Piket", 14: "P2", 15: "LIBUR", 16: "Piket", 17: "LIBUR", 18: "R2", 19: "LIBUR", 20: "LIBUR", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "LIBUR", 25: "LIBUR", 26: "Piket", 27: "LIBUR", 28: "P2", 29: "LIBUR" },
    // M Fiqri Yansyah Ridho
    4: { 13: "LIBUR", 14: "LIBUR", 15: "P2", 16: "LIBUR", 17: "Piket", 18: "LIBUR", 19: "LIBUR", 20: "R2", 21: "LIBUR", 22: "LIBUR", 23: "R1", 24: "LIBUR", 25: "LIBUR", 26: "LIBUR", 27: "LIBUR", 28: "P1", 29: "LIBUR" },
    // M Razky Adiantoro
    5: { 13: "Piket", 14: "P1", 15: "LIBUR", 16: "LIBUR", 17: "LIBUR", 18: "LIBUR", 19: "LIBUR", 20: "R1", 21: "LIBUR", 22: "LIBUR", 23: "LIBUR", 24: "R2", 25: "LIBUR", 26: "LIBUR", 27: "Piket", 28: "LIBUR", 29: "P2" }
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

// All DTP shift types (non-LIBUR)
const DTP_SHIFT_TYPES = ["P1", "P2", "Piket", "R1", "R2"];

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
        nextShiftTitleEl.textContent = '⏰ Jadwal Berikutnya';
        return;
    }

    // Find currently working employees (today)
    const workingEmployees = [];
    poskoEmployees.forEach(emp => {
        const empData = poskoScheduleData[emp.id] || {};
        const shift = empData[today] || "";
        if (shift && shift !== "LIBUR") {
            workingEmployees.push({ ...emp, shift: shift });
        }
    });

    // Find next day's employees
    const nextDay = today + 1;
    const nextDayEmployees = [];
    if (nextDay >= POSKO_START_DAY && nextDay <= POSKO_END_DAY) {
        poskoEmployees.forEach(emp => {
            const empData = poskoScheduleData[emp.id] || {};
            const shift = empData[nextDay] || "";
            if (shift && shift !== "LIBUR") {
                nextDayEmployees.push({ ...emp, shift: shift });
            }
        });
    }

    // Render working now
    if (workingEmployees.length > 0) {
        // Group by shift type
        const grouped = {};
        workingEmployees.forEach(emp => {
            if (!grouped[emp.shift]) grouped[emp.shift] = [];
            grouped[emp.shift].push(emp);
        });

        let html = '';
        for (const [shiftType, employees] of Object.entries(grouped)) {
            html += `
                <div class="shift-group">
                    <div class="shift-group-header">
                        <span class="shift-cell shift-${shiftType.toLowerCase()}" style="cursor:default; font-size: 0.8rem; padding: 4px 10px;">${shiftType}</span>
                        <span class="shift-group-time">${shiftDescriptions[shiftType] || shiftType}</span>
                    </div>
                    <div class="shift-group-count">${employees.length} orang</div>
                    <ul class="employee-list">
                        ${employees.map(emp => `<li>• ${emp.name}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        workingNowEl.innerHTML = html;
    } else {
        workingNowEl.innerHTML = '<div class="dashboard-empty">Tidak ada karyawan yang bertugas hari ini</div>';
    }

    // Render next day
    nextShiftTitleEl.textContent = nextDay <= POSKO_END_DAY ? `⏰ Jadwal Besok - ${nextDay} Maret` : '⏰ Jadwal Berikutnya';
    if (nextDayEmployees.length > 0) {
        const grouped = {};
        nextDayEmployees.forEach(emp => {
            if (!grouped[emp.shift]) grouped[emp.shift] = [];
            grouped[emp.shift].push(emp);
        });

        let html = '';
        for (const [shiftType, employees] of Object.entries(grouped)) {
            html += `
                <div class="shift-group">
                    <div class="shift-group-header">
                        <span class="shift-cell shift-${shiftType.toLowerCase()}" style="cursor:default; font-size: 0.8rem; padding: 4px 10px;">${shiftType}</span>
                        <span class="shift-group-time">${shiftDescriptions[shiftType] || shiftType}</span>
                    </div>
                    <div class="shift-group-count">${employees.length} orang</div>
                    <ul class="employee-list">
                        ${employees.map(emp => `<li>• ${emp.name}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
        nextShiftEl.innerHTML = html;
    } else {
        nextShiftEl.innerHTML = '<div class="dashboard-empty">Tidak ada data jadwal berikutnya</div>';
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

    modalTitle.textContent = `Detail Jadwal Posko DTP`;

    let holidayHtml = '';
    if (holiday) {
        holidayHtml = `
            <div class="modal-info-item" style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%);">
                <span class="modal-info-label">🎉 Hari Libur Nasional</span>
                <span class="modal-info-value" style="color: var(--shift-p1);">${holiday}</span>
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
                        ${shift}
                    </span>
                </span>
            </div>
            <div class="modal-info-item">
                <span class="modal-info-label">Keterangan</span>
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

    modalTitle.textContent = `📅 Info Kehadiran Posko DTP - ${day} Maret 2026`;

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
                <h4 class="daily-section-title">✅ Karyawan Bertugas (${working.length} orang)</h4>
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
        noDataHtml = '<p class="no-data">Belum ada data jadwal untuk tanggal ini.</p>';
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
