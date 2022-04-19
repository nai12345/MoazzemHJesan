/*=======================================================================================================================================
EXCLUSIVE ON MoazzemHJesan
=========================================================================================================================================
Template Name   : MoazzemHJesan
Author          : Md. Moazzem Hossain Jesan
Website URL     : https://www.moazzemhjesan.tk
Patreon URL     : https://www.patreon.com/moazzemhjesan?fan_landing=true
Version         : 0.1
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

10. JQery Filter
=========================================================================================================================================
JS INDEX
=======================================================================================================================================*/
(function ($) {
    "use strict";
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
    $(window).scroll(function(){$(this).scrollTop()>200?$(".back-to-top").fadeIn("slow"):$(".back-to-top").fadeOut("slow")}),$(".back-to-top").click(function(){return $("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1});
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
    if(1==$(".hero .hero-text h2").length)var typed_strings=$(".hero .hero-text .typed-text").text(),typed=new Typed(".hero .hero-text h2",{strings:typed_strings.split(", "),typeSpeed:100,backSpeed:20,smartBackspace:!1,loop:!0});
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
    $( function() {
        var
            // Progressbar Counter Up 1
            progressbar_cuonter_up = $( "#progressbar_cuonter_up" ), 
            progress_label_cuonter_up = $( ".progress_label_cuonter_up" ),
            // Progressbar Counter Up 1

            // Progressbar Counter Up 2
            progressbar_cuonter_up_2 = $( "#progressbar_cuonter_up_2" ),
            progress_label_cuonter_up_2 = $( ".progress_label_cuonter_up_2" ),
            // Progressbar Counter Up 2

            // Progressbar Counter Up 3
            progressbar_cuonter_up_3 = $( "#progressbar_cuonter_up_3" ),
            progress_label_cuonter_up_3 = $( ".progress_label_cuonter_up_3" ),
            // Progressbar Counter Up 3

            // Progressbar Counter Up 4
            progressbar_cuonter_up_4 = $( "#progressbar_cuonter_up_4" ),
            progress_label_cuonter_up_4 = $( ".progress_label_cuonter_up_4" ),
            // Progressbar Counter Up 4

            // Progressbar Counter Up 5
            progressbar_cuonter_up_5 = $( "#progressbar_cuonter_up_5" ),
            progress_label_cuonter_up_5 = $( ".progress_label_cuonter_up_5" ),
            // Progressbar Counter Up 5

            // Progressbar Counter Up 6
            progressbar_cuonter_up_6 = $( "#progressbar_cuonter_up_6" ),
            progress_label_cuonter_up_6 = $( ".progress_label_cuonter_up_6" ),
            // Progressbar Counter Up 6

            // Progressbar Counter Up 7
            progressbar_cuonter_up_7 = $( "#progressbar_cuonter_up_7" ),
            progress_label_cuonter_up_7 = $( ".progress_label_cuonter_up_7" ),
            // Progressbar Counter Up 7

            // Progressbar Counter Up 8
            progressbar_cuonter_up_8 = $( "#progressbar_cuonter_up_8" ),
            progress_label_cuonter_up_8 = $( ".progress_label_cuonter_up_8" ),
            // Progressbar Counter Up 8

            // Progressbar Counter Up 9
            progressbar_cuonter_up_9 = $( "#progressbar_cuonter_up_9" ),
            progress_label_cuonter_up_9 = $( ".progress_label_cuonter_up_9" ),
            // Progressbar Counter Up 9

            // Progressbar Counter Up 10
            progressbar_cuonter_up_10 = $( "#progressbar_cuonter_up_10" ),
            progress_label_cuonter_up_10 = $( ".progress_label_cuonter_up_10" ),
            // Progressbar Counter Up 10

            // Progressbar Counter Up 11
            progressbar_cuonter_up_11 = $( "#progressbar_cuonter_up_11" ),
            progress_label_cuonter_up_11 = $( ".progress_label_cuonter_up_11" ),
            // Progressbar Counter Up 11

            // Progressbar Counter Up 12
            progressbar_cuonter_up_12 = $( "#progressbar_cuonter_up_12" ),
            progress_label_cuonter_up_12 = $( ".progress_label_cuonter_up_12" );
            // Progressbar Counter Up 12
        
        // Skills 
        // Progressbar Counter Up 1
        progressbar_cuonter_up.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up.text( progressbar_cuonter_up.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up.text( "85%" );
            }
        });
        // Progressbar Counter Up 1

        // Progressbar Counter Up 2
        progressbar_cuonter_up_2.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_2.text( progressbar_cuonter_up_2.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_2.text( "85%" );
            }
        });
        // Progressbar Counter Up 2

        // Progressbar Counter Up 3
        progressbar_cuonter_up_3.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_3.text( progressbar_cuonter_up_3.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_3.text( "100%" );
            }
        });
        // Progressbar Counter Up 3

        // Progressbar Counter Up 4
        progressbar_cuonter_up_4.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_4.text( progressbar_cuonter_up_4.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_4.text( "85%" );
            }
        });
        // Progressbar Counter Up 4

        // Progressbar Counter Up 5
        progressbar_cuonter_up_5.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_5.text( progressbar_cuonter_up_5.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_5.text( "85%" );
            }
        });
        // Progressbar Counter Up 5
        // Skills

        // Upcoming Project
        // Progressbar Counter Up 6
        progressbar_cuonter_up_6.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_6.text( progressbar_cuonter_up_6.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_6.text( "70%" );
            }
        });
        // Progressbar Counter Up 6

        // Progressbar Counter Up 7
        progressbar_cuonter_up_7.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_7.text( progressbar_cuonter_up_7.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_7.text( "80%" );
            }
        });
        // Progressbar Counter Up 7

        // Progressbar Counter Up 8
        progressbar_cuonter_up_8.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_8.text( progressbar_cuonter_up_8.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_8.text( "90%" );
            }
        });
        // Progressbar Counter Up 8

        // Progressbar Counter Up 9
        progressbar_cuonter_up_9.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_9.text( progressbar_cuonter_up_9.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_9.text( "50%" );
            }
        });
        // Progressbar Counter Up 9

        // Progressbar Counter Up 10
        progressbar_cuonter_up_10.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_10.text( progressbar_cuonter_up_10.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_10.text( "80%" );
            }
        });
        // Progressbar Counter Up 10

        // Progressbar Counter Up 11
        progressbar_cuonter_up_11.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_11.text( progressbar_cuonter_up_11.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_11.text( "50%" );
            }
        });
        // Progressbar Counter Up 11

        // Progressbar Counter Up 12
        progressbar_cuonter_up_12.progressbar({
            value: false,
            change: function() {
                progress_label_cuonter_up_12.text( progressbar_cuonter_up_12.progressbar( "value" ) + "%" );
            },
            complete: function() {
                progress_label_cuonter_up_12.text( "50%" );
            }
        });
        // Progressbar Counter Up 12
        // Upcoming Project
    
        function progress() {
            var
                // Progressbar Counter Up 1
                val = progressbar_cuonter_up.progressbar( "value" ) || 0;
                // Progressbar Counter Up 1

                // Progressbar Counter Up 2
                val = progressbar_cuonter_up_2.progressbar( "value" ) || 0;
                // Progressbar Counter Up 2

                // Progressbar Counter Up 3
                val = progressbar_cuonter_up_3.progressbar( "value" ) || 0;
                // Progressbar Counter Up 3

                // Progressbar Counter Up 4
                val = progressbar_cuonter_up_4.progressbar( "value" ) || 0;
                // Progressbar Counter Up 4

                // Progressbar Counter Up 5
                val = progressbar_cuonter_up_5.progressbar( "value" ) || 0;
                // Progressbar Counter Up 5

                // Progressbar Counter Up 6
                val = progressbar_cuonter_up_6.progressbar( "value" ) || 0;
                // Progressbar Counter Up 6

                // Progressbar Counter Up 7
                val = progressbar_cuonter_up_7.progressbar( "value" ) || 0;
                // Progressbar Counter Up 7

                // Progressbar Counter Up 8
                val = progressbar_cuonter_up_8.progressbar( "value" ) || 0;
                // Progressbar Counter Up 8

                // Progressbar Counter Up 9
                val = progressbar_cuonter_up_9.progressbar( "value" ) || 0;
                // Progressbar Counter Up 9

                // Progressbar Counter Up 10
                val = progressbar_cuonter_up_10.progressbar( "value" ) || 0;
                // Progressbar Counter Up 10

                // Progressbar Counter Up 11
                val = progressbar_cuonter_up_11.progressbar( "value" ) || 0;
                // Progressbar Counter Up 11

                // Progressbar Counter Up 12
                val = progressbar_cuonter_up_12.progressbar( "value" ) || 0;
                // Progressbar Counter Up 12
         
                // Progressbar Counter Up 1
                progressbar_cuonter_up.progressbar( "value", val + 2 );
                // Progressbar Counter Up 1

                // Progressbar Counter Up 2
                progressbar_cuonter_up_2.progressbar( "value", val + 2 );
                // Progressbar Counter Up 2

                // Progressbar Counter Up 3
                progressbar_cuonter_up_3.progressbar( "value", val + 2 );
                // Progressbar Counter Up 3

                // Progressbar Counter Up 4
                progressbar_cuonter_up_4.progressbar( "value", val + 2 );
                // Progressbar Counter Up 4

                // Progressbar Counter Up 5
                progressbar_cuonter_up_5.progressbar( "value", val + 2 );
                // Progressbar Counter Up 5

                // Progressbar Counter Up 6
                progressbar_cuonter_up_6.progressbar( "value", val + 2 );
                // Progressbar Counter Up 6

                // Progressbar Counter Up 7
                progressbar_cuonter_up_7.progressbar( "value", val + 2 );
                // Progressbar Counter Up 7

                // Progressbar Counter Up 8
                progressbar_cuonter_up_8.progressbar( "value", val + 2 );
                // Progressbar Counter Up 8

                // Progressbar Counter Up 9
                progressbar_cuonter_up_9.progressbar( "value", val + 2 );
                // Progressbar Counter Up 9

                // Progressbar Counter Up 10
                progressbar_cuonter_up_10.progressbar( "value", val + 2 );
                // Progressbar Counter Up 10

                // Progressbar Counter Up 11
                progressbar_cuonter_up_11.progressbar( "value", val + 2 );
                // Progressbar Counter Up 11

                // Progressbar Counter Up 12
                progressbar_cuonter_up_12.progressbar( "value", val + 2 );
                // Progressbar Counter Up 12
   
            if ( val < 99 ) {
                setTimeout( progress, 0 );
            }
        }
     
        setTimeout( progress, 0 );
    });
    /**********************************************/
    /*********** Progressbar Counter Up ***********/
    /**********************************************/

    /********************************/
    /*********** carousel ***********/
    /********************************/
    $(".testimonials-carousel").owlCarousel({center:!0,autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:1}}});
    $(".owl-carousel").owlCarousel({center:!0,loop:!0,margin:10,nav:!0,responsive:{0:{items:1},776:{items:1},777:{items:2},1185:{items:3}}});
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

    /************************************/
    /*********** JQery Filter ***********/
    /************************************/
    $("#search_box").on("keyup",function(){var e=$(this).val().toLowerCase();$("#search_items .search_item").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(e)>-1)})}),$(".search_box_2").on("keyup",function(){var e=$(this).val().toLowerCase();$(".search_items_2 .search_item_2").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(e)>-1)})});
    /************************************/
    /*********** JQery Filter ***********/
    /************************************/
})(jQuery);
