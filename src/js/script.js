import { getCurrentTheme } from './theme.js';
import { changeSlide } from './gallery.js';
import { setDate } from './clock.js';
import {} from './manageHide.js';
import {} from './certificates.js';
import {} from './contact.js';
import {} from './projects.js';

const init = function () {
  // Theme switch functionality
  getCurrentTheme();
  // Gallery slider
  changeSlide();
  // Clock
  setDate();
};

init();

/** Visitors */

// const counter = document.getElementById('count');

// updateVisitCount();

// function updateVisitCount() {
//   fetch(
//     'https://api.countapi.xyz/update/marcinm/6d7979ca-ab60-4ef7-bd3e-1e2e790d4b13/?amount=1'
//   )
//     .then(res => res.json())
//     .then(res => {
//       counter.innerHTML = res.value;
//     });
// }
