import { select, classNames } from '../config.js';

// Contact form handling

select.btnForm.addEventListener('click', event => {
  event.preventDefault();
  select.contactContent.classList.add(classNames.hide);
  select.infoMessage.classList.remove(classNames.hide);
  setTimeout(select.formFunctionality.submit(), 3500);
});
