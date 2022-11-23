/*=======================================================================================================================================
EXCLUSIVE ON MoazzemHJesan
=========================================================================================================================================
Template Name   : MoazzemHJesan
Author          : Md. Moazzem Hossain Jesan
Website URL     : https://www.moazzemhjesan.tk
Patreon URL     : https://www.patreon.com/moazzemhjesan?fan_landing=true
Version         : 1.0
=========================================================================================================================================
Copyright (c) 2022 - MoazzemHJesan
=======================================================================================================================================*/

/*=======================================================================================================================================
JS INDEX
=========================================================================================================================================
01. loader

02. Initiate the aos.js

03. Back to top button

04. Sticky Navbar

05. Typed Initiate

06. Progressbar

07. Progressbar Counter Up

08. carousel

09. Portfolio filter
=========================================================================================================================================
JS INDEX
=======================================================================================================================================*/
(function ($){
    /******************************/
    /*********** loader ***********/
    /******************************/
    var loader=function(){setTimeout(function(){$("#loader").length>0&&$("#loader").removeClass("show")},1)};loader();
    /******************************/
    /*********** loader ***********/
    /******************************/

    /*******************************************/
    /*********** Initiate the aos.js ***********/
    /*******************************************/
    AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99});
    /*******************************************/
    /*********** Initiate the aos.js ***********/
    /*******************************************/

    /******************************************/
    /*********** Back to top button ***********/
    /******************************************/
    $(window).scroll(function(){$(this).scrollTop()>200?$(".back-to-top").fadeIn("slow"):$(".back-to-top").fadeOut("slow")});
    /******************************************/
    /*********** Back to top button ***********/
    /******************************************/

    /*************************************/
    /*********** Sticky Navbar ***********/
    /*************************************/
    $(window).scroll(function(){$(this).scrollTop()>0?$(".navbar").addClass("nav-sticky"):$(".navbar").removeClass("nav-sticky")});
    /*************************************/
    /*********** Sticky Navbar ***********/
    /*************************************/

    /**************************************/
    /*********** Typed Initiate ***********/
    /**************************************/
    var typed = new Typed('.typed-text',{
        strings:["Web Designer","Web Developer"],
        //typeSpeed: 0,
        //backSpeed: 0,
        smartBackspace: false, // true is a default
        backDelay: 1500,
        //startDelay: 1000,
        loop: true
    });
    /**************************************/
    /*********** Typed Initiate ***********/
    /**************************************/

    /***********************************/
    /*********** Progressbar ***********/
    /***********************************/
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
        $('.progress .progress-bar-1').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
        $('.progress .progress-bar-2').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
        $('.progress .progress-bar-3').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
        $('.progress .progress-bar-4').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
        $('.progress .progress-bar-5').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
        $('.progress .progress-bar-6').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    /***********************************/
    /*********** Progressbar ***********/
    /***********************************/

    /**********************************************/
    /*********** Progressbar Counter Up ***********/
    /**********************************************/
    $(".counterUp").counterUp({delay:10,time:480});
    /**********************************************/
    /*********** Progressbar Counter Up ***********/
    /**********************************************/

    /********************************/
    /*********** carousel ***********/
    /********************************/
    // $(".testimonials-carousel").owlCarousel({center:!0,autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:1}}});

    var owl=$(".owl-carousel");owl.owlCarousel({loop:!1,center:!0,nav:!0,margin:10,dots:!1,navText:["<< Prev","Next >>"],responsive:{0:{items:1},776:{items:1},777:{items:2},1185:{items:3}}});
    /********************************/
    /*********** carousel ***********/
    /********************************/

    /****************************************/
    /*********** Portfolio filter ***********/
    /****************************************/
    var portfolioIsotope=$(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});$("#portfolio-filter li").on("click",function(){$("#portfolio-filter li").removeClass("filter-active"),$(this).addClass("filter-active"),portfolioIsotope.isotope({filter:$(this).data("filter")})});
    /****************************************/
    /*********** Portfolio filter ***********/
    /****************************************/
})(jQuery);
