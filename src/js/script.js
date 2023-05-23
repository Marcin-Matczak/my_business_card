import { getCurrentTheme } from './theme.js';
import { changeSlide } from './gallery.js';
import { setDate } from './clock.js';
import {} from './manageHide.js';
import {} from './certificates.js';
import {} from './contact.js';
import {} from './projects.js';
import {} from './visitors.js';

const init = function () {
  // Theme switch functionality
  getCurrentTheme();
  // Gallery slider
  changeSlide();
  // Clock
  setDate();
};

init();
