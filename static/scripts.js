$(document).ready(function () {
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Animate cards on hover
    $('.card').hover(
        function () {
            $(this).css('transform', 'scale(1.05)');
        }, function () {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Collapse navbar on click (for small screens)
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});
