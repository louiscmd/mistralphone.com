import { SITE, SHOPS, BRANDS, REPAIRS, mapsUrl } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { brandGrid, repairGrid, uspGrid, stepsSection, reviewsSection, faqSection, ctaBand, shopCard, stars } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

export default function shopPage(s) {
  const path = '/' + s.slug + '/';
  const others = SHOPS.filter(o => o.id !== s.id);
  const embed = 'https://www.google.com/maps?q=' + encodeURIComponent(s.street + ', ' + s.zip + ' Marseille') + '&output=embed';
  const faq = [
    ['Quels sont les horaires de la boutique ' + s.short + ' ?', SITE.hours + ". Nous sommes ouverts 7j/7."],
    ['Faut-il prendre rendez-vous à ' + s.short + ' ?', "Non, vous pouvez passer directement. Réserver un créneau en ligne garantit simplement que la pièce nécessaire est en stock à votre arrivée."],
    ['Quelles marques réparez-vous dans cette boutique ?', "Toutes : iPhone, Samsung, Xiaomi, Redmi, POCO, Google Pixel, Huawei, Oppo, Honor, Motorola, ainsi que les tablettes et les ordinateurs portables."],
    ['Comment venir à la boutique ' + s.short + ' ?', s.transport.join('. ') + "."]
  ];

  const body = `
<section class="hero" style="padding-top:clamp(2rem,5vw,3.5rem)">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in">
    <div>
      <div class="hero-badges fade-up">
        <span class="pill gold">${ICONS.star}<span>${String(s.rating).replace('.', ',')}/5 · ${s.reviews} avis Google</span></span>
        <span class="pill">${ICONS.clock}<span>Ouvert 7j/7</span></span>
        <span class="pill">${ICONS.bolt}<span>Réparation express</span></span>
      </div>
      <h1 style="font-size:clamp(2rem,4.6vw,3.4rem)"><span class="line">${words('Mistral Phone')}</span><span class="line">${s.name.split(' ').map(w => `<span class="w gr-or">${w}</span>`).join(' ')}</span></h1>
      <p class="hero-sub fade-up">${esc(s.intro)}</p>
      <div class="hero-cta fade-up">
        <a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
        <a class="btn btn-ghost btn-lg" href="${mapsUrl(s)}" target="_blank" rel="noopener">${ICONS.route}<span>Itinéraire</span></a>
      </div>
      <div class="hero-trust fade-up">
        <div class="hero-trust-i"><b>${String(s.rating).replace('.', ',')}/5</b><span>${s.reviews} avis Google</span></div>
        <div class="hero-trust-i"><b>${esc(s.zip)}</b><span>${esc(s.district.split('—')[0].trim())}</span></div>
        <div class="hero-trust-i"><b>7j/7</b><span>Ouvert</span></div>
      </div>
    </div>
    <div class="reveal-s">
      <div class="card" style="padding:1.7rem">
        <span class="shop-badge">${esc(s.badge)}</span>
        <h3 style="margin:1rem 0 1rem">Informations pratiques</h3>
        <p class="shop-addr" style="margin-bottom:1rem">${ICONS.pin}<span><strong style="color:var(--ink)">${esc(s.street)}</strong><br>${s.zip} Marseille<br><span class="muted">${esc(s.district)}</span></span></p>
        <p class="shop-addr" style="margin-bottom:1rem">${ICONS.clock}<span>${esc(SITE.hours)}</span></p>
        <p class="shop-addr" style="margin-bottom:1.2rem">${ICONS.phone}<span><a href="tel:${SITE.phoneHref}" style="color:var(--bl)">${SITE.phone}</a></span></p>
        <div class="shop-rate" style="margin-bottom:1.2rem">${stars()}<b>${String(s.rating).replace('.', ',')}</b><span class="muted">(${s.reviews} avis)</span></div>
        <h3 style="font-size:1rem;margin-bottom:.7rem">Comment venir</h3>
        <ul class="shop-list" style="margin-bottom:1.3rem">${s.transport.map(t => `<li>${ICONS.check}<span>${esc(t)}</span></li>`).join('')}</ul>
        <a class="btn btn-primary btn-block" href="/contact/">${ICONS.cal}<span>Réserver dans cette boutique</span></a>
      </div>
    </div>
  </div>
</section>


<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Nous trouver</span><h2>${esc(s.street)}, ${s.zip} Marseille</h2></div>
    <div class="reveal-s" style="border-radius:var(--r-xl);overflow:hidden;border:1px solid var(--line-2);box-shadow:var(--shadow)">
      <iframe title="Carte — Mistral Phone ${esc(s.short)}" src="${embed}" width="100%" height="440" style="border:0;display:block" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div style="margin-top:1.2rem;display:flex;gap:.7rem;flex-wrap:wrap">
      <a class="btn btn-primary magnetic" href="${mapsUrl(s)}" target="_blank" rel="noopener">${ICONS.route}<span>Ouvrir dans Google Maps</span></a>
      <a class="btn btn-ghost" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Appeler la boutique</span></a>
    </div>
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Dans cette boutique</span><h2>Ce que nous réparons ici</h2>
      <p class="lead">Toutes les réparations ci-dessous sont réalisées sur place, à ${esc(s.short)}.</p></div>
    ${repairGrid()}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Toutes marques</span><h2>Les marques réparées à ${esc(s.short)}</h2></div>
    ${brandGrid()}
  </div>
</section>

${stepsSection([
  ['Vous passez au ' + s.street.toLowerCase(), "Sans rendez-vous, 7j/7. " + s.transport[0] + "."],
  ['Diagnostic gratuit', "Nous testons l'appareil devant vous et identifions la panne, sans frais."],
  ['Devis ferme', "Le prix annoncé est celui que vous payez, bonus QualiRépar déduit quand il s'applique."],
  ['Réparation et garantie', "30 minutes pour un iPhone, environ 1 heure pour les autres marques."]
], { eyebrow: 'Votre visite', title: 'Comment ça se passe à ' + esc(s.short) })}

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head center reveal"><span class="eyebrow">Pourquoi nous</span><h2>Le même atelier, les mêmes garanties</h2></div>
    ${uspGrid()}
  </div>
</section>

${reviewsSection()}
${faqSection(faq, 'Boutique ' + esc(s.short) + ' — vos questions')}

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Nos autres adresses</span><h2>Une boutique plus proche de chez vous ?</h2></div>
    <div class="grid g2" data-stagger="90">${others.map((o, i) => shopCard(o, i)).join('')}</div>
  </div>
</section>

${ctaBand('On vous attend au ' + esc(s.street) + '.', "Diagnostic gratuit, réparation express et garantie. Passez quand vous voulez, ou appelez-nous avant de vous déplacer.")}
`;

  return {
    path,
    file: s.slug + '/index.html',
    html: page({
      path,
      title: 'Mistral Phone ' + s.short + ' — Réparation téléphone ' + s.zip,
      description: 'Réparation de téléphone au ' + s.street + ', ' + s.zip + ' Marseille. iPhone, Samsung, Xiaomi : écran, batterie, connecteur, désoxydation. ' + String(s.rating).replace('.', ',') + '/5 sur ' + s.reviews + ' avis.',
      body, faq,
      crumbs: [
        { label: 'Nos boutiques', href: '/boutiques/' },
        { label: s.short, href: path }
      ]
    })
  };
}
