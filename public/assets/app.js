/* ═══════════════════════════════════════════════════════════════
   MISTRAL PHONE — V2 · interactions
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v) => Math.min(1, Math.max(0, v));

  /* ── En-tête, barre de progression, dock mobile ──────────── */
  const head = $('#head'), bar = $('#scrollbar'), dock = $('.dock');
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (head) head.classList.toggle('stuck', y > 12);
    if (bar) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
    if (dock) dock.classList.toggle('show', y > 320 && y > lastY - 40);
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Menu mobile ─────────────────────────────────────────── */
  const burger = $('#burger'), mnav = $('#mnav');
  if (burger && mnav) {
    burger.addEventListener('click', () => {
      const open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      mnav.classList.toggle('open', !open);
      mnav.setAttribute('aria-hidden', String(open));
      document.body.style.overflow = open ? '' : 'hidden';
    });
    $$('.mnav-toggle', mnav).forEach(b => b.addEventListener('click', () => {
      const open = b.getAttribute('aria-expanded') === 'true';
      $$('.mnav-toggle', mnav).forEach(o => o !== b && o.setAttribute('aria-expanded', 'false'));
      b.setAttribute('aria-expanded', String(!open));
    }));
  }

  /* ── Révélations au scroll ───────────────────────────────── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add('in');
      if (el.hasAttribute('data-stagger')) {
        const step = parseInt(el.getAttribute('data-stagger'), 10) || 70;
        Array.from(el.children).forEach((c, i) => { c.style.transitionDelay = (i * step) + 'ms'; });
      }
      io.unobserve(el);
    });
  }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal,.reveal-l,.reveal-s,[data-stagger]').forEach(el => io.observe(el));

  /* ── Compteurs ───────────────────────────────────────────── */
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = parseFloat(el.dataset.count);
      const dec = (el.dataset.count.split('.')[1] || '').length;
      const suf = el.dataset.suffix || '';
      const fmt = (v) => v.toLocaleString('fr-FR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      cio.unobserve(el);
      if (RM) return;
      const t0 = performance.now(), dur = 1500;
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = fmt(dec ? v : Math.round(v)) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ── Étapes actives ──────────────────────────────────────── */
  const sio = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('on', e.isIntersecting));
  }, { threshold: 0.55 });
  $$('.step').forEach(el => sio.observe(el));

  /* ── Souris : lueur des cartes, boutons magnétiques ──────── */
  if (!RM && matchMedia('(pointer:fine)').matches) {
    $$('.card').forEach(c => {
      c.addEventListener('pointermove', (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
        c.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
      });
    });
    $$('.magnetic').forEach(b => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.2 + 'px,' +
          ((e.clientY - r.top - r.height / 2) * 0.2 - 2) + 'px)';
      });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }

  /* ── Histoire : dépôt → atelier → vitrine ────────────────── */
  const story = $('.story');
  if (story) {
    if (RM) {
      story.classList.add('story-static');
    } else {
      const chaps = $$('.chap', story), dots = $$('.story-dots span', story);
      const seg = (p, a, b) => clamp((p - a) / (b - a));
      const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const headH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--head-h')) || 76;
      let cur = -1, queued = false;
      const update = () => {
        queued = false;
        const r = story.getBoundingClientRect();
        const travel = story.offsetHeight - (innerHeight - headH());
        const p = travel > 0 ? clamp((headH() - r.top) / travel) : 0;
        // Chapitre 2 : le téléphone s'éclate en couches puis se réassemble
        const e = ease(seg(p, 0.30, 0.42)) * (1 - ease(seg(p, 0.54, 0.64)));
        const v = {
          e,
          fly: ease(seg(p, 0.38, 0.48)),          // la vitre fissurée s'envole
          new: seg(p, 0.50, 0.60),                // vitre neuve
          bat: ease(seg(p, 0.44, 0.54)),          // batterie qui se remplit
          lit: ease(seg(p, 0.58, 0.66)),          // écran rallumé
          lbl: seg(p, 0.36, 0.42) * (1 - seg(p, 0.52, 0.56)),
          tk: ease(seg(p, 0.04, 0.12)) * (1 - seg(p, 0.24, 0.30)),
          done: ease(seg(p, 0.64, 0.70)),
          shelf: ease(seg(p, 0.70, 0.82)),        // chapitre 3 : la vitrine
          tag: ease(seg(p, 0.80, 0.90))
        };
        for (const k in v) story.style.setProperty('--' + k, v[k].toFixed(4));
        const i = p < 0.28 ? 0 : p < 0.66 ? 1 : 2;
        if (i !== cur) {
          cur = i;
          chaps.forEach((c, j) => c.classList.toggle('on', j === i));
          dots.forEach((d, j) => d.classList.toggle('on', j <= i));
        }
      };
      const req = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
      addEventListener('scroll', req, { passive: true });
      addEventListener('resize', req);
      update();
    }
  }

  /* ── Canvas « vent Mistral » ─────────────────────────────── */
  const cv = $('#windCanvas');
  if (cv && !RM) {
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, parts = [], raf = null;
    const COLORS = ['rgba(31,86,224,', 'rgba(15,181,198,', 'rgba(255,106,26,'];
    const make = () => {
      const n = Math.min(Math.round(w / 16), 80);
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        len: 40 + Math.random() * 160,
        sp: 0.7 + Math.random() * 2.6,
        a: 0.06 + Math.random() * 0.22,
        th: Math.random() * 1.3 + 0.4,
        c: COLORS[Math.random() < 0.12 ? 2 : Math.random() < 0.5 ? 1 : 0],
        curve: (Math.random() - 0.5) * 24
      }));
    };
    const size = () => {
      const r = cv.getBoundingClientRect();
      const d = Math.min(devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      cv.width = w * d; cv.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      make();
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.quadraticCurveTo(p.x + p.len * 0.5, p.y + p.curve, p.x + p.len, p.y);
        const g = ctx.createLinearGradient(p.x, p.y, p.x + p.len, p.y);
        g.addColorStop(0, p.c + '0)');
        g.addColorStop(0.5, p.c + p.a + ')');
        g.addColorStop(1, p.c + '0)');
        ctx.strokeStyle = g; ctx.lineWidth = p.th; ctx.lineCap = 'round';
        ctx.stroke();
        p.x += p.sp;
        if (p.x > w + 40) { p.x = -p.len - Math.random() * 220; p.y = Math.random() * h; }
      }
      raf = requestAnimationFrame(draw);
    };
    size();
    addEventListener('resize', size);
    new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { if (!raf) raf = requestAnimationFrame(draw); }
      else if (raf) { cancelAnimationFrame(raf); raf = null; }
    }).observe(cv);
  }

  /* ── Entrée du hero ──────────────────────────────────────── */
  const hero = $('.hero');
  if (hero) {
    $$('.hero h1 .w').forEach((el, i) => { el.style.transitionDelay = (i * 60) + 'ms'; });
    $$('.hero .fade-up').forEach((el, i) => { el.style.transitionDelay = (320 + i * 80) + 'ms'; });
    requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('go')));
  }

  /* ── Filtre de modèles (tarifs) ──────────────────────────── */
  const filter = $('#modelFilter');
  if (filter) {
    filter.addEventListener('input', () => {
      const q = filter.value.trim().toLowerCase();
      $$('[data-filter]').forEach(t => {
        t.style.display = !q || t.getAttribute('data-filter').toLowerCase().includes(q) ? '' : 'none';
      });
      $$('[data-filter-group]').forEach(g => {
        g.style.display = $$('[data-filter]', g).some(t => t.style.display !== 'none') ? '' : 'none';
      });
    });
  }

  /* ── Formulaire de réservation ───────────────────────────── */
  const form = $('#bookForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const d = Object.fromEntries(new FormData(form).entries());
      const lines = [
        'Bonjour Mistral Phone, je souhaite reserver une reparation.', '',
        'Nom : ' + (d.nom || ''), 'Telephone : ' + (d.tel || ''), 'Email : ' + (d.email || ''),
        'Appareil : ' + (d.appareil || ''), 'Demande : ' + (d.service || ''),
        'Boutique : ' + (d.boutique || ''), 'Creneau souhaite : ' + (d.creneau || ''), '',
        'Message : ' + (d.message || '-')
      ].join('\n');
      const ok = $('#formOk');
      if (ok) { ok.classList.add('show'); ok.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
      window.location.href = 'mailto:' + form.dataset.email +
        '?subject=' + encodeURIComponent('Demande - ' + (d.nom || 'Nouveau client')) +
        '&body=' + encodeURIComponent(lines);
    });
  }
})();
