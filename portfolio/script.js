$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 10){
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    //toggle menu/ navbar script (class goes active the the menu-btn and the i bar become active changing the icon in the css)
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Marketer", "Automation Specialist", "Funnel Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".num-2", {
        strings: ["Developer", "Marketer", "Automation Specialist", "Funnel Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });





    //owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav:false
            },
            600: {
                items: 2,
                nav:false
            },
            1000: {
                items: 3,
                nav:false
            }
        }
    });

});
