// visual
$(document).ready(function() {
    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=4;   //이미지개수
    var cnt=1;   //이미지 순서
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    $('.btn1').css('background','rgba(19,101,187,.5)'); //첫번째 불켜
    $('.btn1').css('height','30');
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
 
    function moveg(){
     cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     for(var i=1;i<=imageCount;i++){
     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
     }
     $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
	 		                    
     for(var i=1;i<=imageCount;i++){
      $('.btn'+i).css('background','rgba(19,101,187,.5)'); //버튼불다꺼
      $('.btn'+i).css('height','16'); 
      }
      $('.btn'+cnt).css('background','#1365bb');//자신만 불켜
      $('.btn'+cnt).css('height','30');                
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
        $('.btn'+i).css('height','16');
		}
        $('.btn'+cnt).css('background','rgba(19,101,187,.5)');//자신 버튼만 불켜 
        $('.btn'+cnt).css('height','30');
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

//index_scroll
$(window).on('scroll',function(e){
    e.preventDefault(); 
    $('#content section:eq(0)').addClass('boxMove');
    var scroll = $(window).scrollTop(); //스크롤상단 부터의 거리 계산해서 변수로 넘김
    var h1=$('#content section:eq(0)').offset().top;
    var h2=$('#content section:eq(1)').offset().top;
    var h3=$('#content section:eq(2)').offset().top;
    var h4=$('#content section:eq(3)').offset().top;
    if (scroll >= 1000 && scroll < h1) {
        $('#content section:eq(0)').addClass('boxMove');
      } else if (scroll >= h1 && scroll < h2) {
        $('#content section:eq(1)').addClass('boxMove');
      } else if (scroll >= h2 && scroll < h3) {
        $('#content section:eq(2)').addClass('boxMove');
      } else if (scroll >= h3 && scroll < h4) {
        $('#content section:eq(3)').addClass('boxMove');
      } else if (scroll >= h4) {
        $('#content section:eq(4)').addClass('boxMove');
    };
});


//제품소개
$(document).ready(function() {
    var p_timeonoff; //자동기능 구현
    var p_imageCount=3;  //이미지 개수 *** 
    var p_cnt=1;  //이미지 순서 1 2 3 4 5 4 3 2 1 2 3 4 5 ...
    var p_direct=1;  //1씩 증가(+1)/감소(-1)
    var p_position=0; //겔러리 무비의 left값 0 -1000 -2000 -3000 -4000
    var p_onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때       
      $('.btn01').css({'background':'#1365bb','width':'30'}); //첫번째 불켜
      $('.product_list .a1').fadeIn('slow');  //첫번째 텍스트만 보여라~~~  
   function p_moveg(){
    p_cnt+=p_direct;  //카운트가 1 2 3 4 5 4 3 2 1 2 3 4 5 ......//각각의 카운트에 대한 left 좌표값을 처리
        if(p_cnt==1){p_position=0;}
        else if(p_cnt==2){p_position=-1200;}
        else if(p_cnt==3){p_position=-2400;}                      
        for(var i=1;i<=p_imageCount;i++){$('.btn0'+i).css({'background':'rgba(19,101,187,.5)','width':'16'}); //버튼불다꺼!!
        }
        $('.btn0'+p_cnt).css({'background':'#1365bb','width':'30'});//자신만 불켜                       
        $('.product_01').animate({left:p_position},'slow'); //겔러리 무비의 left값을 움직여라~
          if(p_cnt==p_imageCount)p_direct=-1;
          if(p_cnt==1)p_direct=1;}  
   p_timeonoff= setInterval(p_moveg,4000); //4초마다 자동기능   
    $('.p_mbutton').click(function(event){  //각각의 버튼을 클릭한다면...  
     var $target=$(event.target); //$target == this =>실제 클릭한 버튼
     clearInterval(p_timeonoff);   //타이머를 중지!!  
     for(var i=1;i<=p_imageCount;i++){
          $('.btn0'+i).css({'background':'#1365bb','width':'16'}); //버튼 모두불꺼
          $('.btn0'+p_cnt).css('width','16');}  
     if($target.is('.btn01')){ //첫번째 버튼을 클릭했다면...
            $('.product_01').animate({left:0},'slow');
            p_cnt=1;
            p_direct=1;
     }else if($target.is('.btn02')){ //두번째 버튼을 클릭했다면...
            $('.product_01').animate({left:-1200},'slow');
            p_cnt=2;
     }else if($target.is('.btn03')){ //세번째 버튼을 클릭했다면...
            $('.product_01').animate({left:-2400},'slow');
            p_cnt=3;
            p_direct=-1;}  
     $('.product_list .a'+p_cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
    for(var i=1;i<=p_imageCount;i++){
     $('.btn0'+i).css({'background':'#1365bb','width':'16'}); //버튼 모두불꺼
     }
     $('.btn0'+p_cnt).css({'background':'rgba(19,101,187,.5)','width':'30'});//자신 버튼만 불켜 
    if(p_cnt==p_imageCount)p_cnt=0;  //카운트 초기화
     p_timeonoff= setInterval(p_moveg ,4000); //타이머의 부활!!!
     if(p_onoff==false){p_onoff=true;}  
     });
  });
  
  
//R&D  
$(document).ready(function(){   
    var timeonoff;
    var imageCount=4;   //총 리스트 개수
    var cnt=1;
    var left2,left3,left4; 
    // function move_gallery(){
    //         cnt++;  // 1 2 3 4 1 2 3 4 ......        
    //       if(cnt==1){left2=750; left3=900; left4=1050;
    //       }else if(cnt==2){left2=150; left3=900; left4=1050; 
    //       }else if(cnt==3){left2=150; left3=300; left4=1050;
    //       }else if(cnt==4){left2=150; left3=300; left4=450;}
    //         $('.rnd_inner .rnd02').animate({left:left2},300).clearQueue();
    //         $('.rnd_inner .rnd03').animate({left:left3},300).clearQueue();
    //         $('.rnd_inner .rnd04').animate({left:left4},300).clearQueue();}   
    //     timeonoff= setInterval(move_gallery, 2000);
     $('.rnd_inner ul li span').hover(function(event){  //각각의 투명버튼에 마우스를 올리면
          var $target=$(event.target);  // var $target=$(this);
          if($target.is('.rnd_buttonMenu01')){  //첫번째 투병버튼에 마우스를 올렸냐??
               left2=750; left3=900; left4=1050; cnt=1;
          }else if($target.is('.rnd_buttonMenu02')){ 
               left2=150; left3=900; left4=1050; cnt=2; 
          }else if($target.is('.rnd_buttonMenu03')){
               left2=150; left3=300; left4=1050; cnt=3; 
          }else if($target.is('.rnd_buttonMenu04')){
               left2=150; left3=300; left4=450; cnt=0;}
            $('.rnd_inner .rnd02').animate({left:left2},300).clearQueue();
            $('.rnd_inner .rnd03').animate({left:left3},300).clearQueue();
            $('.rnd_inner .rnd04').animate({left:left4},300).clearQueue();
           // timeonoff= setInterval(move_gallery, 2000);
 });
    $('.rnd_inner ul li a').hover(function(event){  //각각의 투명버튼에 마우스를 올리면
        var $target=$(event.target);  // var $target=$(this);
        if($target.is('.rnd_more01')){  //첫번째 투병버튼에 마우스를 올렸냐??
             left2=750; left3=900; left4=1050; cnt2=1; 
        }else if($target.is('.rnd_more02')){ 
             left2=150; left3=900; left4=1050; cnt2=2; 
        }else if($target.is('.rnd_more03')){
             left2=150; left3=300; left4=1050; cnt2=3; 
        }else if($target.is('.rnd_more04')){
             left2=150; left3=300; left4=450; cnt2=0;}
        $('.rnd_inner .rnd02').animate({left:left2},300).clearQueue();
        $('.rnd_inner .rnd03').animate({left:left3},300).clearQueue();
        $('.rnd_inner .rnd04').animate({left:left4},300).clearQueue();
       // timeonoff= setInterval(move_gallery, 2000);
});
});
//rnd hover
     $(document).ready(function () { 
     $('.rndevent').hover(function(){
      $(".boxcaption dt", this).css('width','700px').css('transition','.9s').clearQueue().stop().animate({left:'180px'},500);
       $(".boxcaption dd", this).css('display', 'block').css('left','750px').clearQueue().stop().animate({left:'180px'},500);
        $(".more", this).css('background','#1365bb').css('color','#fff').css('width','700px').css('transition','.9s').css('opacity','1').clearQueue().stop().animate({},500);  
    }, function() {
        $(".more", this).css('background','rgba(0,0,0,0)').css('color','#1365bb').css('width','150px').css('transition','.9s').stop().animate({},400);
     });
    });

//CSR
$(document).ready(function () {
    var ind = 0;
    //$('.csr_inner li:eq(0)').addClass('acco_box');
    $('.csr_inner ul li a').hover(function () {
        ind = $(this).index('.csr_inner ul li a');  // 0 1 2
        if (ind==1){
            $('.box' + (ind + 1)).css({'transition':'.9s','left': '50%','margin-left':'-600px','width': '1200px','opacity': 1,'z-index': 10}); 
        }else {
            $('.box' + (ind + 1)).css({'transition':'.9s','left': '0','width': '1200px','opacity': 1,'z-index': 10});
        }
        $(this).css({'background':'rgba(0,0,0,.3)','transition':'all 0.45s ease'});
        $('.csr_inner ul li dt').css('display', 'none');
        $(this).find('dt').css('display', 'block').stop().animate({top:'40%'}, 900);
        $(this).find('dd').css('display', 'block').stop().animate({top:'50%'}, 800); 
    }, function () {
        if (ind==1){
            $('.box' + (ind + 1)).css({'transition':'.9s','left': '50%','margin-left':'-200px','width': '400px','opacity': 1,'z-index': 1});  
       }else {
            $('.box' + (ind + 1)).css({'transition':'.9s','left':33.33*ind+'%','width':'400px','opacity':0,'z-index':1,});
       }   
        $(this).css('background', 'rgba(0,0,0,0)');
        $('.csr_inner ul li dt').css({'display':'block','color':'#fff'}).stop().animate({top:'40%'}, 900);
        $(this).find('dd').css('display', 'none').stop().animate({top:'100%'}, 800);
    });
});





