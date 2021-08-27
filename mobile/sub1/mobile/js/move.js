// visual
$(document).ready(function() {
    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=4;   //이미지개수
    var cnt=1;   //이미지 순서
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    $('.btn1').css('background','rgba(19,101,187,.5)'); //첫번째 불켜
    $('.btn1').css('width','30');
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
 
    function moveg(){
     cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     for(var i=1;i<=imageCount;i++){
     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
     }
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
	 		                    
     for(var i=1;i<=imageCount;i++){
      $('.btn'+i).css('background','rgba(19,101,187,.5)'); //버튼불다꺼
      $('.btn'+i).css('width','16'); 
      }
      $('.btn'+cnt).css('background','#1365bb');//자신만 불켜
      $('.btn'+cnt).css('width','30');                
     if(cnt==imageCount)cnt=0;
     }
    timeonoff= setInterval( moveg , 4000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //setInterval( function(){처리코드} , 4000)
    
   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	var $target=$(event.target); //클릭한 버튼 $target
    clearInterval(timeonoff); //타이머 중지     
	for(var i=1;i<=imageCount;i++){
	    $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
         } 
	if($target.is('.btn1')){
	   cnt=1;
	}else if($target.is('.btn2')){
		cnt=2; 
	}else if($target.is('.btn3')){ 
		cnt=3; 
	}else if($target.is('.btn4')){
		cnt=4; 
    } 
	$('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		for(var i=1;i<=imageCount;i++){
		$('.btn'+i).css('background','#1365bb'); //버튼 모두불꺼
        $('.btn'+i).css('width','16');
		}
        $('.btn'+cnt).css('background','rgba(19,101,187,.5)');//자신 버튼만 불켜 
        $('.btn'+cnt).css('width','30');
        if(cnt==imageCount)cnt=0;  //카운트 초기화
        timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
        if(onoff==false){
		    onoff=true;
		$('.ps').css('background','url(images/pause-button.svg)');
	    }        
    });

//stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
    if(onoff==true){
	    clearInterval(timeonoff);   // stop버튼 클릭시
		$(this).css('background','url(images/play-button.svg)');
        onoff=false;   
	   }else{  // false
		timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
		$(this).css('background','url(images/pause-button.svg)');
		onoff=true; 
	}
  });
});

// //제품소개
// var b_cnt=1;
// var b_imgcnt=4;
// var b_p=[];
// var b_center=4;
// var b_per=19;

// $(document).ready(function(){
//     var startX, endX;
//     init_b_set();
//     $('.product_wrap').on('touchstart mousedown',function(e){
//      e.preventDefault();
//      startX=e.pageX || e.originalEvent.touches[0].pageX;
//     });
//     $('.product_wrap').on('touchend mouseup',function(e){
//         e.preventDefault();
//         endX=e.pageX || e.originalEvent.changedTouches[0].pageX;
//         if(startX<endX) {
//             if(b_cnt<1){b_cnt=b_imgcnt;}    // 오른쪽으로 터치드래그
//             b_toright();
//         }else{
//             if(b_cnt==(b_imgcnt+1)){b_cnt=1;}    // 왼쪽로 터치드래그
//             b_toleft();
//         }
//     });

//     $('.product_wrap a').click(function(e){
//         e.preventDefault();
//         if($(this).hasClass('b_next')){
//             b_toleft();
//         } else if($(this).hasClass('b_before')){
//             b_toright();
//         }
//     });
// });

// function init_b_set(){
//     for(var i=0; i<b_imgcnt; i++){
//         b_p[i]=b_center+b_per*i;
//         if (b_p[i]>b_center+parseInt(b_imgcnt/2)*b_per){
//             b_p[i]=b_center-b_per*(b_imgcnt-i);
//         };
//     }
// }

// function b_toright(){
//     for(var i=0; i<b_imgcnt; i++){
//         if(b_p[i]==(b_center+parseInt(b_imgcnt/2)*b_per)){
//             b_p[i]=b_center-b_per;
//         }else {b_p[i]+=b_per;}
//     };

//     for(var j=0; j<b_imgcnt; j++){
//         if(b_p[j]==b_center-b_per){
//             $('product_wrap div:eq('+j+')').fadeOut(1).css({left:b_p[j]+'%', transition:'all .4s ease-out'}).fadeIn(600);
//         } else {
//             $('.product_wrap div:eq('+j+')').css({left:b_p[j]+'%', transition:'all .5s ease-out'});
//         } 
//     };
// };

// function b_toleft(){
//     for(var i=0; i<b_imgcnt; i++){
//         if(b_p[i]==(b_center-b_per)){
//             b_p[i]=b_center+parseInt(b_imgcnt/2)*b_per;
//         }else {b_p[i]-=b_per;}
//     }
    
//     for(var j=0; j<b_imgcnt; j++){
//         if(b_p[j]==(b_center+parseInt(b_imgcnt/2)*b_per)){
//             $('.product_wrap div:eq('+j+')').css({left:b_p[j]+'%', transition:'none'});
//         } else {
//             $('.product_wrap div:eq('+j+')').css({left:b_p[j]+'%', transition:'all .5s ease-out'});
//         } 
//     };
// };





// //제품소개
// $(document).ready(function() {
//     var p_timeonoff; //자동기능 구현
//     var p_imageCount=3;  //이미지 개수 *** 
//     var p_cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
//     var p_direct=1;  //1씩 증가(+1)/감소(-1)
//     var p_position=0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
//     var p_onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때       
//       $('.btn01').css({'background':'#1365bb','width':'30'}); //첫번째 불켜
//       $('.product_list .a1').fadeIn('slow');  //첫번째 텍스트만 보여라~~~  
//    function p_moveg(){
//     p_cnt+=p_direct;  //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......//각각의 카운트에 대한 left 좌표값을 처리
//         if(p_cnt==1){p_position=0;}
//         else if(p_cnt==2){p_position=-640;}
//         else if(p_cnt==3){p_position=-1280;}                      
//         for(var i=1;i<=p_imageCount;i++){$('.btn0'+i).css({'background':'rgba(19,101,187,.5)','width':'16'}); //버튼불다꺼!!
//         }
//         $('.btn0'+p_cnt).css({'background':'#1365bb','width':'30'});//자신만 불켜                       
//         $('.product_01').animate({left:p_position},'slow'); //겔러리 무비의 left값을 움직여라~
//           if(p_cnt==p_imageCount)p_direct=-1;
//           if(p_cnt==1)p_direct=1;}  
//    p_timeonoff= setInterval(p_moveg,4000); //4초마다 자동기능   
//     $('.p_mbutton').click(function(event){  //각각의 버튼을 클릭한다면...  
//      var $target=$(event.target); //$target == this =>실제 클릭한 버튼
//      clearInterval(p_timeonoff);   //타이머를 중지!!  
//      for(var i=1;i<=p_imageCount;i++){
//           $('.btn0'+i).css({'background':'#1365bb','width':'16'}); //버튼 모두불꺼
//           $('.btn0'+p_cnt).css('width','16');}  
//      if($target.is('.btn01')){ //첫번째 버튼을 클릭했다면...
//             $('.product_inner_01').animate({left:0},'slow');
//             p_cnt=1;
//             p_direct=1;
//      }else if($target.is('.btn02')){ //두번째 버튼을 클릭했다면...
//             $('.product_inner_02').animate({left:-640},'slow');
//             p_cnt=2;
//      }else if($target.is('.btn03')){ //세번째 버튼을 클릭했다면...
//             $('.product_inner_03').animate({left:-1280},'slow');
//             p_cnt=3;
//             p_direct=-1;}  
//      $('.product_list .a'+p_cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
//     for(var i=1;i<=p_imageCount;i++){
//      $('.btn0'+i).css({'background':'#1365bb','width':'16'}); //버튼 모두불꺼
//      }
//      $('.btn0'+p_cnt).css({'background':'rgba(19,101,187,.5)','width':'30'});//자신 버튼만 불켜 
//     if(p_cnt==p_imageCount)p_cnt=0;  //카운트 초기화
//      p_timeonoff= setInterval(p_moveg ,4000); //타이머의 부활!!!
//      if(p_onoff==false){p_onoff=true;}  
//      });
//   });

$(document).ready(function () {
    var startX, endX;
    var position=0;
    $('.container').on('touchstart mousedown', function (e) {
        e.preventDefault();
        startX = e.pageX || e.originalEvent.touches[0].pageX;
        //  $('body').append(startX + '<br>');
    });
    $('.container').on('touchend mouseup', function (e){
        e.preventDefault();
        endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
        //  $('body').append(endX + '<br>');
        if(startX<endX){
            position+=100;
            if(position==100){position=0}            
            $('.product ul').css('left',position+'%');
        }else{
            position-=100;
            if(position==-400){position=-300}
            $('.product ul').css('left',position+'%');
        }
    });
});

// swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


