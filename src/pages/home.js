import { SITE, BRANDS, REPAIRS } from '../data.js';
import { page, ICONS } from '../layout.js';
import { phoneVisual, ticker, brandGrid, repairGrid, uspGrid, shopsSection, stepsSection, statsRow, reviewsSection, faqSection, ctaBand, linkCloud } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

const FAQ = [
  ['Combien coûte une réparation de téléphone à Marseille ?', "Cela dépend du modèle et de la panne. Un remplacement de batterie démarre autour de 39 €, un écran autour de 49 € sur les modèles les plus courants. Le diagnostic et le devis sont toujours gratuits, et le prix annoncé est le prix final."],
  ['Faut-il prendre rendez-vous ?', "Non, vous pouvez passer directement dans l'une de nos trois boutiques. Réserver un créneau en ligne vous garantit simplement que la pièce est en stock et que votre appareil passe en priorité."],
  ['Combien de temps dure la réparation ?', "Un écran ou une batterie d'iPhone prend en moyenne 30 minutes. Comptez environ 1 heure pour un Samsung, Xiaomi, Google Pixel ou une autre marque. Une désoxydation demande 24 à 48 heures."],
  ['La réparation est-elle garantie ?', "Oui. La pièce et la main d'œuvre sont garanties sur toutes nos interventions. En cas de souci après notre passage, vous revenez en boutique et nous reprenons l'appareil."],
  ['Qu’est-ce que le bonus QualiRépar de 25 € ?', "C'est une aide officielle de l'État destinée à encourager la réparation plutôt que le remplacement. En tant que réparateur certifié QualiRépar, nous déduisons directement la remise, jusqu'à 25 €, de votre facture sur les réparations éligibles."],
  ['Vais-je perdre mes photos et mes données ?', "Non. Le remplacement d'un écran, d'une batterie ou d'un connecteur n'affecte pas la mémoire de l'appareil. Nous vous conseillons malgré tout de faire une sauvegarde avant toute intervention."],
  ['Réparez-vous aussi les tablettes et les ordinateurs portables ?', "Oui. iPad, tablettes Samsung, MacBook et PC portables sont pris en charge en boutique. Appelez-nous au " + SITE.phone + " pour un devis immédiat."],
  ['Où se trouvent vos boutiques à Marseille ?', "Nous avons deux boutiques dans le 4e arrondissement, 11 avenue du Maréchal Foch et 1 rue Maréchal Fayolle, et une dans le 12e, 12 avenue de Saint-Julien à Saint-Barnabé."]
];

const body = `
<section class="hero">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in">
    <div>
      <div class="hero-badges fade-up">
        <span class="pill gold">${ICONS.star}<span>4,9/5 · ${SITE.reviewsCountLabel}+ avis Google</span></span>
        <span class="pill">${ICONS.bolt}<span>Réparation express</span></span>
        <span class="pill">${ICONS.leaf}<span>Certifié QualiRépar</span></span>
      </div>

      <h1><span class="line">${words('Réparation de téléphone')}</span><span class="line"><span class="w gr-or">à</span> <span class="w gr-or">Marseille</span></span></h1>

      <p class="hero-sub fade-up"><strong>iPhone, Samsung, Xiaomi, Google Pixel</strong> et toutes marques. Réparation rapide dans nos 3 boutiques à Marseille.</p>
      <p class="hero-loc fade-up">${ICONS.pin}<span>Deux boutiques dans le <strong style="color:#fff">13004</strong> et une dans le <strong style="color:#fff">13012</strong> · Ouvert 7j/7</span></p>

      <div class="hero-cta fade-up">
        <a class="btn btn-primary btn-lg magnetic" href="/boutiques/">${ICONS.pin}<span>Trouver ma boutique</span></a>
        <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Réserver une réparation</span></a>
      </div>

      <div class="hero-trust fade-up">
        <div class="hero-trust-i"><b>Gratuit</b><span>Devis &amp; diagnostic</span></div>
        <div class="hero-trust-i"><b>30 min</b><span>Réparation express</span></div>
        <div class="hero-trust-i"><b>Garantie</b><span>Pièce &amp; main d'œuvre</span></div>
      </div>
    </div>
    ${phoneVisual()}
  </div>
</section>

${ticker()}

<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Toutes les marques</span>
      <h2>Quelle est <span class="gr-mix">votre marque</span> ?</h2>
      <p class="lead">Choisissez votre marque pour découvrir les réparations disponibles, les modèles pris en charge et les délais.</p>
    </div>
    ${brandGrid()}
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Nos réparations</span>
      <h2>Une panne. <span class="gr-or">Une solution.</span></h2>
      <p class="lead">Écran cassé, batterie fatiguée, connecteur de charge capricieux ou téléphone tombé dans l'eau : nos techniciens interviennent sur tout, en boutique et le plus souvent le jour même.</p>
    </div>
    ${repairGrid()}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">Pourquoi Mistral Phone</span>
      <h2>Réparateur à Marseille<br><span class="gr-bl">depuis ${SITE.since}</span></h2>
    </div>
    ${uspGrid()}
    <div style="margin-top:1.6rem">${statsRow()}</div>
  </div>
</section>

${stepsSection([
  ['Vous passez en boutique', "Sans rendez-vous obligatoire, dans l'une de nos trois boutiques marseillaises. Vous pouvez aussi réserver un créneau en ligne pour que la pièce soit prête."],
  ['Diagnostic gratuit', "Nous testons votre appareil devant vous et identifions précisément la panne. Aucun frais, aucun engagement."],
  ['Devis clair, prix ferme', "Vous choisissez entre pièce d'origine et pièce de qualité équivalente. Le prix annoncé est celui que vous payez, remise QualiRépar déduite."],
  ['Réparation et garantie', "30 minutes pour un iPhone, environ 1 heure pour les autres marques. Chaque intervention est testée puis garantie."]
], { eyebrow: 'Comment ça se passe', title: 'De la porte à la <span class="gr-or">réparation</span>' })}

${shopsSection()}
${reviewsSection()}
${faqSection(FAQ, 'Tout ce que vous nous demandez')}
${linkCloud()}
${ctaBand()}
`;

export default () => ({
  path: '/',
  file: 'index.html',
  faq: FAQ,
  html: page({
    path: '/',
    title: 'Mistral Phone — Réparation téléphone à Marseille 7j/7',
    description: "Réparation de téléphone à Marseille : iPhone, Samsung, Xiaomi, Google Pixel et toutes marques. 3 boutiques (13004 et 13012), devis gratuit, express en 30 min.",
    body,
    faq: FAQ
  })
});
