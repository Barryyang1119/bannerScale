/**
 * Created by barry-yang on 2017/4/25.
 */
$(function () {
    /*动态设置banner高度*/
    function Wheight(obj,headerHeight) {
        $(obj).height($(window).height()-headerHeight);
    }
    Wheight($('.banner'),40);
    $(window).resize(function(){
        Wheight($('.banner'),40);
    });
     $(window).scroll(function(){
         var scale = $(this).scrollTop();
         var banner = $('.banner');
         var header = $('.header');
         if(scale === 0){
             banner.css({'background-size': '100% 100%'});
         }
         if(scale <=$(window).height()/2 && scale >= 40){
             header.css({'display':'none'});
         }else if(scale >= $(window).height()/2){
             header.css({'position':'fixed'}).slideDown('slow');
         }else{
             header.css({'position':'relative'}).show();
         }
         var numX = 100+scale/5+'%';
         var numY = 100+scale/5+'%';
        banner.css({'background-size': numX+" " +numY});
     });
});
