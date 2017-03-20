$(function() {
    $('.flexslider').flexslider({
        prevText: "",
        nextText: "", 
        animation: "slide"
    });
    // $("#panel .icons li").not(".up,.down").mouseenter(function() {
    //     $("#panel .info").addClass('hover');
    //     $("#panel .info li").hide();
    //     $("#panel .info li." + $(this).attr('class')).show();
    // });
    // $("#panel").mouseleave(function() {
    //     $("#panel .info").removeClass('hover');
    // })
    //

    var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"tencent://Message/?Uin=450500564&websiteName=sc.chinaz.com=&Menu=yes\" class=\"btn_1 btn-qq\"></a><div class=\"btn_1 btn-wx\"><img class=\"pic\" src=\"static/img/qrcode.png\" onclick=\"window.location.href=\'http://%77%77%77%2e%73%75%63%61%69%6a%69%61%79%75%61%6e%2e%63%6f%6d\'\"/></div><div class=\"btn_1 btn-phone\"><div class=\"phone\">400-6856-838</div></div><div class=\"btn_1 btn-top\"></div></div>";
    $("#top").html(tophtml);
    $("#izl_rmenu").each(function(){
        $(this).find(".btn-wx").mouseenter(function(){
            $(this).find(".pic").fadeIn("fast");
        });
        $(this).find(".btn-wx").mouseleave(function(){
            $(this).find(".pic").fadeOut("fast");
        });
        $(this).find(".btn-phone").mouseenter(function(){
            $(this).find(".phone").fadeIn("fast");
        });
        $(this).find(".btn-phone").mouseleave(function(){
            $(this).find(".phone").fadeOut("fast");
        });
        $(this).find(".btn-top").click(function(){
            $("html, body").animate({
                "scroll-top":0
            },"fast");
        });
    });
    var lastRmenuStatus=false;
    $(window).scroll(function(){//bug
        var _top=$(window).scrollTop();
        if(_top>200){
            $("#izl_rmenu").data("expanded",true);
        }else{
            $("#izl_rmenu").data("expanded",false);
        }
        if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
            lastRmenuStatus=$("#izl_rmenu").data("expanded");
            if(lastRmenuStatus){
                $("#izl_rmenu .btn-top").slideDown();
            }else{
                $("#izl_rmenu .btn-top").slideUp();
            }
        }
    });

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
