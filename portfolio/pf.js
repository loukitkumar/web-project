$("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});
$("#project").click(function() {
    $('html,body').animate({
        scrollTop: $(".project").offset().top},
        'slow');
});
$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});
