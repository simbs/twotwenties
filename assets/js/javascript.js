//Picture element HTML5 shiv
document.createElement( "picture" );

// change bar to menu if window is smaller than 1024px
function checkSize() {
    if ($(window).width() <= 1024) {
        // dont add wrapper and button multiple times
        if (!$("nav ul.js-wrap").parent().is($(".wrapper"))) {
            $("nav ul.js-wrap").wrapAll('<div class="wrapper" />');
            $(".wrapper").before('<ul id="menu-button"><li><img src="/assets/img/menu-icon.png"></li></ul>');
            menubutton();
            $(".nav-primary").css("right", "-200px");
        }
    }
    // if window is larger, and the wrapper div is there, remove it and the button
    else if ($("nav ul.js-wrap").parent().is($(".wrapper"))) {
       // $(".nav-primary, .nav-buttons").css("right", "auto");
        $("#menu-button").remove();
        $("nav ul.js-wrap").unwrap();
        $(".nav-primary").css("right", "auto");
    }
}

// animate lateral menu on click
function menubutton() {
    $("#menu-button").click(function() {
        if (!$("#menu-button").hasClass("open")) {
            $("#menu-button").addClass("open");
            $(".wrapper").css("z-index", "7");
            $(".nav-primary").animate({right: "0"}, 200);
        }
        else {
            $(".nav-primary").animate({right: "-200px"}, 200);
            $("#menu-button").removeClass("open");
            setTimeout(function () {
                $(".wrapper").css("z-index", "-1");
            }, 200);
        }
    });
}

// animate dropdown menus
function submenus() {
    $(".dropdown").parent().click(function() {
        // if menu was closed
        if (!$(this).hasClass("selected")) {
            // close the other menus
            $(this).siblings().removeClass("selected");
            $(this).siblings().children("ul.dropdown").animate({opacity: "0"}, 200);
            
            // open this one
            $(this).addClass("selected");
            $(this).children("ul").animate({opacity: "1"}, 200);
        }
        // if menu was open
        else {
            // close it
            $(this).removeClass("selected");
            $(this).children("ul").animate({opacity: "0"}, 200);
        }
    });
}

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
    
    submenus();
    
    if ($("body").hasClass("post-template")) {
            // add class center to all images in posts
            $("img").addClass("center");
            // remove p's from around images in posts
            $(".art-body p > a > img").unwrap();
            $(".art-body p > img").unwrap();
            $(".art-body p > .instagblr").unwrap();
        }
        
    // add srcset to feat images in lists
    $(".js-srcset").attr("srcset", function () {
        var original = $(this).prop("src");
        if ($(this).prop("width") > $(this).prop("height")) {
            url1024 = original + " 1024w";
            url2048 = url1024.replace(/1024/g, '2048');
            url640 = url1024.replace(/1024/g, '640');
            url320 = url1024.replace(/1024/g, '320');
        }
        else {
            url1024 = original + " 683w";
            url2048 = url1024.replace(/1024/g, '2048').replace(/683/g, '1365');
            url640 = url1024.replace(/1024/g, '640').replace(/683/g, '427');
            url320 = url1024.replace(/1024/g, '320').replace(/683/g, '213');
        }
        var srcsetval = url2048 + ", " + url1024 + ", " + url640 + ", " + url320 ;
        return srcsetval;
        });
});