const swiper = new swiper(".swiper-container", {
  // Optional parameters
  direction: 'horizontal', // 'horizontal' or 'vertical' - horizontal is default
  loop: true, // Keep looping as requested

  // Configure autoplay with more options
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // Keep autoplaying even when user interacts
    pauseOnMouseEnter: true, // Pause autoplay on mouseover
  },

  // Adjust slides per view and space between
  slidesPerView: 1,
  spaceBetween: 20,

  // Add pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Make pagination bullets clickable
  },

  // Add navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Add scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true, // Hide scrollbar when not interacting
  },

  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    // You can add more breakpoints here
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  // Add accessibility features
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    // You can add more accessibility options here
  },

  // Enable lazy loading for images (requires specific HTML structure for images)
  lazy: {
    loadPrevNext: true, // Load next and previous images in advance
  },

  // Watch for changes in the DOM and re-initialize Swiper
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});