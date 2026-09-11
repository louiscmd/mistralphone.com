import { SITE, BRANDS, REPAIRS } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { ticketVisual, brandGrid, repairGrid, uspGrid, shopsSection, stepsSection, reviewsSection, faqSection, ctaBand, statsRow } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

export default function brandPage(b) {
  const path = '/' + b.slug + '/';
  const commonFaq = [
    ['Où faire réparer un ' + b.kw + ' à Marseille ?', "Dans l'une de nos trois boutiques : 11 avenue du Maréchal Foch et 1 rue Maréchal Fayolle dans le 13004, ou 12 avenue de Saint-Julien à Saint-Barnabé dans le 13012. Nous sommes ouverts 7j/7."],
    ['La réparation d’un ' + b.kw + ' est-elle garantie ?', "Oui, pièce et main d'œuvre. Si un problème survient après notre intervention, vous revenez en boutique et nous reprenons l'appareil sans discuter."],
    ['Puis-je bénéficier du bonus QualiRépar sur un ' + b.kw + ' ?', "Oui sur les réparations éligibles. La remise, jusqu'à 25 €, est déduite directement de votre facture : vous n'avez aucune démarche à faire."]
  ];
  const faq = [...b.faq, ...commonFaq];

  const body = `
<section class="hero" style="padding-top:clamp(2rem,5vw,3.5rem)">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in">
    <div>
      <div class="hero-badges fade-up">
        <span class="pill gold">${ICONS.bolt}<span>Réparé en ${esc(b.time)}</span></span>
        <span class="pill">${ICONS.shield}<span>Garantie pièce &amp; main d'œuvre</span></span>
        <span class="pill">${ICONS.star}<span>4,9/5 sur Google</span></span>
      </div>
      <h1><span class="line">${words('Réparation ' + b.label)}</span><span class="line"><span class="w gr-or">à</span> <span class="w gr-or">Marseille</span></span></h1>
      <p class="hero-sub fade-up">${esc(b.intro)}</p>
      <div class="hero-cta fade-up">
        <a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Devis gratuit — ${SITE.phone}</span></a>
        <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Réserver une réparation</span></a>
      </div>
      <div class="hero-trust fade-up">
        <div class="hero-trust-i"><b>${esc(b.time)}</b><span>Durée moyenne</span></div>
        <div class="hero-trust-i"><b>3</b><span>boutiques à Marseille</span></div>
        <div class="hero-trust-i"><b>−25 €</b><span>Bonus QualiRépar</span></div>
      </div>
    </div>
    ${ticketVisual({ device: b.demo, repair: 'Remplacement écran', time: b.time, price: 'Devis gratuit' })}
  </div>
</section>


<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Réparations ${esc(b.label)}</span>
      <h2>Ce que nous réparons sur <span class="gr-mix">votre ${esc(b.label)}</span></h2>
      <p class="lead">Chaque panne a sa page dédiée : symptômes, déroulé de l'intervention et durée. Cliquez sur la vôtre.</p>
    </div>
    ${repairGrid()}
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Modèles pris en charge</span>
      <h2>Tous les <span class="gr-or">${esc(b.label)}</span>, des plus anciens aux derniers sortis</h2>
      <p class="lead">Votre modèle n'est pas dans la liste ? Appelez-nous, nous réparons bien plus de références que ce que nous pouvons afficher ici.</p>
    </div>
    <div class="chips reveal">
      ${b.models.map(m => `<span class="chip">${ICONS.check}${esc(m)}</span>`).join('')}
    </div>
    <div style="margin-top:1.8rem">
      <a class="btn btn-primary magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Mon modèle n'est pas listé</span></a>
    </div>
  </div>
</section>

${stepsSection([
  ['Diagnostic gratuit en boutique', "Nous testons votre " + b.kw + " devant vous : affichage, tactile, batterie, charge, audio et capteurs. Le diagnostic ne vous coûte rien."],
  ['Devis ferme et transparent', "Prix annoncé avant toute intervention, avec le choix entre pièce d'origine et pièce de qualité équivalente."],
  ['Réparation en atelier', "Comptez en moyenne " + b.time + ". La plupart des réparations sont réalisées pendant que vous attendez."],
  ['Tests puis garantie', "Contrôle complet avant restitution et garantie sur la pièce comme sur la main d'œuvre."]
], { eyebrow: 'Le déroulé', title: 'Votre ' + esc(b.label) + ' entre <span class="gr-or">de bonnes mains</span>' })}

<section class="sec">
  <div class="wrap">
    <div class="sec-head center reveal">
      <span class="eyebrow">Pourquoi nous</span>
      <h2>Réparateur ${esc(b.label)} à Marseille depuis ${SITE.since}</h2>
    </div>
    ${uspGrid()}
    <div style="margin-top:1.6rem">${statsRow()}</div>
  </div>
</section>

${shopsSection('Où faire réparer votre ' + esc(b.label) + ' à Marseille')}
${reviewsSection()}
${faqSection(faq, 'Réparation ' + esc(b.label) + ' — vos questions')}

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Autres marques</span>
      <h2>Nous réparons aussi</h2>
    </div>
    ${brandGrid(b.id)}
  </div>
</section>

${ctaBand('Votre ' + esc(b.label) + ' peut être réparé aujourd’hui.', "Passez dans l'une de nos trois boutiques marseillaises ou appelez-nous pour un devis gratuit et immédiat.")}
`;

  return {
    path,
    file: b.slug + '/index.html',
    html: page({
      path,
      title: 'Réparation ' + b.label + ' Marseille — Écran, batterie, express',
      description: 'Réparation ' + b.kw + ' à Marseille : écran, batterie, connecteur de charge, caméra, vitre arrière. Réparé en ' + b.time + ', 3 boutiques. Devis gratuit.',
      body,
      faq,
      crumbs: [
        { label: 'Réparation', href: '/reparation-telephone-marseille/' },
        { label: 'Réparation ' + b.label, href: path }
      ]
    })
  };
}
