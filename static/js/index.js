$(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
    $("#panel .icons li").not(".up,.down").mouseenter(function() {
        $("#panel .info").addClass('hover');
        $("#panel .info li").hide();
        $("#panel .info li." + $(this).attr('class')).show();
    });
    $("#panel").mouseleave(function() {
        $("#panel .info").removeClass('hover');
    })
    $(".icons .up").click(function() {
        $.fn.ronbongpage.moveSectionUp();
    });
    $(".icons .down").click(function() {
        $.fn.ronbongpage.moveSectionDown();
    });

});
