

window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true,
        nextButton: '.next',
        prevButton: '.back'
    });
};

$(document).ready(function () {
    // var screenSize = $(window).width();
    // function screenW() {
    //     if (screenSize > 1024) {
    //         $('.series1').attr('src', 'images/series1.gif');
    //         $('.series2').attr('src', 'images/series2.gif');
    //         $('.series3').attr('src', 'images/series3.gif');
    //        // $('.trailers1').attr('src', 'images/trailers1.jpg');
    //         $('.trailers2').attr('src', 'images/trailers4.jpg');
    //     } else if (screenSize > 640) {
    //         $('.series1').attr('src', 'images/series1_1024.jpg');
    //         $('.series2').attr('src', 'images/series2_1024.jpg');
    //         $('.series3').attr('src', 'images/series3_1024.jpg');
    //        // $('.trailers1').attr('src', 'images/trailers1.jpg');
    //         $('.trailers2').attr('src', 'images/trailers4.jpg');
    //     } else {
    //         $('.series1').css('src', 'images/series1.gif');
    //         $('.trailers2').attr('src', 'images/trailers4.jpg');
    //       //  $('.trailers1').attr('src', 'images/trailers1.jpg');
    //     }
    // }
    // screenW(); //함수호출  
    $(window).resize(function () {
        screenSize = $(window).width();
        // screenW(); //함수호출
    });

    // 네비
    const hamburger = document.querySelector(".menuOpen");
    const navLinks = document.querySelector(".mainMenu");
    const links = document.querySelectorAll(".mainMenu li");
    
    hamburger.addEventListener('click', function(e){
       e.preventDefault();
       // $('.mainMenu').css('display','block');
    
       //Animate Links
       navLinks.classList.toggle("open");
       links.forEach(function(link){
          link.classList.toggle("fade");
       });
    
       //Hamburger Animation
       hamburger.classList.toggle("toggle");
    });
});





