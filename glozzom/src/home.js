// Common imports
import './scss/home.scss';
import './common.js';

// Page-specific imports
import 'ekko-lightbox';

// Should import this
$(() => {
  $('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
  });
});

// Auto play video inside of modal
$(() => {
    $('.video').click((event) => {
        var target = event.currentTarget;
        var theModal = $(target).data('target');
        var videoSrc = $(target).data('video');
        var videoSrcAuto = videoSrc + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
        $(theModal + ' iframe').attr('src', videoSrcAuto);
        $(theModal + ' button.close').click(() => {
            $(theModal + ' iframe').attr('src', videoSrc);
        });
    });
});

$(() => {
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});
