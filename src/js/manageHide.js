import { select, classNames } from './config.js';
import { setAnimation, removeAnimation } from './skills.js';

// Hide class management

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

select.homeContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clickedElement = e.target.closest('.section-home__box');
  if (
    clickedElement === null ||
    !e.target
      .closest('.section-home__box')
      .classList.contains('section-home__box__clickable')
  )
    return;
  hideClassChanger(e.target);
});

// Back button functionality

const goBackOne = () => {
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

// Links handling

const linksHandling = function () {
  const githubLink = function () {
    window.open('https://github.com/Marcin-Matczak');
  };
  const linkedInLink = function () {
    window.open('https://www.linkedin.com/in/marcin-matczak-3198a925a/');
  };
  select.githubIcon.addEventListener('click', githubLink);
  select.linkedinIcon.addEventListener('click', linkedInLink);
};
linksHandling();
