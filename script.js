// Set dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Accessible mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Simple mock subscribe (replace with real Substack or Mailchimp later)
const form = document.getElementById('newsletter');
const status = document.getElementById('status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email || !email.includes('@')) {
    status.textContent = 'Please enter a valid email.';
    return;
  }
  status.textContent = 'Thanks for joining ARA. Check your inbox soon.';
  form.reset();
});
