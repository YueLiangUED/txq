(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //tab切换
    function tab($selector){
        var $lis = $selector.find('li');
        $lis.on('click',function (){
            var $index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active').end().parent().parent().nextAll('div').eq($index).addClass('bg').siblings('div').removeClass('bg');
        });
    }
    $.each($('#tab'),function (){
        tab($(this));
    });
    

});
