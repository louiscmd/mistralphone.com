/* ═══════════════════════════════════════════════════════════════
   MISTRAL PHONE — V2 · interactions
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Header + barre de progression ───────────────────────── */
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
      if (RM) { el.textContent = fmt(end) + suf; cio.unobserve(el); return; }
      const t0 = performance.now(), dur = 1500;
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const v = end * (1 - Math.pow(1 - p, 3));
        el.textContent = fmt(dec ? v : Math.round(v)) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach(el => cio.observe(el));

  /* ── Étapes actives ──────────────────────────────────────── */
  const sio = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle('on', e.isIntersecting));
  }, { threshold: 0.55 });
  $$('.step').forEach(el => sio.observe(el));

  /* ── Lueur qui suit la souris sur les cartes ─────────────── */
  if (!RM && matchMedia('(pointer:fine)').matches) {
    $$('.card').forEach(c => {
      c.addEventListener('pointermove', (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%');
        c.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%');
      });
    });

    /* Halo de curseur */
    const glow = $('#cursorGlow');
    if (glow) {
      let gx = 0, gy = 0, tx = 0, ty = 0, on = false;
      addEventListener('pointermove', (e) => {
        tx = e.clientX; ty = e.clientY;
        if (!on) { on = true; glow.style.opacity = '1'; gx = tx; gy = ty; }
      }, { passive: true });
      (function loop() {
        gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
        glow.style.transform = 'translate(' + gx + 'px,' + gy + 'px)';
        requestAnimationFrame(loop);
      })();
    }

    /* Boutons magnétiques */
    $$('.magnetic').forEach(b => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.22 + 'px,' +
          ((e.clientY - r.top - r.height / 2) * 0.22 - 3) + 'px)';
      });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });

    /* Inclinaison 3D du téléphone */
    const phone = $('.phone');
    if (phone) {
      const vis = phone.closest('.hero-vis');
      vis.addEventListener('pointermove', (e) => {
        if (phone.classList.contains('shake')) return;
        const r = vis.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        phone.style.transform = 'rotateY(' + (-14 + px * 16) + 'deg) rotateX(' + (6 - py * 14) + 'deg) rotateZ(-2deg)';
      });
      vis.addEventListener('pointerleave', () => { phone.style.transform = ''; });
    }
  }

  /* ── Séquence « écran cassé → réparé » ───────────────────── */
  const phone = $('.phone');
  if (phone && !RM) {
    $$('.phone-cracks path', phone).forEach(p => {
      const len = p.getTotalLength();
      p.style.setProperty('--len', len);
    });
    const broken = $('.state-broken', phone);
    const fixed = $('.state-fixed', phone);
    const run = () => {
      phone.classList.remove('healed');
      phone.classList.add('cracked', 'shake');
      broken && broken.classList.remove('hide');
      fixed && fixed.classList.add('hide');
      setTimeout(() => phone.classList.remove('shake'), 600);
      setTimeout(() => {
        phone.classList.add('healed');
        broken && broken.classList.add('hide');
        fixed && fixed.classList.remove('hide');
      }, 2400);
      setTimeout(() => { phone.classList.remove('cracked'); run(); }, 7200);
    };
    const pio = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { pio.disconnect(); setTimeout(run, 700); }
    }, { threshold: 0.4 });
    pio.observe(phone);
  }

  /* ── Canvas « vent Mistral » ─────────────────────────────── */
  const cv = $('#windCanvas');
  if (cv && !RM) {
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, parts = [], raf = null;
    const COLORS = ['rgba(93,143,255,', 'rgba(249,115,22,', 'rgba(139,123,255,'];
    const make = () => {
      const n = Math.min(Math.round(w / 12), 110);
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        len: 30 + Math.random() * 150,
        sp: 0.9 + Math.random() * 3.6,
        a: 0.08 + Math.random() * 0.4,
        th: Math.random() * 1.6 + 0.35,
        c: COLORS[(Math.random() * COLORS.length) | 0],
        curve: (Math.random() - 0.5) * 26
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
    const vio = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { if (!raf) raf = requestAnimationFrame(draw); }
      else if (raf) { cancelAnimationFrame(raf); raf = null; }
    });
    vio.observe(cv);
  }

  /* ── Entrée du hero ──────────────────────────────────────── */
  const hero = $('.hero');
  if (hero) {
    $$('.hero h1 .w').forEach((el, i) => { el.style.transitionDelay = (i * 55) + 'ms'; });
    $$('.hero .fade-up').forEach((el, i) => { el.style.transitionDelay = (350 + i * 90) + 'ms'; });
    // double rAF : garantit que l'état initial est peint avant la transition
    requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('go')));
  }

  /* ── Filtre de recherche (tarifs / modèles) ──────────────── */
  const filter = $('#modelFilter');
  if (filter) {
    const targets = $$('[data-filter]');
    filter.addEventListener('input', () => {
      const q = filter.value.trim().toLowerCase();
      targets.forEach(t => {
        const hit = !q || t.getAttribute('data-filter').toLowerCase().includes(q);
        t.style.display = hit ? '' : 'none';
      });
      $$('[data-filter-group]').forEach(g => {
        const any = $$('[data-filter]', g).some(t => t.style.display !== 'none');
        g.style.display = any ? '' : 'none';
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
        'Bonjour Mistral Phone, je souhaite reserver une reparation.',
        '',
        'Nom : ' + (d.nom || ''),
        'Telephone : ' + (d.tel || ''),
        'Email : ' + (d.email || ''),
        'Appareil : ' + (d.appareil || ''),
        'Reparation : ' + (d.service || ''),
        'Boutique : ' + (d.boutique || ''),
        'Creneau souhaite : ' + (d.creneau || ''),
        '',
        'Message : ' + (d.message || '-')
      ].join('\n');
      const ok = $('#formOk');
      if (ok) { ok.classList.add('show'); ok.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
      window.location.href = 'mailto:' + form.dataset.email +
        '?subject=' + encodeURIComponent('Reservation reparation - ' + (d.nom || 'Nouveau client')) +
        '&body=' + encodeURIComponent(lines);
    });
  }

  /* ── Année dynamique ─────────────────────────────────────── */
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
