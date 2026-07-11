const root = document.documentElement;
const savedTheme = localStorage.getItem('research-theme') || 'light';
root.setAttribute('data-theme', savedTheme);
