// common imports
import './scss/about.scss';
import './common.js';

// custom imports
import 'slick-carousel';

$(() => {
   $('.slider').slick({
       infinite: true,
       slideToScroll: 1,
       slideToShow: 1
   })
});
