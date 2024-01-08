const themeToggleBtn = document.querySelector('.theme-toggle');
const icons = document.querySelectorAll('.icon');

const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

const handleThemeToggle = () => {
  document.body.classList.toggle('dark-theme');

  icons.forEach(icon => {
    icon.classList.toggle('dark-icon');
  });


  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.removeItem('theme');
  }
};

themeToggleBtn.addEventListener('click', handleThemeToggle);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
};
