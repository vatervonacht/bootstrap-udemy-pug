import './scss/app.scss';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import 'ekko-lightbox';

$(() => {
  $('.port-item').click(() => {
      $('.collapse').collapse('hide');
  });
});

// $(() => {
//     $(document).on('click', '[data-toggle="lightbox"]', function(e) {
//         e.preventDefault();
//         $(this).ekkoLightbox();
//     });
// });

$(() => {
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});