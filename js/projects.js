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

05. Portfolio filter

06. JQery Filter

07. carousel

08. Back to top button smooth scroll

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

    /****************************************/
    /*********** Portfolio filter ***********/
    /****************************************/
    var portfolioIsotope=$(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});$("#portfolio-filter li").on("click",function(){$("#portfolio-filter li").removeClass("filter-active"),$(this).addClass("filter-active"),portfolioIsotope.isotope({filter:$(this).data("filter")})});
    /****************************************/
    /*********** Portfolio filter ***********/
    /****************************************/

    /************************************/
    /*********** JQery Filter ***********/
    /************************************/
    $("#search_box").on("keyup",function(){var e=$(this).val().toLowerCase();$(".search_items .search_item").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(e)>-1)})});
    /************************************/
    /*********** JQery Filter ***********/
    /************************************/

    /********************************/
    /*********** carousel ***********/
    /********************************/
    var owl=$(".owl-carousel");owl.owlCarousel({loop:!1,nav:!0,margin:10,dots:!1,autoHeight:!0,navText:["<< Prev","Next >>"],responsive:{0:{items:1},600:{items:1},960:{items:1},1200:{items:1}}});
    /********************************/
    /*********** carousel ***********/
    /********************************/

    /********************************************************/
    /*********** Back to top button smooth scroll ***********/
    /********************************************************/
    $("a").on("click",function(t){if(""!==this.hash)return t.preventDefault(),$("html, body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},400),!1});
    /********************************************************/
    /*********** Back to top button smooth scroll ***********/
    /********************************************************/
})(jQuery);