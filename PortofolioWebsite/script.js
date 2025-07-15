// script.js
// Toggle mobile menu
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}
document
  .getElementById('menu-toggle')
  .addEventListener('click', toggleMenu);

// Smooth scrolling for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // if mobile, close menu first
    if (!document
          .getElementById('mobile-menu')
          .classList.contains('hidden')) {
      toggleMenu();
    }
    // then scroll
    e.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
