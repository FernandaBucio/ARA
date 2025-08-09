document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const form = document.getElementById('newsletter');
const status = document.getElementById('status');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email.includes('@')) {
    status.textContent = 'Escribe un correo válido.';
    return;
  }
  status.textContent = '¡Gracias por unirte! Revisa tu bandeja.';
  form.reset();
});


