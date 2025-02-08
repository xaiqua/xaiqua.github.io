// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = 'Switch to Light Theme';
    }
}

themeToggle.addEventListener('click', () => {
    let theme = 'light';
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        theme = 'dark';
        themeToggle.textContent = 'Switch to Light Theme';
    } else {
        themeToggle.textContent = 'Switch to Dark Theme';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});
