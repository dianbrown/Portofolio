// Toggle mobile menu
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}
document
  .getElementById('menu-toggle')
  .addEventListener('click', toggleMenu);

// Smooth scrolling for anchor links
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

// Scroll watcher → toggles “scrolled” class once, outside the loop
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
// wrap in DOMContentLoaded just to be sure everything’s parsed
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


document.addEventListener("DOMContentLoaded", () => {
  new WOW({
    boxClass:     'wow',            
    animateClass: 'animate__animated', // Animate.css v4 base class
    offset:       50,              
    mobile:       true,              
    live:         true               
  }).init();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('canvas.starfield').forEach(canvas => {
    const ctx = canvas.getContext('2d');
    let stars = [];
    let lastW = 0;
    let lastH = 0;

    function resizeStars() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      // Only re-generate if BOTH width AND height have changed by more than a threshold
      if ( Math.abs(w - lastW) < 50 && Math.abs(h - lastH) < 50 ) {
        return;
      }
      lastW = w; lastH = h;

      canvas.width  = w;
      canvas.height = h;
      stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.3 + 0.1
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFF';
      for (let s of stars) {
        s.x -= s.speed;
        if (s.x < 0) s.x = canvas.width;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    // Only re-generate on orientation changes…
    window.addEventListener('orientationchange', resizeStars);

    // …and on real viewport resizes, but debounced + thresholded
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeStars, 200);
    });

    // Initial setup
    resizeStars();
    draw();
  });
});













