$(function () {
    $('#fl').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk, '바뀜');
        lnk && window.open(lnk);
    });


    $('.family_link2 span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });
});