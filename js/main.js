/* Table of Contents
==================================================
# Navigation Height
# Counter
# Progress Bar
# EasyPieChart
# MagnificPopup
# onePageNav
# Sticky Nav
# Mobile Toggle Control

==================================================
*/

// -------------------------------------------------------------
//  Navigation Height 
// -------------------------------------------------------------

(function() {

    var height = $(window).height();
     $(".menu-one .navbar-nav").innerHeight(height);
    
}());    
           
// -------------------------------------------------------------
//Mobile Toggle Control
// -------------------------------------------------------------

$(function(){ 
    var navMain = $(".collapse");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});     
          
// -------------------------------------------------------------
// Counter
// -------------------------------------------------------------

(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    
    });

}());

// -------------------------------------------------------------
// Progress Bar
// -------------------------------------------------------------

(function () {

    $('.progress-content').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });
    $('.rating-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'),function(){
                $(this).css('width', $(this).attr('aria-valuenow')+'%');
            });
            $(this).unbind('inview');
        }
    });

}());




// -------------------------------------------------------------
// EasyPieChart
// -------------------------------------------------------------

(function () {

    $('.language-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                scaleColor: false,
                animate: 2000,
                onStep: function(from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
        }
    }); 
}());


// -------------------------------------------------------------
// MagnificPopup
// -------------------------------------------------------------

(function () {
    $('.portfolio-info a').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
}());

// -------------------------------------------------------------
// Navigation Scroll
// -------------------------------------------------------------

$(window).scroll(function(event) {
    Scroll();
}); 

$('.scroll a').click(function() {
    $(".navbar-collapse").collapse('hide')
    var dest = 0;
    if ($('.home-two .navbar').hasClass('navbar-fixed-top')) {
        dest = $(this.hash).offset().top - 30
    } else {
        dest = $(this.hash).offset().top - 90
    }

    $('html, body').animate({scrollTop: dest}, 1000);
    return false;
});

// User define function
function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   $(window).scrollTop();
    var rangeTop    =   100;
    var rangeBottom =   500;
    $('#mainmenu').find('.scroll a').each(function(){
        contentTop.push( $( $(this).attr('href') ).offset().top);
        contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
    })
    $.each( contentTop, function(i){
        if ( winTop > contentTop[i] - rangeTop ){
            $('#mainmenu li.scroll').removeClass('current').eq(i).addClass('current');
        }
    })

};
    
// -------------------------------------------------------------
//  Sticky Nav
// -------------------------------------------------------------
(function () {  
    function menuToggle(){
        var windowWidth = $(window).width();
        if(windowWidth > 991 ){
            $(window).on('scroll', function(){
                if( $(window).scrollTop()>690 ){
                    $('.home-two .navbar').addClass('navbar-fixed-top');
                    $('body').css('padding-top', '88px');
                } else {
                    $('.home-two .navbar').removeClass('navbar-fixed-top');
                    $('body').css('padding-top', '0');
                };
            });
        }else{
            
            $('.home-two .navbar').addClass('navbar-fixed-top');
                
        };  
    }

    menuToggle();
}()); 



