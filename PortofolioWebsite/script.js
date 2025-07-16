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
