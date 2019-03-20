/**
 * Created by bd on 2018/12/11.
 */
!function(){
    /*自动轮播*/
    function autoPlay(){
        var sl_item_active=$('.slide_item.active');
        var index=sl_item_active.index();
        index==$('.slide_item').length-1 ? index=0 : index++;
        $('.slide_item').removeClass('active cur_slide_left cur_slide_right tar_slide_left tar_slide_right').eq(index).addClass('active tar_slide_left');
        sl_item_active.addClass('cur_slide_left');
    }
    var T=setInterval(autoPlay,3000);
    /*左滑动*/
    $('.slider').swipeLeft(
        function(){
            clearInterval(T);
            autoPlay();
            T=setInterval(autoPlay,3000);
        }
    );
    /*右滑动*/
    $('.slider').swipeRight(
        function(){
            clearInterval(T);
            var sl_item_active=$('.slide_item.active');
            var index=sl_item_active.index();
            index==0 ? index=$('.slide_item').length-1 : index--;
            $('.slide_item').removeClass('active cur_slide_left cur_slide_right tar_slide_left tar_slide_right').eq(index).addClass('active tar_slide_right');
            sl_item_active.addClass('cur_slide_right');
            T=setInterval(autoPlay,3000);
        }
    );
}();