/**
 * Created by bd on 2018/12/11.
 */
!function(){
    $('#nav_switch').click(
        function(){
            $('.nav').toggleClass('fold');
            $('.product_item').addClass('fold');
            $('.charge_item').addClass('fold');
            $('.nav_list em').addClass('fold');
        }
    );
    $('#product').click(
        function(){
            $('.product_item').toggleClass('fold');
            $(this).find('em').toggleClass('fold');
            $('.charge_item').addClass('fold');
            $('#charge').find('em').addClass('fold');
        }
    );
    $('#charge').click(
        function(){
            $('.charge_item').toggleClass('fold');
            $(this).find('em').toggleClass('fold');
            $('.product_item').addClass('fold');
            $('#product').find('em').addClass('fold');
        }
    );
    $('.product_item').click(
        function(){
            $(this).addClass('fold');
            $('#product').find('em').addClass('fold');
        }
    );
    $('.charge_item').click(
        function(){
            $(this).addClass('fold');
            $('#charge').find('em').addClass('fold');
        }
    );
}();