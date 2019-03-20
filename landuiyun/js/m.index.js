var key=true;
var key2=true;
$(".menu-open").click(function () {
    if ((key)) {
        h=$(window).height()-$(".top-nav").height()-$(".foot-menu").height();
        console.log(h);
        $("body").css({overflowY:'hidden'});
        $("body").css({height:'100%'})
        $(this).next().css({height:h});
        $(this).css({background:"url('./img/mobile/menu_close.png') center no-repeat",backgroundSize:"16px"});
       /* var height = document.getElementById('nav-h').scrollHeight;    //滚动内容的高度
        var boxHeight = 560;   //滚动盒子的高度
        console.log(height);
        console.log(boxHeight);
        $('.nav-list').scroll(function(){
            var _top = $('.nav-list').scrollTop();   //滑动距离top的高度
            console.log(_top);
            if(_top === (height - boxHeight)) {   //理想情况下 滑动到最底部是等于scrollHeight-boxHeight的
                $('.nav-list').scrollTop(_top - 1);   //改变scrollTop值 永远滑不到最底部
                console.log($('.nav-list').scrollTop);
            }});*/
        key=false;
    }else{
        $("body").css({overflowY:''});
        $(this).next().css({height:""});
        $(this).css({background:""});
        key=true;
    }
});

$(".nav-lv2").click(function () {
    if (($(this).next().height()==0)) {
        $(this).next().css({height:"264px"});
        $(this).css({background:"url('./img/mobile/top_menu_close.png') right center no-repeat",backgroundSize:"12px"});
        key2=false;
    }else{
        $(this).next().css({height:0});
        $(this).css({background:""});
        key2=true;
    }
});

$(".news-title").click(function () {
    $(".news-title").css({borderTop:"",color:""});
    $(".news-info dl").css({display:"none"});
    $(this).css({borderTop:"2px solid dodgerblue",color:"dodgerblue"});
    $(".news-info dl").eq($(this).index()).css({display: "block"});
});
