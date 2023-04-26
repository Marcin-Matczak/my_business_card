export const select = {
  // Main page
  homeSection: document.querySelector('.section-home'),
  gallerySection: document.querySelector('.hobbies-gallery'),
  backButton: document.querySelector('.main__button'),
  galleryBox: document.querySelector('.section-home__box--gallery'),
  certificatesBox: document.querySelector('.section-home__box--certificates'),
  certificatesSection: document.querySelector('.main__certificates'),
  cvSection: document.querySelector('.main__cv'),
  cvBox: document.querySelector('.section-home__box--cv'),
  skillsSection: document.querySelector('.main__skills'),
  skillsBox: document.querySelector('.section-home__box--technologies'),
  projectsSection: document.querySelector('.main__projects'),
  projectsBox: document.querySelector('.section-home__box--projects'),
  photoChangingBox: document.querySelector('.gallery-box__image'),

  // Contact form
  contactContent: document.querySelector('.form__fieldset__elements'),
  btnForm: document.querySelector('.fieldset-element__button'),
  formFunctionality: document.getElementById('contactform'),
  infoMessage: document.querySelector('.form__fieldset__confirm-msg'),

  // Gallery
  thumbnails: document.querySelectorAll('.hobbies-gallery__mosaic__img'),
  galleryContainer: document.querySelector('.hobbies-gallery__mosaic'),
  popupWrapper: document.querySelector('.hobbies-gallery__popup'),
  popupWindow: document.querySelector('.hobbies-gallery__popup__img'),
  nextPhotoButton: document.querySelector('.hobbies-gallery__popup__btn--next'),
  previousPhotoButton: document.querySelector(
    '.hobbies-gallery__popup__btn--previous'
  ),

  // Clock
  secondHand: document.querySelector('.clock-inner__hand--second'),
  minsHand: document.querySelector('.clock-inner__hand--min'),
  hourHand: document.querySelector('.clock-inner__hand--hour'),

  // Theme
  switchThemeButton: document.querySelector('.section-home__box--theme-switch'),
  gitImgBox: document.querySelector('.link-btn__icon'),
  profileImg: document.querySelector('.intro-box__image'),

  // Others
  certificates: document.querySelectorAll('.certificate'),
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
  titleSelector: '.project-title',
  titleListSelector: '.titles',
  articleTagsSelector: '.project-tags .list',
  articleAuthorSelector: '.project-author',
  tagsListSelector: '.tags.list',
  authorsListSelector: '.authors',
  cloudClassCount: 5,
  cloudClassPrefix: 'tag-size-',
};

export const classNames = {
  active: 'active',
  hide: 'hide',
};
