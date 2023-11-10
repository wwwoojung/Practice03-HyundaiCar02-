$(function () {
    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        };
    })

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
    });

    $('.sub_slide').slick({
        arrows: false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
    })

    $('.main_slide').on('afterChange', function () {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.slide_box01 .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.slide_box01 .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.slide_box02 .arrows .left').on('click', function () {
        $('.sub_slide').slick('slickPrev')
    });
    $('.slide_box02 .arrows .right').on('click', function () {
        $('.sub_slide').slick('slickNext')
    });

    $('.sub_visual01 .tab_menu>ul>li').on('click', function (e) {
        e.preventDefault();

        const idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');

        $('.sub_visual01 .tab_content .content').eq(idx).addClass('on')
            .siblings().removeClass('on')
    })

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop()
        console.log(sct)

        if (sct > 1000) {
            $('.sub_visual02 .title').addClass('on');
        } else {
            $('.sub_visual02 .title').removeClass('on');
        }

        if (sct > 1400) {
            $('.sub_visual02 .inner .content').addClass('on')
        } else {
            $('.sub_visual02 .inner .content').removeClass('on')
        }
    })
})