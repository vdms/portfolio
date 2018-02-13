$(document).ready(function () {

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.project__link').each(function () {
            $(this).removeClass('project__link--active');
        })
        $(this).addClass('project__link--active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    // Verifica dinamicamente o posicionamento da navegacao
    num = $('.project__nav').offset().top;

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.project__nav').addClass('project__nav--fixed');
        }
        else {
            num = $('.project__nav').offset().top;
            $('.project__nav').removeClass('project__nav--fixed');
        }
   });

   console.log("intro top", $('#intro').position().top);

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('.project__link').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        console.log("refElementPosTop", refElement.position().top);
        console.log("refElementHeight", refElement.height());
        console.log("scrollPos", scrollPos);

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.project__link').removeClass("project__link--active");
            currLink.addClass("project__link--active");
        }
        else{
            currLink.removeClass("project__link--active");
        }
    });
}