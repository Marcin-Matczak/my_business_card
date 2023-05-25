import { select } from '../config.js';
import sun from '../../images/icons/sun.png';
import moon from '../../images/icons/moon.png';
import profileDark from '../../images/icons/profile-dark.png';
import profileLight from '../../images/icons/profile.png';
import githubDark from '../../images/icons/git-dark.png';
import githubLight from '../../images/icons/github-light.png';

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
  select.switchThemeButton.firstElementChild.src = moon;
  select.gitImgBox.src = githubDark;
  select.profileImg.src = profileLight;
};

const darkIcons = function () {
  select.switchThemeButton.firstElementChild.src = sun;
  select.gitImgBox.src = githubLight;
  select.profileImg.src = profileDark;
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
