// script.js

// 1) Toggle mobile menu
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}
document
  .getElementById('menu-toggle')
  .addEventListener('click', toggleMenu);

// 2) Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // if mobile menu is open, close it
    if (!document
          .getElementById('mobile-menu')
          .classList.contains('hidden')) {
      toggleMenu();
    }
    // then smooth-scroll
    e.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// 3) Scroll watcher → toggles “scrolled” class once, outside the loop
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Honeycomb background-image helper
document.querySelectorAll(".honeycomb-item a").forEach(link => {
  const img = link.querySelector("img");
  if (img) {
    link.style.backgroundImage = `url('${img.src}')`;
  }
});

// Certifications swiper
// Initialize the certifications swiper
// wrap in DOMContentLoaded just to be 100% sure everything’s parsed
document.addEventListener('DOMContentLoaded', () => {
  const selector   = '.certifications-swiper';
  const realSlides = document.querySelectorAll(selector + ' .swiper-slide').length;

  const swiper = new Swiper('.certifications-swiper', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  navigation: {
    nextEl: '.certifications-swiper .swiper-button-next',
    prevEl: '.certifications-swiper .swiper-button-prev',
  },
  pagination: {
    el: '.certifications-swiper .swiper-pagination',
    clickable: true,
  },
  effect: 'coverflow',
  coverflowEffect: { rotate:50, stretch:0, depth:200, modifier:1, slideShadows:true },
});


  // jump straight to the first real slide (no animation)
  swiper.slideToLoop(0, 0);
});













