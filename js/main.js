// header - 서브메뉴 드롭다운 / PC, 태블릿(1024px, 아이패드 프로 12.9 기준)
$('.gnb, .gnbSub_shadow').on('mouseover mouseleave', function (dropdown) {
    if ($(window).width() > 880) {
        if (dropdown.type == 'mouseover') { // 마우스 올려놨을 때
            $('.gnbSub').stop().slideDown();
            $('.gnbSub_shadow').stop().fadeIn();
        } else {
            $('.gnbSub').stop().slideUp(300, function () { // 콜백함수 추가
                $(this).removeAttr('style');
            });
            $('.gnbSub_shadow').stop().fadeOut(200, function () { // 콜백함수 추가
                $(this).removeAttr('style');
            });
        }
    }
});
// header - nav & 서브메뉴 드롭다운 / 모바일 ~ 880px
$('.gnb_li1').on('mouseover mouseleave', function (dropdown) {
    if ($(window).width() <= 880) {
        if (dropdown.type == 'mouseover') { // 마우스 올려놨을 때
            $('.gnbSub1').stop().slideDown(300);
            $('.gnb_li2').css({ 'transform': 'translateY(244px)', 'transition': 'all .5s' });
            $('.gnb_li3').css({ 'transform': 'translateY(244px)', 'transition': 'all .5s' });
            $('.gnb_li4').css({ 'transform': 'translateY(244px)', 'transition': 'all .5s' });
        } else {
            $('.gnbSub1').stop().slideUp(300, function () { // 콜백함수 추가
                $(this).removeAttr('style');
            });
            $('.gnb_li2').css({ 'transform': 'translateY(0)', 'transition': 'all .5s' });
            $('.gnb_li3').css({ 'transform': 'translateY(0)', 'transition': 'all .5s' });
            $('.gnb_li4').css({ 'transform': 'translateY(0)', 'transition': 'all .5s' });
        }
    }
});
$('.gnb_li2').on('mouseover mouseleave', function (dropdown) {
    if ($(window).width() <= 880) {
        if (dropdown.type == 'mouseover') { // 마우스 올려놨을 때
            $('.gnbSub2').stop().slideDown(300);
            $('.gnb_li3').css({ 'transform': 'translateY(122px)', 'transition': 'all .5s' });
            $('.gnb_li4').css({ 'transform': 'translateY(122px)', 'transition': 'all .5s' });
        } else {
            $('.gnbSub2').stop().slideUp(300, function () { // 콜백함수 추가
                $(this).removeAttr('style');
            });
            $('.gnb_li3').css({ 'transform': 'translateY(0)', 'transition': 'all .5s' });
            $('.gnb_li4').css({ 'transform': 'translateY(0)', 'transition': 'all .5s' });
        }
    }
});
$('.gnb_li3').on('mouseover mouseleave', function (dropdown) {
    if ($(window).width() <= 880) {
        if (dropdown.type == 'mouseover') { // 마우스 올려놨을 때
            $('.gnbSub3').stop().slideDown(300);
            $('.gnb_li4').css({ 'transform': 'translateY(183px)', 'transition': 'all .5s' });
        } else {
            $('.gnbSub3').stop().slideUp(300, function () { // 콜백함수 추가
                $(this).removeAttr('style');
            });
            $('.gnb_li4').css({ 'transform': 'translateY(0)', 'transition': 'all .5s' });
        }
    }
});
$('.gnb_li4').on('mouseover mouseleave', function (dropdown) {
    if ($(window).width() <= 880) {
        if (dropdown.type == 'mouseover') { // 마우스 올려놨을 때
            $('.gnbSub4').stop().slideDown(300);
        } else {
            $('.gnbSub4').stop().slideUp(300, function () { // 콜백함수 추가
                $(this).removeAttr('style');
            });
        }
    }
});
// header - 메뉴 ON / OFF (모바일)
$('.gnb_ham').click(function () {
    $(this).css('display', 'none');
    $('.gnb_ham_close').removeAttr('style').addClass('on');
    $('nav').addClass('on');
});
$('.gnb_ham_close').click(function () {
    $(this).css('display', 'none');
    $('.gnb_ham').removeAttr('style').addClass('on');
    $('nav').removeClass('on');
});

// main - visual / 이미지 슬라이드
$('.visual_slide_img01 .visual_arrow_right').click(function () {
    $('.visual_slide_img01').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img02').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img03').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img04').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img05').css(`transform`, `translateX(-100%)`);
});
$('.visual_slide_img02 .visual_arrow_right').click(function () {
    $('.visual_slide_img01').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img02').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img03').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img04').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img05').css(`transform`, `translateX(-200%)`);
});
$('.visual_slide_img03 .visual_arrow_right').click(function () {
    $('.visual_slide_img01').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img02').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img03').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img04').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img05').css(`transform`, `translateX(-300%)`);
});
$('.visual_slide_img04 .visual_arrow_right').click(function () {
    $('.visual_slide_img01').css(`transform`, `translateX(-400%)`);
    $('.visual_slide_img02').css(`transform`, `translateX(-400%)`);
    $('.visual_slide_img03').css(`transform`, `translateX(-400%)`);
    $('.visual_slide_img04').css(`transform`, `translateX(-400%)`);
    $('.visual_slide_img05').css(`transform`, `translateX(-400%)`);
});
$('.visual_slide_img02 .visual_arrow_left').click(function () {
    $('.visual_slide_img01').css(`transform`, `translateX(0)`);
    $('.visual_slide_img02').css(`transform`, `translateX(0)`);
    $('.visual_slide_img03').css(`transform`, `translateX(0)`);
    $('.visual_slide_img04').css(`transform`, `translateX(0)`);
    $('.visual_slide_img05').css(`transform`, `translateX(0)`);
});
$('.visual_slide_img03 .visual_arrow_left').click(function () {
    $('.visual_slide_img02').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img03').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img04').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img01').css(`transform`, `translateX(-100%)`);
    $('.visual_slide_img05').css(`transform`, `translateX(-100%)`);
});
$('.visual_slide_img04 .visual_arrow_left').click(function () {
    $('.visual_slide_img01').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img02').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img03').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img04').css(`transform`, `translateX(-200%)`);
    $('.visual_slide_img05').css(`transform`, `translateX(-200%)`);
});
$('.visual_slide_img05 .visual_arrow_left').click(function () {
    $('.visual_slide_img01').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img02').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img03').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img04').css(`transform`, `translateX(-300%)`);
    $('.visual_slide_img05').css(`transform`, `translateX(-300%)`);
});