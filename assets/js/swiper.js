const swiper = new swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000, // 3 segundos entre os slides
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // Pausa ao passar o mouse, retoma depois
        waitForTransition: false, // Evita travamentos na transição
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
