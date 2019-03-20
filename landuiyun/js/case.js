$(".filtrate-title li").click(function () {
    $(".filtrate-title li").css({background: "#f7f9fa",color: "#666"});
    $(".filtrate-title li").find("i").css({display:"none"});
    var lis=$(this).index();
    if (lis == 1) {
        $(this).parents(".filtrate").find(".filtrate-list").css({minHeight:"426px"});
    }else{
        $(this).parents(".filtrate").find(".filtrate-list").css({minHeight: "852px"});
    }
    $(this).css({background: "dodgerblue",color: "#fff"});
    $(".filtrate-list li").css({display: "none"});
    $(".filtrate-list li").eq(lis).css({display:"block"});
    $(this).find("i").css({display:"block"})
})