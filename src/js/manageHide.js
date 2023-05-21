import { select, classNames } from './config.js';
import { setAnimation, removeAnimation } from './skills.js';

// Content display management

select.homeContainer.addEventListener('click', function (e) {
  e.preventDefault();
  hideClassChanger(e.target);
});

const hideClassChanger = function (target) {
  select.homeSection.classList.add(classNames.hide);
  select.backButton.classList.remove(classNames.hide);
  const sectionClassName =
    '.section-' +
    target
      .closest('.section-home__box')
      .getAttribute('class')
      .split(' ')[1]
      .slice(19);

  const suitableSection = document.querySelector(sectionClassName);

  suitableSection.classList.remove(classNames.hide);
  if (suitableSection === select.skillsSection) setAnimation();
};

export const goBackOne = () => {
  if (select.popupWrapper.classList.contains(classNames.active)) {
    select.popupWrapper.classList.remove(classNames.active);
  } else {
    select.homeSection.classList.remove(classNames.hide);
    const toCloseSections = [
      select.backButton,
      select.backButton,
      select.gallerySection,
      select.certificatesSection,
      select.cvSection,
      select.skillsSection,
      select.projectsSection,
    ];
    toCloseSections.forEach(section => section.classList.add(classNames.hide));
  }
};

select.backButton.addEventListener('click', event => {
  event.preventDefault();
  goBackOne();
  removeAnimation();
});
