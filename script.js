// on load
$(window).on('load', function(){
    $('.sub-logo img').addClass('p1-muncul');
    $('.main-logo img').addClass('p1-muncul');
    $('.icon-logo img').addClass('p1-muncul');
});

// scrolling
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    if( wScroll > $('.page2').offset().top - 300 ){
        $('.page2 .p-left').addClass('p2-muncul');
        $('.page2 .p-right').addClass('p2-muncul');
        $('.page2 img').addClass('p2-muncul');
    }

    if( wScroll > $('.page3').offset().top - 300 ){
        $('.page3 .bg-menu img').addClass('p3-muncul');
        $('.page3 .wrap-menu .list-menu').each(function(i){
            setTimeout(function(){
                $('.page3 .wrap-menu .list-menu').eq(i).addClass('p3-muncul');
            }, 300 * (i+1));
        });
    }
});
