// ═══════════════════════════════════════════════════════════════════
//  MISTRAL PHONE — V2 · Données du site
//  Un seul fichier à éditer pour changer les infos partout.
// ═══════════════════════════════════════════════════════════════════

export const SITE = {
  name: 'Mistral Phone',
  legalName: 'Mistral Phone Marseille',
  domain: 'https://www.mistralphone.com',
  phone: '06 68 09 66 69',
  phoneHref: '+33668096669',
  email: 'MistralPhone4@gmail.com',
  since: 2004,
  city: 'Marseille',
  // ⚠️ À CONFIRMER : horaires semaine (le dimanche est confirmé 10h–15h)
  hours: 'Lun – Sam : 9h30 – 19h30  ·  Dimanche : 10h – 15h',
  hoursShort: '7j/7',
  schemaHours: [
    { days: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], open: '09:30', close: '19:30' },
    { days: ['Sunday'], open: '10:00', close: '15:00' }
  ],
  social: {
    instagram: 'https://www.instagram.com/mistralphone/',
    facebook: 'https://www.facebook.com/mistralphone/',
    tiktok: 'https://www.tiktok.com/@mistral.phone'
  },
  reviewsCount: 1062,
  reviewsCountLabel: '1 062',
  reviewsAvg: 4.9
};

// ─── BOUTIQUES ────────────────────────────────────────────────────
export const SHOPS = [
  {
    id: 'foch',
    slug: 'boutiques/marseille-13004-marechal-foch',
    name: 'Marseille 13004 — Maréchal Foch',
    short: 'Maréchal Foch',
    street: '11 avenue du Maréchal Foch',
    zip: '13004',
    district: 'Marseille 4e — La Blancarde / Chartreux',
    rating: 4.9,
    reviews: 307,
    badge: 'Boutique historique',
    highlights: ['Réparation express iPhone 30 min', 'Certifié QualiRépar', 'Toutes marques'],
    transport: ['Métro 1 — Chartreux (5 min à pied)', 'Bus 6 / 8 / 91 — Foch', 'Stationnement rue possible'],
    intro: "Notre boutique historique de l'avenue du Maréchal Foch répare iPhone, Samsung, Xiaomi, Google Pixel et toutes marques depuis plus de 20 ans. Écran, batterie, connecteur de charge, caméra, vitre arrière ou désoxydation : la plupart des réparations sont faites sur place, pendant que vous attendez."
  },
  {
    id: 'fayolle',
    slug: 'boutiques/marseille-13004-marechal-fayolle',
    name: 'Marseille 13004 — Maréchal Fayolle',
    short: 'Maréchal Fayolle',
    street: '1 rue Maréchal Fayolle',
    zip: '13004',
    district: 'Marseille 4e — Les Cinq Avenues / Chave',
    rating: 4.8,
    reviews: 340,
    badge: 'Discount — meilleurs prix',
    highlights: ['Tarifs discount', 'Réparation express', 'Accessoires & téléphones reconditionnés'],
    transport: ['Métro 1 — Cinq Avenues Longchamp', 'Tramway T2 — Foch', 'Bus 81 — Fayolle'],
    intro: "À deux pas des Cinq Avenues, notre boutique de la rue Maréchal Fayolle est la référence prix du quartier : réparation de smartphone toutes marques, accessoires et téléphones reconditionnés, avec le même niveau d'exigence technique que nos autres ateliers."
  },
  {
    id: 'saint-barnabe',
    slug: 'boutiques/marseille-13012-saint-barnabe',
    name: 'Marseille 13012 — Saint-Barnabé',
    short: 'Saint-Barnabé',
    street: '12 avenue de Saint-Julien',
    zip: '13012',
    district: 'Marseille 12e — Saint-Barnabé / Saint-Julien',
    rating: 4.9,
    reviews: 415,
    badge: 'La mieux notée',
    highlights: ['Réparation express', 'Micro-soudure & désoxydation', 'Toutes marques'],
    transport: ['Métro 1 — Saint-Barnabé (3 min à pied)', 'Bus 12 / 12S — Saint-Julien', 'Parking gratuit à proximité'],
    intro: "Notre atelier de Saint-Barnabé couvre tout l'est de Marseille : Saint-Julien, La Valentine, Les Caillols, Montolivet et Saint-Jean du Désert. Réparation d'écran, batterie, connecteur de charge, caméra et interventions délicates de désoxydation et micro-soudure."
  }
];

export const shopBySlugId = (id) => SHOPS.find(s => s.id === id);
export const mapsUrl = (s) => 'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Mistral Phone ' + s.street + ' ' + s.zip + ' Marseille');

// ─── MARQUES ──────────────────────────────────────────────────────
export const BRANDS = [
  {
    id: 'iphone', label: 'iPhone', kw: 'iPhone', slug: 'reparation-iphone-marseille',
    color: '#8E8E93', accent: '#A1A1AA', time: '30 minutes',
    logoWord: 'iPhone',
    models: ['iPhone 17 Pro Max','iPhone 17 Pro','iPhone 17','iPhone 16 Pro Max','iPhone 16 Pro','iPhone 16 / 16 Plus','iPhone 16e','iPhone 15 Pro Max','iPhone 15 Pro','iPhone 15 / 15 Plus','iPhone 14 Pro Max','iPhone 14 Pro','iPhone 14 / 14 Plus','iPhone 13 Pro Max','iPhone 13 Pro','iPhone 13 / 13 mini','iPhone 12 Pro Max','iPhone 12 Pro','iPhone 12 / 12 mini','iPhone 11 Pro Max','iPhone 11 Pro','iPhone 11','iPhone XS Max','iPhone XS','iPhone XR','iPhone X','iPhone SE 2020 / 2022 / 2023','iPhone 8 / 8 Plus'],
    intro: "Écran cassé, batterie qui ne tient plus, connecteur de charge capricieux, vitre arrière fissurée : nos techniciens réparent votre iPhone à Marseille en 30 minutes en moyenne, avec des pièces d'origine ou de qualité équivalente et une garantie sur chaque intervention.",
    faq: [
      ['Combien de temps pour réparer un écran d’iPhone à Marseille ?', "En général 30 minutes. Vous déposez votre iPhone, vous prenez un café dans le quartier et il est prêt. Sur les modèles récents (iPhone 15, 16 et 17), comptez 30 à 45 minutes."],
      ['Utilisez-vous des pièces d’origine ?', "Nous proposons systématiquement le choix : pièce d'origine Apple ou pièce de qualité équivalente (compatible premium). Le prix et la garantie vous sont annoncés avant toute intervention."],
      ['Vais-je perdre mes données ?', "Non. Un remplacement d'écran, de batterie ou de connecteur n'affecte pas la mémoire de l'appareil. Une sauvegarde reste toutefois toujours conseillée avant une intervention."],
      ['Face ID fonctionnera-t-il toujours après la réparation ?', "Oui. Nous transférons systématiquement les composants d'origine liés à Face ID et au True Tone lors du remplacement d'un écran."]
    ]
  },
  {
    id: 'samsung', label: 'Samsung', kw: 'Samsung', slug: 'reparation-samsung-marseille',
    color: '#1428A0', accent: '#2F6BFF', time: '1 heure',
    models: ['Galaxy S25 Ultra / S25+ / S25','Galaxy S24 Ultra / S24+ / S24','Galaxy S23 Ultra / S23+ / S23','Galaxy S22 / S21 / S20','Galaxy Z Fold 6 / 5 / 4','Galaxy Z Flip 6 / 5 / 4','Galaxy Note 20 / 10','Galaxy A56 / A55 / A54 / A53','Galaxy A35 / A34 / A33','Galaxy A25 / A15 / A14','Galaxy M & Galaxy XCover'],
    intro: "Dalle AMOLED fissurée, batterie qui se vide en quelques heures, port USB-C qui ne charge plus : nous réparons tous les Samsung Galaxy à Marseille, des séries A aux flagships S Ultra et aux pliables Z Fold et Z Flip.",
    faq: [
      ['Réparez-vous les écrans AMOLED Samsung ?', "Oui, c'est notre quotidien. Nous remplaçons le bloc écran AMOLED complet, ce qui garantit le rendu des couleurs, la luminosité et la sensibilité tactile d'origine."],
      ['Et les Galaxy Z Fold et Z Flip ?', "Nous intervenons sur les modèles pliables : écran externe, écran interne pliable, charnière et batterie. Ces réparations demandent un délai un peu plus long, généralement 24 à 48 h."],
      ['Combien de temps dure une réparation Samsung ?', "Environ 1 heure pour un écran ou une batterie sur les modèles les plus courants. Nous vous donnons un délai ferme au moment du devis."]
    ]
  },
  {
    id: 'xiaomi', label: 'Xiaomi', kw: 'Xiaomi', slug: 'reparation-xiaomi-marseille',
    color: '#FF6900', accent: '#FF8A3D', time: '1 heure',
    models: ['Xiaomi 15 / 15 Pro / 15 Ultra','Xiaomi 14 / 14 Pro / 14 Ultra','Xiaomi 13 / 13 Pro / 13T','Redmi Note 14 / 14 Pro / 14 Pro+','Redmi Note 13 / 13 Pro / 13 Pro+','Redmi Note 12 / 11 / 10','Redmi 14C / 13C / 12C','POCO X7 / X6 / F6 / M6','Xiaomi Mi 11 / Mi 10 / Mi 9'],
    intro: "Xiaomi, Redmi et POCO : nous réparons toute la gamme à Marseille. Écran, batterie, connecteur de charge, caméra ou téléphone tombé dans l'eau, avec un devis gratuit avant toute intervention.",
    faq: [
      ['Réparez-vous aussi Redmi et POCO ?', "Oui. Redmi, Redmi Note, POCO : ce sont les mêmes ateliers et les mêmes garanties que pour la gamme Xiaomi."],
      ['Les pièces Xiaomi sont-elles en stock ?', "Les modèles les plus courants (Redmi Note, POCO X, Xiaomi 13 et 14) sont en stock dans nos boutiques. Pour un modèle plus rare, la pièce arrive généralement sous 24 à 48 h."]
    ]
  },
  {
    id: 'google-pixel', label: 'Google Pixel', kw: 'Google Pixel', slug: 'reparation-google-pixel-marseille',
    color: '#1A73E8', accent: '#4E9CFF', time: '1 heure',
    models: ['Pixel 9 Pro XL / 9 Pro / 9','Pixel 8 Pro / 8 / 8a','Pixel 7 Pro / 7 / 7a','Pixel 6 Pro / 6 / 6a','Pixel 5 / 4a / 4','Pixel Fold'],
    intro: "Peu de réparateurs à Marseille prennent en charge les Google Pixel. Nous, oui : écran OLED, batterie, connecteur USB-C, capteur photo et lecteur d'empreinte sous l'écran, sur toute la gamme Pixel.",
    faq: [
      ['Le capteur d’empreinte sous l’écran fonctionnera-t-il après réparation ?', "Oui. Nous recalibrons systématiquement le capteur d'empreinte optique après le remplacement de l'écran, et nous testons le déverrouillage devant vous."],
      ['Trouvez-vous les pièces pour Pixel ?', "Oui, nous avons un circuit d'approvisionnement dédié aux Pixel. Les modèles récents sont souvent en stock, sinon la pièce arrive en 24 à 72 h."]
    ]
  },
  {
    id: 'huawei', label: 'Huawei', kw: 'Huawei', slug: 'reparation-huawei-marseille',
    color: '#CF0A2C', accent: '#FF3355', time: '1 heure',
    models: ['P60 Pro / P50 Pro / P40 Pro','P30 Pro / P30 / P30 Lite','P20 Pro / P20 / P20 Lite','Mate 60 / Mate 50 / Mate 40 / Mate 30','Mate 20 Pro / Mate 20 Lite','Nova 12 / 11 / 10 / 9','Y7 / Y6 / Y5 / P Smart'],
    intro: "Huawei P30, P40, Mate, Nova ou P Smart : nous conservons un stock de pièces Huawei à Marseille alors que la marque se fait rare. Écran, batterie, connecteur de charge et caméra réparés en boutique.",
    faq: [
      ['Trouve-t-on encore des pièces Huawei ?', "Oui. Nous travaillons avec des fournisseurs spécialisés et gardons en stock les pièces des P20, P30, P40, Mate 20 et P Smart, les modèles les plus répandus à Marseille."]
    ]
  },
  {
    id: 'oppo', label: 'Oppo', kw: 'Oppo', slug: 'reparation-oppo-marseille',
    color: '#046A38', accent: '#12A85E', time: '1 heure',
    models: ['Find X8 / X7 / X5 Pro','Reno 12 / 11 / 10 / 8 / 7','Reno 6 / 5 / 4','A98 / A78 / A57 / A54','A16 / A15 / A9','Oppo Find N (pliable)'],
    intro: "Oppo Reno, Find X ou série A : écran, batterie, connecteur de charge et caméra réparés dans nos boutiques marseillaises, avec devis gratuit et garantie.",
    faq: [
      ['Réparez-vous les Oppo Reno et Find X ?', "Oui, toute la gamme Oppo. Les écrans AMOLED des Reno et Find X sont remplacés en bloc complet pour conserver la qualité d'affichage d'origine."]
    ]
  },
  {
    id: 'honor', label: 'Honor', kw: 'Honor', slug: 'reparation-honor-marseille',
    color: '#0A5FFF', accent: '#3D87FF', time: '1 heure',
    models: ['Magic 6 Pro / Magic 5 Pro','Honor 200 / 90 / 70 / 50','Honor X9 / X8 / X7 / X6','Honor 20 / 10 / 9','Honor Play & Magic V (pliable)'],
    intro: "Honor Magic, Honor 90, série X : nous réparons les smartphones Honor à Marseille, écran, batterie, connecteur de charge et caméra, avec un diagnostic gratuit en boutique.",
    faq: [
      ['Honor et Huawei, c’est pareil pour la réparation ?', "Les deux marques partagent une partie de leur histoire technique, mais les pièces sont différentes. Nous stockons les deux séparément."]
    ]
  },
  {
    id: 'motorola', label: 'Motorola', kw: 'Motorola', slug: 'reparation-motorola-marseille',
    color: '#5C92FA', accent: '#89B4FF', time: '1 heure',
    models: ['Edge 50 Pro / Edge 40 / Edge 30','Moto G84 / G73 / G54 / G53','Moto G34 / G24 / G14','Razr 50 Ultra / Razr 40 (pliables)','Moto E13 / E22 / E32'],
    intro: "Motorola Edge, Moto G, Moto E et Razr pliable : réparation d'écran, de batterie et de connecteur de charge à Marseille, souvent le jour même.",
    faq: [
      ['Réparez-vous le Motorola Razr pliable ?', "Oui, y compris l'écran pliable interne et l'écran externe. Ces réparations demandent une commande de pièce, en général 48 à 72 h."]
    ]
  }
];

export const brandById = (id) => BRANDS.find(b => b.id === id);

// ─── TYPES DE RÉPARATION ──────────────────────────────────────────
export const REPAIRS = [
  {
    id: 'ecran',
    seoTitle: "Réparation écran téléphone Marseille — 30 min",
    seoDesc: "Écran cassé ? Remplacement d’écran de téléphone à Marseille en 30 min : iPhone, Samsung, Xiaomi, toutes marques. Devis gratuit, garantie, 3 boutiques.",
    label: 'Écran cassé', menu: 'Écran cassé',
    slug: 'reparation-ecran-telephone-marseille',
    h1: 'Réparation d’écran de téléphone à Marseille',
    kw: 'réparation écran téléphone Marseille',
    icon: 'screen', time: '30 min', from: 49,
    tagline: 'Vitre fissurée, dalle noire, tactile mort',
    intro: "C'est la réparation numéro un dans nos boutiques. Vitre étoilée, taches d'encre, lignes verticales, tactile qui ne répond plus : nous remplaçons le bloc écran complet et votre téléphone ressort comme neuf, le plus souvent en 30 minutes.",
    symptoms: ['La vitre est fissurée ou étoilée','L’écran affiche des lignes ou des taches','Le tactile ne répond plus ou fantôme','L’écran reste noir mais le téléphone vibre','La luminosité ne se règle plus'],
    steps: [
      ['Diagnostic gratuit', "Nous testons l'affichage, le tactile, les capteurs et le châssis pour vérifier qu'aucun autre composant n'a été touché par la chute."],
      ['Devis immédiat', "Vous choisissez entre pièce d'origine et pièce de qualité équivalente. Le prix annoncé est le prix final."],
      ['Remplacement du bloc écran', "Ouverture, déconnexion des nappes, transfert des composants d'origine (Face ID, écouteur, capteurs) sur le nouvel écran."],
      ['Tests et garantie', "Tactile, luminosité, True Tone, capteurs de proximité : tout est testé devant vous avant restitution, garantie à l'appui."]
    ]
  },
  {
    id: 'batterie',
    seoTitle: "Remplacement batterie téléphone Marseille — dès 39 €",
    seoDesc: "Batterie qui ne tient plus ? Remplacement en 30 min à Marseille sur iPhone, Samsung, Xiaomi et toutes marques. Devis gratuit, bonus QualiRépar 25 €.",
    label: 'Batterie', menu: 'Batterie',
    slug: 'remplacement-batterie-telephone-marseille',
    h1: 'Remplacement de batterie de téléphone à Marseille',
    kw: 'remplacement batterie téléphone Marseille',
    icon: 'battery', time: '30 min', from: 39,
    tagline: 'Autonomie en chute, extinctions brutales',
    intro: "Une batterie de smartphone perd environ 20 % de sa capacité au bout de deux ans. Si votre téléphone ne tient plus la journée, s'éteint à 30 % ou chauffe en charge, un simple remplacement de batterie lui rend plusieurs années de vie, pour une fraction du prix d'un neuf.",
    symptoms: ['L’autonomie ne tient plus la journée','Le téléphone s’éteint alors qu’il reste de la charge','La batterie chauffe anormalement','Le téléphone gonfle ou l’écran se décolle','iOS affiche « Entretien de la batterie »'],
    steps: [
      ['Test de santé de la batterie', "Nous mesurons la capacité réelle et le nombre de cycles pour confirmer que la batterie est bien la cause du problème."],
      ['Devis gratuit', "Prix ferme annoncé avant intervention, avec l'éligibilité au bonus QualiRépar quand elle s'applique."],
      ['Remplacement', "Retrait de l'ancienne cellule, pose d'une batterie neuve haute capacité et adhésifs neufs."],
      ['Recyclage & contrôle', "L'ancienne batterie part dans une filière de recyclage agréée. Charge et décharge testées avant restitution."]
    ]
  },
  {
    id: 'connecteur',
    seoTitle: "Réparation connecteur de charge — Marseille",
    seoDesc: "Téléphone qui ne charge plus ou faux contact ? Nettoyage ou remplacement du connecteur de charge à Marseille, toutes marques. Diagnostic gratuit.",
    label: 'Connecteur de charge', menu: 'Connecteur de charge',
    slug: 'reparation-connecteur-charge-telephone-marseille',
    h1: 'Réparation du connecteur de charge à Marseille',
    kw: 'réparation connecteur de charge Marseille',
    icon: 'plug', time: '45 min', from: 45,
    tagline: 'Faux contact, charge lente, câble qui bouge',
    intro: "Le connecteur de charge est la pièce la plus sollicitée d'un téléphone. Poussière compactée, broches tordues, faux contact : avant de remplacer la nappe, nous commençons toujours par un nettoyage minutieux du port, qui résout à lui seul une grande partie des cas.",
    symptoms: ['Il faut bouger le câble pour que ça charge','La charge démarre puis s’arrête sans arrêt','Le téléphone ne charge que très lentement','L’ordinateur ne reconnaît plus l’appareil','Le micro du bas ne fonctionne plus'],
    steps: [
      ['Nettoyage du port', "Première étape systématique et souvent suffisante : extraction de la poussière compactée au fond du connecteur."],
      ['Test de charge', "Mesure de l'intensité réelle avec plusieurs câbles et chargeurs pour isoler la panne."],
      ['Remplacement de la nappe', "Si le connecteur est réellement HS, la nappe de charge complète est remplacée."],
      ['Contrôle final', "Charge filaire, transfert de données, micro et haut-parleur du bas vérifiés avant restitution."]
    ]
  },
  {
    id: 'vitre-arriere',
    seoTitle: "Remplacement vitre arrière téléphone Marseille",
    seoDesc: "Dos de téléphone fissuré ? Remplacement de la vitre arrière à Marseille : iPhone, Samsung, Xiaomi. Charge sans fil testée, devis gratuit, garantie.",
    label: 'Vitre arrière', menu: 'Vitre arrière',
    slug: 'remplacement-vitre-arriere-telephone-marseille',
    h1: 'Remplacement de la vitre arrière à Marseille',
    kw: 'remplacement vitre arrière téléphone Marseille',
    icon: 'back', time: '1 h', from: 49,
    tagline: 'Dos fissuré, éclats de verre',
    intro: "Une vitre arrière brisée, ce n'est pas qu'esthétique : les éclats coupent, la poussière s'infiltre et la charge sans fil peut être perturbée. Nous décollons le verre au laser ou à la chaleur contrôlée et posons une vitre neuve parfaitement ajustée.",
    symptoms: ['Le dos du téléphone est fissuré','Des éclats de verre se détachent','La charge sans fil ne fonctionne plus','De la poussière entre dans l’appareil'],
    steps: [
      ['Protection de l’appareil', "Nous protégeons les caméras et les antennes avant toute chose."],
      ['Retrait du verre cassé', "Séparation à chaleur contrôlée puis retrait complet des résidus de colle et de verre."],
      ['Pose de la vitre neuve', "Vitre neuve, teinte et finition d'origine, collée avec un adhésif structurel."],
      ['Test de charge sans fil', "Vérification de la charge à induction et de l'étanchéité résiduelle."]
    ]
  },
  {
    id: 'camera',
    seoTitle: "Réparation caméra de téléphone — Marseille",
    seoDesc: "Photos floues, écran noir, lentille cassée ? Réparation de caméra de téléphone à Marseille, toutes marques. Module ou lentille seule, diagnostic gratuit.",
    label: 'Caméra', menu: 'Caméra',
    slug: 'reparation-camera-telephone-marseille',
    h1: 'Réparation de caméra de téléphone à Marseille',
    kw: 'réparation caméra téléphone Marseille',
    icon: 'camera', time: '45 min', from: 49,
    tagline: 'Photos floues, écran noir, lentille rayée',
    intro: "Photos floues, écran noir à l'ouverture de l'appareil photo, autofocus qui vibre sans se stabiliser, lentille de protection éclatée : la caméra se répare, module par module, sans changer tout le téléphone.",
    symptoms: ['Les photos sont floues ou voilées','L’appareil photo affiche un écran noir','L’autofocus vibre en permanence','La lentille de protection est cassée','Le flash ne se déclenche plus'],
    steps: [
      ['Diagnostic photo', "Test de chaque module : grand-angle, ultra grand-angle, téléobjectif et caméra avant."],
      ['Nettoyage ou remplacement', "Parfois seule la lentille de protection est à changer, ce qui coûte bien moins cher qu'un module complet."],
      ['Remplacement du module', "Pose d'un module caméra neuf et reconnexion des nappes."],
      ['Contrôle qualité', "Photos de test en basse lumière, stabilisation et flash vérifiés."]
    ]
  },
  {
    id: 'haut-parleur',
    seoTitle: "Réparation haut-parleur et micro — Marseille",
    seoDesc: "Son grésillant ou interlocuteur qui ne vous entend pas ? Réparation de haut-parleur et de micro à Marseille, toutes marques. Test audio gratuit.",
    label: 'Haut-parleur', menu: 'Haut-parleur',
    slug: 'reparation-haut-parleur-telephone-marseille',
    h1: 'Réparation de haut-parleur et micro à Marseille',
    kw: 'réparation haut-parleur téléphone Marseille',
    icon: 'speaker', time: '45 min', from: 45,
    tagline: 'Son grésillant, interlocuteur inaudible',
    intro: "On ne vous entend plus au téléphone, le son grésille, le haut-parleur est étouffé ou plus rien ne sort : entre l'écouteur interne, le haut-parleur principal et les micros, nous identifions précisément le composant en cause.",
    symptoms: ['Votre interlocuteur ne vous entend pas','Le son est étouffé ou grésille','Aucun son en haut-parleur','Les mémos vocaux sont muets','Le son coupe pendant les appels'],
    steps: [
      ['Test audio complet', "Écouteur, haut-parleur principal, micro du bas et micro de la caméra testés séparément."],
      ['Nettoyage des grilles', "Les grilles bouchées par la poussière et les peluches expliquent une bonne partie des sons étouffés."],
      ['Remplacement du composant', "Écouteur, buzzer ou nappe micro remplacés selon le diagnostic."],
      ['Appel test', "Un appel réel est passé depuis la boutique avant de vous rendre l'appareil."]
    ]
  },
  {
    id: 'desoxydation',
    seoTitle: "Désoxydation téléphone Marseille — urgence eau",
    seoDesc: "Téléphone tombé dans l’eau ? Désoxydation à Marseille : bain à ultrasons, séchage contrôlé, micro-soudure. Ne le rallumez pas, apportez-le nous vite.",
    label: 'Désoxydation', menu: 'Désoxydation',
    slug: 'desoxydation-telephone-marseille',
    h1: 'Désoxydation de téléphone à Marseille',
    kw: 'désoxydation téléphone Marseille',
    icon: 'water', time: '24 à 48 h', from: 59,
    tagline: 'Tombé dans l’eau, la mer, la piscine',
    intro: "Téléphone tombé dans la mer, la piscine, l'évier ou les toilettes ? Chaque heure compte. N'essayez surtout pas de le rallumer ni de le recharger : c'est le courant qui détruit les composants, pas l'eau. Apportez-le nous éteint, le plus vite possible.",
    urgent: true,
    symptoms: ['Le téléphone est tombé dans l’eau','Il s’allume mais l’écran est marbré','Le son ou la charge ne marchent plus','Il ne s’allume plus du tout','Traces de corrosion visibles'],
    steps: [
      ['Mise hors tension immédiate', "Nous déconnectons la batterie dès votre arrivée pour stopper la corrosion électrolytique."],
      ['Démontage complet', "L'appareil est entièrement démonté, carte mère comprise, blindages retirés."],
      ['Bain à ultrasons', "La carte mère passe en bain à ultrasons dans un solvant spécifique qui dissout les résidus et l'oxydation."],
      ['Séchage, remontage, tests', "Séchage contrôlé, remontage et série de tests. En cas de composant grillé, la micro-soudure prend le relais."]
    ]
  },
  {
    id: 'ne-sallume-plus',
    seoTitle: "Téléphone qui ne s’allume plus — Marseille",
    seoDesc: "Écran noir, aucune vibration ? Diagnostic gratuit à Marseille : batterie, connecteur, carte mère. Micro-soudure si besoin et devis honnête.",
    label: 'Ne s’allume plus', menu: 'Téléphone qui ne s’allume plus',
    slug: 'telephone-qui-ne-sallume-plus-marseille',
    h1: 'Téléphone qui ne s’allume plus — Marseille',
    kw: 'téléphone qui ne s’allume plus Marseille',
    icon: 'power', time: 'Diagnostic 24 h', from: 0,
    tagline: 'Écran noir total, pas de vibration',
    intro: "Écran noir, aucune vibration, aucun signe de vie même branché : la panne peut venir de la batterie, du connecteur de charge, d'un composant de la carte mère ou d'une simple mise à jour ratée. Le diagnostic est gratuit et nous vous disons honnêtement si la réparation vaut le coup.",
    symptoms: ['Écran noir même branché','Le logo apparaît puis disparaît en boucle','Le téléphone chauffe sans démarrer','Aucune vibration, aucun son','Chute ou contact avec de l’eau récent'],
    steps: [
      ['Alimentation de test', "Nous mesurons la consommation en courant sur alimentation de laboratoire : c'est ce chiffre qui révèle la nature de la panne."],
      ['Isolement de la panne', "Batterie, connecteur, écran ou carte mère : le composant fautif est isolé méthodiquement."],
      ['Devis honnête', "Si la réparation coûte plus cher que la valeur de l'appareil, nous vous le disons franchement."],
      ['Réparation ou micro-soudure', "Remplacement du composant, ou intervention en micro-soudure sur la carte mère si nécessaire."]
    ]
  }
];

export const repairById = (id) => REPAIRS.find(r => r.id === id);

// ─── TARIFS ───────────────────────────────────────────────────────
// ⚠️ TARIFS INDICATIFS — à valider par Mistral Phone avant mise en ligne.
export const PRICING = [
  { brand: 'iPhone', rows: [
    ['iPhone 8 / SE 2020–2022', 49, 39, 45],
    ['iPhone X / XR / XS', 59, 45, 49],
    ['iPhone 11 / 11 Pro', 69, 49, 49],
    ['iPhone 12 / 12 Pro', 89, 55, 55],
    ['iPhone 13 / 13 Pro', 109, 59, 59],
    ['iPhone 14 / 14 Pro', 129, 69, 65],
    ['iPhone 15 / 15 Pro', 159, 79, 69],
    ['iPhone 16 / 16 Pro', 189, 89, 79]
  ]},
  { brand: 'Samsung', rows: [
    ['Galaxy A14 / A15 / A25', 79, 45, 45],
    ['Galaxy A34 / A54 / A55', 109, 49, 49],
    ['Galaxy S21 / S22', 149, 59, 55],
    ['Galaxy S23 / S24', 189, 69, 59],
    ['Galaxy S24 Ultra / S25 Ultra', 249, 79, 65],
    ['Galaxy Z Flip / Z Fold', 'Sur devis', 89, 69]
  ]},
  { brand: 'Xiaomi · Redmi · POCO', rows: [
    ['Redmi 12C / 13C / 14C', 59, 39, 39],
    ['Redmi Note 12 / 13 / 14', 79, 45, 45],
    ['POCO X6 / X7 / F6', 89, 49, 45],
    ['Xiaomi 13 / 14 / 15', 129, 55, 49]
  ]},
  { brand: 'Google Pixel · Huawei · Oppo · Honor · Motorola', rows: [
    ['Pixel 6a / 7a / 8a', 99, 55, 49],
    ['Pixel 7 / 8 / 9 Pro', 149, 65, 55],
    ['Huawei P30 / P40 / Mate', 89, 49, 45],
    ['Oppo Reno / Find X', 99, 49, 45],
    ['Honor 90 / Magic', 99, 49, 45],
    ['Motorola Edge / Moto G', 79, 45, 45]
  ]}
];

export const PRICING_EXTRA = [
  ['Vitre arrière', 'à partir de 49 €', 'Selon modèle et finition'],
  ['Caméra arrière / avant', 'à partir de 49 €', 'Module ou lentille seule'],
  ['Haut-parleur ou micro', 'à partir de 45 €', 'Après test audio complet'],
  ['Désoxydation complète', 'à partir de 59 €', 'Bain ultrasons + remontage'],
  ['Diagnostic panne', 'Gratuit', 'Sans engagement, en boutique'],
  ['Micro-soudure carte mère', 'Sur devis', 'Après diagnostic en atelier']
];

// ─── AVIS CLIENTS ─────────────────────────────────────────────────
export const REVIEWS = [
  { name: 'Sarah B.', shop: 'Maréchal Foch', text: "Écran d'iPhone 13 changé en 25 minutes chrono pendant que je faisais mes courses. Prix annoncé = prix payé. Rien à dire.", stars: 5 },
  { name: 'Karim M.', shop: 'Saint-Barnabé', text: "Mon Samsung était tombé dans la piscine, je le croyais mort. Ils l'ont désoxydé et il remarche parfaitement depuis six mois.", stars: 5 },
  { name: 'Léa T.', shop: 'Maréchal Fayolle', text: "Batterie de Redmi Note changée pour un prix imbattable. Accueil très sympa et explications claires, ça change.", stars: 5 },
  { name: 'Julien P.', shop: 'Maréchal Foch', text: "Vitre arrière d'iPhone 14 Pro remplacée nickel. On ne voit absolument pas que ça a été réparé.", stars: 5 },
  { name: 'Nadia R.', shop: 'Saint-Barnabé', text: "Mon Pixel 7 ne chargeait plus. Ils ont juste nettoyé le connecteur et n'ont rien voulu me faire payer. Des gens honnêtes.", stars: 5 },
  { name: 'Antoine G.', shop: 'Maréchal Fayolle', text: "Trois téléphones de la famille réparés chez eux en deux ans. Toujours rapide, toujours au bon prix.", stars: 5 }
];

// ─── ARGUMENTS ────────────────────────────────────────────────────
export const USPS = [
  { icon: 'bolt', title: 'Réparation express', text: "iPhone en 30 minutes, Samsung et autres marques en 1 heure. La plupart des réparations se font pendant que vous attendez." },
  { icon: 'shield', title: 'Garantie sur chaque réparation', text: "Pièce et main d'œuvre garanties. Si quoi que ce soit bouge après notre intervention, vous revenez et on s'en occupe." },
  { icon: 'euro', title: 'Devis gratuit, prix ferme', text: "Le diagnostic est gratuit et le prix annoncé est le prix final. Aucune mauvaise surprise au moment de payer." },
  { icon: 'leaf', title: 'Bonus QualiRépar 25 €', text: "Notre certification QualiRépar vous fait bénéficier d'une remise officielle jusqu'à 25 € sur les réparations éligibles." },
  { icon: 'chip', title: 'Pièces d’origine ou équivalentes', text: "Vous choisissez : pièce d'origine constructeur ou compatible premium. Nous vous expliquons la différence sans jargon." },
  { icon: 'pin', title: '3 boutiques à Marseille', text: "Deux boutiques dans le 4e et une dans le 12e, ouvertes 7j/7, sans rendez-vous obligatoire." }
];

// ─── MENU ─────────────────────────────────────────────────────────
export const NAV = [
  { label: 'Accueil', href: '/' },
  { label: 'Réparation', href: '/reparation-telephone-marseille/', children: BRANDS.map(b => ({ label: 'Réparation ' + b.label, href: '/' + b.slug + '/' })) },
  { label: 'Nos réparations', href: '/nos-reparations/', children: REPAIRS.map(r => ({ label: r.menu, href: '/' + r.slug + '/' })) },
  { label: 'Nos boutiques', href: '/boutiques/', children: SHOPS.map(s => ({ label: s.name, href: '/' + s.slug + '/' })) },
  { label: 'Tarifs', href: '/tarifs/' },
  { label: 'À propos', href: '/a-propos/' },
  { label: 'Contact', href: '/contact/', cta: true }
];
