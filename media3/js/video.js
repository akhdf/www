$(document).ready(function() {
  var screenSize = $(window).width();
  var screenHeight = $(window).height();
  console.log(screenHeight);
  var current=false;    
  $("#content").css('margin-top',screenHeight);
  if( screenSize > 768){
    $("#videoBG").show();
    $("#imgBG").hide();
    $("#imgBG1").show();}
  if(screenSize <= 768){
    $("#videoBG").hide();
    $("#videoBG").attr('src','');
    $("#imgBG").show();
    $("#imgBG1").hide();
    $("#imgBG1").attr('src','');}    
  $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screenSize = $(window).width(); 
      screenHeight = $(window).height();        
      $("#content").css('margin-top',screenHeight);       
      if( screenSize >= 768 && current==false){        
      $("#videoBG").show();
      $("#videoBG").attr('src','images/aaa.mp4');
      $("#imgBG").hide();
      $("#imgBG1").show();
      $("#imgBG1").attr('src','images/aaa.mp4');
      current=true;
      }if(screenSize <= 768){
      $("#videoBG").hide();
      $("#videoBG").attr('src','');
      $("#imgBG").show();
      $("#imgBG1").hide();
      $("#imgBG1").attr('src','');
      current=false;} });             
      $('.down').click(function(){
              screenHeight = $(window).height();
              $('html,body').animate({'scrollTop':screenHeight-100}, 1000);});  
      $('.top_move').click(function(){    //상단으로 스르륵 이동합니다.
  $('html,body').stop().animate({'scrollTop':0},1000);}); //여기까지 공통js => commom js에 놓고 쓰면 됨      
});