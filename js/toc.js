var $toc = $('#toc');
var tocInitOffsetTop = $toc.offset() ? $toc.offset().top : 0;
var tocInitWidth = $toc.outerWidth();
$(window).scroll(function() {
    if ($(window).scrollTop() > tocInitOffsetTop - 80){
        $toc.addClass('fixed-toc').css('width', tocInitWidth+'px');
    } else {
        $toc.removeClass('fixed-toc');
    }
});
