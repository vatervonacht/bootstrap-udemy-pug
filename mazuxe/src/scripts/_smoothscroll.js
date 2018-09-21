// Scrollspy and Smooth scroll when menu item is clicked
$(() => {
    $('body').scrollspy({target: "#main-nav"});
    $('#main-nav').on('click', (event) => {
        if (event.target.hash !== "") {
            event.preventDefault();
            const hash = event.target.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, () => { window.location.hash = hash; })
        }
    });
});