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

document.addEventListener('DOMContentLoaded', () => {
  // Grab the canvas
  const canvas = document.getElementById('moonCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  // Create scene & camera
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 3);

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  // GLTF loader
  const loader = new THREE.GLTFLoader();
  let planet = null;
  loader.load(
    'Assets/Planet.glb',
    gltf => {
      planet = gltf.scene;
      planet.position.set(0, 0, 0);
      planet.scale.set(3, 3, 3);
      camera.position.set(0,0,1.5);
      scene.add(planet);
    },
    undefined,
    err => console.error('GLB load error:', err)
  );

  // Resize handling
  window.addEventListener('resize', () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    if (planet) planet.rotation.y += 0.001;
    renderer.render(scene, camera);
  }
  animate();
});














