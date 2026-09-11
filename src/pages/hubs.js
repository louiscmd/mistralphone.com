import { SITE, BRANDS, REPAIRS, SHOPS, PRICING, PRICING_EXTRA, mapsUrl } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { phoneVisual, brandGrid, repairGrid, uspGrid, shopsSection, stepsSection, reviewsSection, faqSection, ctaBand, linkCloud, statsRow, shopCard, symptomList } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

const hero = ({ badges, h1a, h1b, sub, ctas, trust, visual = true }) => `
<section class="hero" style="padding-top:clamp(2rem,5vw,3.5rem)">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in"${visual ? '' : ' style="grid-template-columns:1fr;max-width:860px"'}>
    <div>
      <div class="hero-badges fade-up">${badges}</div>
      <h1><span class="line">${words(h1a)}</span>${h1b ? `<span class="line">${h1b.split(' ').map(w => `<span class="w gr-or">${w}</span>`).join(' ')}</span>` : ''}</h1>
      <p class="hero-sub fade-up">${sub}</p>
      <div class="hero-cta fade-up">${ctas}</div>
      ${trust ? `<div class="hero-trust fade-up">${trust}</div>` : ''}
    </div>
    ${visual ? phoneVisual() : ''}
  </div>
</section>`;

const CTA_MAIN = `<a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
  <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Réserver une réparation</span></a>`;
const TRUST = `<div class="hero-trust-i"><b>30 min</b><span>Réparation express</span></div>
  <div class="hero-trust-i"><b>3</b><span>boutiques à Marseille</span></div>
  <div class="hero-trust-i"><b>4,9/5</b><span>${SITE.reviewsCountLabel}+ avis Google</span></div>`;

/* ═══ 1. HUB RÉPARATION — mot-clé principal ═══════════════════════ */
export function hubReparation() {
  const path = '/reparation-telephone-marseille/';
  const faq = [
    ['Quel est le meilleur réparateur de téléphone à Marseille ?', "Difficile de répondre sans être juge et partie. Ce que nous pouvons dire, c'est que nos trois boutiques cumulent plus de 1 000 avis Google avec des moyennes de 4,8 et 4,9 sur 5, et que nous réparons des téléphones à Marseille depuis " + SITE.since + "."],
    ['Combien coûte une réparation de téléphone à Marseille ?', "Une batterie démarre autour de 39 €, un écran autour de 49 € selon le modèle. Consultez notre page tarifs pour le détail, ou appelez-nous pour un devis immédiat et gratuit."],
    ['Réparez-vous toutes les marques ?', "Oui : iPhone, Samsung, Xiaomi, Redmi, POCO, Google Pixel, Huawei, Oppo, Honor, Motorola, et aussi les tablettes, iPad, MacBook et PC portables."],
    ['Puis-je venir sans rendez-vous ?', "Oui, nos trois boutiques accueillent sans rendez-vous 7j/7. Réserver un créneau en ligne vous assure simplement que la pièce est en stock."],
    ['Où êtes-vous situés à Marseille ?', "Deux boutiques dans le 4e arrondissement (11 avenue du Maréchal Foch et 1 rue Maréchal Fayolle) et une dans le 12e (12 avenue de Saint-Julien, Saint-Barnabé)."],
    ['Proposez-vous une garantie ?', "Oui, sur la pièce comme sur la main d'œuvre, pour toutes nos réparations."]
  ];
  const body = `
${hero({
    badges: `<span class="pill gold">${ICONS.star}<span>4,9/5 · ${SITE.reviewsCountLabel}+ avis</span></span>
      <span class="pill">${ICONS.bolt}<span>Express 30 min</span></span>
      <span class="pill">${ICONS.leaf}<span>QualiRépar −25 €</span></span>`,
    h1a: 'Réparation de téléphone', h1b: 'à Marseille',
    sub: `<strong>iPhone, Samsung, Xiaomi, Google Pixel</strong>, Huawei, Oppo, Honor, Motorola : nous réparons toutes les marques dans nos 3 boutiques marseillaises, le plus souvent le jour même.`,
    ctas: CTA_MAIN, trust: TRUST
  })}

<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Par marque</span>
      <h2>Choisissez <span class="gr-mix">votre marque</span></h2>
      <p class="lead">Chaque marque a sa page : modèles pris en charge, réparations disponibles et délais.</p>
    </div>
    ${brandGrid()}
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Par type de panne</span>
      <h2>Choisissez <span class="gr-or">votre panne</span></h2>
    </div>
    ${repairGrid()}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="grid g2" style="gap:clamp(2rem,5vw,4rem);align-items:start">
      <div class="reveal-l prose">
        <span class="eyebrow">Le contexte</span>
        <h2 style="margin:1rem 0 1.2rem">Faire réparer son téléphone à Marseille</h2>
        <p>Un smartphone tombe en moyenne une fois par mois. À Marseille, entre les terrasses du Vieux-Port, les escaliers de la gare Saint-Charles et le sable des plages du Prado, les écrans souffrent. La bonne nouvelle, c'est qu'un écran fissuré, une batterie fatiguée ou un connecteur de charge encrassé se réparent en moins d'une heure, pour une fraction du prix d'un téléphone neuf.</p>
        <p>Depuis ${SITE.since}, <strong>Mistral Phone</strong> répare les smartphones des Marseillais. Trois boutiques, deux dans le 4e arrondissement et une dans le 12e, un atelier sur place, et des techniciens qui ouvrent des téléphones toute la journée. Rien n'est envoyé ailleurs : votre appareil reste à Marseille, et vous repartez le plus souvent avec.</p>
        <h3>Réparer plutôt que remplacer</h3>
        <p>Changer de téléphone coûte cher et fabrique des déchets électroniques. C'est pour cela que l'État a créé le <strong>bonus QualiRépar</strong>, une remise pouvant aller jusqu'à 25 € sur les réparations réalisées chez un réparateur certifié. Nous le sommes : la remise est déduite directement de votre facture, sans démarche de votre part.</p>
        <h3>Ce que nous réparons le plus</h3>
        <ul>
          ${REPAIRS.slice(0, 5).map(r => `<li>${ICONS.check}<span><a href="/${r.slug}/">${esc(r.label)}</a> — ${esc(r.tagline.toLowerCase())}</span></li>`).join('')}
        </ul>
      </div>
      <div class="reveal-s">
        <div class="card" style="padding:1.9rem;margin-bottom:1.1rem">
          <div class="card-ico">${ICONS.pin}</div>
          <h3>Deux arrondissements couverts</h3>
          <p style="margin-bottom:1.2rem">Nos boutiques couvrent le centre-est de Marseille et ses quartiers alentour.</p>
          <div class="chips">
            <a class="chip" href="/reparation-telephone-marseille-13004/">Marseille 13004</a>
            <a class="chip" href="/reparation-telephone-marseille-13012/">Marseille 13012</a>
            <span class="chip">La Blancarde</span><span class="chip">Les Chartreux</span>
            <span class="chip">Cinq Avenues</span><span class="chip">Saint-Barnabé</span>
            <span class="chip">Saint-Julien</span><span class="chip">Montolivet</span>
            <span class="chip">Les Caillols</span><span class="chip">La Valentine</span>
          </div>
        </div>
        <div class="card" style="padding:1.9rem">
          <div class="card-ico">${ICONS.euro}</div>
          <h3>Combien ça coûte ?</h3>
          <p style="margin-bottom:1.2rem">Nos tarifs sont affichés, sans surprise au moment de payer.</p>
          <a class="btn btn-primary btn-block" href="/tarifs/">${ICONS.arrow}<span>Voir tous les tarifs</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head center reveal"><span class="eyebrow">Pourquoi nous</span><h2>Vingt ans d'ateliers, pas de bricolage</h2></div>
    ${uspGrid()}
    <div style="margin-top:1.6rem">${statsRow()}</div>
  </div>
</section>

${stepsSection([
  ['Vous passez ou vous réservez', "Sans rendez-vous dans nos trois boutiques, ou en réservant un créneau en ligne pour être prioritaire."],
  ['Diagnostic gratuit', "Nous identifions la panne devant vous, sans frais et sans engagement."],
  ['Devis ferme', "Prix annoncé avant intervention, bonus QualiRépar déduit quand il s'applique."],
  ['Réparation garantie', "30 minutes pour un iPhone, environ 1 heure pour les autres marques, garantie pièce et main d'œuvre."]
])}

${shopsSection()}
${reviewsSection()}
${faqSection(faq, 'Réparation de téléphone à Marseille — vos questions')}
${linkCloud()}
${ctaBand()}`;

  return {
    path, file: 'reparation-telephone-marseille/index.html',
    html: page({
      path,
      title: 'Réparation téléphone Marseille — Toutes marques, express',
      description: "Réparation de téléphone à Marseille depuis " + SITE.since + " : iPhone, Samsung, Xiaomi, Google Pixel et toutes marques. 3 boutiques, devis gratuit, express 30 min.",
      body, faq,
      crumbs: [{ label: 'Réparation téléphone Marseille', href: path }]
    })
  };
}

/* ═══ 2. HUB NOS RÉPARATIONS ══════════════════════════════════════ */
export function hubReparations() {
  const path = '/nos-reparations/';
  const faq = [
    ['Quelle est la réparation la plus fréquente ?', "Le remplacement d'écran, très largement. Vient ensuite la batterie, puis le connecteur de charge."],
    ['Réparez-vous les cartes mères ?', "Oui, nous pratiquons la micro-soudure sur carte mère pour les pannes complexes : téléphone qui ne s'allume plus, suites de désoxydation, composants de charge défectueux."],
    ['Et les tablettes et ordinateurs portables ?', "iPad, tablettes Samsung, MacBook et PC portables sont pris en charge en boutique. Appelez-nous pour un devis immédiat."]
  ];
  const body = `
${hero({
    badges: `<span class="pill">${ICONS.bolt}<span>La plupart réparées en moins d'1 h</span></span><span class="pill gold">${ICONS.shield}<span>Toujours garanti</span></span>`,
    h1a: 'Nos réparations', h1b: 'de A à Z',
    sub: "Écran, batterie, connecteur de charge, vitre arrière, caméra, haut-parleur, désoxydation ou téléphone qui ne s'allume plus : chaque panne a sa page, ses symptômes et son délai.",
    ctas: CTA_MAIN, trust: TRUST
  })}
<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Toutes nos interventions</span><h2>Trouvez <span class="gr-or">votre panne</span></h2></div>
    ${repairGrid()}
  </div>
</section>
<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Par marque</span><h2>Sur quelle marque ?</h2></div>
    ${brandGrid()}
  </div>
</section>
<section class="sec">
  <div class="wrap">
    <div class="sec-head center reveal"><span class="eyebrow">Au-delà du smartphone</span><h2>Tablettes, MacBook et PC portables</h2>
      <p class="lead" style="margin:0 auto">iPad, tablettes Samsung ou Huawei, MacBook, PC portables : nous intervenons aussi sur les écrans, batteries, claviers et connectiques. Appelez-nous pour un devis immédiat.</p></div>
    <div style="display:flex;justify-content:center;gap:.7rem;flex-wrap:wrap">
      <a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
      <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Envoyer une demande</span></a>
    </div>
  </div>
</section>
${shopsSection()}
${faqSection(faq)}
${linkCloud()}
${ctaBand()}`;

  return {
    path, file: 'nos-reparations/index.html',
    html: page({
      path,
      title: 'Nos réparations de téléphone à Marseille',
      description: "Toutes nos réparations de téléphone à Marseille : écran cassé, batterie, connecteur de charge, vitre arrière, caméra, haut-parleur et désoxydation.",
      body, faq,
      crumbs: [{ label: 'Nos réparations', href: path }]
    })
  };
}

/* ═══ 3. HUB BOUTIQUES ════════════════════════════════════════════ */
export function hubBoutiques() {
  const path = '/boutiques/';
  const faq = [
    ['Quelle boutique choisir ?', "Prenez la plus proche : elles réparent toutes les mêmes marques avec les mêmes garanties. Maréchal Foch et Maréchal Fayolle sont dans le 4e, Saint-Barnabé dans le 12e."],
    ['Êtes-vous ouverts le dimanche ?', "Oui, de 10h à 15h. Nous sommes ouverts 7j/7."],
    ['Faut-il prendre rendez-vous ?', "Non, nos boutiques accueillent sans rendez-vous. Réserver un créneau en ligne permet simplement de garantir la disponibilité de la pièce."]
  ];
  const body = `
${hero({
    badges: `<span class="pill">${ICONS.pin}<span>13004 &amp; 13012</span></span><span class="pill gold">${ICONS.clock}<span>Ouvert 7j/7</span></span>`,
    h1a: 'Nos 3 boutiques', h1b: 'à Marseille',
    sub: "Deux boutiques dans le 4e arrondissement, une dans le 12e à Saint-Barnabé. Toutes réparent l'ensemble des marques, avec les mêmes garanties et les mêmes délais.",
    ctas: CTA_MAIN, trust: TRUST, visual: false
  })}
<section class="sec">
  <div class="wrap">
    <div class="grid g3" data-stagger="90">${SHOPS.map(shopCard).join('')}</div>
    <div class="card reveal" style="margin-top:1.4rem;padding:1.6rem;display:flex;flex-wrap:wrap;gap:1.2rem;align-items:center;justify-content:space-between">
      <div style="display:flex;gap:.8rem;align-items:center">${ICONS.clock}
        <div><b style="font-family:var(--D);display:block">Horaires d'ouverture</b><span class="muted">${esc(SITE.hours)}</span></div></div>
      <a class="btn btn-primary" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
    </div>
  </div>
</section>
<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Par arrondissement</span><h2>Réparation par <span class="gr-bl">secteur</span></h2></div>
    <div class="grid g2" data-stagger="80">
      <a class="card" href="/reparation-telephone-marseille-13004/">
        <div class="card-ico">${ICONS.pin}</div><h3>Réparation téléphone Marseille 13004</h3>
        <p>Deux boutiques dans le 4e arrondissement : Maréchal Foch et Maréchal Fayolle. La Blancarde, les Chartreux, les Cinq Avenues, Chave.</p>
        <span class="brand-go">Voir la page 13004 ${ICONS.arrow}</span></a>
      <a class="card" href="/reparation-telephone-marseille-13012/">
        <div class="card-ico">${ICONS.pin}</div><h3>Réparation téléphone Marseille 13012</h3>
        <p>Notre atelier de Saint-Barnabé couvre Saint-Julien, Montolivet, les Caillols, la Valentine et Saint-Jean du Désert.</p>
        <span class="brand-go">Voir la page 13012 ${ICONS.arrow}</span></a>
    </div>
  </div>
</section>
${reviewsSection()}
${faqSection(faq)}
${ctaBand('Trois adresses, un seul niveau d’exigence.')}`;

  return {
    path, file: 'boutiques/index.html',
    html: page({
      path,
      title: 'Nos 3 boutiques de réparation à Marseille — 13004 & 13012',
      description: "Les 3 boutiques Mistral Phone à Marseille : av. Maréchal Foch et rue Maréchal Fayolle (13004), av. de Saint-Julien à Saint-Barnabé (13012). Ouvert 7j/7.",
      body, faq,
      crumbs: [{ label: 'Nos boutiques', href: path }]
    })
  };
}
