import { SITE, SHOPS, BRANDS, REPAIRS, REVIEWS, USPS, BUY, mapsUrl } from './data.js';
import { ICONS, esc } from './layout.js';

export const stars = (n = 5) => `<span class="stars">${ICONS.star.repeat(n)}</span>`;

// ─── TÉLÉPHONE MINIATURE (pur CSS) ────────────────────────────────
export const miniPhone = (v = 'a', time = '9:41') =>
  `<div class="mph mph-${v}"><div class="mph-scr"><span class="mph-t">${time}</span><span class="mph-apps"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></div></div>`;

// ─── BON DE RÉPARATION ANIMÉ (pages intérieures) ──────────────────
export const ticketVisual = ({ device = 'iPhone 13', repair = 'Remplacement écran', time = '30 min', price = 'Devis gratuit' } = {}) => `
<div class="tk-vis" aria-hidden="true">
  <div class="tk-hold">
    <div class="tk">
      <div class="tk-head">
        <img src="/images/logo.png" alt="" width="62" height="39">
        <div><b>Bon de réparation</b><span>Mistral Phone · Marseille</span></div>
        <span class="tk-live"><span class="s1"><i></i>En cours</span><span class="s2">${ICONS.check}Prêt</span></span>
      </div>
      <div class="tk-rows">
        <div><span>Appareil</span><b>${esc(device)}</b></div>
        <div><span>Intervention</span><b>${esc(repair)}</b></div>
        <div><span>Délai</span><b>${esc(time)}</b></div>
        <div><span>Tarif</span><b class="tk-price">${esc(price)}</b></div>
      </div>
      <div class="tk-bar"><span></span></div>
      <ol class="tk-steps"><li>Diagnostic</li><li>Réparation</li><li>Tests</li><li>Prêt</li></ol>
      <div class="tk-stamp">Réparé<small>&amp; garanti</small></div>
    </div>
  </div>
  <div class="tk-chip tk-c1">${ICONS.star}<div><b>4,9/5</b><span>${SITE.reviewsCountLabel}+ avis Google</span></div></div>
  <div class="tk-chip tk-c2">${ICONS.leaf}<div><b>−25 €</b><span>Bonus QualiRépar</span></div></div>
</div>`;

// ─── VITRINE (page Acheter) ───────────────────────────────────────
export const vitrineVisual = () => {
  const f = BUY.featured;
  return `
<div class="vt-vis" aria-hidden="true">
  <div class="vt-card">
    <div class="vt-stage"><div class="vt-spin">${miniPhone('a')}</div></div>
    <div class="vt-info">
      <span class="vt-state">${esc(f.state)}</span>
      <b>${esc(f.name)} · ${esc(f.storage)}</b>
      <span>${esc(f.color)} · ${esc(f.warranty)}</span>
    </div>
    <div class="vt-price"><small>En boutique</small>${f.price} €</div>
  </div>
  <div class="vt-sticker"><span>Débloqué</span><span>tout opérateur</span></div>
  <div class="tk-chip tk-c1">${ICONS.shield}<div><b>${esc(f.warranty)}</b><span>Sur cet appareil</span></div></div>
</div>`;
};

// ─── HISTOIRE AU DÉFILEMENT (accueil) ─────────────────────────────
const CRACKS = `<svg class="cracks" viewBox="0 0 300 620" preserveAspectRatio="none"><path d="M205 120 L170 210 L196 290 L150 380 L178 470 L140 600"/><path d="M170 210 L90 170 L40 120 M170 210 L262 196"/><path d="M196 290 L276 312 M196 290 L60 268"/><path d="M150 380 L40 420 M150 380 L250 430"/><path d="M178 470 L270 520 M178 470 L70 540"/><circle cx="205" cy="120" r="10"/></svg>`;
const BOARD = `<svg viewBox="0 0 100 210" preserveAspectRatio="none"><g fill="none" stroke="#E7C66B" stroke-width=".8" opacity=".75"><path d="M12 30h30v24h20M12 70h52M20 100v40h40M70 40v60M30 160h40v28M50 20v14M80 120v60"/></g><g fill="#0B1B33"><rect x="40" y="58" width="26" height="26" rx="3"/><rect x="18" y="112" width="18" height="14" rx="2"/><rect x="60" y="140" width="22" height="16" rx="2"/><rect x="24" y="170" width="14" height="10" rx="2"/></g><g fill="#E7C66B"><circle cx="18" cy="30" r="2"/><circle cx="64" cy="54" r="2"/><circle cx="60" cy="140" r="2"/><circle cx="70" cy="188" r="2"/></g></svg>`;

export const storySection = () => {
  const f = BUY.featured;
  return `
<section class="story" id="histoire" aria-label="De la réparation à la vitrine">
  <div class="story-stage">
    <div class="wrap story-grid">
      <div class="story-copy">
        <div class="story-chaps">
          <article class="chap on">
            <span class="chap-n">01 — Le dépôt</span>
            <h2>Écran cassé ? <span class="serif">Posez-le sur le comptoir.</span></h2>
            <p>Sans rendez-vous, dans l'une de nos trois boutiques. Diagnostic gratuit devant vous, prix annoncé avant toute intervention.</p>
            <ul class="chap-meta"><li>Diagnostic gratuit</li><li>Devis ferme</li><li>Sans rendez-vous</li></ul>
          </article>
          <article class="chap">
            <span class="chap-n">02 — L'atelier</span>
            <h2>30 minutes. <span class="serif">Pièce par pièce.</span></h2>
            <p>Écran, batterie, connecteur de charge, caméra : nos techniciens ouvrent, remplacent et testent sur place, à Marseille. Rien n'est envoyé ailleurs.</p>
            <ul class="chap-meta"><li>iPhone en 30 min</li><li>Autres marques en 1 h</li><li>Garantie</li></ul>
          </article>
          <article class="chap">
            <span class="chap-n">03 — La vitrine</span>
            <h2>Ou repartez <span class="serif">avec un autre.</span></h2>
            <p>Smartphones d'occasion et neufs, tablettes, accessoires : tout est en boutique, et tous nos téléphones sont débloqués tout opérateur.</p>
            <div class="chap-cta">
              <a class="btn btn-primary" href="/acheter-telephone-marseille/">${ICONS.bag}<span>Voir les téléphones en vente</span></a>
              <a class="btn btn-ghost" href="/contact/">${ICONS.cal}<span>Réserver une réparation</span></a>
            </div>
          </article>
        </div>
        <div class="story-dots" aria-hidden="true"><span class="on"></span><span></span><span></span></div>
      </div>

      <div class="story-scene" aria-hidden="true">
        <div class="scene">
          <div class="shelf shelf-l">${miniPhone('b', '10:05')}<span class="ptag">${esc(f.name)} · ${esc(f.storage)}<b>${f.price} €</b></span></div>
          <div class="shelf shelf-r">${miniPhone('c', '10:05')}<span class="ptag">Neufs &amp; occasion<b>En vitrine</b></span></div>
          <div class="ph3d-wrap">
            <div class="ph-shadow"></div>
            <div class="ph3d">
              <div class="ly ly-back"><span class="cam"></span></div>
              <div class="ly ly-board">${BOARD}</div>
              <div class="ly ly-bat"><span class="bat-lbl">Li-ion · 3 200 mAh</span><span class="bat"><i></i></span></div>
              <div class="ly ly-oled">
                <div class="scr-off"></div>
                <div class="scr-on"><span class="scr-time">10:32</span><span class="scr-ok">${ICONS.check}Réparé</span><span class="scr-apps"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></div>
                <span class="island"></span>
              </div>
              <div class="ly ly-glass"></div>
              <div class="ly ly-crack">${CRACKS}</div>
            </div>
          </div>
          <div class="callout co-1"><i style="--c:var(--sea)"></i>Vitre neuve</div>
          <div class="callout co-2"><i style="--c:var(--bl)"></i>Écran OLED testé</div>
          <div class="callout co-3"><i style="--c:var(--gn)"></i>Batterie neuve</div>
          <div class="callout co-4"><i style="--c:var(--or)"></i>Carte mère contrôlée</div>
          <div class="st-ticket"><span class="st-logo">Mistral Phone</span><b>Dépôt 10:02</b><span>Remplacement écran</span><span class="st-ready">Prêt à 10:32</span></div>
          <div class="st-done">${ICONS.check}Réparé en 30 min</div>
        </div>
      </div>
    </div>
  </div>
</section>`;
};

// ─── VENTE ────────────────────────────────────────────────────────
export const productCard = () => {
  const f = BUY.featured;
  return `
<article class="prod">
  <div class="prod-vis">${miniPhone('a')}<span class="prod-badge">${esc(f.state)}</span></div>
  <div class="prod-body">
    <span class="eyebrow">En vitrine</span>
    <h3>${esc(f.name)} · ${esc(f.storage)}</h3>
    <ul class="prod-specs">
      <li>${ICONS.check}<span>${esc(f.color)}</span></li>
      <li>${ICONS.check}<span>${esc(f.warranty)}</span></li>
      <li>${ICONS.check}<span>Débloqué tout opérateur</span></li>
    </ul>
    <div class="prod-foot">
      <span class="prod-price">${f.price} €</span>
      <a class="btn btn-primary btn-sm" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Le réserver</span></a>
    </div>
  </div>
</article>`;
};

export const buyCategories = () => `
<div class="grid g4" data-stagger="70">
  ${BUY.categories.map(c => `
  <article class="card cat-card">
    <div class="card-ico">${ICONS[c.icon]}</div>
    <h3>${esc(c.title)}</h3>
    <p>${esc(c.text)}</p>
    <span class="tag bl">${esc(c.tag)}</span>
  </article>`).join('')}
</div>`;

export const buySection = () => `
<section class="sec sec-alt" id="acheter">
  <div class="wrap buy-grid">
    <div class="reveal-l">
      <span class="eyebrow">Vente &amp; réparation</span>
      <h2 style="margin:1rem 0">Votre prochain téléphone <span class="serif">est peut-être déjà en vitrine.</span></h2>
      <p class="lead">${esc(BUY.intro)}</p>
      <ul class="buy-prom">${BUY.promises.map(p => `<li>${ICONS.check}<span>${esc(p)}</span></li>`).join('')}</ul>
      <div class="hero-cta" style="margin:1.6rem 0 0">
        <a class="btn btn-primary btn-lg magnetic" href="/acheter-telephone-marseille/">${ICONS.bag}<span>Voir les téléphones en vente</span></a>
        <a class="btn btn-ghost btn-lg" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Disponibilités</span></a>
      </div>
    </div>
    <div class="reveal-s">${productCard()}</div>
  </div>
  <div class="wrap" style="margin-top:2.4rem">${buyCategories()}</div>
</section>`;

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
      <p class="lead" style="margin:0 auto">Deux boutiques dans le 4e arrondissement, une dans le 12e à Saint-Barnabé. Réparation et vente, ouvert ${SITE.hoursShort}, avec ou sans rendez-vous.</p>
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
  <div class="stat"><b data-count="20" data-suffix="+">20+</b><span>ans d'expérience</span></div>
  <div class="stat"><b data-count="3">3</b><span>boutiques à Marseille</span></div>
  <div class="stat"><b data-count="1062" data-suffix="+">${SITE.reviewsCountLabel}+</b><span>avis Google</span></div>
  <div class="stat"><b data-count="4.9">4,9</b><span>note moyenne / 5</span></div>
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
      <h2>Plus de <span class="serif">1 000 avis</span> sur Google</h2>
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
      <a class="chip" href="/acheter-telephone-marseille/">Téléphone d'occasion Marseille</a>
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
