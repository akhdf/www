$(document).ready(function() {
    var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)      
    $("#menu_btn").click(function() { //메뉴버튼 클릭시        
        var documentHeight =  $(document).height();
        $("#gnb").css('height',documentHeight);  
       if(op==false){
         $("#gnb").animate({right:0,opacity:1}, 'fast');
         $('#headerArea').addClass('mn_open');
         op=true;
       }else{
         $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
         $('#headerArea').removeClass('mn_open');
         op=false;
       } 
    });    
    
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false];
     var arrcount=onoff.length;     
     console.log(arrcount);     
     $('#gnb .depth1>a').click(function(){
         var ind=$(this).parents('.depth1').index();         
         console.log(ind);         
        if(onoff[ind]==false){
         //$('#gnb .depth1 ul').hide();
         $(this).next('ul').slideDown('slow');
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
          for(var i=0; i<arrcount; i++) onoff[i]=false; 
          onoff[ind]=true;               
        }else{
          $(this).next('ul').slideUp('fast'); 
          onoff[ind]=false;
        }
     });       
   });
 
 