// Set dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Accessible mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
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
  const intro = document.querySelector('.intro-video'); // the top video section
  if (!header || !intro) return;

  function onScroll(){
    const threshold = intro.offsetHeight - 10; // a tiny buffer
    if (window.scrollY > threshold){
      header.classList.add('is-solid');
    } else {
      header.classList.remove('is-solid');
    }
  }

  // Run on load & on scroll
  onScroll();
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
})();

