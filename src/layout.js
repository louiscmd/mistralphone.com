import { SITE, SHOPS, BRANDS, REPAIRS, NAV, mapsUrl } from './data.js';

export const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

// ─── JSON-LD ──────────────────────────────────────────────────────
const shopSchema = (s) => ({
  '@type': 'MobilePhoneStore',
  '@id': SITE.domain + '/' + s.slug + '/#store',
  name: SITE.name + ' — ' + s.short,
  image: SITE.domain + '/images/logo.png',
  url: SITE.domain + '/' + s.slug + '/',
  telephone: SITE.phoneHref,
  email: SITE.email,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: s.street,
    addressLocality: 'Marseille',
    postalCode: s.zip,
    addressCountry: 'FR'
  },
  hasMap: mapsUrl(s),
  aggregateRating: { '@type': 'AggregateRating', ratingValue: s.rating, reviewCount: s.reviews, bestRating: 5 },
  openingHoursSpecification: SITE.schemaHours.map(h => ({
    '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.open, closes: h.close
  })),
  areaServed: { '@type': 'City', name: 'Marseille' },
  makesOffer: REPAIRS.map(r => ({
    '@type': 'Offer', itemOffered: { '@type': 'Service', name: r.label + ' — ' + r.h1.replace(' à Marseille','') }
  }))
});

const orgSchema = () => ({
  '@type': 'Organization',
  '@id': SITE.domain + '/#org',
  name: SITE.legalName,
  url: SITE.domain,
  logo: SITE.domain + '/images/logo.png',
  telephone: SITE.phoneHref,
  email: SITE.email,
  foundingDate: String(SITE.since),
  sameAs: Object.values(SITE.social),
  department: SHOPS.map(s => ({ '@id': SITE.domain + '/' + s.slug + '/#store' }))
});

const breadcrumbSchema = (crumbs) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem', position: i + 1, name: c.label,
    item: SITE.domain + c.href
  }))
});

const faqSchema = (faq) => ({
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({
    '@type': 'Question', name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
});

// ─── ICÔNES ───────────────────────────────────────────────────────
const I = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${d}</svg>`;
export const ICONS = {
  screen: I('<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M9 6l3 5-2.5 1.5L14 18"/>'),
  battery: I('<rect x="2" y="7" width="16" height="10" rx="2.5"/><path d="M21 10v4"/><path d="M8 12h4"/>'),
  plug: I('<path d="M12 22v-5"/><path d="M7 8V2m10 6V2"/><rect x="5" y="8" width="14" height="6" rx="3"/><path d="M9 14v1a3 3 0 006 0v-1"/>'),
  back: I('<rect x="6" y="2" width="12" height="20" rx="2.5"/><circle cx="10" cy="7" r="2"/><path d="M6 15l3-3 4 4"/>'),
  camera: I('<rect x="2" y="6" width="20" height="14" rx="3"/><circle cx="12" cy="13" r="4"/><path d="M8 6l1.5-2h5L16 6"/>'),
  speaker: I('<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9a4 4 0 010 6"/><path d="M20 6a8 8 0 010 12"/>'),
  water: I('<path d="M12 2.5s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z"/><path d="M9 14a3 3 0 003 3"/>'),
  power: I('<path d="M12 3v9"/><path d="M18.4 6.6a9 9 0 11-12.8 0"/>'),
  bolt: I('<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>'),
  shield: I('<path d="M12 2l8 3.5v6c0 5-3.4 9.2-8 10.5-4.6-1.3-8-5.5-8-10.5v-6L12 2z"/><path d="M9 12l2 2 4-4"/>'),
  euro: I('<circle cx="12" cy="12" r="9.5"/><path d="M15.5 8.5a4.5 4.5 0 100 7"/><path d="M6.5 11h6m-6 2.5h6"/>'),
  leaf: I('<path d="M4 20c0-8 6-14 16-14 0 10-6 14-12 14H4z"/><path d="M8 18c2-4 5-7 9-9"/>'),
  chip: I('<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3"/>'),
  pin: I('<path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/>'),
  clock: I('<circle cx="12" cy="12" r="9.5"/><path d="M12 7v5.2l3.4 2"/>'),
  phone: I('<path d="M6.5 3h3l1.6 4-2.2 1.6a12 12 0 006.5 6.5L17 12.9l4 1.6v3a2 2 0 01-2.2 2A17 17 0 013.5 5.2 2 2 0 015.5 3h1z"/>'),
  cal: I('<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4m8-4v4"/>'),
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z"/></svg>',
  arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  check: I('<path d="M4 12.5l5 5 11-11"/>'),
  chevron: I('<path d="M6 9l6 6 6-6"/>'),
  route: I('<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a4 4 0 000-8H9a4 4 0 010-8h6"/>'),
  wind: I('<path d="M3 8h11a3 3 0 10-3-3"/><path d="M3 16h7a3 3 0 113 3"/><path d="M3 12h16a2.5 2.5 0 10-2.5-2.5"/>')
};

// ─── NAVIGATION ───────────────────────────────────────────────────
const navMarkup = (path) => {
  const isOn = (href) => href !== '/' && path.startsWith(href);
  return NAV.map(item => {
    const active = (path === item.href || isOn(item.href)) ? ' is-active' : '';
    if (!item.children) {
      return `<li><a class="nav-link${active}${item.cta ? ' nav-cta-link' : ''}" href="${item.href}">${esc(item.label)}</a></li>`;
    }
    const cols = item.children.map(c =>
      `<a class="mega-item" href="${c.href}"><span>${esc(c.label)}</span>${ICONS.arrow}</a>`).join('');
    return `<li class="has-mega">
      <a class="nav-link${active}" href="${item.href}">${esc(item.label)}<span class="nav-chev">${ICONS.chevron}</span></a>
      <div class="mega"><div class="mega-inner">
        <div class="mega-grid">${cols}</div>
        <a class="mega-all" href="${item.href}">Voir tout ${esc(item.label.toLowerCase())} ${ICONS.arrow}</a>
      </div></div>
    </li>`;
  }).join('');
};

const mobileNav = () => NAV.map(item => {
  if (!item.children) return `<a class="mnav-link" href="${item.href}">${esc(item.label)}</a>`;
  return `<div class="mnav-group">
    <button class="mnav-toggle" type="button" aria-expanded="false">${esc(item.label)}<span>${ICONS.chevron}</span></button>
    <div class="mnav-panel">
      <a class="mnav-sub mnav-sub-all" href="${item.href}">Voir tout</a>
      ${item.children.map(c => `<a class="mnav-sub" href="${c.href}">${esc(c.label)}</a>`).join('')}
    </div>
  </div>`;
}).join('');

// ─── FOOTER ───────────────────────────────────────────────────────
const footer = () => `
<footer class="foot">
  <div class="foot-glow" aria-hidden="true"></div>
  <div class="wrap">
    <div class="foot-top reveal">
      <div class="foot-brand">
        <img src="/images/logo.png" alt="Mistral Phone Marseille" width="180" height="86" loading="lazy">
        <p>Réparation de téléphone à Marseille depuis ${SITE.since}. iPhone, Samsung, Xiaomi, Google Pixel, Huawei et toutes marques. Trois boutiques dans le 4e et le 12e arrondissement.</p>
        <div class="foot-rate">
          <span class="stars">${ICONS.star.repeat(5)}</span>
          <strong>${String(SITE.reviewsAvg).replace('.',',')}/5</strong>
          <span class="muted">· ${SITE.reviewsCountLabel}+ avis Google</span>
        </div>
        <div class="foot-social">
          <a href="${SITE.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
          <a href="${SITE.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
          <a href="${SITE.social.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">TK</a>
        </div>
      </div>
      <div class="foot-col">
        <h3>Réparation par marque</h3>
        ${BRANDS.map(b => `<a href="/${b.slug}/">Réparation ${esc(b.label)} Marseille</a>`).join('')}
      </div>
      <div class="foot-col">
        <h3>Nos réparations</h3>
        ${REPAIRS.map(r => `<a href="/${r.slug}/">${esc(r.label)}</a>`).join('')}
      </div>
      <div class="foot-col">
        <h3>Nos boutiques</h3>
        ${SHOPS.map(s => `<a href="/${s.slug}/">${esc(s.name)}</a>`).join('')}
        <a href="/reparation-telephone-marseille-13004/">Réparation téléphone 13004</a>
        <a href="/reparation-telephone-marseille-13012/">Réparation téléphone 13012</a>
        <h3 class="mt">Informations</h3>
        <a href="/tarifs/">Tarifs</a>
        <a href="/a-propos/">À propos</a>
        <a href="/contact/">Contact &amp; réservation</a>
      </div>
    </div>
    <div class="foot-cta reveal">
      <div>
        <span class="eyebrow">Besoin d'une réparation aujourd'hui ?</span>
        <p class="foot-cta-h">Appelez-nous, on vous répond tout de suite.</p>
      </div>
      <div class="foot-cta-btns">
        <a class="btn btn-primary" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
        <a class="btn btn-ghost" href="/contact/">${ICONS.cal}<span>Réserver en ligne</span></a>
      </div>
    </div>
    <div class="foot-bottom">
      <p>© ${new Date().getFullYear()} ${esc(SITE.legalName)} · Réparation de téléphone à Marseille 13004 &amp; 13012</p>
      <nav><a href="/mentions-legales/">Mentions légales</a><a href="/plan-du-site/">Plan du site</a><a href="https://mistralphone.fr" rel="nofollow">Ancien site</a></nav>
    </div>
  </div>
</footer>
<div class="dock" aria-label="Actions rapides">
  <a class="dock-btn" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Appeler</span></a>
  <a class="dock-btn dock-main" href="/contact/">${ICONS.cal}<span>Réserver</span></a>
  <a class="dock-btn" href="/boutiques/">${ICONS.pin}<span>Boutiques</span></a>
</div>`;

// ─── PAGE SHELL ───────────────────────────────────────────────────
export function page({ path, title, description, body, crumbs = [], faq = null, extraSchema = [], bodyClass = '' }) {
  const canonical = SITE.domain + path;
  const graph = [orgSchema(), ...SHOPS.map(shopSchema)];
  if (crumbs.length) graph.push(breadcrumbSchema([{ label: 'Accueil', href: '/' }, ...crumbs]));
  if (faq && faq.length) graph.push(faqSchema(faq));
  graph.push(...extraSchema);

  const crumbBar = crumbs.length ? `<nav class="crumbs wrap" aria-label="Fil d'Ariane">
    <a href="/">Accueil</a>${crumbs.map((c, i) =>
      i === crumbs.length - 1 ? `<span aria-current="page">${esc(c.label)}</span>` : `<a href="${c.href}">${esc(c.label)}</a>`
    ).join('')}</nav>` : '';

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<meta name="theme-color" content="#070C1A">
<meta name="geo.region" content="FR-13"><meta name="geo.placename" content="Marseille">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:locale" content="fr_FR">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.domain}/images/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" sizes="64x64" href="/images/favicon.png">
<link rel="icon" type="image/png" sizes="512x512" href="/images/icon-512.png">
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<script>document.documentElement.className+=' js';</script>
<link rel="stylesheet" href="/assets/style.css">
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Aller au contenu</a>
<div class="scroll-bar" id="scrollbar" aria-hidden="true"></div>
<div class="cursor-glow" id="cursorGlow" aria-hidden="true"></div>

<header class="head" id="head">
  <div class="wrap head-in">
    <a class="logo" href="/" aria-label="Mistral Phone — accueil">
      <img src="/images/logo.png" alt="Mistral Phone Marseille" width="150" height="72">
    </a>
    <nav class="nav" aria-label="Navigation principale"><ul>${navMarkup(path)}</ul></nav>
    <div class="head-actions">
      <a class="head-tel" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
      <a class="btn btn-primary btn-sm magnetic" href="/contact/"><span>Réserver</span></a>
      <button class="burger" id="burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<div class="mnav" id="mnav" aria-hidden="true">
  <div class="mnav-in">
    ${mobileNav()}
    <div class="mnav-foot">
      <a class="btn btn-primary" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
      <a class="btn btn-ghost" href="/contact/">${ICONS.cal}<span>Réserver une réparation</span></a>
    </div>
  </div>
</div>

<main id="main">
${crumbBar}
${body}
</main>
${footer()}
<script src="/assets/app.js" defer></script>
</body>
</html>`;
}
