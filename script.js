// Cinematic EVOLVIA intro: reveal the original emblem, then the brand name and tagline.
const introScreen = document.getElementById('introScreen');
const introSkip = document.getElementById('introSkip');
if (introScreen) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let introClosed = false;
  const closeIntro = () => {
    if (introClosed) return;
    introClosed = true;
    introScreen.classList.add('is-leaving');
    window.setTimeout(() => introScreen.remove(), 800);
  };
  if (introSkip) introSkip.addEventListener('click', closeIntro);
  window.setTimeout(closeIntro, prefersReducedMotion ? 900 : 2850);
}

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('is-visible'));

// Subtle pointer-driven 3D depth on desktop; disabled for touch and reduced-motion users.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
if (!reduceMotion && finePointer) {
  const heroArt = document.querySelector('.hero-art');
  if (heroArt) {
    heroArt.addEventListener('pointermove', event => {
      const rect = heroArt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      heroArt.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 7}deg)`;
    });
    heroArt.addEventListener('pointerleave', () => heroArt.style.transform = 'rotateY(0deg) rotateX(0deg)');
  }
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
      card.style.transform = `perspective(900px) rotateX(${(0.5-y)*5}deg) rotateY(${(x-0.5)*6}deg) translateY(-5px)`;
    });
    card.addEventListener('pointerleave', () => card.style.transform = '');
  });
}
