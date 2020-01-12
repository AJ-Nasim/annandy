(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        
        // sticky nav
           $(window).scroll(function(){
            if($(this).scrollTop()>200){
                $('header').addClass("sticky")
            }
            else{
                $('header').removeClass("sticky")
            }
           })


         $('.menu-area').meanmenu({
            meanMenuContainer: 'header', 
        }); 

 
        $('.message-btn').click(function(){
            $('.message-box').toggleClass('active')
        });
        $('.message-btn').click(function(){
            $('.message-btn').toggleClass('rotate')
        });





        $(".hero-slider").owlCarousel({
            items:1,
            loop:true,
            autoplay:true
        });

        $(".services-slider").owlCarousel({
        	items:1,
        	loop:true,
            autoplay:true
        });

        $(".breand-carousel").owlCarousel({
        	items:5,
        	loop:true, 
            autoplay:true, 
            nav:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:5, 
                    loop:true
                }
            } 
        });

    });


    jQuery(window).load(function(){


    });


}(jQuery));	