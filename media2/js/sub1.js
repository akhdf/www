$(document).ready(function() {
    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=3;   //이미지개수
    var cnt=1;   //이미지 순서
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    $('.btn1').css({'background':'rgba(0, 0,0, .8)','color':'#fff','width':'48','padding-right':'13px','border': '1px solid #121418'}); //첫번째 불켜
    $('.header_container .link1').fadeIn('slow'); //첫번째 이미지 보인다..
    $('.button').click(function(event){  //각각의 버튼 클릭시
	var $target=$(event.target); //클릭한 버튼 $target
    clearInterval(timeonoff); //타이머 중지     
	for(var i=1;i<=imageCount;i++){$('.header_container .link'+i).hide();} 
	if($target.is('.btn1')){cnt=1;}
    else if($target.is('.btn2')){cnt=2;}
    else if($target.is('.btn3')){cnt=3;}
	$('.header_container .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		for(var i=1;i<=imageCount;i++){
		$('.btn'+i).css({'background':'rgba(255, 255, 255 , 0)','color':'#121418','width':'48','padding-right':'13px','border': '1px solid #121418'});} //버튼 모두불꺼
        $('.btn'+cnt).css({'background':'rgba(0, 0,0, .8)','color':'#fff','width':'48','padding-right':'13px','border': '1px solid #121418'});//자신 버튼만 불켜 
        if(cnt==imageCount)cnt=0;  //카운트 초기화
        timeonoff= setInterval(moveg , 4000); //타이머의 부활!!!
        if(onoff==false){onoff=true;}        
    });
});
