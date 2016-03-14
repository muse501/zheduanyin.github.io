var $body = $("html, body");
$("#toc a").click(function() {
    $body.animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 500,
        easing: "swing"
    });
    return false;
});
