import { SITE, BRANDS, REPAIRS } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { phoneVisual, brandGrid, repairGrid, uspGrid, shopsSection, stepsSection, reviewsSection, faqSection, ctaBand, symptomList } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

export default function repairPage(r) {
  const path = '/' + r.slug + '/';
  const faq = [
    ['Combien de temps prend cette réparation ?', "Comptez " + r.time + " en moyenne. Nous vous donnons un délai ferme au moment du devis, et la plupart des interventions se font pendant que vous attendez en boutique."],
    ['Quel est le prix ?', r.from
      ? "À partir de " + r.from + " € selon la marque et le modèle. Le diagnostic est gratuit et le prix annoncé au devis est le prix final, remise QualiRépar déduite."
      : "Le diagnostic est entièrement gratuit. Le prix dépend de la panne identifiée, et nous vous disons honnêtement si la réparation vaut le coup par rapport à la valeur de l'appareil."],
    ['Sur quelles marques intervenez-vous ?', "Sur toutes : iPhone, Samsung, Xiaomi, Redmi, POCO, Google Pixel, Huawei, Oppo, Honor et Motorola, ainsi que les tablettes et les ordinateurs portables."],
    ['Vais-je perdre mes données ?', "Non, ce type d'intervention n'affecte pas la mémoire de votre appareil. Une sauvegarde préalable reste toujours une bonne précaution."],
    ['Faut-il prendre rendez-vous ?', "Ce n'est pas obligatoire, vous pouvez passer directement. Réserver un créneau garantit simplement que la pièce est en stock à votre arrivée."]
  ];

  const body = `
<section class="hero" style="padding-top:clamp(2rem,5vw,3.5rem)">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in">
    <div>
      <div class="hero-badges fade-up">
        <span class="pill ${r.urgent ? 'gold' : ''}">${ICONS.clock}<span>${esc(r.time)}</span></span>
        ${r.from ? `<span class="pill">${ICONS.euro}<span>À partir de ${r.from} €</span></span>` : `<span class="pill">${ICONS.check}<span>Diagnostic gratuit</span></span>`}
        <span class="pill">${ICONS.shield}<span>Garantie incluse</span></span>
      </div>
      <h1><span class="line">${words(r.h1.replace(' à Marseille', '').replace(' — Marseille', ''))}</span><span class="line"><span class="w gr-or">à</span> <span class="w gr-or">Marseille</span></span></h1>
      <p class="hero-sub fade-up">${esc(r.intro)}</p>
      <div class="hero-cta fade-up">
        <a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${r.urgent ? 'Urgence — appelez-nous' : 'Devis gratuit — ' + SITE.phone}</span></a>
        <a class="btn btn-ghost btn-lg" href="/boutiques/">${ICONS.pin}<span>Trouver ma boutique</span></a>
      </div>
      <div class="hero-trust fade-up">
        <div class="hero-trust-i"><b>Toutes</b><span>marques réparées</span></div>
        <div class="hero-trust-i"><b>3</b><span>boutiques à Marseille</span></div>
        <div class="hero-trust-i"><b>7j/7</b><span>ouvert</span></div>
      </div>
    </div>
    ${phoneVisual()}
  </div>
</section>


<section class="sec">
  <div class="wrap">
    <div class="grid g2" style="gap:clamp(2rem,5vw,4rem);align-items:start">
      <div class="reveal-l">
        <span class="eyebrow">Vous reconnaissez ça ?</span>
        <h2 style="margin:1rem 0 1.4rem">Les signes qui ne trompent pas</h2>
        ${symptomList(r.symptoms)}
        <p class="lead" style="margin-top:1.4rem">Un seul de ces symptômes suffit pour passer nous voir : le diagnostic est gratuit et sans engagement.</p>
        <div style="margin-top:1.6rem;display:flex;gap:.7rem;flex-wrap:wrap">
          <a class="btn btn-primary magnetic" href="/contact/">${ICONS.cal}<span>Réserver un créneau</span></a>
          <a class="btn btn-ghost" href="/tarifs/">${ICONS.euro}<span>Voir les tarifs</span></a>
        </div>
      </div>
      <div class="card reveal-s" style="padding:1.9rem">
        <div class="card-ico">${ICONS[r.icon]}</div>
        <h3 style="font-size:1.5rem">${esc(r.label)}</h3>
        <p style="margin-bottom:1.3rem">${esc(r.tagline)}</p>
        <div class="grid" style="gap:.7rem">
          <div style="display:flex;justify-content:space-between;padding:.8rem 0;border-bottom:1px solid var(--line)">
            <span class="muted">Durée moyenne</span><strong>${esc(r.time)}</strong></div>
          <div style="display:flex;justify-content:space-between;padding:.8rem 0;border-bottom:1px solid var(--line)">
            <span class="muted">Tarif</span><strong class="price">${r.from ? 'dès ' + r.from + ' €' : 'Sur devis'}</strong></div>
          <div style="display:flex;justify-content:space-between;padding:.8rem 0;border-bottom:1px solid var(--line)">
            <span class="muted">Diagnostic</span><strong>Gratuit</strong></div>
          <div style="display:flex;justify-content:space-between;padding:.8rem 0">
            <span class="muted">Garantie</span><strong>Pièce &amp; main d'œuvre</strong></div>
        </div>
        <a class="btn btn-primary btn-block" style="margin-top:1.3rem" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
      </div>
    </div>
  </div>
</section>

${stepsSection(r.steps, { eyebrow: 'Notre méthode', title: 'Comment nous procédons' })}

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Toutes marques</span>
      <h2>${esc(r.label)} — sur quelle marque ?</h2>
      <p class="lead">Cette réparation est disponible sur l'ensemble des marques que nous prenons en charge.</p>
    </div>
    ${brandGrid()}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">Pourquoi nous</span>
      <h2>Un atelier, pas un comptoir</h2>
      <p class="lead" style="margin:0 auto">Nous réparons nous-mêmes, sur place, à Marseille. Rien n'est envoyé ailleurs.</p>
    </div>
    ${uspGrid()}
  </div>
</section>

${shopsSection('Où faire ' + (r.label.toLowerCase().startsWith('ne') ? 'diagnostiquer votre téléphone' : 'cette réparation') + ' à Marseille')}
${reviewsSection()}
${faqSection(faq)}

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Autres pannes</span>
      <h2>Nous réparons aussi</h2>
    </div>
    ${repairGrid(r.id)}
  </div>
</section>

${ctaBand(r.urgent ? 'Chaque heure compte. Ne rallumez pas votre téléphone.' : 'Une panne aujourd’hui, un téléphone réparé aujourd’hui.',
  r.urgent ? "Apportez-nous l'appareil éteint, le plus vite possible. Plus l'intervention est rapide, plus les chances de récupération sont élevées."
           : "Devis gratuit, réparation express et garantie sur chaque intervention. Trois boutiques à Marseille, ouvertes 7j/7.")}
`;

  return {
    path,
    file: r.slug + '/index.html',
    html: page({
      path,
      title: r.seoTitle,
      description: r.seoDesc,
      body,
      faq,
      crumbs: [
        { label: 'Nos réparations', href: '/nos-reparations/' },
        { label: r.label, href: path }
      ]
    })
  };
}
