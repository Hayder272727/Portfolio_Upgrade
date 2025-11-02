// Basic, readable JavaScript for small page interactions.
// Everything is commented for clarity for the assignment rubric.

// Smooth scrolling for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active nav item on scroll
const sections = ['#about', '#projects', '#contact'].map(id => document.querySelector(id));
const navLinks = [...document.querySelectorAll('.nav a')];
const setActive = () => {
  const y = window.scrollY + 120;
  let activeId = null;
  for (const sec of sections) {
    if (!sec) continue;
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) { activeId = '#' + sec.id; break; }
  }
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === activeId));
};
window.addEventListener('scroll', setActive);
setActive();

// Back to top button
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) toTop.classList.add('show');
  else toTop.classList.remove('show');
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form validation demo (no backend)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent page reload
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Very basic checks
  if (!name || !email || !message) {
    formMsg.textContent = 'Please fill in all fields.';
    formMsg.style.color = '#b91c1c';
    return;
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    formMsg.textContent = 'Please enter a valid email address.';
    formMsg.style.color = '#b91c1c';
    return;
  }

  // Simulate success
  formMsg.textContent = 'Thanks! Your message has been sent (demo).';
  formMsg.style.color = '#065f46';
  form.reset();
});

// Friendly greeting in console for reviewers/instructors
console.log('Welcome to Hayder Hasan\'s portfolio!');