/**
 * Created by Administrator on 2018/12/9.
 */
!function(){
    console.log(navigator.userAgent);
    /*横条点击切换*/
    $('.indicators').click(function(e){
        if ($(event.target).is('span') && !$(event.target).is('.indicators span.active')){
            //console.log($(event.target).index());
            var span_active=$('.indicators span.active');
            var carous_item_active=$('.carous_item.active');
            //console.log(carous_item_active);
            $('.indicators span').removeClass('active');
            $(event.target).addClass('active');
            $('.carous_item').removeClass('active cur_slide_left cur_slide_right tar_slide_left tar_slide_right');
            var index=$(event.target).index();
            if (index>span_active.index()){
                carous_item_active.addClass('cur_slide_left');
                $('.carous_item').eq(index).addClass('active tar_slide_left');
            }else {
                carous_item_active.addClass('cur_slide_right');
                $('.carous_item').eq(index).addClass('active tar_slide_right');
            }
        }
    });
    /*列表点击切换*/
    $('.indicators_item').click(function(){
        var span_active=$('.indicators span.active');
        var carous_item_active=$('.carous_item.active');
        var index=$(this).index();
        if (index!=span_active.index()){
            $('.indicators span').removeClass('active').eq(index).addClass('active');
            $('.carous_item').removeClass('active cur_slide_left cur_slide_right tar_slide_left tar_slide_right');
            if (index>span_active.index()){
                carous_item_active.addClass('cur_slide_left');
                $('.carous_item').eq(index).addClass('active tar_slide_left');
            }else {
                carous_item_active.addClass('cur_slide_right');
                $('.carous_item').eq(index).addClass('active tar_slide_right');
            }
        }
    });
    /*自动切换*/
    function autoSwitch(){
        var carous_item_active=$('.carous_item.active');
        var index=carous_item_active.index();
        index==$('.carous_item').length-1 ? index=0 : index++;
        $('.carous_item').removeClass('active cur_slide_left cur_slide_right tar_slide_left tar_slide_right').eq(index).addClass('active tar_slide_left');
        carous_item_active.addClass('cur_slide_left');
        $('.indicators span').removeClass('active').eq(index).addClass('active');
    }
    var T=setInterval(autoSwitch,3000);
    /*移入暂停自动切换*/
    $('.carous').hover(function(){
        clearInterval(T);
    },function(){
        T=setInterval(autoSwitch,3000);
    })
}();