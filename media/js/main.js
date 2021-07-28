$(document).ready(function() {
    var screenSize = $(window).width();
      var screenHeight = $(window).height();
    var current=false;
    
      $("#content").css('margin-top',screenHeight);
      
    if( screenSize > 768){
      $("#videoBG").show();
      $("#imgBG").hide();
    }
  if(screenSize <= 768){
      $("#videoBG").hide();
      $("#videoBG").attr('src','');
      $("#imgBG").show();
    }    
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    screenSize = $(window).width(); 
    screenHeight = $(window).height();        
        $("#content").css('margin-top',screenHeight);       
    if( screenSize >= 768 && current==false){        
      $("#videoBG").show();
      $("#videoBG").attr('src','images/aaa.mp4');
      $("#imgBG").hide();
      current=true;
    }
    if(screenSize <= 768){
      $("#videoBG").hide();
      $("#videoBG").attr('src','');
      $("#imgBG").show();
      current=false;
    }
  }); 
            
      $('.down').click(function(){
            screenHeight = $(window).height();
            $('html,body').animate({'scrollTop':screenHeight-100}, 1000);
      });
  
      $('.top_move').click(function(){
    //상단으로 스르륵 이동합니다.
 $('html,body').stop().animate({'scrollTop':0},1000);}); //여기까지 공통js => commom js에 놓고 쓰면 됨      
});

// $(document).ready(function(){    
//   const smh=$('.videoBox').height()-$('#headerArea').height();
//  const on_off=false;   
//     $(window).bind('scroll',function(){
//          var scroll = $(window).scrollTop();
//          if(scroll>smh-100){
//              $('#headerArea').css('background','rgba(0,0,0,.9)');                         
//          }else{
//              if(on_off===false){
//                  $('#headerArea').css('background','rgba(0,0,0,0)');
//                  $('#gnb ul li a').css('color','#fff');}
//          };          
//       });
//     $(this).siblings('li').removeClass('current');
//   });


window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true,
        nextButton: '.next',
        prevButton: '.back'
    });
};

$(document).ready(function () {
    var screenSize = $(window).width();
    function screenW() {
        if (screenSize > 1024) {
            $('.series1').attr('src', 'images/series1.jpg');
            $('.series2').attr('src', 'images/series2.jpg');
            $('.series3').attr('src', 'images/series3.jpg');
           // $('.trailers1').attr('src', 'images/trailers1.jpg');
            $('.trailers2').attr('src', 'images/trailers4.jpg');

        } else if (screenSize > 640) {
            $('.series1').attr('src', 'images/series1_1024.jpg');
            $('.series2').attr('src', 'images/series2_1024.jpg');
            $('.series3').attr('src', 'images/series3_1024.jpg');
           // $('.trailers1').attr('src', 'images/trailers1.jpg');
            $('.trailers2').attr('src', 'images/trailers4.jpg');
        } else {
            $('.series1').css('src', 'images/series1.jpg');
            $('.trailers2').attr('src', 'images/trailers4.jpg');
          //  $('.trailers1').attr('src', 'images/trailers1.jpg');
        }
    }
    screenW(); //함수호출  
    $(window).resize(function () {
        screenSize = $(window).width();
        screenW(); //함수호출
    });

    // var current = 0;
    // $(window).resize(function () {
    //     var screenSize = $(window).width(); //브라우저의 넓이
    //     if (screenSize > 1024) { //모바일이상
    //         $(".mainMenu").show(); //모바일이상 해상도에선 무조건 보여라!
    //         current = 1; //모바일 이상의 해상도가 되면 1!
    //     }
    //     if (current == 1 && screenSize <= 1024) {
    //         $(".mainMenu").hide();
    //         current = 0; //모바일 해상도일 경우 0!
    //     }
    // });

// 네비
const hamburger = document.querySelector(".menuOpen");
const navLinks = document.querySelector(".mainMenu");
const links = document.querySelectorAll(".mainMenu li");

hamburger.addEventListener('click', ()=>{
    // $('.mainMenu').css('display','block');

   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
});



// $(document).ready(function () {//스크롤 이벤트    
//     $(window).on('scroll', function () {
//         var scroll = $(window).scrollTop();
//         var screenwidth = $(window).width();
//         //console.log(scroll);
//         if(screenwidth>640){
//         if (scroll >= 300 && scroll < 1300) {
//                 $('.about h3').css({'bottom': 0,'opacity': 1}),1000; 
//                 $('.about p').css({'bottom': 0,'opacity': 1}),2500; 
//             }else{
//             $('.about h3').css({'bottom': -800,'opacity': 0}),1000;
//             $('.about p').css({'bottom': -1000,'opacity': 0}),2500;
//         };
//         if (scroll >= 1500 && scroll < 2800) {
//             $('.character h3').css({'bottom': 0,'opacity': 1}),1000; 
//             $('.character p').css({'bottom': 0,'opacity': 1}),2500; 
//         }else{
//         $('.character h3').css({'bottom': -1000,'opacity': 0}),1000;
//         $('.character p').css({'bottom': -900,'opacity': 0}),2500;
//     };
//       }
//       else{
//       $('.about h3').css({'bottom': 0,'opacity': 1}); 
//       $('.about p').css({'bottom': 0,'opacity': 1});
//       $('.character h3').css({'bottom': 0,'opacity': 1}); 
//       $('.character p').css({'bottom': 0,'opacity': 1}); 
//     };
// });
// });
