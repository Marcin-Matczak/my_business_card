export const select = {
  // Main page
  homeSection: document.getElementById('home'),
  gallerySection: document.getElementById('gallery'),
  backButton: document.getElementById('back-btn'),
  galleryBox: document.querySelector('.box-2'),
  certificatesBox: document.querySelector('.box-8'),
  certificatesSection: document.getElementById('certificates'),
  cvSection: document.getElementById('cv'),
  cvBox: document.querySelector('.box-11'),
  skillsSection: document.getElementById('skills'),
  skillsBox: document.querySelector('.box-12'),
  projectsSection: document.getElementById('projects'),
  projectsBox: document.querySelector('.box-9'),
  photoChangingBox: document.getElementById('photoSlider'),

  // Contact form
  contactContent: document.getElementById('contentForm'),
  btnForm: document.querySelector('.btn-form'),
  formFunctionality: document.getElementById('form'),
  infoMessage: document.getElementById('info-msg'),

  // Gallery
  thumbnails: document.querySelectorAll('.gallery img'),
  popupWrapper: document.querySelector('.popup'),
  popupWindow: document.querySelector('.popup__img'),
  nextPhotoButton: document.querySelector('.next'),
  previousPhotoButton: document.querySelector('.previous'),

  // Clock
  secondHand: document.querySelector('.second-hand'),
  minsHand: document.querySelector('.min-hand'),
  hourHand: document.querySelector('.hour-hand'),

  // Theme
  switchThemeButton: document.getElementById('themeImg'),
  gitImgBox: document.getElementById('gitImg'),
  profileImg: document.getElementById('profileImg'),

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
