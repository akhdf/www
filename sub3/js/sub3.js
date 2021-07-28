$(document).ready(function(){ 
    var cnt=3;
    $('.content_area .investment:eq(0)').show();
    $('.content_area .tab1').css('background','rgba(19,101,187,.9)').css('color','#fff');
    $('.content_area .tab').each(function (index){ 
      $(this).click(function(e){
          e.preventDefault(); 
          $(".content_area .investment").hide(); 
          $(".content_area .investment:eq("+index+")").show();
          $('.tab').css('background','rgba(255,255,255,.7)').css('color','#333'); 
          $(this).css('background','rgba(19,101,187,.9)').css('color','#fff');
        }); 
    });
  }); 