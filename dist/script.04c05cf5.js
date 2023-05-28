// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.select = exports.opts = exports.classNames = void 0;
var select = {
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
  previousPhotoButton: document.querySelector('.section-gallery__popup__btn--previous'),
  // Clock
  secondHand: document.querySelector('.clock-inner__hand--second'),
  minsHand: document.querySelector('.clock-inner__hand--min'),
  hourHand: document.querySelector('.clock-inner__hand--hour'),
  // Theme
  switchThemeButton: document.querySelector('.section-home__box--theme-switch'),
  gitImgBox: document.querySelector('.link-btn__icon--github'),
  profileImg: document.querySelector('.intro-box__image'),
  // Certificates
  certificatesList: document.querySelector('.section-certificates__list'),
  certificates: document.querySelectorAll('.section-certificates__list__item'),
  // Others
  techStackIcons: document.querySelectorAll('tbody img'),
  githubIcon: document.querySelector('.section-home__box--github'),
  linkedinIcon: document.querySelector('.section-home__box--linkedin '),
  counter: document.getElementById('count'),
  root: document.querySelector(':root')
};

// Projects section
exports.select = select;
var templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-project-link').innerHTML),
  tagLink: Handlebars.compile(document.querySelector('#template-tag-link').innerHTML),
  authorLink: Handlebars.compile(document.querySelector('#template-author-link').innerHTML),
  tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-link').innerHTML),
  authorCloudLink: Handlebars.compile(document.querySelector('#template-author-cloud-link').innerHTML)
};
exports.templates = templates;
var opts = {
  articleSelector: '.project',
  titleSelector: '.project__title',
  titleListSelector: '.projects-content__nav__list--titles',
  articleTagsSelector: '.project-tags .tags-list',
  articleAuthorSelector: '.project__author',
  tagsListSelector: '.projects-content__nav__list--tags.tags-list',
  authorsListSelector: '.projects-content__nav__list--authors',
  cloudClassCount: 5,
  cloudClassPrefix: 'tag-size-'
};
exports.opts = opts;
var classNames = {
  active: 'active',
  hide: 'hide'
};
exports.classNames = classNames;
},{}],"src/images/icons/sun.png":[function(require,module,exports) {
module.exports = "/sun.01cf7426.png";
},{}],"src/images/icons/moon.png":[function(require,module,exports) {
module.exports = "/moon.cf49a2b2.png";
},{}],"src/images/icons/profile-dark.png":[function(require,module,exports) {
module.exports = "/profile-dark.866266f5.png";
},{}],"src/images/icons/profile.png":[function(require,module,exports) {
module.exports = "/profile.c1ffb6f2.png";
},{}],"src/images/icons/git-dark.png":[function(require,module,exports) {
module.exports = "/git-dark.95f1b8cb.png";
},{}],"src/images/icons/github-light.png":[function(require,module,exports) {
module.exports = "/github-light.0a36bca6.png";
},{}],"src/js/sections/theme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTheme = void 0;
var _config = require("../config.js");
var _sun = _interopRequireDefault(require("../../images/icons/sun.png"));
var _moon = _interopRequireDefault(require("../../images/icons/moon.png"));
var _profileDark = _interopRequireDefault(require("../../images/icons/profile-dark.png"));
var _profile = _interopRequireDefault(require("../../images/icons/profile.png"));
var _gitDark = _interopRequireDefault(require("../../images/icons/git-dark.png"));
var _githubLight = _interopRequireDefault(require("../../images/icons/github-light.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Theme switch functionality

var getCurrentTheme = function getCurrentTheme() {
  var theme = window.matchMedia('(prefere-color-scheme: light)').matches ? 'light' : 'dark';
  localStorage.getItem('marcin_theme') ? theme = localStorage.getItem('marcin_theme') : null;
  return theme;
};
exports.getCurrentTheme = getCurrentTheme;
var lightIcons = function lightIcons() {
  _config.select.switchThemeButton.firstElementChild.src = _moon.default;
  _config.select.gitImgBox.src = _gitDark.default;
  _config.select.profileImg.src = _profile.default;
};
var darkIcons = function darkIcons() {
  _config.select.switchThemeButton.firstElementChild.src = _sun.default;
  _config.select.gitImgBox.src = _githubLight.default;
  _config.select.profileImg.src = _profileDark.default;
};
function loadTheme(theme) {
  theme === 'light' ? lightIcons() : darkIcons();
  _config.select.root.setAttribute('theme-mode', "".concat(theme));
}
_config.select.switchThemeButton.addEventListener('click', function (event) {
  event.preventDefault();
  var theme = getCurrentTheme();
  theme === 'dark' ? theme = 'light' : theme = 'dark';
  localStorage.setItem('marcin_theme', "".concat(theme));
  loadTheme(theme);
});
window.addEventListener('DOMContentLoaded', function () {
  loadTheme(getCurrentTheme());
});
},{"../config.js":"src/js/config.js","../../images/icons/sun.png":"src/images/icons/sun.png","../../images/icons/moon.png":"src/images/icons/moon.png","../../images/icons/profile-dark.png":"src/images/icons/profile-dark.png","../../images/icons/profile.png":"src/images/icons/profile.png","../../images/icons/git-dark.png":"src/images/icons/git-dark.png","../../images/icons/github-light.png":"src/images/icons/github-light.png"}],"src/js/sections/gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeSlide = void 0;
var _config = require("../config.js");
// Gallery

var currentImgSrc;
_config.select.thumbnails.forEach(function (thumbnail, index) {
  thumbnail.addEventListener('click', function (event) {
    _config.select.popupWrapper.classList.add(_config.classNames.active);
    _config.select.popupWindow.src = event.target.src;
    currentImgSrc = index;
  });
});
_config.select.nextPhotoButton.addEventListener('click', function () {
  currentImgSrc === _config.select.thumbnails.length - 1 ? currentImgSrc = 0 : currentImgSrc++;
  _config.select.popupWindow.src = _config.select.thumbnails[currentImgSrc].src;
});
_config.select.previousPhotoButton.addEventListener('click', function () {
  currentImgSrc === 0 ? currentImgSrc = _config.select.thumbnails.length - 1 : currentImgSrc--;
  _config.select.popupWindow.src = _config.select.thumbnails[currentImgSrc].src;
});

//** Gallery Home-Box */

var photoSliderArray = [];
var randomNumber = Math.floor(Math.random() * 12) + 1;
_config.select.thumbnails.forEach(function (thumbnail) {
  var imgSrc = thumbnail.getAttribute('src');
  photoSliderArray.push(imgSrc);
});
var changeSlide = function changeSlide() {
  randomNumber++;
  if (randomNumber > 11) randomNumber = 0;
  var randomIndexOfArray = photoSliderArray[randomNumber];
  _config.select.photoChangingBox.src = randomIndexOfArray;
  setTimeout(changeSlide, 5000);
};
exports.changeSlide = changeSlide;
},{"../config.js":"src/js/config.js"}],"src/js/sections/clock.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDate = setDate;
var _config = require("../config");
// Clock functionality

function setDate() {
  var now = new Date();
  var seconds = now.getSeconds();
  var secondsDegrees = seconds / 60 * 360 + 90;
  _config.select.secondHand.style.transform = "rotate(".concat(secondsDegrees, "deg)");
  var mins = now.getMinutes();
  var minsDegrees = mins / 60 * 360 + seconds / 60 * 6 + 90;
  _config.select.minsHand.style.transform = "rotate(".concat(minsDegrees, "deg)");
  var hour = now.getHours();
  var hourDegrees = hour / 12 * 360 + mins / 60 * 30 + 90;
  _config.select.hourHand.style.transform = "rotate(".concat(hourDegrees, "deg)");
}
setInterval(setDate, 1000);
},{"../config":"src/js/config.js"}],"src/js/sections/skills.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAnimation = exports.removeAnimation = void 0;
var _config = require("../config.js");
/** Skills */

function animation() {
  var delay = 0;
  var _loop = function _loop(i) {
    setTimeout(function () {
      return _config.select.techStackIcons[i].classList.add('move');
    }, delay);
    delay = delay + 200;
  };
  for (var i = 0; i < _config.select.techStackIcons.length; i++) {
    _loop(i);
  }
}
var removeAnimation = function removeAnimation() {
  _config.select.techStackIcons.forEach(function (icon) {
    return icon.classList.remove('move');
  });
};
exports.removeAnimation = removeAnimation;
var setAnimation = function setAnimation() {
  setTimeout(function () {
    animation();
  }, 300);
};
exports.setAnimation = setAnimation;
},{"../config.js":"src/js/config.js"}],"src/js/utils.js":[function(require,module,exports) {
"use strict";

var _config = require("./config.js");
var _skills = require("./sections/skills.js");
// Hide class management

var hideClassChanger = function hideClassChanger(target) {
  _config.select.homeSection.classList.add(_config.classNames.hide);
  _config.select.backButton.classList.remove(_config.classNames.hide);
  var sectionClassName = '.section-' + target.closest('.section-home__box').getAttribute('class').split(' ')[1].slice(19);
  var suitableSection = document.querySelector(sectionClassName);
  suitableSection.classList.remove(_config.classNames.hide);
  if (suitableSection === _config.select.skillsSection) (0, _skills.setAnimation)();
};
_config.select.homeContainer.addEventListener('click', function (e) {
  e.preventDefault();
  var clickedElement = e.target.closest('.section-home__box');
  if (clickedElement === null || !e.target.closest('.section-home__box').classList.contains('section-home__box__clickable')) return;
  hideClassChanger(e.target);
});

// Back button functionality

var goBackOne = function goBackOne() {
  if (_config.select.popupWrapper.classList.contains(_config.classNames.active)) {
    _config.select.popupWrapper.classList.remove(_config.classNames.active);
  } else {
    _config.select.homeSection.classList.remove(_config.classNames.hide);
    var toCloseSections = [_config.select.backButton, _config.select.backButton, _config.select.gallerySection, _config.select.certificatesSection, _config.select.cvSection, _config.select.skillsSection, _config.select.projectsSection];
    toCloseSections.forEach(function (section) {
      return section.classList.add(_config.classNames.hide);
    });
  }
};
_config.select.backButton.addEventListener('click', function (event) {
  event.preventDefault();
  goBackOne();
  (0, _skills.removeAnimation)();
});

// Links handling

var linksHandling = function linksHandling() {
  var githubLink = function githubLink() {
    window.open('https://github.com/Marcin-Matczak');
  };
  var linkedInLink = function linkedInLink() {
    window.open('https://www.linkedin.com/in/marcin-matczak-3198a925a/');
  };
  _config.select.githubIcon.addEventListener('click', githubLink);
  _config.select.linkedinIcon.addEventListener('click', linkedInLink);
};
linksHandling();
},{"./config.js":"src/js/config.js","./sections/skills.js":"src/js/sections/skills.js"}],"src/js/sections/certificates.js":[function(require,module,exports) {
"use strict";

var _config = require("../config.js");
// Certificates

var removeZoom = function removeZoom() {
  _config.select.certificates.forEach(function (certificate) {
    return certificate.classList.remove('zoom');
  });
};
_config.select.certificatesList.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
  e.target.classList.contains('zoom') ? removeZoom() : e.target.classList.add('zoom');
});
},{"../config.js":"src/js/config.js"}],"src/js/sections/contact.js":[function(require,module,exports) {
"use strict";

var _config = require("../config.js");
// Contact form handling

_config.select.btnForm.addEventListener('click', function (event) {
  event.preventDefault();
  _config.select.contactContent.classList.add(_config.classNames.hide);
  _config.select.infoMessage.classList.remove(_config.classNames.hide);
  setTimeout(_config.select.formFunctionality.submit(), 3500);
});
},{"../config.js":"src/js/config.js"}],"src/js/sections/projects.js":[function(require,module,exports) {
"use strict";

var _config = require("../config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Projects

var titleClickHandler = function titleClickHandler(event) {
  event.preventDefault();
  var clickedElement = this;
  var activeLinks = document.querySelectorAll('.projects-content__nav__list--titles a.active');
  var _iterator = _createForOfIteratorHelper(activeLinks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var activeLink = _step.value;
      activeLink.classList.remove(_config.classNames.active);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  clickedElement.classList.add(_config.classNames.active);
  var activeArticles = document.querySelectorAll('.projects-content__main .active');
  var _iterator2 = _createForOfIteratorHelper(activeArticles),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var activeArticle = _step2.value;
      activeArticle.classList.remove(_config.classNames.active);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var articleSelector = clickedElement.getAttribute('href');
  var targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add(_config.classNames.active);
};
var generateTitleLinks = function generateTitleLinks() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var titleList = document.querySelector(_config.opts.titleListSelector);
  var articles = document.querySelectorAll(_config.opts.articleSelector + customSelector);
  var html = '';
  var _iterator3 = _createForOfIteratorHelper(articles),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var article = _step3.value;
      var articleId = article.getAttribute('id');
      var articleTitle = article.querySelector(_config.opts.titleSelector).innerHTML;
      var linkHTMLData = {
        id: articleId,
        title: articleTitle
      };
      var linkHTML = _config.templates.articleLink(linkHTMLData);
      html = html + linkHTML;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  titleList.innerHTML = html;
  var links = document.querySelectorAll('.projects-content__nav__list--titles a');
  var _iterator4 = _createForOfIteratorHelper(links),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var link = _step4.value;
      link.addEventListener('click', titleClickHandler);
      if (link.getAttribute('href') === '#project-10') link.classList.add('new');
      if (link.getAttribute('href') === '#project-4') link.classList.add('new');
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
generateTitleLinks();
var calculateParams = function calculateParams(tags) {
  var values = Object.values(tags);
  var max = Math.max.apply(Math, values);
  var min = Math.min.apply(Math, values);
  var paramObj = {
    min: "".concat(min),
    max: "".concat(max)
  };
  return paramObj;
};
var calculateCloudClass = function calculateCloudClass(count, params) {
  var normalizedCount = count - params.min;
  var normalizedMax = params.max - params.min;
  var percentage = normalizedCount / normalizedMax;
  var classNumber = Math.floor(percentage * (_config.opts.cloudClassCount - 1) + 1);
  return _config.opts.cloudClassPrefix + classNumber;
};
var generateTags = function generateTags() {
  var allTags = {};
  var articles = document.querySelectorAll(_config.opts.articleSelector);
  var _iterator5 = _createForOfIteratorHelper(articles),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var article = _step5.value;
      var tagWrapper = article.querySelector(_config.opts.articleTagsSelector);
      var html = '';
      var articleTagsArray = article.getAttribute('data-tags').split(' ');
      var _iterator6 = _createForOfIteratorHelper(articleTagsArray),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _tag = _step6.value;
          var linkHTMLData = {
            id: _tag,
            title: _tag
          };
          var linkHTML = _config.templates.tagLink(linkHTMLData);
          html = html + linkHTML;
          if (!allTags[_tag]) {
            allTags[_tag] = 1;
          } else {
            allTags[_tag]++;
          }
          tagWrapper.innerHTML = html;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var tagList = document.querySelector(_config.opts.tagsListSelector);
      var tagsParams = calculateParams(allTags);
      var allTagsData = {
        tags: []
      };
      for (var tag in allTags) {
        allTagsData.tags.push({
          tag: tag,
          count: allTags[tag],
          className: calculateCloudClass(allTags[tag], tagsParams)
        });
      }
      tagList.innerHTML = _config.templates.tagCloudLink(allTagsData);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};
generateTags();
var tagClickHandler = function tagClickHandler(event) {
  event.preventDefault();
  var clickedElement = this;
  var href = clickedElement.getAttribute('href');
  var tag = href.replace('#tag-', '');
  var activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  var _iterator7 = _createForOfIteratorHelper(activeTagLinks),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var activeTagLink = _step7.value;
      activeTagLink.classList.remove(_config.classNames.active);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  var tagLinks = document.querySelectorAll("a[href=\"".concat(href, "\"]"));
  var _iterator8 = _createForOfIteratorHelper(tagLinks),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var tagLink = _step8.value;
      tagLink.classList.add(_config.classNames.active);
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  generateTitleLinks('[data-tags~="' + tag + '"]');
};
var addClickListenersToTags = function addClickListenersToTags() {
  var tagLinks = document.querySelectorAll('a[href^="#tag-"]');
  var _iterator9 = _createForOfIteratorHelper(tagLinks),
    _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var tagLink = _step9.value;
      tagLink.addEventListener('click', tagClickHandler);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
};
addClickListenersToTags();
var generateAuthors = function generateAuthors() {
  var allAuthors = {};
  var articles = document.querySelectorAll(_config.opts.articleSelector);
  var authorList = document.querySelector(_config.opts.authorsListSelector);
  var _iterator10 = _createForOfIteratorHelper(articles),
    _step10;
  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var article = _step10.value;
      var authorWrapper = article.querySelector(_config.opts.articleAuthorSelector);
      var html = '';
      var _author = article.getAttribute('data-author');
      var linkHTMLData = {
        id: _author,
        title: _author
      };
      var linkHTML = _config.templates.authorLink(linkHTMLData);
      html = html + linkHTML;
      authorWrapper.innerHTML = html;
      if (!allAuthors[_author]) {
        allAuthors[_author] = 1;
      } else {
        allAuthors[_author]++;
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
  var authorsParams = calculateParams(allAuthors);
  var allAuthorsData = {
    authors: []
  };
  for (var author in allAuthors) {
    var onlyAuthor = author.replace('developed by:', '');
    allAuthorsData.authors.push({
      author: onlyAuthor,
      authorId: author,
      count: allAuthors[author],
      className: calculateCloudClass(allAuthors[author], authorsParams)
    });
  }
  authorList.innerHTML = _config.templates.authorCloudLink(allAuthorsData);
};
generateAuthors();
var authorClickHandler = function authorClickHandler(event) {
  event.preventDefault();
  var clickedElement = this;
  var href = clickedElement.getAttribute('href');
  var author = href.replace('#author-', '');
  var activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  var _iterator11 = _createForOfIteratorHelper(activeAuthorLinks),
    _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var activeAuthorLink = _step11.value;
      activeAuthorLink.classList.remove(_config.classNames.active);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }
  var authorLinks = document.querySelectorAll("a[href=\"".concat(href, "\"]"));
  var _iterator12 = _createForOfIteratorHelper(authorLinks),
    _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var authorLink = _step12.value;
      authorLink.classList.add(_config.classNames.active);
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  generateTitleLinks("[data-author=\"".concat(author, "\"]"));
};
var addClickListenersToAuthors = function addClickListenersToAuthors() {
  var authorLinks = document.querySelectorAll('a[href^="#author-"]');
  var _iterator13 = _createForOfIteratorHelper(authorLinks),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var authorLink = _step13.value;
      authorLink.addEventListener('click', authorClickHandler);
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
};
addClickListenersToAuthors();
},{"../config.js":"src/js/config.js"}],"src/js/script.js":[function(require,module,exports) {
"use strict";

var _theme = require("./sections/theme.js");
var _gallery = require("./sections/gallery.js");
var _clock = require("./sections/clock.js");
require("./utils.js");
require("./sections/certificates.js");
require("./sections/contact.js");
require("./sections/projects.js");
var init = function init() {
  // Theme switch functionality
  (0, _theme.getCurrentTheme)();
  // Gallery slider
  (0, _gallery.changeSlide)();
  // Clock
  (0, _clock.setDate)();
};
init();
},{"./sections/theme.js":"src/js/sections/theme.js","./sections/gallery.js":"src/js/sections/gallery.js","./sections/clock.js":"src/js/sections/clock.js","./utils.js":"src/js/utils.js","./sections/certificates.js":"src/js/sections/certificates.js","./sections/contact.js":"src/js/sections/contact.js","./sections/projects.js":"src/js/sections/projects.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46041" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/script.js"], null)
//# sourceMappingURL=/script.04c05cf5.js.map