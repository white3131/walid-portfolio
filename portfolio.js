/* ── CUSTOM CURSOR ─────────────────────────────── */
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let rx = 0, ry = 0, mx = window.innerWidth/2, my = window.innerHeight/2;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function loop() {
  cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cur-expand'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cur-expand'));
});

/* ── NAV SCROLL ────────────────────────────────── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => nav.classList.toggle('s', window.scrollY > 60), { passive: true });

/* ── SCROLL REVEAL ─────────────────────────────── */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.rv').forEach(el => revealIO.observe(el));

/* ── SKILL BARS ────────────────────────────────── */
const skillsSection = document.querySelector('.skill-list');
if (skillsSection) {
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.sk-fill').forEach((f, i) => {
      setTimeout(() => { f.style.width = f.dataset.w + '%'; }, i * 80);
    });
  }, { threshold: 0.25 }).observe(skillsSection);
}

/* ── COUNT UP ──────────────────────────────────── */
document.querySelectorAll('[data-count]').forEach(el => {
  new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    const target = +el.dataset.count, suffix = el.dataset.suffix || '';
    let n = 0; const step = Math.ceil(target / 45);
    const t = setInterval(() => {
      n = Math.min(n + step, target);
      el.textContent = n + suffix;
      if (n >= target) clearInterval(t);
    }, 35);
  }, { threshold: 0.6 }).observe(el);
});

/* ── TEXT SCRAMBLE ─────────────────────────────── */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ█▓▒░#@$%';
function scramble(el) {
  const final = el.dataset.final || el.textContent;
  let frame = 0, total = 55;
  const iv = setInterval(() => {
    el.textContent = final.split('').map((ch, i) => {
      if (ch === ' ') return ' ';
      return frame / total >= i / final.length ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
    }).join('');
    if (++frame > total) { el.textContent = final; clearInterval(iv); }
  }, 28);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('[data-scramble]').forEach(scramble);
  }, 550);
});

/* ── MARQUEE DUPLICATE ─────────────────────────── */
const mtrack = document.querySelector('.mq-track');
if (mtrack) mtrack.innerHTML += mtrack.innerHTML;
