(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const status = document.getElementById('formStatus');
  // Init theme based on local storage
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');
  else if (!saved) root.classList.remove('light');

  toggle?.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Smooth scroll
  document.querySelectorAll('[data-scroll-to], .cta').forEach(el => {
    el.addEventListener('click', e => {
      const target = el.getAttribute('data-scroll-to') || '#projects';
      const elTo = document.querySelector(target);
      if (elTo) elTo.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Simple form validation
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim() || '';
    const email = data.get('email')?.toString().trim() || '';
    const msg = data.get('message')?.toString().trim() || '';
    if (!name || !email.includes('@') || !msg) {
      status.textContent = 'Please fill in all fields with a valid email.';
      status.style.color = '#f87171';
      return;
    }
    status.textContent = 'Message prepared (demo).';
    status.style.color = '#34d399';
    form.reset();
  });
})();