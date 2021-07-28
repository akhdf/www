

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';

    newContent+='<div class="company_intro con1">';
    newContent+='<h3 id="product_01">전문의약품</h3>';
    newContent+='<ul class="list">';
    for (var i = 0; i < responseObject.product.length; i++) {
    newContent+='<li>';
    newContent+='<a href="#">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.product[i].tit +'</dt>';
    newContent+='<dd>'+ responseObject.product[i].sub_t +'</dd>';
    newContent+='</dl>';
    newContent+='</a>';
    newContent+='<span></span>';
    newContent+='<span></span>';
    newContent+='<img src="'+ responseObject.product[i].img +'" ' + 'alt="">';
    newContent+='</li>';
}
    newContent+='</ul>';

    newContent+='<div class="product_inner">';
    for (var i = 0; i < responseObject.product_inner.length; i++) {
    newContent+='<div>';
    newContent+='<img src="'+ responseObject.product_inner[i].inner_img +'" ' + 'alt="">';
    newContent+='<p class="main_text">'+ responseObject.product_inner[i].tit2 +'</p>';
    newContent+='<p class="sub_text_01">'+ responseObject.product_inner[i].sub_t2 +'</p>';
    newContent+='<table>';
    newContent+='<tbody>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner[i].th1 +'</th>';
    newContent+='<td>'+ responseObject.product_inner[i].td1 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner[i].th2 +'</th>';
    newContent+='<td>'+ responseObject.product_inner[i].td2 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner[i].th3 +'</th>';
    newContent+='<td>'+ responseObject.product_inner[i].td3 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner[i].th4 +'</th>';
    newContent+='<td>'+ responseObject.product_inner[i].td4 +'</td>';
    newContent+='</tr>';
    newContent+='</tbody>';
    newContent+='</table>';
    newContent+='<a href="#" title="창닫기">'+'<span></span>'+responseObject.product_inner[i].close+'</a>';
    newContent+='</div>';
    }
    newContent+='</div>';
    newContent+='</div>';

    newContent+='<div class="company_intro con2">';
    newContent+='<h3 id="product_02">일반의약품</h3>';
    newContent+='<ul class="list">';
    for (var i = 0; i < responseObject.product1.length; i++) {
    newContent+='<li>';
    newContent+='<a href="#">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.product1[i].tit1 +'</dt>';
    newContent+='<dd>'+ responseObject.product1[i].sub_t1 +'</dd>';
    newContent+='</dl>';
    newContent+='</a>';
    newContent+='<span></span>';
    newContent+='<span></span>';
    newContent+='<img src="'+ responseObject.product1[i].img1 +'" ' + 'alt="">';
    newContent+='</li>';
}
    newContent+='</ul>';

    newContent+='<div class="product_inner">';
    for (var i = 0; i < responseObject.product_inner1.length; i++){
    newContent+='<div>';
    newContent+='<img src="'+ responseObject.product_inner1[i].inner_img1 +'" ' + 'alt="">';
    newContent+='<p class="main_text">'+ responseObject.product_inner1[i].tit2_1 +'</p>';
    newContent+='<p class="sub_text_01">'+ responseObject.product_inner1[i].sub_t2_1 +'</p>';
    newContent+='<table>';
    newContent+='<tbody>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner1[i].th1_1 +'</th>';
    newContent+='<td>'+ responseObject.product_inner1[i].td1_1 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner1[i].th2_1 +'</th>';
    newContent+='<td>'+ responseObject.product_inner1[i].td2_1 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner1[i].th3_1 +'</th>';
    newContent+='<td>'+ responseObject.product_inner1[i].td3_1 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner1[i].th4_1 +'</th>';
    newContent+='<td>'+ responseObject.product_inner1[i].td4_1 +'</td>';
    newContent+='</tr>';
    newContent+='</tbody>';
    newContent+='</table>';
    newContent+='<a href="#" title="창닫기">'+'<span></span>'+responseObject.product_inner1[i].close_1+'</a>';
    newContent+='</div>';
    }
    newContent+='</div>';
    newContent+='</div>';

    newContent+='<div class="company_intro con3">';
    newContent+='<h3 id="product_03">건강기능식품</h3>';
    newContent+='<ul class="list">';
    for (var i = 0; i < responseObject.product2.length; i++) {
    newContent+='<li>';
    newContent+='<a href="#">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.product2[i].tit2 +'</dt>';
    newContent+='<dd>'+ responseObject.product2[i].sub_t2 +'</dd>';
    newContent+='</dl>';
    newContent+='</a>';
    newContent+='<span></span>';
    newContent+='<span></span>';
    newContent+='<img src="'+ responseObject.product2[i].img2 +'" ' + 'alt="">';
    newContent+='</li>';
}
    newContent+='</ul>';

    newContent+='<div class="product_inner">';
    for (var i = 0; i < responseObject.product_inner2.length; i++) {
    newContent+='<div>';
    newContent+='<img src="'+ responseObject.product_inner2[i].inner_img2 +'" ' + 'alt="">';
    newContent+='<p class="main_text">'+ responseObject.product_inner2[i].tit2_2 +'</p>';
    newContent+='<p class="sub_text_01">'+ responseObject.product_inner2[i].sub_t2_2 +'</p>';
    newContent+='<table>';
    newContent+='<tbody>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner2[i].th1_2 +'</th>';
    newContent+='<td>'+ responseObject.product_inner2[i].td1_2 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner2[i].th2_2 +'</th>';
    newContent+='<td>'+ responseObject.product_inner2[i].td2_2 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner2[i].th3_2 +'</th>';
    newContent+='<td>'+ responseObject.product_inner1[i].td3_1 +'</td>';
    newContent+='</tr>';
    newContent+='<tr>';
    newContent+='<th scope="row">'+ responseObject.product_inner2[i].th4_2 +'</th>';
    newContent+='<td>'+ responseObject.product_inner2[i].td4_2 +'</td>';
    newContent+='</tr>';
    newContent+='</tbody>';
    newContent+='</table>';
    newContent+='<a href="#" title="창닫기">'+'<span></span>'+responseObject.product_inner2[i].close_2+'</a>';
    newContent+='</div>';
    }
    newContent+='</div>';
    newContent+='</div>';
    // newContent+='<script src="../sub2/sub2.js"></script>' 
    document.getElementById('operate').innerHTML = newContent;

//이너박스
$(document).ready(function(){ 
        $('.list a').each(function (index) {  // index=> 0 1 2
        $(this).addClass('btn');
             $('.product_inner a').addClass('close'); 
             $('.btn, .close').click(function (e) { e.preventDefault() }); //링크로 강제이동 차단      
             $(this).click(function () {   //각각의 a를 클릭하면 
                 $('.content_area #product_box').show(); //백그라운드 깔아주는거
                 $('.product_inner div:eq(' + index + ')').fadeIn('fast');
             });
                 $('.content_area #product_box, .close').click(function () { // 상세창 바깥영역을 클릭하면 
                 $('.content_area #product_box').hide();  // 바깥영역 안보이게
                 $('.product_inner div:eq(' + index + ')').hide(); // 상세창 안보이게
             });             
         });
     });

     //sub2_1
$(document).ready(function () {
    $('.slideMenu a').click(function(e){
        e.preventDefault();
            var value=0;
            if($(this).hasClass('link1')){value= $('.company_intro:eq(0)').offset().top;}
            else if($(this).hasClass('link2')){value= $('.company_intro:eq(1)').offset().top-200;}
            else if($(this).hasClass('link3')){value= $('.company_intro:eq(2)').offset().top-200;}
            else if($(this).hasClass('link4')){value= $('.company_intro:eq(3)').offset().top-200;}
            $("html,body").stop().animate({"scrollTop":value},1250);});
    }); 

$(document).ready(function () { //한페이에서 메뉴 클릭시 원하는 위치로 스무스하게 이동시키는 코드 
$('.slideMenu a').click(function(e){
  e.preventDefault();
  var value=0;
  if($(this).hasClass('link1')){  //첫번째 메뉴 버튼을 클릭하면
     value=900;// 해당 요소의 상단(top)까지의 거리 
  }else if($(this).hasClass('link2')){  //두번째 메뉴 버튼을 클릭하면
     value=2100;
  }else if($(this).hasClass('link3')){
     value=3300;} 
  $("html,body").stop().animate({"scrollTop":value},1250);
});
});

$(document).ready(function () { 
  $('.slideMenu li:eq(0)').find('a').addClass('spy'); //첫번째 서브메뉴 활성화
  $('.content_area .company_intro:eq(0)').addClass('boxMove');  //첫번째 내용글 애니메이션 처리
  var scroll = $(window).scrollTop(); //스크롤상단 부터의 거리 계산해서 변수로 넘김
$(window).on('scroll',function(){ //스크롤의 좌표가 변하면.. 스크롤 이벤트
   scroll = $(window).scrollTop();//스크롤top의 좌표를 담는다      
  // console.log(scroll);
   //  $('.text').text(scroll);//스크롤 좌표의 값을 찍는다.  
  //sticky menu 처리
   if(scroll>860){ //smh대신 스크롤 높이값을 줘도 됨
       $('.slideMenu').addClass('navOn');  //스크롤의 거리가 350px 이상이면 서브메뉴 고정
       $('header').hide();
   }else{
       $('.slideMenu').removeClass('navOn');//스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
       $('header').show();}    
   $('.slideMenu li').find('a').removeClass('spy'); //모든 서브메뉴 비활성화~ 불꺼!!!   
   //스크롤의 거리의 범위를 처리
   if(scroll>=900 && scroll<2100){
       $('.slideMenu li:eq(0)').find('a').addClass('spy');//첫번째 서브메뉴 활성화           
       $('.content_area .company_intro:eq(0)').addClass('boxMove');//첫번째 내용 콘텐츠 애니메이
   }else if(scroll>=2100 && scroll<3300){
       $('.slideMenu li:eq(1)').find('a').addClass('spy');//두번째 서브메뉴 활성화           
        $('.content_area .company_intro:eq(1)').addClass('boxMove');
   }else if(scroll>=3300){
       $('.slideMenu li:eq(2)').find('a').addClass('spy');//세번째 서브메뉴 활성화           
        $('.content_area .company_intro:eq(2)').addClass('boxMove');
   }
//          //스크롤의 거리의 범위를 처리
//       if(scroll>=0 && scroll<h1){
//          $('.content_area .company_intro:eq(0)').addClass('boxMove');
//       }else if(scroll>=h1 && scroll<h2){
//          $('.content_area .company_intro:eq(1)').addClass('boxMove');
//       }else if(scroll>=h2){
//          $('.content_area .company_intro:eq(2)').addClass('boxMove');
//       }    
  });
});
};
xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다
