//head
$(document).ready(function () {
  var smh=$('.visual').height();
  var on_off=false;//false(안오버)  true(오버)  
  $('#headerArea').mouseenter(function(){
    $(this).css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
    $('.dropdownmenu li a').css('color','rgba(0,0,0,1)'); 
    $('#headerArea .logo').css('background','url(../common/images/header_logo_b.png) center no-repeat'); 
    on_off=true;
  });
  $('#headerArea').mouseleave(function(){
     var scroll = $(window).scrollTop(); 
          if(scroll>=0 && scroll< 200){
              $(this).css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
              $('.dropdownmenu li a').css('color','rgba(255,255,255,1)');
              $('#headerArea .logo').css('background','url(../common/images/header_logo_w.png) center no-repeat');
          }else if(scroll>200){
              $(this).css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
              $('.dropdownmenu li a').css('color','rgba(0,0,0,1)');
              $('#headerArea .logo').css('background','url(../common/images/header_logo_b.png) center no-repeat');
          }
          on_off=false;    
     });  
     $(window).on('scroll',function(){//스크롤의 거리가 발생하면
      var scroll = $(window).scrollTop();
      if(scroll>200){//스크롤300까지 내리면
              $('#headerArea').css({'background':'rgba(255,255,255,1)','border-bottom':'1px solid #ccc','box-shadow':'0 0 10px #999'});
              $('.dropdownmenu li a').css('color','rgba(0,0,0,1)');
              $('#headerArea .logo').css('background','url(../common/images/header_logo_b.png) center no-repeat');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){
                  $('#headerArea').css({'background':'rgba(255,255,255,0)','border-bottom':'none','box-shadow':'none'});
                  $('.dropdownmenu li a').css('color','rgba(255,255,255,1)');
                  $('#headerArea .logo').css('background','url(../common/images/header_logo_w.png) center no-repeat');
              }
       };  
   });
  });  

 
  //2댑스
$(document).ready(function () {
$('ul.dropdownmenu').hover(
  function() { 
     $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
     $('#headerArea').animate({height:370},'fast').clearQueue();
  },function() {
     $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
     $('#headerArea').animate({height:200},'fast').clearQueue();
});

//tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
      $('ul.dropdownmenu li.menu ul').fadeIn('normal');
      $('#headerArea').animate({height:370},'fast').clearQueue();
   });

$('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
      $('ul.dropdownmenu li.menu ul').hide();
$('#headerArea').animate({height:200},'fast').clearQueue();
  });
});

//top
$(document).ready(function(){
  $('.topMove').hide();
  $(window).on('scroll',function(e){
      e.preventDefault();
      var scroll = $(window).scrollTop();
      if(scroll>500){$('.topMove').fadeIn('slow').clearQueue();}
      else{$('.topMove').fadeOut('fast').clearQueue();}            
   });
  $('.topMove').click(function(e){
         e.preventDefault();
         $("html,body").stop().animate({"scrollTop":0},1000).clearQueue();         
});
});

//family site
$(document).ready(function() {
  $('.footer_family .site_more').toggle(function(){
     $('.footer_family .site_list').show();
  }, function(){
     $('.footer_family .site_list').hide();
  });
    $('.footer_family .site_more').bind('focus', function () {        
             $('.footer_family .site_list').show();	
      });
      $('.footer_family .site_list li:last').find('a').bind('blur', function () {        
             $('.footer_family .site_list').hide();
      });  
});

//검색창
$(document).ready(function () {
  $('.top_menu li a:eq(2) ').each(function(){ 
       $(this).click(function () {   //각각의 a를 클릭하면 
           $('.header_inner #box').show(); //백그라운드 깔아주는거
           $('.inner .product_search').fadeIn('fast');
       });
           $('.header_inner #box, .close , .inner .product_search_bnt').click(function () { // 상세창 바깥영역을 클릭하면 
           $('.header_inner #box').hide();  // 바깥영역 안보이게
           $('.inner .product_search').hide(); // 상세창 안보이게
       });              
   });
});



