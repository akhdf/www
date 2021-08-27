//top
$(document).ready(function(){
    $('.topMove').hide();
    $(window).on('scroll',function(e){
        e.preventDefault();
        var scroll = $(window).scrollTop();
        if(scroll>100){$('.topMove').fadeIn('slow').clearQueue();}
        else{$('.topMove').fadeOut('fast').clearQueue();}            
     });
    $('.topMove').click(function(e){
           e.preventDefault();
           $("html,body").stop().animate({"scrollTop":0},1000).clearQueue();         
  });
  });

  //head
$(document).ready(function () {
    var smh=$('.visual').height();
    var on_off=false;//false(안오버)  true(오버)  
    $('#headerArea').scroll(function(){
       var scroll = $(window).scrollTop(); 
            if(scroll>=0 && scroll<500){
                $(this).css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
                $('#headerArea .logo').css('background','url(./images/logo_w_320.png) center no-repeat');
            }else if(scroll>500){
                $(this).css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
                $('#headerArea .logo').css('background','url(./images/logo_b_320.png) center no-repeat');
            }
            on_off=false;    
       });  
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();
        if(scroll>500){//스크롤300까지 내리면
                $('#headerArea').css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
                $('#headerArea .logo').css('background','url(./images/logo_b_320.png) center no-repeat');
              }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
                if(on_off==false){
                    $('#headerArea').css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
                    $('#headerArea .logo').css('background','url(./images/logo_w_320.png) center no-repeat');
                }
         };  
     });
   });  