import { SITE, SHOPS, mapsUrl } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { brandGrid, repairGrid, uspGrid, reviewsSection, faqSection, ctaBand, shopCard, stepsSection, linkCloud } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');

export const ZONES = [
  {
    zip: '13004', slug: 'reparation-telephone-marseille-13004',
    label: 'Marseille 13004', arr: '4e arrondissement',
    shops: ['foch', 'fayolle'],
    hoods: ['La Blancarde', 'Les Chartreux', 'Les Cinq Avenues', 'Chave', 'Longchamp', 'Saint-Charles', 'Le Camas', 'La Villette'],
    intro: "Deux boutiques Mistral Phone dans le 4e arrondissement : 11 avenue du Maréchal Foch et 1 rue Maréchal Fayolle. Réparation d'iPhone, Samsung, Xiaomi, Google Pixel et toutes marques, écran, batterie, connecteur de charge et désoxydation, à quelques minutes à pied du métro Chartreux et des Cinq Avenues.",
    seoTitle: 'Réparation téléphone Marseille 13004 — 2 boutiques',
    seoDesc: "Réparateur de téléphone à Marseille 13004 : 2 boutiques, av. Maréchal Foch et rue Maréchal Fayolle. Écran, batterie, express 30 min, devis gratuit.",
    text: [
      ['Un réparateur de téléphone au cœur du 4e arrondissement', "Le 4e arrondissement de Marseille est l'un des plus vivants de la ville : les Cinq Avenues, la Blancarde, les Chartreux, Chave. C'est ici que Mistral Phone a ouvert sa première boutique, avenue du Maréchal Foch, et c'est ici que nous réparons le plus de téléphones chaque semaine. Nos deux adresses du 13004 sont à moins de dix minutes l'une de l'autre : si une pièce manque dans l'une, elle est souvent disponible dans l'autre."],
      ['Écran cassé dans le 13004 ? Comptez 30 minutes', "Le remplacement d'écran reste, de loin, la réparation la plus demandée du quartier. Sur un iPhone, l'intervention prend en moyenne 30 minutes, le temps d'un café aux Cinq Avenues. Sur un Samsung, un Xiaomi ou un Google Pixel, comptez environ une heure. Le diagnostic est gratuit et le devis vous est donné avant toute ouverture de l'appareil."],
      ['Toutes les pannes, toutes les marques', "Batterie qui ne tient plus, connecteur de charge qui fait faux contact, vitre arrière fissurée, caméra floue, haut-parleur muet, téléphone tombé dans l'eau ou qui refuse de s'allumer : nos deux boutiques du 4e couvrent l'ensemble de ces réparations, sur iPhone comme sur Android."]
    ]
  },
  {
    zip: '13012', slug: 'reparation-telephone-marseille-13012',
    label: 'Marseille 13012', arr: '12e arrondissement',
    shops: ['saint-barnabe'],
    hoods: ['Saint-Barnabé', 'Saint-Julien', 'Montolivet', 'Les Caillols', 'La Valentine', 'Saint-Jean du Désert', 'Les Trois Lucs', 'La Fourragère'],
    intro: "Notre boutique de Saint-Barnabé, 12 avenue de Saint-Julien, couvre tout l'est marseillais. Réparation d'iPhone, Samsung, Xiaomi, Google Pixel et toutes marques : écran, batterie, connecteur de charge, caméra, désoxydation et micro-soudure.",
    seoTitle: 'Réparation téléphone Marseille 13012 — Saint-Barnabé',
    seoDesc: "Réparation de téléphone à Marseille 13012, Saint-Barnabé : 12 av. de Saint-Julien. Écran, batterie, désoxydation. 4,9/5 sur 415 avis, devis gratuit.",
    text: [
      ['Le réparateur de référence à Saint-Barnabé', "Avec 4,9 sur 5 et plus de 400 avis Google, notre boutique du 12e arrondissement est la mieux notée des trois. Située avenue de Saint-Julien, à trois minutes à pied du métro Saint-Barnabé, elle est le point de chute naturel des habitants de Montolivet, des Caillols, de la Valentine, des Trois Lucs et de Saint-Jean du Désert."],
      ['Écran, batterie, charge : les réparations du quotidien', "Un écran d'iPhone est remplacé en 30 minutes environ, une batterie tout autant. Sur Samsung, Xiaomi, Google Pixel, Honor ou Oppo, comptez une heure. Le diagnostic est gratuit, le devis est ferme, et vous repartez le plus souvent avec votre téléphone réparé le jour même."],
      ['Désoxydation et micro-soudure dans le 13012', "C'est aussi dans cette boutique que nous traitons les cas les plus délicats : téléphone tombé dans l'eau, appareil qui ne s'allume plus, panne de carte mère. Bain à ultrasons, séchage contrôlé et micro-soudure quand c'est nécessaire. Si un téléphone peut être sauvé, il le sera ici."]
    ]
  }
];

export default function zonePage(z) {
  const path = '/' + z.slug + '/';
  const shops = SHOPS.filter(s => z.shops.includes(s.id));
  const faq = [
    ['Où faire réparer son téléphone à Marseille ' + z.zip + ' ?', shops.length > 1
      ? "Nous avons deux boutiques dans le " + z.zip + " : " + shops.map(s => s.street).join(' et ') + ". Les deux réparent toutes les marques, 7j/7."
      : "Notre boutique du " + z.zip + " se trouve " + shops[0].street + ", à Saint-Barnabé. Elle est ouverte 7j/7 et répare toutes les marques."],
    ['Quels quartiers couvrez-vous ?', z.hoods.join(', ') + " et les quartiers alentour."],
    ['Combien de temps pour une réparation ?', "Environ 30 minutes pour un écran ou une batterie d'iPhone, environ 1 heure pour les autres marques. Une désoxydation demande 24 à 48 heures."],
    ['Le devis est-il payant ?', "Non, le diagnostic et le devis sont entièrement gratuits et sans engagement."]
  ];

  const body = `
<section class="hero" style="padding-top:clamp(2rem,5vw,3.5rem)">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in" style="grid-template-columns:1fr;max-width:900px">
    <div>
      <div class="hero-badges fade-up">
        <span class="pill gold">${ICONS.pin}<span>${esc(z.arr)}</span></span>
        <span class="pill">${ICONS.bolt}<span>Express 30 min</span></span>
        <span class="pill">${ICONS.clock}<span>Ouvert 7j/7</span></span>
      </div>
      <h1><span class="line">${words('Réparation téléphone')}</span><span class="line">${('Marseille ' + z.zip).split(' ').map(w => `<span class="w gr-or">${w}</span>`).join(' ')}</span></h1>
      <p class="hero-sub fade-up">${esc(z.intro)}</p>
      <div class="hero-cta fade-up">
        <a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
        <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Réserver une réparation</span></a>
      </div>
    </div>
  </div>
</section>


<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">${shops.length > 1 ? 'Nos deux adresses' : 'Notre adresse'} dans le ${esc(z.zip)}</span>
      <h2>${shops.length > 1 ? 'Deux boutiques' : 'Une boutique'} <span class="gr-or">à deux pas</span></h2>
    </div>
    <div class="grid ${shops.length > 1 ? 'g2' : 'g2'}" data-stagger="90">${shops.map(shopCard).join('')}</div>
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="grid g2" style="gap:clamp(2rem,5vw,4rem);align-items:start">
      <div class="prose reveal-l">
        <span class="eyebrow">Le quartier</span>
        ${z.text.map(([h, p]) => `<h2 style="margin:1.2rem 0 .9rem">${esc(h)}</h2><p>${esc(p)}</p>`).join('')}
      </div>
      <div class="reveal-s">
        <div class="card" style="padding:1.9rem;margin-bottom:1.1rem">
          <div class="card-ico">${ICONS.pin}</div>
          <h3>Quartiers couverts</h3>
          <p style="margin-bottom:1.1rem">Nos clients du ${esc(z.zip)} viennent principalement de :</p>
          <div class="chips">${z.hoods.map(h => `<span class="chip">${esc(h)}</span>`).join('')}</div>
        </div>
        <div class="card" style="padding:1.9rem">
          <div class="card-ico">${ICONS.clock}</div>
          <h3>Horaires</h3>
          <p style="margin-bottom:1.1rem">${esc(SITE.hours)}</p>
          <a class="btn btn-primary btn-block" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Nos réparations</span><h2>Ce que nous réparons dans le ${esc(z.zip)}</h2></div>
    ${repairGrid()}
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Toutes marques</span><h2>iPhone, Samsung, Xiaomi et les autres</h2></div>
    ${brandGrid()}
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head center reveal"><span class="eyebrow">Pourquoi nous</span><h2>Réparateur de quartier depuis ${SITE.since}</h2></div>
    ${uspGrid()}
  </div>
</section>

${reviewsSection()}
${faqSection(faq, 'Réparation téléphone ' + esc(z.label) + ' — vos questions')}
${linkCloud('Nos autres pages')}
${ctaBand('Un téléphone à réparer dans le ' + esc(z.zip) + ' ?')}
`;

  return {
    path, file: z.slug + '/index.html',
    html: page({
      path, title: z.seoTitle, description: z.seoDesc, body, faq,
      crumbs: [
        { label: 'Réparation téléphone Marseille', href: '/reparation-telephone-marseille/' },
        { label: z.label, href: path }
      ]
    })
  };
}
