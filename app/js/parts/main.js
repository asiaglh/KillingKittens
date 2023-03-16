$(document).ready(function () {

const burger= document.querySelector(".header__burger");
const burgerNav= document.querySelector(".burger__menu");
const header=document.querySelector(".header");
const headerBody=document.querySelector(".header__body");
const headerLogo=document.querySelectorAll(".header__logo");
const navItem=document.querySelector(".nav__item");
const navBtnLogin=document.querySelector(".login")


if(burger) {
    burger.addEventListener("click", function BurgerMenu() {
        burger.classList.toggle("active");
        document.querySelector('body').classList.toggle("stopScroll");
        burgerNav.classList.toggle("active");
        header.classList.toggle("active");
        headerBody.classList.toggle("active");
        navItem.classList.toggle("active");
        navBtnLogin.classList.toggle("active");
        headerLogo.forEach(function (item) {
            item.classList.toggle("active")
            item.classList.toggle("inactive")
        })
    });
}



const menuItem=document.querySelectorAll(".menu__item")
const menuImg=document.querySelectorAll(".menuImg__item");
menuItem.forEach(function (item) {
    item.addEventListener("mouseenter",function() {
        menuImg.forEach(function (img){
            img.classList.remove("active");
            if(img.classList.contains("hls-video")){
                img.pause();
            }
            if(item.classList.contains(img.id)){
                img.classList.add('active');
            }
                if(img.classList.contains("hls-video")){
                        img.currentTime = 0;
                        img.play();
                }
        })
    })
})

const eventlinks = document.querySelectorAll(".eventNav__link");
const eventfons=document.querySelectorAll(".eventTitle__fon");
eventlinks.forEach(function (item){
    item.addEventListener("click", function EventFon(){
        eventfons.forEach(function(fon){
            if(fon.classList.contains(item.id)){
                fon.classList.add("active");
            }
            else fon.classList.remove("active");
        })
    })
});

new Swiper('.partyList__slider',{
    slidesPerView:4,
    spaceBetween:20,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints:{

        1350:{
            slidesPerView: 4.4,
        },
        768:{
            slidesPerView:3,
        },
        250:{
            slidesPerView:1.3,
        }
    }
});




new Swiper('.dress__slider',{
    slidesPerView: 4,
    spaceBetween: 5,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    breakpoints:{
        250:{
            slidesPerView:4,
        },
        340:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:3.5,
        },
        1440:{
            slidesPerView:4,
        },
        1600:{
            slidesPerView: 5,
        }
    }
});

new Swiper('.eventSlider',{
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    }
});


new Swiper('.tales__slider',{
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints:{
        250:{
            slidesPerView:1,
        }
    }
});



var accordion = (function(){

    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');

    // default settings
    var settings = {
        // animation speed
        speed: 400,

        // close all other accordion items if true
        oneOpen: false
    };

    return {
        // pass configurable object literal
        init: function($settings) {
            $accordion_header.on('click', function() {
                accordion.toggle($(this));
            });
            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');

            }

            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();

        },
        toggle: function($this) {

            if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                $this.closest('.js-accordion')
                    .find('> .js-accordion-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()
            }

            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();


    accordion.init({ speed: 300, oneOpen: true });

function mainScrollDown(){
    $('html, body').animate({
        scrollTop:$('.sexParties__info').offset().top-100
    }, 500)
}

   const mainScroll=document.querySelector('.main__scroll');
   if(mainScroll){
   mainScroll.onclick = mainScrollDown;
   }

function partnerScrollDown(){
    $('html, body').animate({
        scrollTop:$('.aboutMembers').offset().top-50
    }, 500)
}

const partnerScroll=document.querySelector('.partner__scroll');
if(partnerScroll){
    partnerScroll.onclick = partnerScrollDown;
}



const btnPass=document.querySelectorAll('.psw__visible');

btnPass.forEach(function (btn){
    btn.onclick = function () {
        let target = this.getAttribute('data-target'),
        inputPass = document.querySelector(target);
            if (inputPass.getAttribute('type') === 'password') {
                inputPass.setAttribute('type', 'text');
                btn.classList.add('active');
            } else {
                inputPass.setAttribute('type', 'password');
                btn.classList.remove('active');
            }
        }
})

    const showBtn=document.querySelectorAll(".show__btn");
    showBtn.forEach(function (btn){
        btn.onclick = function () {
            let btnAttr = this.getAttribute('data-show');
            document.querySelectorAll(".event__content").forEach(function (content){
                    if (content.getAttribute('data-show') === btnAttr) {
                        content.classList.remove('hidden');}
                })
        }
    })

let prevScroll
let lastShowPos
function MenuNavAnimate(){
    $(window).on("scroll", function() {
        const scrolled = $(window).scrollTop();
        const scrollBlock=$("#text1").offset().top-350;
        const footerTop=$(".footer").offset().top;
        if (scrolled >= scrollBlock) {
            $(".scrollToTop__btn").addClass("active")

            lastShowPos = scrolled

        } if (scrolled < scrollBlock) {
            $(".scrollToTop__btn").removeClass("active")
        }
        prevScroll = scrolled
    })
}

function ScrollToText() {
    const link = $(".manifestoNav__item");
    link.click(function () {
        $(this).addClass("focus");
        let i = (this.classList.contains('slider'));
        let elementClick = $(this).data("block");
        let destination = $(elementClick).offset().top - 100;
        if (i) {
            destination = $(elementClick).offset().top - 100;
        }
        $('body,html').animate({scrollTop: destination}, 400);
    })

    $(".manifestoText__item").each(function () {
        $(window).on('scroll', () => {
            if ($(window).scrollTop() > $(this).offset().top-170) {
                const long ="#" + $(this).attr('id').toString();
                $('[data-block]').removeClass("focus");
                $('[data-block]').each(function (){
                    if($(this).data("block")===long){
                        $(this).addClass("focus");
                    }
                })
            }
        })
    })
}

    let excist=$(".manifestoNav");
    if(excist.length){
        MenuNavAnimate();
        ScrollToText();
    }



function HeaderFon(){
    $(window).on("scroll", function() {
        const scrolls = $(window).scrollTop();
        const scrollHeader=$(".header__body").offset().bottom;
        if (scrolls > 100) {
            $(".header").addClass("fon")


        } if (scrolls < 100) {
            $(".header").removeClass("fon")
        }
    })
}

    if($(".header")) {
        HeaderFon();
    }

    function TheAppAnimate(){
        $(".appImg__img").addClass("animation")
    }
    if($(".appImg")){
        setTimeout(TheAppAnimate, 1500);
    }

    $("video.hls-video").each(function (index, elem) {
        //Load in videos via HLS
        if (Hls.isSupported()) {
            let hls = new Hls();
            hls.loadSource($(elem).attr("data-url"));
            hls.attachMedia(elem);

            elem.oncanplaythrough = function () {
                $(elem).addClass("show-video");
            };
        } else if (elem.canPlayType("application/vnd.apple.mpegurl")) {
            //For browsers that have built in HLS support, just change the src of the video tag.
            let videoSrc = $(elem).attr("data-url");
            $(elem).attr("src", videoSrc);

            elem.oncanplaythrough = function () {
                $(elem).addClass("show-video");
            };
        } else {
            console.log("Please include HLS.js on the page");
        }
    });


    var scrolledAnime = false
    if(excist.length) {
        $('.scrollToTop__btn').on('click', () => {
            scrolledAnime = false
            $('.manifestoNav.mobile').removeClass('active')
            $('.manifestoInfo, .manifestoImg img').show()
            $('.manifestoText').css('padding-top', '0px')
            window.scrollTo(0, 0);
        })
    }

    if($(".main.partner").length){
        $(".header").addClass("white");
        $(".nav__item").addClass("white");
        $(".header__burger").addClass("white");
        const width = $(window).width()
        if(width < 1025){
            $(".partnerTitle").attr("data-header", "black");
            $(".header").removeClass("white");
            $(".header__body").removeClass("white");

        }
    }


        const ItemsBlack = $("body").find("[data-header='black']");
        const ItemsWhite = $("body").find("[data-header='white']");

        $(window).on('scroll', () => {
            ItemsBlack.each(function () {
                if ($(window).scrollTop() > $(this).offset().top) {
                    $(".header").removeClass("white");
                }
            })

            ItemsWhite.each(function () {
                if ($(window).scrollTop() > $(this).offset().top) {
                    $(".header").addClass("white");
                    $(".nav__item").addClass("white");
                    $(".header__burger").addClass("white");
                }
            })
        })


});
