/**
 * Created by KELT on 30.03.2015.
 */
var slider_showcase_1, slider_showcase_2;
$(document).ready(function(){

    if (window.innerWidth > 767) {
        $('.how-works-img-left').load(function () {
            $('.left-animated-1').addClass('fadeInLeft');
        });
        $('.right-animated-2').removeClass('animated');
        $('.right-animated-2').addClass('fadeInRight reveal');
        $('.left-animated-3').removeClass('animated');
        $('.left-animated-3').addClass('fadeInLeft reveal');
        $('.right-animated-4').removeClass('animated');
        $('.right-animated-4').addClass('fadeInRight reveal');

    } else {
        $('.left-animated-1').removeClass('animated');
        $('.right-animated-2').removeClass('animated');
        $('.left-animated-3').removeClass('animated');
        $('.right-animated-4').removeClass('animated');
        $('.left-animated-1').addClass('fadeInLeft reveal');
        $('.right-animated-2').addClass('fadeInRight reveal');
        $('.left-animated-3').addClass('fadeInLeft reveal');
        $('.right-animated-4').addClass('fadeInRight reveal');
    }


    var slider = $('#carousel-bg').bxSlider({
        mode: 'fade',
        pause: 4000,
        auto: true,
        pager: false,
        controls: false,
        adaptiveHeight: true
    });
    $('#carousel-banner').carousel({
        interval: 4000
    });
    //$('#carousel-banner').hover(
    //    function(){
    //        slider.stopAuto();
    //    },
    //    function(){
    //        slider.startAuto();
    //    }
    //);

    $('.left.controls-button').click(function(){
        slider.goToPrevSlide();
    });
    $('.right.controls-button').click(function(){
        slider.goToNextSlide();
    });
    $('.bg-carousel .item').each(function(){
        $(this).css('height', window.innerHeight + 'px');
    });
    $('.video-bg').css('height', window.innerHeight);
    if (window.innerWidth > 1191){
        //$('.top-carousel .item').css('min-height', window.innerWidth/2 - window.innerHeight/6 + 'px');
        //$('.top-carousel .item h5').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/3 + 'px');
        //$('.top-carousel .item h5.nothing').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/3 + 'px');
    }else{
        //$('.top-carousel .item').css('min-height', window.innerHeight + 'px');
        //$('.top-carousel .item h5').css('margin-top', window.innerHeight/4 + 'px');
        //$('.top-carousel .item h5.nothing').css('margin-top', window.innerHeight/4 + 'px');
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
                $(this).removeClass('col-sm-4 open');
                $(this).addClass('col-sm-1 rotate-area');
            });
            if ($(this).hasClass('col-sm-4') || $(this).hasClass('col-sm-1')){
                $(this).removeClass('col-sm-4 col-sm-1 rotate-area');
                $(this).addClass('col-sm-10 open');
            }else{
                //$(this).removeClass('col-sm-10 open');
                //$('.area').each(function(){
                //    $(this).removeClass('col-sm-1 rotate-area');
                //    $(this).addClass('col-sm-4');
                //});
            }
        }else{

            $('.area').not(this).each(function(){
                $(this).removeClass('col-sm-3 open');
                $(this).addClass('col-sm-1 rotate-area');
            });

            if ($(this).hasClass('col-sm-3') || $(this).hasClass('col-sm-1')){
                $(this).removeClass('col-sm-3 col-sm-1 rotate-area');
                $(this).addClass('col-sm-9 open');
            }else{
                //$(this).removeClass('col-sm-9 open');
                //$('.area').not(this).each(function(){
                //    $(this).removeClass('col-sm-1 rotate-area');
                //    $(this).addClass('col-sm-3');
                //});
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
            slideWidth: 400,
    video: true

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

    $('#pcipaymenthover').bind('click', function() {
            $('.pci').toggleClass('pci-payment-expand')
    });
    $('#pcipaymenthover').hover(function() {
        $('.pci').toggleClass('pci-payment-expand')
    });


    $('.collapse-top li').bind('click', function(){
        $(this).parents('.collapse-content').find('.collapse-note').each(function(){
            $(this).removeClass('active');
        })
        var id = $(this).data('tab');
        $(this).parents('.collapse-content').find(id).addClass('active');
        $(this).parent().find('li').each(function(){
            $(this).removeClass('active');
        })
        $(this).addClass('active');

    })
});

$(window).resize(function() {
    $('.triagle').each(function(){
        $(this).css('border-left-width', $(this).parent().innerWidth()/2);
        $(this).css('border-right-width', $(this).parent().innerWidth()/2);
    })
    if (window.innerWidth > 767) {
        $('.video-bg').css('height', window.innerHeight);
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
        //$('.top-carousel .item').css('min-height', window.innerWidth/2 - window.innerHeight/6 + 'px');
        //$('.top-carousel .item h5').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/4 + 'px');
        //$('.top-carousel .item h5.nothing').css('margin-top', (window.innerWidth/2 - window.innerHeight/6)/4 + 'px');
    }else{
        //$('.top-carousel .item').css('min-height', window.innerHeight + 'px');
        //$('.top-carousel .item h5').css('margin-top', window.innerHeight/4 + 'px');
        //$('.top-carousel .item h5.nothing').css('margin-top', window.innerHeight/4 + 'px');
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

    $(window).scroll(function() {
        if (window.innerWidth > 767) {
            if ($(window).scrollTop() > 0) {
                $('.main-navbar').addClass('fixed')
            } else {
                $('.main-navbar').removeClass('fixed');
            }
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
