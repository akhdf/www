$(document).ready(function () {
	var answer = $('.faq .answer');  //모든 질문 답변 리스트
	//article.find('.a').slideUp(100); // 모든 답변 닫아라
    answer.find('span').html('<i class="fas fa-chevron-down"></i>');
	$('.faq .answer .trigger').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myAnswer = $(this).parents('.answer'); //클릭한 해당 list 	
        if(myAnswer.hasClass('hide')){   //클릭한 해당 리스트의 상태가 hide냐?? 답변이 닫혀있냐??
            answer.find('.a').slideUp(100); //모든 답변을 닫아라
            answer.removeClass('show').addClass('hide'); // 모든 리스트를 hide교체
            answer.find('span').html('<i class="fas fa-chevron-down"></i>');
            myAnswer.removeClass('hide').addClass('show');  // show로 바꾼다 
            myAnswer.find('.a').slideDown(100);  //해당 리스트의 답변을 열어라  
            myAnswer.find('span').html('<i class="fas fa-chevron-up"></i>');
        } else {  // 'show' 답변이 열려있냐??
            myAnswer.removeClass('show').addClass('hide');  // hide로 바꾼다 
            myAnswer.find('.a').slideUp(100);  //해당 리스트의 답변을 닫아라  
            myAnswer.find('span').html('<i class="fas fa-chevron-down"></i>');
        }  
  });
  
  //모두 여닫기 처리
  $('.all').toggle(function(e){
        e.preventDefault(); 
        answer.find('.a').slideDown(100);
        answer.removeClass('hide').addClass('show');
        answer.find('span').html('<i class="fas fa-chevron-up"></i>');
        $(this).html('모두닫기 &nbsp; <i class="fas fa-chevron-up"></i>');
  },function(e){
        e.preventDefault(); 
        answer.find('.a').slideUp(100);
        answer.removeClass('show').addClass('hide');
        answer.find('span').html('<i class="fas fa-chevron-down"></i>');
        $(this).html('모두열기 &nbsp; <i class="fas fa-chevron-down"></i>');
  });
}); 
