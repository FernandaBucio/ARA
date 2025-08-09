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
