$(".banner .indicator i").hover(function () {
    $(".bd li").css({zIndex:0});
    $(".bd li").find(".text").attr("class","info text");
    $(".bd li").find(".img").attr("class","info img");
    $(".banner .indicator i").css({background:""});
    var num=$(this).index();
    $(this).css({background:"#fff"});
    if (num == 0) {
        $(".bd li").eq(num).css({zIndex:2});
        $(".bd li").eq(num).find(".text").addClass("animated bounceInUp");
        $(".bd li").eq(num).find(".img").addClass("animated bounceInRight")
    }
    if (num == 1) {
        $(".bd li").eq(num).css({zIndex:2});
        $(".bd li").eq(num).find(".text").addClass("animated bounceInLeft");
        $(".bd li").eq(num).find(".img").addClass("animated fadeIn")
    }
    if (num == 2) {
        $(".bd li").eq(num).css({zIndex:2});
        $(".bd li").eq(num).find(".text").addClass("animated bounceInDown");
        $(".bd li").eq(num).find(".img").addClass("animated fadeIn")
    }
});
$(".main_nav li").hover(function f() {
    $(this).find("div").css({display:"block"});
},function () {
    $(this).find("div").css({display:"none"});
});
$(".advantage_list .indicator i").hover(function () {
    $(".advantage_list ul li").find(".advantage_info").attr("class","advantage_info");
    $(".advantage_list ul li").css({opacity: 0});
    $(".advantage_list .indicator i").css({background:""});
    var num=$(this).index();
    $(this).css({background:"#fff"});
    $(".advantage_list ul li").eq(num).css({opacity:1})
    $(".advantage_list ul li").eq(num).find(".advantage_info").addClass("animated fadeIn");
});
$(".side_nav li").hover(function () {
    $(this).find(".side_shrapnel").css({display:"block"})
},function () {
    $(this).find(".side_shrapnel").css({display:"none"})
});
$(".product_list li").hover(function () {
    $(".product_list li").find(".product_title").css({paddingBottom: "",background:""});
    $(".product_list li").find(".product_title a").children().css({color:""});
    $(".product_list li").find(".ico1").css({backgroundPosition:""});
    $(".product_list li").find(".container").css({width:"",height:"",border:""});
    $(".product_list li").css({width: "226px",height: "540px",top:"",zIndex:0});
    $(this).css({width:"316px",height:"560px",top:"-10px",zIndex:10});
    $(this).find(".product_title").css({paddingBottom:"10px",background:"dodgerblue"});
    $(this).find(".product_title a").children().css({color:"#fff"});
    $(this).find(".ico1").css({backgroundPosition:"-70px -86px"});
    $(this).find(".container").css({width:"316px",height:"560px",border:"1px solid dodgerblue"});
},function () {
});

/*回到顶部按钮显示*/
window.addEventListener("scroll",function () {
    var stp=document.documentElement.scrollTop;
    console.log($(".side_nav li").eq(8).find(".side_box"));
    if (stp>400){
        $(".side_nav").find(".top").css({display:"block"});
    }else{
        $(".side_nav").find(".top").css({display:"none"});
    }
});

var T;
$(".top").click(function () {
    var tops=document.documentElement.scrollTop||document.body.scrollTop;
    function move() {
        tops=parseInt(tops-document.documentElement.scrollTop/8);
        if (tops<=0){
            clearInterval(T);
        }
        document.documentElement.scrollTop=tops;
    }
    T=setInterval(move,30);
});