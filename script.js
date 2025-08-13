// script.js
// Set dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Accessible mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  // Toggle open/close
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  // Cierra al hacer click en un enlace
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  // Cierra al clicar fuera
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Simple mock subscribe (replace with real Substack or Mailchimp later)
const form = document.getElementById('newsletter');
const status = document.getElementById('status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput ? emailInput.value.trim() : '';
    if (!email || !email.includes('@')) {
      if (status) status.textContent = 'Please enter a valid email.';
      return;
    }
    if (status) status.textContent = 'Thanks for joining ARA. Check your inbox soon.';
    form.reset();
  });
}

// Solid header after the intro video
(function(){
  const header = document.querySelector('.site-header');
  const intro = document.querySelector('.intro-video');
  if (!header || !intro) return;

  // Usa IntersectionObserver para evitar jitter en móvil
  if ('IntersectionObserver' in window) {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.inset = 'auto 0 0 0';
    sentinel.style.height = '1px';
    intro.appendChild(sentinel);

    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        header.classList.remove('is-solid');
      } else {
        header.classList.add('is-solid');
      }
    }, { root: null, threshold: 0, rootMargin: '-10px 0px 0px 0px' });

    io.observe(sentinel);
  } else {
    // Fallback a scroll
    function onScroll(){
      const threshold = intro.offsetHeight - 10;
      if (window.scrollY > threshold){
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
  }
})();
