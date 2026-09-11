import { SITE, BUY } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { vitrineVisual, productCard, buyCategories, shopsSection, faqSection, ctaBand, linkCloud, reviewsSection } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

export default function buyPage() {
  const path = '/acheter-telephone-marseille/';
  const f = BUY.featured;
  const faq = [
    ['Vos téléphones sont-ils débloqués ?', "Oui, tous nos téléphones sont débloqués tout opérateur. Vous glissez votre carte SIM et c'est parti."],
    ['Vendez-vous des téléphones neufs ou d’occasion ?', "Les deux. Nous avons des smartphones d'occasion et des neufs, ainsi que des tablettes et des accessoires. Le stock change régulièrement : le catalogue complet est en boutique."],
    ['Y a-t-il une garantie sur les téléphones d’occasion ?', "Oui, la durée de garantie est indiquée sur chaque appareil. Notre " + f.name + " " + f.storage + " d'occasion, par exemple, est garanti " + f.warranty.replace('Garantie ', '') + "."],
    ['Peut-on réserver un téléphone avant de venir ?', "Oui, appelez-nous au " + SITE.phone + " : nous vérifions la disponibilité et mettons l'appareil de côté."],
    ['Vendez-vous des accessoires ?', "Oui : coques, protections d'écran, chargeurs et câbles. Nous pouvons poser la protection d'écran sur place, au moment de l'achat ou de la réparation."]
  ];

  const body = `
<section class="hero" style="padding-top:clamp(2rem,5vw,3.5rem)">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in">
    <div>
      <div class="hero-badges fade-up">
        <span class="pill gold">${ICONS.bag}<span>Vente en boutique</span></span>
        <span class="pill">${ICONS.check}<span>Débloqués tout opérateur</span></span>
        <span class="pill">${ICONS.shield}<span>Garantie</span></span>
      </div>
      <h1><span class="line">${words('Acheter un téléphone')}</span><span class="line"><span class="w serif">à</span> <span class="w serif">Marseille</span></span></h1>
      <p class="hero-sub fade-up">${esc(BUY.intro)}</p>
      <div class="hero-cta fade-up">
        <a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Disponibilités — ${SITE.phone}</span></a>
        <a class="btn btn-ghost btn-lg" href="/boutiques/">${ICONS.pin}<span>Trouver ma boutique</span></a>
      </div>
      <div class="hero-trust fade-up">
        <div class="hero-trust-i"><b>${f.price} €</b><span>${esc(f.name)} ${esc(f.storage)}</span></div>
        <div class="hero-trust-i"><b>100 %</b><span>débloqués</span></div>
        <div class="hero-trust-i"><b>3</b><span>boutiques à Marseille</span></div>
      </div>
    </div>
    ${vitrineVisual()}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">En boutique</span>
      <h2>Tout ce que vous trouverez <span class="serif">chez nous</span></h2>
      <p class="lead">Le stock évolue chaque semaine. Appelez-nous pour savoir ce qui est disponible, ou passez voir la vitrine.</p>
    </div>
    ${buyCategories()}
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap buy-grid">
    <div class="reveal-l prose">
      <span class="eyebrow">Le bon plan du moment</span>
      <h2 style="margin:1rem 0">Un iPhone garanti, <span class="serif">sans le prix du neuf.</span></h2>
      <p>Un téléphone d'occasion vendu par un atelier de réparation n'est pas un téléphone d'occasion comme les autres : il passe entre les mains de techniciens qui savent exactement quoi vérifier.</p>
      <ul>${BUY.promises.map(p => `<li>${ICONS.check}<span>${esc(p)}</span></li>`).join('')}</ul>
      <p>Le catalogue complet est disponible en boutique. Un modèle précis en tête ? Appelez-nous, nous vous disons s'il est en stock.</p>
    </div>
    <div class="reveal-s">${productCard()}</div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="grid g2" style="gap:clamp(2rem,5vw,4rem);align-items:start">
      <div class="prose reveal-l">
        <span class="eyebrow">Réparer ou racheter ?</span>
        <h2 style="margin:1rem 0">Un conseil honnête, <span class="serif">dans les deux sens.</span></h2>
        <p>Comme nous faisons les deux, nous n'avons aucun intérêt à vous pousser vers l'un plutôt que l'autre. Si votre téléphone se répare pour une fraction de sa valeur, nous le réparons. Si la réparation coûte plus cher que l'appareil, nous vous le disons, et nous vous montrons ce que nous avons en vitrine.</p>
        <p>Dans tous les cas, le diagnostic est gratuit.</p>
        <div class="hero-cta" style="margin-top:1.4rem">
          <a class="btn btn-primary" href="/reparation-telephone-marseille/">${ICONS.bolt}<span>Voir les réparations</span></a>
          <a class="btn btn-ghost" href="/tarifs/">${ICONS.euro}<span>Tarifs</span></a>
        </div>
      </div>
      <div class="reveal-s">
        <div class="card" style="padding:1.9rem">
          <div class="card-ico">${ICONS.leaf}</div>
          <h3>Bonus QualiRépar : −25 €</h3>
          <p>Si vous choisissez de réparer, la remise officielle QualiRépar, jusqu'à 25 €, est déduite directement de votre facture sur les réparations éligibles.</p>
        </div>
      </div>
    </div>
  </div>
</section>

${shopsSection('Venez voir la vitrine', 'Nos boutiques')}
${reviewsSection()}
${faqSection(faq, 'Acheter chez Mistral Phone — vos questions')}
${linkCloud('Nos autres pages')}
${ctaBand('Le téléphone qu’il vous faut est peut-être déjà en vitrine.', "Appelez-nous pour connaître les modèles disponibles, ou passez dans l'une de nos trois boutiques marseillaises.")}
`;

  return {
    path, file: 'acheter-telephone-marseille/index.html',
    html: page({
      path,
      title: 'Téléphone d’occasion et neuf à Marseille — Mistral Phone',
      description: "Smartphones d'occasion et neufs, tablettes et accessoires à Marseille. Tous débloqués tout opérateur, garantis. Ex. iPhone 11 64 Go à 199 €. 3 boutiques.",
      body, faq,
      crumbs: [{ label: 'Acheter un téléphone', href: path }]
    })
  };
}
