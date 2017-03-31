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

    var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"tencent://Message/?Uin=3502606449&websiteName=sc.chinaz.com=&Menu=yes\" class=\"btn_1 btn-qq\"></a><div class=\"btn_1 btn-wx\"><img class=\"pic\" src=\"static/img/qrcode.png\" onclick=\"window.location.href=\'http://%77%77%77%2e%73%75%63%61%69%6a%69%61%79%75%61%6e%2e%63%6f%6d\'\"/></div><div class=\"btn_1 btn-phone\"><div class=\"phone\">185-8841-6742</div></div><div class=\"btn_1 btn-top\"></div></div>";
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

    move('price', 'SPrice');
    move('cooperation', 'SCo');
    move('index', 'SIndex');
    move('sysFuncs', 'SFuncs');

    function move(dist, src) {
        var s1 = '#' + dist, s2 = '#' + src;
        $(s2).on('click', function() {
            var top = $(s1).offset().top;
            $('html,body').animate({ scrollTop: top }, 600);
        });
    }

    $('#company,.qq-btn').on('click', function() {
        window.open("http://wpa.qq.com/msgrd?v=3&uin=3502606449&site=qq&menu=yes");
    });

    $(body).on('click','.btn-phone', function() {
        
    });

    
    var t = 10;
    interval();
    function interval() {
        setTimeout(function() {
            t += 10;
            $('.daokeQ').removeClass('hide');
        }, t*1000);
    }
    $('.qq-close').on('click', function() {
        $('.daokeQ').addClass('hide');
        interval();
    });

    var h = document.documentElement.clientHeight,
    w = document.documentElement.clientWidth,
    gap = 100, isHover = false;
    qqMove();
    var hStep = gap, wStep = gap;
    function qqMove() {
        var top = parseInt( $(".daokeQ").css('top') ), 
        left = parseInt( $(".daokeQ").css('left') );
        
        if(top > h-gap-236) {
            hStep = -gap;
        }

        if(left > w-gap-406) {
            wStep = -gap;
        }

        if(top < gap) {
            hStep = gap;
        }

        if(left < gap) {
            wStep = gap;
        }
        if(!isHover) {
            $('.daokeQ').delay(2000).animate({ top: top + hStep, left: left + wStep}, 2500,  function() {
                qqMove();
            });
        }
        
    }

    $('.daokeQ').mouseover(function() {
        isHover = true;
    }).mouseleave(function(){
        isHover = false;
        qqMove();
    });

    var p=0,old=0;  
    //p是新值，old是旧值
    $(window).scroll(function(e){  
            p = $(this).scrollTop();  
              
            if(old<=p){//下滚  
                $('#index').removeClass('nav-fixed');
            }else{//上滚  
                if(p > 70) {
                    $('#index').addClass('nav-fixed');
                }else{
                    $('#index').removeClass('nav-fixed');
                }
            }  
            setTimeout(function(){old = p;},0);         
    }); 



});
