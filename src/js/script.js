import { select, templates, opts, classNames } from './config.js';
import { getCurrentTheme } from './theme.js';
import { changeSlide } from './gallery.js';
import { setDate } from './clock.js';

// Theme switch functionality
getCurrentTheme();

// Gallery
changeSlide();

// Clock
setDate();

// Contact form handling

select.btnForm.addEventListener('click', event => {
  event.preventDefault();
  select.contactContent.classList.add(classNames.hide);
  select.infoMessage.classList.remove(classNames.hide);
  setTimeout(select.formFunctionality.submit(), 3500);
});

// Home buttons functionality

const backOne = () => {
  if (select.popupWrapper.classList.contains(classNames.active)) {
    select.popupWrapper.classList.remove(classNames.active);
  } else {
    select.homeSection.classList.remove(classNames.hide);
    select.backButton.classList.add(classNames.hide);
    select.gallerySection.classList.add(classNames.hide);
    select.certificatesSection.classList.add(classNames.hide);
    select.cvSection.classList.add(classNames.hide);
    select.skillsSection.classList.add(classNames.hide);
    select.projectsSection.classList.add(classNames.hide);
  }
};

select.galleryBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add(classNames.hide);
  select.backButton.classList.remove(classNames.hide);
  select.gallerySection.classList.remove(classNames.hide);
});

select.certificatesBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add(classNames.hide);
  select.backButton.classList.remove(classNames.hide);
  select.certificatesSection.classList.remove(classNames.hide);
});

select.cvBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add(classNames.hide);
  select.backButton.classList.remove(classNames.hide);
  select.cvSection.classList.remove(classNames.hide);
});

select.skillsBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add(classNames.hide);
  select.backButton.classList.remove(classNames.hide);
  select.skillsSection.classList.remove(classNames.hide);
  setAnimation();
});

select.projectsBox.addEventListener('click', event => {
  event.preventDefault();
  select.homeSection.classList.add(classNames.hide);
  select.backButton.classList.remove(classNames.hide);
  select.projectsSection.classList.remove(classNames.hide);
});

select.backButton.addEventListener('click', event => {
  event.preventDefault();
  backOne();
  removeAnimation();
});

// Certificates

const removeZoom = function () {
  select.certificates.forEach(certificate =>
    certificate.classList.remove('zoom')
  );
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
  select.techStackIcons.forEach(icon => icon.classList.remove('move'));
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
    const activeLinks = document.querySelectorAll(
      '.projects-content__nav__list--titles a.active'
    );

    for (let activeLink of activeLinks) {
      activeLink.classList.remove(classNames.active);
    }

    clickedElement.classList.add(classNames.active);
    const activeArticles = document.querySelectorAll(
      '.projects-content__main .active'
    );

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove(classNames.active);
    }

    const articleSelector = clickedElement.getAttribute('href');
    const targetArticle = document.querySelector(articleSelector);
    targetArticle.classList.add(classNames.active);
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
    const links = document.querySelectorAll(
      '.projects-content__nav__list--titles a'
    );

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
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    for (let activeTagLink of activeTagLinks) {
      activeTagLink.classList.remove(classNames.active);
    }

    const tagLinks = document.querySelectorAll(`a[href="${href}"]`);

    for (let tagLink of tagLinks) {
      tagLink.classList.add(classNames.active);
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
      activeAuthorLink.classList.remove(classNames.active);
    }

    const authorLinks = document.querySelectorAll(`a[href="${href}"]`);

    for (let authorLink of authorLinks) {
      authorLink.classList.add(classNames.active);
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
