import { templates, opts, classNames } from '../config.js';

// Projects

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
