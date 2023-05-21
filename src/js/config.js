export const select = {
  // Main page
  homeContainer: document.querySelector('.section-home__container'),
  backButton: document.querySelector('.main__button'),
  galleryBox: document.querySelector('.section-home__box--gallery'),
  certificatesBox: document.querySelector('.section-home__box--certificates'),
  cvBox: document.querySelector('.section-home__box--cv'),
  skillsBox: document.querySelector('.section-home__box--technologies'),
  projectsBox: document.querySelector('.section-home__box--projects'),
  photoChangingBox: document.querySelector('.gallery-box__image'),

  // Sections
  homeSection: document.querySelector('.section-home'),
  gallerySection: document.querySelector('.section-gallery'),
  certificatesSection: document.querySelector('.section-certificates'),
  cvSection: document.querySelector('.section-cv'),
  skillsSection: document.querySelector('.section-technologies'),
  projectsSection: document.querySelector('.section-projects'),

  // Contact form
  contactContent: document.querySelector('.form__fieldset__elements'),
  btnForm: document.querySelector('.fieldset-element__button'),
  formFunctionality: document.getElementById('contactform'),
  infoMessage: document.querySelector('.form__fieldset__confirm-msg'),

  // Gallery
  thumbnails: document.querySelectorAll('.section-gallery__mosaic__img'),
  galleryContainer: document.querySelector('.section-gallery__mosaic'),
  popupWrapper: document.querySelector('.section-gallery__popup'),
  popupWindow: document.querySelector('.section-gallery__popup__img'),
  nextPhotoButton: document.querySelector('.section-gallery__popup__btn--next'),
  previousPhotoButton: document.querySelector(
    '.section-gallery__popup__btn--previous'
  ),

  // Clock
  secondHand: document.querySelector('.clock-inner__hand--second'),
  minsHand: document.querySelector('.clock-inner__hand--min'),
  hourHand: document.querySelector('.clock-inner__hand--hour'),

  // Theme
  switchThemeButton: document.querySelector('.section-home__box--theme-switch'),
  gitImgBox: document.querySelector('.link-btn__icon'),
  profileImg: document.querySelector('.intro-box__image'),

  // Certificates
  certificatesList: document.querySelector('.section-certificates__list'),
  certificates: document.querySelectorAll('.section-certificates__list__item'),

  // Others
  techStackIcons: document.querySelectorAll('tbody img'),
  counter: document.getElementById('count'),
  root: document.querySelector(':root'),
};

// Projects section

export const templates = {
  articleLink: Handlebars.compile(
    document.querySelector('#template-project-link').innerHTML
  ),
  tagLink: Handlebars.compile(
    document.querySelector('#template-tag-link').innerHTML
  ),
  authorLink: Handlebars.compile(
    document.querySelector('#template-author-link').innerHTML
  ),
  tagCloudLink: Handlebars.compile(
    document.querySelector('#template-tag-cloud-link').innerHTML
  ),
  authorCloudLink: Handlebars.compile(
    document.querySelector('#template-author-cloud-link').innerHTML
  ),
};

export const opts = {
  articleSelector: '.project',
  titleSelector: '.project__title',
  titleListSelector: '.projects-content__nav__list--titles',
  articleTagsSelector: '.project-tags .tags-list',
  articleAuthorSelector: '.project__author',
  tagsListSelector: '.projects-content__nav__list--tags.tags-list',
  authorsListSelector: '.projects-content__nav__list--authors',
  cloudClassCount: 5,
  cloudClassPrefix: 'tag-size-',
};

export const classNames = {
  active: 'active',
  hide: 'hide',
};
