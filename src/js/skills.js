import { select } from './config.js';

/** Skills */

function animation() {
  let delay = 0;

  for (let i = 0; i < select.techStackIcons.length; i++) {
    setTimeout(() => select.techStackIcons[i].classList.add('move'), delay);
    delay = delay + 200;
  }
}

export const removeAnimation = function () {
  select.techStackIcons.forEach(icon => icon.classList.remove('move'));
};

export const setAnimation = function () {
  setTimeout(() => {
    animation();
  }, 300);
};
