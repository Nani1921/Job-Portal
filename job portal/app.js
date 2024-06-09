// change navbar color
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll =$(window).scrollTop();
        if(scroll>150) {
            $(".navbar").css("background", "#222");
            $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px")
        }
        else {
            $(".navbar").css("background", "transparent");
            $(".navbar").css("box-shadow", "none");

        }
    })
});

// smooth scroll
$('#logo').on('click', () => {
    $('html,body').animate({
        scrollTop: 0
    },1000);
});

//Smooth Scrolling Using Navigation Menu
$('a[href*="#"]').on('click', function(e){
    $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    },1000);
    e.preventDefault();
});

// navbar mobile version
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active")
})
mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})

//swiper
$(".testmonial_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed:50,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    
});