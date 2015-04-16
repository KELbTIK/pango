/**
 * Created by KELT on 30.03.2015.
 */
var slider_showcase_1, slider_showcase_2;
$(document).ready(function(){
    var slider = $('#carousel-bg').bxSlider({
        mode: 'fade',
        pause: 2000,
        auto: true,
        pager: false,
        controls: false,
        adaptiveHeight: true
    });
    $('#carousel-banner').carousel({
        interval: 2000
    });
    $('#carousel-banner').hover(
        function(){
            slider.stopAuto();
        },
        function(){
            slider.startAuto();
        }
    );

    $('.left.controls-button').click(function(){
        slider.goToPrevSlide();
    });
    $('.right.controls-button').click(function(){
        slider.goToNextSlide();
    });
    $('.bg-carousel .item').each(function(){
        $(this).css('height', window.innerHeight + 'px');
    });
    if (window.innerWidth > 1191){
        $('.top-carousel .item').css('min-height', window.innerWidth/2 - window.innerHeight/6 + 'px');
        $('.top-carousel .item h5').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/3.3 + 'px');
        $('.top-carousel .item h5.nothing').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/4 + 'px');
    }else{
        $('.top-carousel .item').css('min-height', window.innerHeight + 'px');
        $('.top-carousel .item h5').css('margin-top', window.innerHeight/4 + 'px');
        $('.top-carousel .item h5.nothing').css('margin-top', window.innerHeight/4 + 'px');
    }
    if (window.innerWidth > 767) {
        var max_tech_height = 0;
        $('.tech-descr').each(function () {
            $(this).removeAttr('style');
            if ($(this).height() > max_tech_height) {
                max_tech_height = $(this).height();
            }

        });
        $('.tech-descr').each(function () {
            $(this).css('height', max_tech_height);
        });
    }else{
        $('.tech-descr').each(function () {
            $(this).removeAttr('style');
        });
    }
    $('.reveal').each(function(){
        $(this).css('visibility', 'hidden');
        $(this).css('-webkit-animation-name', 'none');
    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })
    $('.area').click(function(){
        if ($('.municipal-area').hasClass('private')){
            $('.area').not(this).each(function(){
                $(this).removeClass('col-sm-4');
                $(this).addClass('col-sm-3');
            });
            if ($(this).hasClass('col-sm-4') || $(this).hasClass('col-sm-3')){
                $(this).removeClass('col-sm-4 col-sm-3');
                $(this).addClass('col-sm-6');
            }else{
                $(this).removeClass('col-sm-6');
                $('.area').each(function(){
                    $(this).removeClass('col-sm-3');
                    $(this).addClass('col-sm-4');
                });
            }
        }else{
            $('.area').not(this).each(function(){
                $(this).removeClass('col-sm-3');
                $(this).addClass('col-sm-2');
            });
            if ($(this).hasClass('col-sm-3') || $(this).hasClass('col-sm-2')){
                $(this).removeClass('col-sm-3 col-sm-2');
                $(this).addClass('col-sm-6');
            }else{
                $(this).removeClass('col-sm-6');
                $('.area').each(function(){
                    $(this).removeClass('col-sm-2');
                    $(this).addClass('col-sm-3');
                });
            }
        }
    });
    $('.area').click(function(){
        var triagle = $(this).find('.triagle');
        $(this).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
            function() {
                $(triagle).css('border-left-width', $(triagle).parent().innerWidth()/2);
                $(triagle).css('border-right-width', $(triagle).parent().innerWidth()/2);
                //$(tri)
                $(triagle).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function(){
                    $(triagle).css('opacity', 1);
                })

            });


    })

    $('.bxslider-1').bxSlider({
        mode: 'fade',
        pause: 5000,
        auto: true,
        pager: false,
        controls: true,
        adaptiveHeight: true
    });
        if (window.innerWidth > 767) {
            slider_showcase_1 = $('.bxslider-2').bxSlider({
                minSlides: 1,
                maxSlides: 2,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true,
                slideWidth: 400

            });
        }else{
            slider_showcase_1 = $('.bxslider-2').bxSlider({
                minSlides: 1,
                maxSlides: 1,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true

            });
        }
        if (window.innerWidth > 991) {
            slider_showcase_2 = $('.bxslider-3').bxSlider({
                minSlides: 1,
                maxSlides: 2,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true,
                slideWidth: 400
            });
        }else{
            slider_showcase_2 = $('.bxslider-3').bxSlider({
                minSlides: 1,
                maxSlides: 1,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true
            });
        }

});

$(window).resize(function() {
    $('.triagle').each(function(){
        $(this).css('border-left-width', $(this).parent().innerWidth()/2);
        $(this).css('border-right-width', $(this).parent().innerWidth()/2);
    })
    if (window.innerWidth > 767) {
        var max_tech_height = 0;
        $('.tech-descr').each(function () {
            $(this).removeAttr('style');
            if ($(this).height() > max_tech_height) {
                max_tech_height = $(this).height();
            }

        });
        $('.tech-descr').each(function () {
            $(this).css('height', max_tech_height);
        });
    }else{
        $('.tech-descr').each(function () {
            $(this).removeAttr('style');
        });
    }
    $('.bg-carousel .item').each(function(){
        $(this).css('height', window.innerHeight + 'px');
    })
    if (window.innerWidth > 1191){
        $('.top-carousel .item').css('min-height', window.innerWidth/2 - window.innerHeight/6 + 'px');
        $('.top-carousel .item h5').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/3.3 + 'px');
        $('.top-carousel .item h5.nothing').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/4 + 'px');
    }else{
        $('.top-carousel .item').css('min-height', window.innerHeight + 'px');
        $('.top-carousel .item h5').css('margin-top', window.innerHeight/4 + 'px');
        $('.top-carousel .item h5.nothing').css('margin-top', window.innerHeight/4 + 'px');
    }
    if (slider_showcase_1.length > 0){
        if (window.innerWidth > 767) {
            slider_showcase_1.reloadSlider({
                minSlides: 1,
                maxSlides: 2,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true,
                slideWidth: 400
            });
        }else{
            slider_showcase_1.reloadSlider({
                minSlides: 1,
                maxSlides: 1,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true
            });
        }
    }
    if (slider_showcase_2.length > 0) {
        if (window.innerWidth > 991) {
            slider_showcase_2.reloadSlider({
                minSlides: 1,
                maxSlides: 2,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true,
                slideWidth: 400
            });

        } else {
            slider_showcase_2.reloadSlider({
                minSlides: 1,
                maxSlides: 1,
                pause: 5000,
                auto: true,
                pager: false,
                controls: true
            });
        }
    }
});
$(window).load(function(){

    $('img').each(function(){
        if ($(this).hasClass('img-not-scale')){

        }else{
            $(this).css('max-height', $(this).height()/2);
        }
        $(this).css('opacity', 1);
    })
})
$(window).scroll(function(){
    if ($(window).scrollTop() > 0){
        $('.main-navbar').addClass('fixed')
    }else{
        $('.main-navbar').removeClass('fixed');
    }
    $('.reveal').each(function(){
        var top_of_object = $(this).offset().top;
        var height_of_object = $(this).height();
        var top_of_window = $(window).scrollTop();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > top_of_object + height_of_object/4 && top_of_window < top_of_object + height_of_object/4){
            $(this).removeClass('reveal');
            $(this).removeAttr('style');
            $(this).addClass('animated');
            $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                function (e) {
                    $(this).removeClass('animated zoomIn');
                    $(this).addClass('revealed');
                });
        }

    });
});