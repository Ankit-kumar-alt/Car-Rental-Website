    // Locomotive Scroll Initialization
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true
    });

    // GSAP Animations
    gsap.from(".nav", { 
        y: -100, 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out" 
    });

    gsap.from(".home .left", {
        x:-100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from(".home .right img", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power2.out"
    });

    gsap.from(".loc-sec .main-sec", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".loc-sec",
            start: "top 75%",
            end: "bottom 25%",
            scrub: true
        }
    });

    // Swiper.js for car section
    const swiper = new Swiper('.main-sec', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

