import { getCurrentTheme } from './sections/theme.js';
import { changeSlide } from './sections/gallery.js';
import { setDate } from './sections/clock.js';
import {} from './utils.js';
import {} from './sections/certificates.js';
import {} from './sections/contact.js';
import {} from './sections/projects.js';
import {} from './sections/visitors.js';

const init = function () {
  // Theme switch functionality
  getCurrentTheme();
  // Gallery slider
  changeSlide();
  // Clock
  setDate();
};

init();
