 //4_1
$(document).ready(function () { //스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();  //스크롤 top의 좌표를 담는다           
        $('.text').text(scroll);   //스크롤 좌표의 값을 찍는다.
         //스크롤의 거리의 범위를 처리             
        if(scroll>2250 && scroll<3000){
           $('.content_area .content_01').addClass('boxMove');
        }else if(scroll>=3000 && scroll<3800){
           $('.content_area .content_02').addClass('boxMove');
        }else if(scroll>=3800){
           $('.content_area .content_03').addClass('boxMove');
        }    
    });
  });
