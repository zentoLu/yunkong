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


    initToolBox();
    // 右侧工具箱
    function initToolBox() {
        // 快速到顶部
        var $go_top = $(".icons .up");
        $go_top.click(function() { $('html,body,#wrap').animate({ scrollTop: 0 }, 600); });

        // 获取scrollTop
        function getScrollTop() {
            return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        }
    }

});
