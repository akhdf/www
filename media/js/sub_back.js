//   $(document).ready(function() {
//   	var screenSize = $(window).width();
// 	var screenHeight = $(window).height();
//  	$("#content").css('margin-top',screenHeight);
//    $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
//       screenSize = $(window).width(); 
//       screenHeight = $(window).height();		  
// 	  $("#content").css('margin-top',screenHeight);		 
//     }); 
		
$(document).ready(function() {
    var screenSize = $(window).width();
    var screenHeight = $(window).height();
    $("#content").css('margin-top',screenHeight);      
    if( screenSize > 768){
       $('.videoBox img').attr('src','./sub_images/back.jpg');}
  if(screenSize <= 768){
       $('.videoBox img').attr('src','./sub_images/back_.jpg');}    
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screenSize = $(window).width(); 
    screenHeight = $(window).height();        
    $("#content").css('margin-top',screenHeight);       
    if( screenSize > 768){
       $('.videoBox img').attr('src','./sub_images/back.jpg');}
    if(screenSize <= 768){
       $('.videoBox img').attr('src','./sub_images/back_.jpg');}
  }); 
  
  	$('.down').click(function(){
		screenHeight = $(window).height();
		$('html,body').animate({'scrollTop':screenHeight-100}, 1000);
	});
		
	$('.top_move').click(function(){//상단으로 스르륵 이동합니다.
	 $('html,body').stop().animate({'scrollTop':0},1000); 
	}); //여기까지 공통js => commom js에 놓고 쓰면 됨		  
	});
  
	// $(document).ready(function(){    
	// 	const smh=$('.videoBox').height()-$('#headerArea').height();
	//    const on_off=false;   
	// 	  $(window).bind('scroll',function(){
	// 		   var scroll = $(window).scrollTop();
	// 		   if(scroll>smh-100){
	// 			   $('#headerArea').css('background','rgba(0,0,0,.9)');                         
	// 		   }else{
	// 			   if(on_off===false){
	// 				   $('#headerArea').css('background','rgba(0,0,0,0)');
	// 				   $('#gnb ul li a').css('color','#fff');}
	// 		   };          
	// 		});
	// 	  $(this).siblings('li').removeClass('current');
	// 	});


// 네비
$(document).ready(function(){    
   const hamburger = document.querySelector(".menuOpen");
   const navLinks = document.querySelector(".mainMenu");
   const links = document.querySelectorAll(".mainMenu li");

   hamburger.addEventListener('click', function(e){
      e.preventDefault();
      // $('.mainMenu').css('display','block');
   
      //Animate Links
      navLinks.classList.toggle("open");
      links.forEach(function(link){
         link.classList.toggle("fade");
      });
   
      //Hamburger Animation
      hamburger.classList.toggle("toggle");
   });
});