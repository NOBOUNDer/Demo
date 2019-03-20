(function () {
    $('div.read').click(function(){
        $(this).toggleClass('checked');
        $('button.reg').toggleClass('active')
    });
})();