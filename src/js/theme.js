import { select } from './config.js';

// Theme switch functionality

export const getCurrentTheme = function () {
  let theme = window.matchMedia('(prefere-color-scheme: light)').matches
    ? 'light'
    : 'dark';
  localStorage.getItem('marcin_theme')
    ? (theme = localStorage.getItem('marcin_theme'))
    : null;
  return theme;
};

const lightIcons = function () {
  select.switchThemeButton.firstElementChild.src = new URL(
    '../images/icons/moon.png',
    import.meta.url
  );
  select.gitImgBox.src = new URL(
    '../images/icons/git-dark.png',
    import.meta.url
  );
  select.profileImg.src = new URL(
    '../images/icons/profile.png',
    import.meta.url
  );
};

const darkIcons = function () {
  select.switchThemeButton.firstElementChild.src = new URL(
    '../images/icons/sun.png',
    import.meta.url
  );
  select.gitImgBox.src = new URL(
    '../images/icons/github-light.png',
    import.meta.url
  );
  select.profileImg.src = new URL(
    '../images/icons/profile-dark.png',
    import.meta.url
  );
};

function loadTheme(theme) {
  theme === 'light' ? lightIcons() : darkIcons();
  select.root.setAttribute('theme-mode', `${theme}`);
}

select.switchThemeButton.addEventListener('click', event => {
  event.preventDefault();
  let theme = getCurrentTheme();
  theme === 'dark' ? (theme = 'light') : (theme = 'dark');
  localStorage.setItem('marcin_theme', `${theme}`);
  loadTheme(theme);
});

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});
