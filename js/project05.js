$(function () {
    $('#fl').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk, '바뀜');
        lnk && window.open(lnk);
    });


    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 담는다.
        let sct = $(window).scrollTop();
        console.log(sct)
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

    })




    $('.family_link2 span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        //슬라이드 숫자 표시(1/3)
        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount);

        $('.main_visual .menu li').eq(0).addClass('on');
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_slide').slick({
        // autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); // 0,1,2
        $('.main_slide').slick('slickGoTo', idx);
    })


    //메인 슬라이드 스크롤 아래 버튼
    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st - 100 }, 600)
    });

    // .main_best에 화살표 버튼 눌러서 슬라이드 돌아가게 하기
    $('.main_best .arrows .left').on('click', function () {
        $('.best_slide').slick('slickPrev');
    });
    $('.main_best .arrows .right').on('click', function () {
        $('.best_slide').slick('slickNext');
    });


    $('.best_slide').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.best_tab li').on('click', function () {
        let idx = $(this).index();
        $('.best_slide').slick('slickGoTo', idx)
    });

    $('.best_tab li').on('click', function (event) {
        event.preventDefault();
        let idx = $(this).index();

        $(this).addClass('on')
            .siblings().removeClass('on');
        $('.best_slide figure').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });




    //to_top
    //to_top 스크롤 위로 올리기
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    // to_top 스크롤 숨겼다가 나타내기
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 500 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    });

});