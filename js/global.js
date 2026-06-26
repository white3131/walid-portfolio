// CUSTOM CURSOR
const cursorDot = document.createElement('div');
cursorDot.id = 'cursor-dot';
document.body.appendChild(cursorDot);

const cursorRing = document.createElement('div');
cursorRing.id = 'cursor-ring';
document.body.appendChild(cursorRing);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

const loop = () => {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  cursorRing.style.left = `${ringX}px`;
  cursorRing.style.top = `${ringY}px`;
  requestAnimationFrame(loop);
};
requestAnimationFrame(loop);

// HOVER STATES
const hoverElements = document.querySelectorAll('a, button, .proj-card, .btn-outline');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
});

// SCROLL REVEAL (FADE UP)
const fadeUpElements = document.querySelectorAll('.fade-up');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

fadeUpElements.forEach(el => revealObserver.observe(el));

// REVEAL TEXT (WORD BY WORD)
const revealTexts = document.querySelectorAll('.reveal-text');
revealTexts.forEach(el => {
  const words = el.innerText.split(' ');
  el.innerHTML = '';
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.className = 'word';
    span.style.transitionDelay = `${i * 0.04}s`;
    span.innerHTML = word + '&nbsp;';
    el.appendChild(span);
  });
  
  const textObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      el.classList.add('visible');
      textObserver.unobserve(el);
    }
  }, { threshold: 0.2 });
  textObserver.observe(el);
});

// COUNT UP
const countElements = document.querySelectorAll('[data-count]');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));
      let current = 0;
      
      const timer = setInterval(() => {
        current += 1;
        el.innerText = current;
        if (current >= target) {
          clearInterval(timer);
          el.innerText = target + (el.hasAttribute('data-suffix') ? el.getAttribute('data-suffix') : '');
        }
      }, stepTime);
      
      countObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

countElements.forEach(el => countObserver.observe(el));

// CARD CLICK
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('click', () => {
    const href = card.getAttribute('data-href');
    if (href) window.location.href = href;
  });
});

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

