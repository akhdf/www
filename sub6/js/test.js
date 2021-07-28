$(document).ready(function(){
    var eachBox=$('.business_Box');
    var $target=$(event);
    
    //선택 초기화하고 첫번째꺼만 열림
    eachBox.removeClass('select');
    eachBox.first().addClass('select');
    
    eachBox.mouseenter(function(){//마우스 올리면
        
        
        if($target.parent().is('.link1')){//산업자재 아이콘이미지 바뀌고
           
           $target.parent('li').siblings('.link2').find('.icon').attr('src','./images/content1/business_img1_2.jpg');
                       $target.parent('li').siblings('.link3').find('.icon').attr('src','./images/content1/business_img1_3.jpg'); 
                                 $target.parent('li').siblings('.link4').find('.icon').attr('src','./images/content1/business_img1_4.jpg');
            
        }else if($target.parent().is('.link2')){//필름 아이콘이미지 바뀌고
        
           $target.parent('li').siblings('.link1').find('.icon').attr('src','./images/content1/business_img1_1.jpg');
                       $target.parent('li').siblings('.link3').find('.icon').attr('src','./images/content1/business_img1_3.jpg');
                                  $target.parent('li').siblings('.link4').find('.icon').attr('src','./images/content1/business_img1_4.jpg');
            
        }else if($target.parent().is('.link3')){//화학 아이콘이미지 바뀌고
           
           $target.parent('li').siblings('.link1').find('.icon').attr('src','./images/content1/business_img1_1.jpg')
           ;            $target.parent('li').siblings('.link2').find('.icon').attr('src','./images/content1/business_img1_2.jpg'); 
                     $target.parent('li').siblings('.link4').find('.icon').attr('src','./images/content1/business_img1_4.jpg');
            
        }else if($target.parent().is('.link4')){//패션 아이콘이미지 바뀌고
           
           $target.parent('li').siblings('.link1').find('.icon').attr('src','./images/content1/business_img1_1.jpg');
                       $target.parent('li').siblings('.link3').find('.icon').attr('src','./images/content1/business_img1_2.jpg'); 
                                 $target.parent('li').siblings('.link2').find('.icon').attr('src','./images/content1/business_img1_3.jpg');   
        }       
       $target.parent('li').animate({width:550},400,'easeOutQuad').clearQueue().addClass('select');//선택박스 width값 바뀌며 슬라이드
       $target.parent('li').siblings().animate({width:183},400,'easeOutQuad').clearQueue().removeClass('select'); //나머지박스 원상복구
 }) ;  
});