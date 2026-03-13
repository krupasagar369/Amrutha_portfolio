/* ══════════════════════════════════════════
   Amrutha B.M. — Portfolio JavaScript
   ══════════════════════════════════════════ */

// ── CUSTOM CURSOR ──────────────────────────
const cur  = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

// Move dot cursor instantly
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

// Smooth lag ring using rAF
(function tick() {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(tick);
})();

// Cursor scale on interactive elements
document.querySelectorAll('a, button, .role-pill, .skill-card, .cc').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.width      = '18px';
    cur.style.height     = '18px';
    cur.style.background = 'var(--brown)';
    ring.style.width     = '48px';
    ring.style.height    = '48px';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width      = '10px';
    cur.style.height     = '10px';
    cur.style.background = 'var(--orange)';
    ring.style.width     = '34px';
    ring.style.height    = '34px';
  });
});

// ── NAVBAR SCROLL SHADOW ───────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 20);
});

// ── SCROLL REVEAL — Timeline & Education ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.tl-item, .edu-card').forEach(el => {
  revealObs.observe(el);
});

// ── SKILL BAR ANIMATION ────────────────────
// Fires when the skills grid enters the viewport
const skillsGrid = document.querySelector('.skills-grid');

if (skillsGrid) {
  const skillsObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.dataset.w;
        });
      }
    });
  }, { threshold: 0.2 });

  skillsObs.observe(skillsGrid);
}