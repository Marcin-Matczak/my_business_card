import { select } from './config.js';

// Certificates

const removeZoom = function () {
  select.certificates.forEach(certificate =>
    certificate.classList.remove('zoom')
  );
};

export const zoomCertificate = function () {
  select.certificatesList.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target === e.currentTarget) return;
    e.target.classList.contains('zoom')
      ? removeZoom()
      : e.target.classList.add('zoom');
  });
};
