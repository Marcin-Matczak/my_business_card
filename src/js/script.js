import { select, templates, opts } from './config.js';

/** Theme switch functionality */

function getCurrentTheme() {
  let theme = window.matchMedia('(prefere-color-scheme: light)').matches
    ? 'light'
    : 'dark';
  localStorage.getItem('marcin_theme')
    ? (theme = localStorage.getItem('marcin_theme'))
    : null;
  return theme;
}

function loadTheme(theme) {
  if (theme === 'light') {
    select.switchThemeButton.src = './src/images/icons/moon.png';
    select.gitImgBox.src = './src/images/icons/git-dark.png';
    select.profileImg.src = './src/images/icons/profile.png';
  } else {
    select.switchThemeButton.src = './src/images/icons/sun.png';
    select.gitImgBox.src = './src/images/icons/github-light.png';
    select.profileImg.src = './src/images/icons/profile-dark.png';
  }
  select.root.setAttribute('theme-mode', `${theme}`);
}

select.switchThemeButton.addEventListener('click', event => {
  event.preventDefault();
  let theme = getCurrentTheme();
  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  localStorage.setItem('marcin_theme', `${theme}`);
  loadTheme(theme);
});

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
});

/** Contact form handling */

function mailSent() {
  select.contactContent.classList.add('hide');
  select.infoMessage.classList.remove('hide');
}

function placeOrder(form) {
  setTimeout(form.submit(), 3500);
}

select.btnForm.addEventListener('click', event => {
  event.preventDefault();
  mailSent();
  placeOrder(select.formFunctionality);
});

/** Home buttons functionality */

const backOne = () => {
  if (select.popupWrapper.classList.contains('active')) {
    select.popupWrapper.classList.remove('active');
  } else {
    select.homeSection.classList.remove('hide');
    select.backButton.classList.add('hide');
    select.gallerySection.classList.add('hide');
    select.certificatesSection.classList.add('hide');
    select.cvSection.classList.add('hide');
    select.skillsSection.classList.add('hide');
    select.projectsSection.classList.add('hide');
  }
};

select.galleryBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add('hide');
  select.backButton.classList.remove('hide');
  select.gallerySection.classList.remove('hide');
});

select.certificatesBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add('hide');
  select.backButton.classList.remove('hide');
  select.certificatesSection.classList.remove('hide');
});

select.cvBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add('hide');
  select.backButton.classList.remove('hide');
  select.cvSection.classList.remove('hide');
});

select.skillsBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add('hide');
  select.backButton.classList.remove('hide');
  select.skillsSection.classList.remove('hide');
  setAnimation();
});

select.projectsBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add('hide');
  select.backButton.classList.remove('hide');
  select.projectsSection.classList.remove('hide');
});

select.backButton.addEventListener('click', event => {
  event.preventDefault();
  backOne();
  removeAnimation();
});

/** Gallery */

let currentImgSrc;

select.thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', event => {
    select.popupWrapper.classList.add('active');
    select.popupWindow.src = event.target.src;
    currentImgSrc = index;
  });
});

select.nextPhotoButton.addEventListener('click', () => {
  if (currentImgSrc === select.thumbnails.length - 1) {
    currentImgSrc = 0;
  } else {
    currentImgSrc++;
  }
  select.popupWindow.src = select.thumbnails[currentImgSrc].src;
});

select.previousPhotoButton.addEventListener('click', () => {
  if (currentImgSrc === 0) {
    currentImgSrc = select.thumbnails.length - 1;
  } else {
    currentImgSrc--;
  }
  select.popupWindow.src = select.thumbnails[currentImgSrc].src;
});

//** Gallery Home-Box */

const photoSliderArray = [];

let randomNumber = Math.floor(Math.random() * 15) + 1; // losowa liczba od 0 do 15

for (let thumbnail of select.thumbnails) {
  const imgSrc = thumbnail.getAttribute('src');
  photoSliderArray.push(imgSrc);
}

const changeSlide = function () {
  randomNumber++;

  if (randomNumber > 14) {
    randomNumber = 0;
  }

  let randomIndexOfArray = photoSliderArray[randomNumber];
  select.photoChangingBox.src = randomIndexOfArray;
  setTimeout(changeSlide, 5000);
};
changeSlide();

/** Clock */

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  select.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  select.minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  select.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

/** select.certificates */

const removeZoom = function () {
  for (let certificate of select.certificates) {
    certificate.classList.remove('zoom');
  }
};

const clickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;

  if (clickedElement.classList.contains('zoom')) {
    removeZoom();
  } else {
    removeZoom();
    clickedElement.classList.add('zoom');
  }
};

for (let certificate of select.certificates) {
  certificate.addEventListener('click', clickHandler);
}

/** Skills */

function animation() {
  let delay = 0;

  for (let i = 0; i < select.techStackIcons.length; i++) {
    setTimeout(() => select.techStackIcons[i].classList.add('move'), delay);
    delay = delay + 200;
  }
}

const removeAnimation = function () {
  for (let icon of select.techStackIcons) {
    icon.classList.remove('move');
  }
};

const setAnimation = function () {
  setTimeout(() => {
    animation();
  }, 300);
};

/** Projects */

{
  ('use strict');

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    clickedElement.classList.add('active');
    const activeArticles = document.querySelectorAll(
      '.projects-wrapper .active'
    );

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    const articleSelector = clickedElement.getAttribute('href');
    const targetArticle = document.querySelector(articleSelector);
    targetArticle.classList.add('active');
  };

  const generateTitleLinks = function (customSelector = '') {
    const titleList = document.querySelector(opts.titleListSelector);
    const articles = document.querySelectorAll(
      opts.articleSelector + customSelector
    );
    let html = '';

    for (let article of articles) {
      const articleId = article.getAttribute('id');
      const articleTitle = article.querySelector(opts.titleSelector).innerHTML;
      const linkHTMLData = { id: articleId, title: articleTitle };
      const linkHTML = templates.articleLink(linkHTMLData);
      html = html + linkHTML;
    }

    titleList.innerHTML = html;
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();

  const calculateParams = function (tags) {
    const values = Object.values(tags);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const paramObj = {
      min: `${min}`,
      max: `${max}`,
    };
    return paramObj;
  };

  const calculateCloudClass = function (count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor(percentage * (opts.cloudClassCount - 1) + 1);
    return opts.cloudClassPrefix + classNumber;
  };

  const generateTags = function () {
    let allTags = {};
    const articles = document.querySelectorAll(opts.articleSelector);

    for (let article of articles) {
      const tagWrapper = article.querySelector(opts.articleTagsSelector);
      let html = '';
      const articleTagsArray = article.getAttribute('data-tags').split(' ');

      for (let tag of articleTagsArray) {
        const linkHTMLData = { id: tag, title: tag };
        const linkHTML = templates.tagLink(linkHTMLData);
        html = html + linkHTML;

        if (!allTags[tag]) {
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }

        tagWrapper.innerHTML = html;
      }

      const tagList = document.querySelector(opts.tagsListSelector);
      const tagsParams = calculateParams(allTags);
      const allTagsData = { tags: [] };

      for (let tag in allTags) {
        allTagsData.tags.push({
          tag: tag,
          count: allTags[tag],
          className: calculateCloudClass(allTags[tag], tagsParams),
        });
      }

      tagList.innerHTML = templates.tagCloudLink(allTagsData);
    }
  };

  generateTags();

  const tagClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const tag = href.replace('#tag-', '');
    const activeTagLinks = document.querySelectorAll(`a.active[href^="#tag-"]`);

    for (let activeTagLink of activeTagLinks) {
      activeTagLink.classList.remove('active');
    }

    const tagLinks = document.querySelectorAll(`a[href="${href}"]`);

    for (let tagLink of tagLinks) {
      tagLink.classList.add('active');
    }

    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  const addClickListenersToTags = function () {
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    for (let tagLink of tagLinks) {
      tagLink.addEventListener('click', tagClickHandler);
    }
  };

  addClickListenersToTags();

  const generateAuthors = function () {
    let allAuthors = {};
    const articles = document.querySelectorAll(opts.articleSelector);
    const authorList = document.querySelector(opts.authorsListSelector);

    for (let article of articles) {
      const authorWrapper = article.querySelector(opts.articleAuthorSelector);
      let html = '';
      const author = article.getAttribute('data-author');
      const linkHTMLData = { id: author, title: author };
      const linkHTML = templates.authorLink(linkHTMLData);
      html = html + linkHTML;
      authorWrapper.innerHTML = html;
      if (!allAuthors[author]) {
        allAuthors[author] = 1;
      } else {
        allAuthors[author]++;
      }
    }

    const authorsParams = calculateParams(allAuthors);
    const allAuthorsData = { authors: [] };

    for (let author in allAuthors) {
      const onlyAuthor = author.replace('developed by:', '');
      allAuthorsData.authors.push({
        author: onlyAuthor,
        authorId: author,
        count: allAuthors[author],
        className: calculateCloudClass(allAuthors[author], authorsParams),
      });
    }
    authorList.innerHTML = templates.authorCloudLink(allAuthorsData);
  };

  generateAuthors();

  const authorClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    const href = clickedElement.getAttribute('href');
    const author = href.replace('#author-', '');
    const activeAuthorLinks = document.querySelectorAll(
      'a.active[href^="#author-"]'
    );

    for (let activeAuthorLink of activeAuthorLinks) {
      activeAuthorLink.classList.remove('active');
    }

    const authorLinks = document.querySelectorAll(`a[href="${href}"]`);

    for (let authorLink of authorLinks) {
      authorLink.classList.add('active');
    }

    generateTitleLinks(`[data-author="${author}"]`);
  };

  const addClickListenersToAuthors = function () {
    const authorLinks = document.querySelectorAll('a[href^="#author-"]');

    for (let authorLink of authorLinks) {
      authorLink.addEventListener('click', authorClickHandler);
    }
  };

  addClickListenersToAuthors();
}

/** Visitors */

updateVisitCount();

function updateVisitCount() {
  fetch(
    'https://api.countapi.xyz/update/marcinm/6d7979ca-ab60-4ef7-bd3e-1e2e790d4b13/?amount=1'
  )
    .then(res => res.json())
    .then(res => {
      select.counter.innerHTML = res.value;
    });
}
