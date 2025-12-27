// Initialize Lucide icons
lucide.createIcons();

// Theme toggle function
function toggleTheme() {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'light') {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    lucide.createIcons();
}

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}

// Open encoded links
function openLink(encoded) {
    const url = atob(encoded);
    window.open(url, '_blank');
}

// Toggle answer visibility
function toggleAnswer(btn) {
    const answerContent = btn.nextElementSibling;
    btn.classList.toggle('active');
    answerContent.classList.toggle('show');
}
