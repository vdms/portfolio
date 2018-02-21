$(document).ready(function() {

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.internal-nav__link').each(function() {
            $(this).removeClass('internal-nav__link--active');
        })

        if($(this).hasClass('internal-nav__link')) {
            $(this).addClass('internal-nav__link--active');
        }

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    // Verifica dinamicamente o posicionamento da navegacao
    pos = $('.j-project').offset().top;
    num = pos; // -40 vem to top do elemento.

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.j-internal-nav').addClass('project__nav--is-show');
        } else {
            num = pos;
            $('.j-internal-nav').removeClass('project__nav--is-show');
        }
    });

});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    $('.j-internal-nav__link').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.j-internal-nav__link').removeClass("internal-nav__link--active");

            if($(this).hasClass('internal-nav__link')) {
                currLink.addClass("internal-nav__link--active");
            }

        } else {

            currLink.removeClass("internal-nav__link--active");

        }
    });
}