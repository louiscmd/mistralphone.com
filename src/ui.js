import { SITE, SHOPS, BRANDS, REPAIRS, REVIEWS, USPS, mapsUrl } from './data.js';
import { ICONS, esc } from './layout.js';

export const stars = (n = 5) => `<span class="stars">${ICONS.star.repeat(n)}</span>`;

// ─── HERO PHONE (visuel « cassé → réparé ») ───────────────────────
export const phoneVisual = () => `
<div class="hero-vis">
  <div class="phone">
    <div class="phone-screen">
      <div class="phone-glow" aria-hidden="true"></div>
      <div class="phone-state state-broken">
        <div class="phone-ico">${ICONS.screen}</div>
        <div class="phone-t">Écran cassé ?</div>
        <div class="phone-p">Apportez-le en boutique,<br>on s'en occupe tout de suite.</div>
      </div>
      <div class="phone-state state-fixed hide">
        <div class="phone-ico ok">${ICONS.check}</div>
        <div class="phone-t">Réparé.</div>
        <div class="phone-timer">30 min</div>
        <div class="phone-p">Comme neuf, garanti.</div>
      </div>
    </div>
    <svg class="phone-cracks" viewBox="0 0 300 620" preserveAspectRatio="none" aria-hidden="true">
      <path d="M150 40 L138 150 L165 250 L120 350 L150 470 L132 590"/>
      <path d="M138 150 L60 120 M138 150 L235 105"/>
      <path d="M165 250 L262 230 M165 250 L44 285"/>
      <path d="M120 350 L28 400 M120 350 L245 372"/>
      <path d="M150 470 L255 505 M150 470 L52 520"/>
      <path d="M60 120 L20 60 M235 105 L280 55"/>
    </svg>
    <div class="phone-notch" aria-hidden="true"></div>
  </div>
  <div class="float-card fc-1">${ICONS.bolt}<div><b>30 minutes</b><span>Écran iPhone</span></div></div>
  <div class="float-card fc-2">${ICONS.star}<div><b>4,9/5</b><span>${SITE.reviewsCountLabel}+ avis Google</span></div></div>
  <div class="float-card fc-3">${ICONS.leaf}<div><b>−25 €</b><span>Bonus QualiRépar</span></div></div>
</div>`;

// ─── GRILLE MARQUES ───────────────────────────────────────────────
export const brandGrid = (activeId = null) => `
<div class="grid g4" data-stagger="60">
  ${BRANDS.filter(b => b.id !== activeId).map(b => `
  <a class="card brand-card" href="/${b.slug}/" style="--bd:${b.accent}">
    <div class="bc-top">
      <div>
        <span class="brand-name">${esc(b.label)}</span>
        <p>Écran, batterie, connecteur, caméra</p>
      </div>
      <span class="brand-dot">${esc(b.label.charAt(0))}</span>
    </div>
    <span class="brand-go">Voir la réparation ${ICONS.arrow}</span>
  </a>`).join('')}
</div>`;

// ─── GRILLE RÉPARATIONS ───────────────────────────────────────────
export const repairGrid = (activeId = null) => `
<div class="grid g4" data-stagger="60">
  ${REPAIRS.filter(r => r.id !== activeId).map(r => `
  <a class="card rep-card" href="/${r.slug}/">
    <div class="card-ico">${ICONS[r.icon]}</div>
    <h3>${esc(r.label)}</h3>
    <p>${esc(r.tagline)}</p>
    <div class="rep-meta">
      <span class="tag ${r.urgent ? 'or' : 'bl'}">${ICONS.clock}${esc(r.time)}</span>
      ${r.from ? `<span class="tag">dès ${r.from} €</span>` : '<span class="tag gn">Diagnostic gratuit</span>'}
    </div>
  </a>`).join('')}
</div>`;

// ─── USP ──────────────────────────────────────────────────────────
export const uspGrid = () => `
<div class="grid g3" data-stagger="70">
  ${USPS.map(u => `
  <article class="card">
    <div class="card-ico">${ICONS[u.icon]}</div>
    <h3>${esc(u.title)}</h3>
    <p>${esc(u.text)}</p>
  </article>`).join('')}
</div>`;

// ─── BOUTIQUES ────────────────────────────────────────────────────
export const shopCard = (s, i) => `
<article class="card shop-card">
  <span class="shop-rank" aria-hidden="true">0${i + 1}</span>
  <span class="shop-badge">${esc(s.badge)}</span>
  <h3>${esc(s.name)}</h3>
  <div class="shop-rate">${stars()}<b>${String(s.rating).replace('.', ',')}</b><span class="muted">(${s.reviews} avis Google)</span></div>
  <p class="shop-addr">${ICONS.pin}<span>${esc(s.street)}<br>${s.zip} Marseille</span></p>
  <ul class="shop-list">${s.highlights.map(h => `<li>${ICONS.check}<span>${esc(h)}</span></li>`).join('')}</ul>
  <div class="shop-btns">
    <a class="btn btn-primary btn-sm" href="/${s.slug}/"><span>Voir la boutique</span></a>
    <a class="btn btn-ghost btn-sm" href="${mapsUrl(s)}" target="_blank" rel="noopener">${ICONS.route}<span>Itinéraire</span></a>
  </div>
</article>`;

export const shopsSection = (title = '3 boutiques à Marseille', eyebrow = 'Nos boutiques') => `
<section class="sec sec-alt" id="boutiques">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">${esc(eyebrow)}</span>
      <h2>${title}</h2>
      <p class="lead" style="margin:0 auto">Deux boutiques dans le 4e arrondissement, une dans le 12e à Saint-Barnabé. Ouvert ${SITE.hoursShort}, avec ou sans rendez-vous.</p>
    </div>
    <div class="grid g3" data-stagger="90">${SHOPS.map(shopCard).join('')}</div>
  </div>
</section>`;

// ─── PROCESS ──────────────────────────────────────────────────────
export const stepsSection = (steps, { eyebrow = 'Comment ça se passe', title = 'Quatre étapes, une réparation' } = {}) => `
<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">${esc(eyebrow)}</span>
      <h2>${title}</h2>
    </div>
    <div class="steps">
      ${steps.map(([t, d], i) => `
      <div class="step reveal-l">
        <div class="step-n">${i + 1}</div>
        <div><h3>${esc(t)}</h3><p>${esc(d)}</p></div>
      </div>`).join('')}
    </div>
  </div>
</section>`;

// ─── STATS ────────────────────────────────────────────────────────
export const statsRow = () => `
<div class="stats" data-stagger="80">
  <div class="stat"><b data-count="20" data-suffix="+">0</b><span>ans d'expérience</span></div>
  <div class="stat"><b data-count="3">0</b><span>boutiques à Marseille</span></div>
  <div class="stat"><b data-count="1062" data-suffix="+">0</b><span>avis Google</span></div>
  <div class="stat"><b data-count="4.9">0</b><span>note moyenne / 5</span></div>
</div>`;

// ─── AVIS ─────────────────────────────────────────────────────────
export const reviewsSection = () => {
  const cards = REVIEWS.map(r => `
  <article class="rev">
    ${stars(r.stars)}
    <p>« ${esc(r.text)} »</p>
    <footer>
      <span class="rev-av">${esc(r.name.charAt(0))}</span>
      <div><b>${esc(r.name)}</b><span>Boutique ${esc(r.shop)}</span></div>
    </footer>
  </article>`).join('');
  return `
<section class="sec">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">Avis clients</span>
      <h2>Plus de <span class="gr-or">1 000 avis</span> sur Google</h2>
      <p class="lead" style="margin:0 auto">4,9/5 à Maréchal Foch, 4,8/5 à Maréchal Fayolle et 4,9/5 à Saint-Barnabé.</p>
    </div>
  </div>
  <div class="rev-wrap reveal"><div class="rev-row">${cards}${cards}</div></div>
</section>`;
};

// ─── FAQ ──────────────────────────────────────────────────────────
export const faqSection = (faq, title = 'Questions fréquentes') => !faq || !faq.length ? '' : `
<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">FAQ</span>
      <h2>${esc(title)}</h2>
    </div>
    <div class="faq" data-stagger="50">
      ${faq.map(([q, a]) => `<details class="qa"><summary>${esc(q)}</summary><div class="qa-body">${esc(a)}</div></details>`).join('')}
    </div>
  </div>
</section>`;

// ─── BANDEAU CTA ──────────────────────────────────────────────────
export const ctaBand = (title = 'Votre téléphone mérite mieux qu’un tiroir.', text = 'Devis gratuit, réparation express et garantie sur chaque intervention. Passez en boutique ou appelez-nous, on vous répond tout de suite.') => `
<section class="sec">
  <div class="wrap">
    <div class="band reveal-s">
      <div class="band-in">
        <div>
          <span class="eyebrow">Devis gratuit</span>
          <h2 style="margin-top:.9rem">${title}</h2>
          <p>${esc(text)}</p>
        </div>
        <div class="band-btns">
          <a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
          <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Réserver en ligne</span></a>
        </div>
      </div>
    </div>
  </div>
</section>`;

// ─── LIENS INTERNES SEO ───────────────────────────────────────────
export const linkCloud = (title = 'Réparation de téléphone à Marseille, quartier par quartier') => `
<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Nos pages</span>
      <h2>${esc(title)}</h2>
    </div>
    <div class="chips reveal">
      <a class="chip" href="/reparation-telephone-marseille/">Réparation téléphone Marseille</a>
      <a class="chip" href="/reparation-telephone-marseille-13004/">Réparation téléphone Marseille 13004</a>
      <a class="chip" href="/reparation-telephone-marseille-13012/">Réparation téléphone Marseille 13012</a>
      ${BRANDS.map(b => `<a class="chip" href="/${b.slug}/">Réparation ${esc(b.label)} Marseille</a>`).join('')}
      ${REPAIRS.map(r => `<a class="chip" href="/${r.slug}/">${esc(r.label)} Marseille</a>`).join('')}
      <a class="chip" href="/tarifs/">Tarifs réparation Marseille</a>
    </div>
  </div>
</section>`;

// ─── SYMPTÔMES ────────────────────────────────────────────────────
export const symptomList = (items) => `
<ul class="prose" style="display:grid;gap:.55rem;list-style:none;padding:0">
  ${items.map(i => `<li style="display:flex;gap:.65rem">${ICONS.check}<span>${esc(i)}</span></li>`).join('')}
</ul>`;
