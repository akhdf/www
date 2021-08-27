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
            if(scroll>=0 && scroll<100){
                $(this).css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
                $('#headerArea .logo').css('background','url(../common/images/logo_w_320.png) center no-repeat');
            }else if(scroll>100){
                $(this).css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
                $('#headerArea .logo').css('background','url(../common/images/logo_b_320.png) center no-repeat');
            }
            on_off=false;    
       });  
       $(window).on('scroll',function(){//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();
        if(scroll>100){//스크롤300까지 내리면
                $('#headerArea').css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
                $('#headerArea .logo').css('background','url(../common/images/logo_b_320.png) center no-repeat');
              }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
                if(on_off==false){
                    $('#headerArea').css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
                    $('#headerArea .logo').css('background','url(../common/images/logo_w_320.png) center no-repeat');
                }
         };  
     });
   });  

//nav
   $(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)      
    $("#menu_btn").click(function() { //메뉴버튼 클릭시        
        var documentHeight =  $(document).height();
        $("#gnb").css('height',documentHeight);  
       if(op==false){
         $("#gnb").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
       }else{
         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
       } 
    });    
    
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false];
     var arrcount=onoff.length;     
     console.log(arrcount);     
     $('#gnb .depth1 h3 a').click(function(){
         var ind=$(this).parents('.depth1').index();         
         console.log(ind);         
        if(onoff[ind]==false){
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('slow');
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
          for(var i=0; i<arrcount; i++) onoff[i]=false; 
          onoff[ind]=true;               
        }else{
          $(this).parents('.depth1').find('ul').slideUp('fast'); 
          onoff[ind]=false;
        }
     });       
   });
 