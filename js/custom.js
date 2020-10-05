/*global $,console*/
$(function () {
    "use strict";
    
    var winH = $(window).height(),
        navH = $(".navbar").innerHeight(),
        upperH = $(".upper-bar").innerHeight();
        
    $(".slider, .carousel-item").height(winH - (navH + upperH));
    
    
    //shuffle li
    $(".featured-work ul li").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
        
        
        //trigger shuffle
        if ($(this).data("class") === "all") {
            
            $(".featured-work .images .col-md-3").css("opacity", "1");
            
        } else {
            
            $(".featured-work .images .col-md-3").css("opacity", ".09");
            $($(this).data("class")).parent(".col-md-3")
                .css("opacity", "1");
        }
    });
    

});
/*
















*/