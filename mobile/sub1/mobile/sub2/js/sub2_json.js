

var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.

    var newContent = '';

    newContent+='<div class="company_intro con1">';
    newContent+='<h4 id="product_01">전문의약품</h4>';
    newContent+='<ul class="list">';
    for (var i = 0; i < responseObject.product.length; i++) {
    newContent+='<li>';
    newContent+='<a href="#">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.product[i].tit +'</dt>';
    newContent+='<dd>'+ responseObject.product[i].sub_t +'</dd>';
    newContent+='</dl>';
    newContent+='</a>';
    newContent+='<img src="'+ responseObject.product[i].img +'" ' + 'alt="">';
    newContent+='</li>';
}
    newContent+='</ul>';

    newContent+='<div class="product_inner">';
    for (var i = 0; i < responseObject.product_inner.length; i++) {
    newContent+='<div>';
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
    newContent+='<h4 id="product_02">일반의약품</h4>';
    newContent+='<ul class="list">';
    for (var i = 0; i < responseObject.product1.length; i++) {
    newContent+='<li>';
    newContent+='<a href="#">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.product1[i].tit1 +'</dt>';
    newContent+='<dd>'+ responseObject.product1[i].sub_t1 +'</dd>';
    newContent+='</dl>';
    newContent+='</a>';
    newContent+='<img src="'+ responseObject.product1[i].img1 +'" ' + 'alt="">';
    newContent+='</li>';
}
    newContent+='</ul>';

    newContent+='<div class="product_inner">';
    for (var i = 0; i < responseObject.product_inner1.length; i++){
    newContent+='<div>';
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
    newContent+='<h4 id="product_03">건강기능식품</h4>';
    newContent+='<ul class="list">';
    for (var i = 0; i < responseObject.product2.length; i++) {
    newContent+='<li>';
    newContent+='<a href="#">';
    newContent+='<dl>';
    newContent+='<dt>'+ responseObject.product2[i].tit2 +'</dt>';
    newContent+='<dd>'+ responseObject.product2[i].sub_t2 +'</dd>';
    newContent+='</dl>';
    newContent+='</a>';
    newContent+='<img src="'+ responseObject.product2[i].img2 +'" ' + 'alt="">';
    newContent+='</li>';
}
    newContent+='</ul>';

    newContent+='<div class="product_inner">';
    for (var i = 0; i < responseObject.product_inner2.length; i++) {
    newContent+='<div>';
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
    $('.list a').each(function(index){  // index=> 0 1 2
    $(this).addClass('btn');
         $('.product_inner a').addClass('close'); 
         $('.btn, .close').click(function(e){e.preventDefault()}); //링크로 강제이동 차단      
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

 $(document).ready(function(){ 
    var cnt=3;
    $('.content_area .company_intro:eq(0)').show();
    $('.content_area .tab1').css('background','rgba(19,101,187,.9)').css('color','#fff');
    $('.content_area .tab').each(function (index){ 
      $(this).click(function(e){
          e.preventDefault(); 
          $(".content_area .company_intro").hide(); 
          $(".content_area .company_intro:eq("+index+")").show();
          $('.tab').css('background','rgba(255,255,255,.7)').css('color','#333'); 
          $(this).css('background','rgba(19,101,187,.9)').css('color','#fff');
          });
       }); 
    });
  }; 
xhr.open('GET', 'data/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다
