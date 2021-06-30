$(document).ready(function () {
    'use strict'

    // Elements DOM
    const doc = document.documentElement; 
    const formElementsInput = doc.querySelectorAll('.footer__form_input > input'); 
    const formElementInput = doc.querySelectorAll('.footer__form_input'); 
    let animItems = doc.querySelectorAll('._anim-items');

    // Animation input
    for (let i = 0; i < formElementsInput.length; i++) {
        formElementsInput[i].addEventListener('focus', function () {
            formElementInput[i].classList.add('_focus');
        })
        formElementsInput[i].addEventListener('blur', function () {
            formElementInput[i].classList.remove('_focus');
        })
    }

    // Scrolling animation
    if (animItems.length >=  0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() { 
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight ) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                }else {
                    if (!animItem.classList.contains('_anim-no-item')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }

    // Tabs
    const linksTabsElem = document.documentElement.querySelectorAll('.rates_link');
    const tabsElemItems = document.documentElement.querySelectorAll('.tabs-block');
    if (linksTabsElem) {
        for (let i = 0; i < linksTabsElem.length; i++) {
            linksTabsElem[i].addEventListener('click', function(e) {
                e.preventDefault();
                for (let i = 0; i < tabsElemItems.length; i++) {
                    tabsElemItems[i].classList.remove('_active');   
                    linksTabsElem[i].classList.remove('_active');  
                }
                tabsElemItems[i].classList.add('_active');
                linksTabsElem[i].classList.add('_active');
            });       
        }
    }

    // Slider retes
    $('.rates__slider').slick({
        fade: true,
    });
    // Slider clients
    $('.clients__slider').slick({});
    
    // Add class webp
    const bodyElem = doc.querySelector('body')
    function testWebp(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };
    testWebp(function(support) {
        if(support) {
            bodyElem.classList.add('webp');
        }
    })

    /* // Link animation scroll  
    // link - 1
    const linkScrollElem1 = document.documentElement.querySelector('.rates_link_1');
    const scrollElemServices = document.documentElement.querySelector('.services');
    linkScrollElem1.addEventListener('click', function () {
        scrollElemServices.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        });
    })
    
    // link - 2
    const linkScrollElem2 = document.documentElement.querySelector('.rates_link_2');
    const scrollElemClients = document.documentElement.querySelector('.clients');
    linkScrollElem2.addEventListener('click', function () {
        scrollElemClients.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        });
    })

    // link - 3
    const linkScrollElem3 = document.documentElement.querySelector('.rates_link_3');
    const scrollElemFiveSteps = document.documentElement.querySelector('.five__steps');
    linkScrollElem3.addEventListener('click', function () {
        scrollElemFiveSteps.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        });
    }) */
    
    // Visited link
    /* const ratesLinkElements_1 = doc.querySelector('.rates_link_1');
    const ratesLinkElements_2 = doc.querySelector('.rates_link_2');
    const ratesLinkElements_3 = doc.querySelector('.rates_link_3');
    ratesLinkElements_1.addEventListener('click', function () {
        ratesLinkElements_1.classList.toggle('_visited');
    });
    ratesLinkElements_2.addEventListener('click', function () {
        ratesLinkElements_2.classList.toggle('_visited');
    });
    ratesLinkElements_3.addEventListener('click', function () {
        ratesLinkElements_3.classList.toggle('_visited');
    }); */
});