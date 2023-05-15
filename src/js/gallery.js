import { select, classNames } from './config.js';

// Gallery

let currentImgSrc;

select.thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', event => {
    select.popupWrapper.classList.add(classNames.active);
    select.popupWindow.src = event.target.src;
    currentImgSrc = index;
  });
});

select.nextPhotoButton.addEventListener('click', () => {
  currentImgSrc === select.thumbnails.length - 1
    ? (currentImgSrc = 0)
    : currentImgSrc++;
  select.popupWindow.src = select.thumbnails[currentImgSrc].src;
});

select.previousPhotoButton.addEventListener('click', () => {
  currentImgSrc === 0
    ? (currentImgSrc = select.thumbnails.length - 1)
    : currentImgSrc--;
  select.popupWindow.src = select.thumbnails[currentImgSrc].src;
});

//** Gallery Home-Box */

const photoSliderArray = [];

let randomNumber = Math.floor(Math.random() * 12) + 1;

select.thumbnails.forEach(thumbnail => {
  const imgSrc = thumbnail.getAttribute('src');
  photoSliderArray.push(imgSrc);
});

export const changeSlide = function () {
  randomNumber++;
  if (randomNumber > 11) randomNumber = 0;
  let randomIndexOfArray = photoSliderArray[randomNumber];
  select.photoChangingBox.src = randomIndexOfArray;
  setTimeout(changeSlide, 5000);
};
