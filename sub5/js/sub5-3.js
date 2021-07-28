 $(document).ready(function () { //한페이에서 메뉴 클릭시 원하는 위치로 스무스하게 이동시키는 코드 
    $('.slideMenu a').click(function(e){
       e.preventDefault();
       var value=0;
       if($(this).hasClass('link1')){  //첫번째 메뉴 버튼을 클릭하면
          value=900;// 해당 요소의 상단(top)까지의 거리 
       }else if($(this).hasClass('link2')){  //두번째 메뉴 버튼을 클릭하면
          value=3030;
       }
       $("html,body").stop().animate({"scrollTop":value},1250);
   });
 });
 
 
 $(document).ready(function () { 
       $('.slideMenu li:eq(0)').find('a').addClass('spy'); //첫번째 서브메뉴 활성화
       $('.content_area .company_intro:eq(0)').addClass('boxMove');  //첫번째 내용글 애니메이션 처리
       var scroll = $(window).scrollTop(); //스크롤상단 부터의 거리 계산해서 변수로 넘김
    $(window).on('scroll',function(){ //스크롤의 좌표가 변하면.. 스크롤 이벤트
       scroll = $(window).scrollTop();//스크롤top의 좌표를 담는다      
    //console.log(scroll);
       //sticky menu 처리
        if(scroll>860){ //smh대신 스크롤 높이값을 줘도 됨
            $('.slideMenu').addClass('navOn');  //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.slideMenu').removeClass('navOn');//스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();}    
            $('.slideMenu li').find('a').removeClass('spy'); //모든 서브메뉴 비활성화~ 불꺼!!!   
        //스크롤의 거리의 범위를 처리
        if(scroll>=900 && scroll<3030){
            $('.slideMenu li:eq(0)').find('a').addClass('spy');//첫번째 서브메뉴 활성화           
            $('.content_area .company_intro:eq(0)').addClass('boxMove');//첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=3030){
            $('.slideMenu li:eq(1)').find('a').addClass('spy');//두번째 서브메뉴 활성화           
             $('.content_area .company_intro:eq(1)').addClass('boxMove');
        } 
       });
 });
