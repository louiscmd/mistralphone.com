import { SITE, SHOPS } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { storySection, brandGrid, repairGrid, uspGrid, shopsSection, statsRow, reviewsSection, faqSection, ctaBand, linkCloud, buySection } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

const FAQ = [
  ['Combien coûte une réparation de téléphone à Marseille ?', "Cela dépend du modèle et de la panne. Un remplacement de batterie démarre autour de 39 €, un écran autour de 49 € sur les modèles les plus courants. Le diagnostic et le devis sont toujours gratuits, et le prix annoncé est le prix final."],
  ['Faut-il prendre rendez-vous ?', "Non, vous pouvez passer directement dans l'une de nos trois boutiques. Réserver un créneau en ligne vous garantit simplement que la pièce est en stock et que votre appareil passe en priorité."],
  ['Combien de temps dure la réparation ?', "Un écran ou une batterie d'iPhone prend en moyenne 30 minutes. Comptez environ 1 heure pour un Samsung, Xiaomi, Google Pixel ou une autre marque. Une désoxydation demande 24 à 48 heures."],
  ['Vendez-vous aussi des téléphones ?', "Oui. Smartphones d'occasion et neufs, tablettes et accessoires sont disponibles en boutique, tous débloqués tout opérateur. Appelez-nous pour connaître les modèles disponibles en ce moment."],
  ['La réparation est-elle garantie ?', "Oui. La pièce et la main d'œuvre sont garanties sur toutes nos interventions. En cas de souci après notre passage, vous revenez en boutique et nous reprenons l'appareil."],
  ['Qu’est-ce que le bonus QualiRépar de 25 € ?', "C'est une aide officielle de l'État destinée à encourager la réparation plutôt que le remplacement. En tant que réparateur certifié QualiRépar, nous déduisons directement la remise, jusqu'à 25 €, de votre facture sur les réparations éligibles."],
  ['Vais-je perdre mes photos et mes données ?', "Non. Le remplacement d'un écran, d'une batterie ou d'un connecteur n'affecte pas la mémoire de l'appareil. Nous vous conseillons malgré tout de faire une sauvegarde avant toute intervention."],
  ['Où se trouvent vos boutiques à Marseille ?', "Nous avons deux boutiques dans le 4e arrondissement, 11 avenue du Maréchal Foch et 1 rue Maréchal Fayolle, et une dans le 12e, 12 avenue de Saint-Julien à Saint-Barnabé."]
];

const body = `
<section class="hero hero-home">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-c">
    <div class="hero-badges fade-up">
      <span class="pill gold">${ICONS.star}<span>4,9/5 · ${SITE.reviewsCountLabel}+ avis Google</span></span>
      <span class="pill">${ICONS.leaf}<span>Certifié QualiRépar</span></span>
      <span class="pill">${ICONS.clock}<span>Ouvert 7j/7</span></span>
    </div>

    <h1><span class="line">${words('Réparation de téléphone')}</span><span class="line"><span class="w serif">à</span> <span class="w serif">Marseille</span></span></h1>

    <p class="hero-sub fade-up"><strong>iPhone, Samsung, Xiaomi, Google Pixel</strong> et toutes marques</p>
    <p class="hero-loc fade-up">${ICONS.pin}<span>Réparation rapide dans nos 3 boutiques à Marseille — 13004 et 13012.</span></p>
    <ul class="promise fade-up"><li>Devis gratuit</li><li>Réparation express</li><li>Garantie</li></ul>

    <div class="hero-cta fade-up">
      <a class="btn btn-primary btn-lg magnetic" href="/boutiques/">${ICONS.pin}<span>Trouver ma boutique</span></a>
      <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Réserver une réparation</span></a>
    </div>

    <div class="hero-rates fade-up">
      ${SHOPS.map(s => `<a href="/${s.slug}/"><b>${ICONS.star}${String(s.rating).replace('.', ',')}</b><span>${esc(s.short)} · ${s.zip}</span></a>`).join('')}
    </div>

    <a class="cue fade-up" href="#histoire"><span class="cue-m"><i></i></span><span>Suivez un téléphone, de l'atelier à la vitrine</span></a>
  </div>
</section>

${storySection()}

<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Toutes les marques</span>
      <h2>Quelle est <span class="serif">votre marque</span> ?</h2>
      <p class="lead">Choisissez votre marque pour découvrir les réparations disponibles, les modèles pris en charge et les délais.</p>
    </div>
    ${brandGrid()}
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Nos réparations</span>
      <h2>Une panne. <span class="serif">Une solution.</span></h2>
      <p class="lead">Écran cassé, batterie fatiguée, connecteur de charge capricieux ou téléphone tombé dans l'eau : nos techniciens interviennent sur tout, en boutique et le plus souvent le jour même.</p>
    </div>
    ${repairGrid()}
  </div>
</section>

${buySection()}

<section class="sec">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">Pourquoi Mistral Phone</span>
      <h2>Réparateur à Marseille <span class="serif">depuis ${SITE.since}</span></h2>
    </div>
    ${uspGrid()}
    <div style="margin-top:1.4rem">${statsRow()}</div>
  </div>
</section>

${shopsSection()}
${reviewsSection()}
${faqSection(FAQ, 'Tout ce que vous nous demandez')}
${linkCloud()}
${ctaBand()}
`;

export default () => ({
  path: '/',
  file: 'index.html',
  html: page({
    path: '/',
    title: 'Mistral Phone — Réparation téléphone à Marseille 7j/7',
    description: "Réparation et vente de téléphones à Marseille : iPhone, Samsung, Xiaomi, Google Pixel. 3 boutiques (13004, 13012), devis gratuit, express 30 min.",
    body,
    faq: FAQ
  })
});
