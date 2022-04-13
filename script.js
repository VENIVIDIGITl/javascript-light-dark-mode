const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Toggle Dark / Light Mode Styles
function toggleMode(theme) {
  const lightMode = theme === 'light';
  const light = 'rgb(255 255 255 / 50%)';
  const dark = 'rgba(0 0 0 / 50%)';
  const currentIcon = lightMode ? 'fa-moon' : 'fa-sun';
  const newIcon = lightMode ? 'fa-sun' : 'fa-moon';
  nav.style.backgroundColor = lightMode ? light : dark;
  textBox.style.backgroundColor = lightMode ? light : dark;
  toggleIcon.children[0].textContent = `${theme.replace(/^\w/, c => c.toUpperCase())} Mode`;
  toggleIcon.children[1].classList.replace(currentIcon, newIcon);
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}


// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleMode('light');
  }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleMode('dark');
  }
}
