import { SITE, SHOPS, BRANDS, REPAIRS, PRICING, PRICING_EXTRA, mapsUrl } from '../data.js';
import { page, ICONS, esc } from '../layout.js';
import { ticker, brandGrid, repairGrid, uspGrid, shopsSection, reviewsSection, faqSection, ctaBand, statsRow, linkCloud, stepsSection } from '../ui.js';

const words = (s) => s.split(' ').map(w => `<span class="w">${w}</span>`).join(' ');
const heroSimple = ({ badges, h1a, h1b, sub, ctas }) => `
<section class="hero" style="padding-top:clamp(2rem,5vw,3.5rem)">
  <canvas id="windCanvas" aria-hidden="true"></canvas>
  <div class="wrap hero-in" style="grid-template-columns:1fr;max-width:900px">
    <div>
      ${badges ? `<div class="hero-badges fade-up">${badges}</div>` : ''}
      <h1><span class="line">${words(h1a)}</span>${h1b ? `<span class="line">${h1b.split(' ').map(w => `<span class="w gr-or">${w}</span>`).join(' ')}</span>` : ''}</h1>
      <p class="hero-sub fade-up">${sub}</p>
      ${ctas ? `<div class="hero-cta fade-up">${ctas}</div>` : ''}
    </div>
  </div>
</section>`;

/* ═══ TARIFS ══════════════════════════════════════════════════════ */
export function tarifs() {
  const path = '/tarifs/';
  const faq = [
    ['Les tarifs affichés sont-ils définitifs ?', "Ce sont des tarifs indicatifs, à partir de. Le prix exact dépend du modèle précis et du type de pièce choisi. Il vous est confirmé au moment du devis, gratuitement, et ne bouge plus ensuite."],
    ['Quelle différence entre pièce d’origine et pièce compatible ?', "La pièce d'origine provient du constructeur, la pièce compatible premium est fabriquée selon les mêmes spécifications par un tiers. La seconde coûte moins cher, la première garantit un rendu strictement identique. Nous vous expliquons la différence pour votre modèle et vous choisissez."],
    ['Le bonus QualiRépar est-il déduit du prix ?', "Oui, directement de votre facture, jusqu'à 25 € sur les réparations éligibles. Vous n'avez aucun formulaire à remplir."],
    ['Acceptez-vous la carte bancaire ?', "Oui, carte bancaire et espèces sont acceptées dans nos trois boutiques."],
    ['Le diagnostic est-il payant ?', "Non, jamais. Le diagnostic et le devis sont gratuits et sans engagement, même si vous décidez de ne pas faire réparer."]
  ];

  const table = (g) => `
  <div class="reveal" data-filter-group style="margin-bottom:1.6rem">
    <h3 style="margin-bottom:.9rem">${esc(g.brand)}</h3>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Modèle</th><th>Écran</th><th>Batterie</th><th>Connecteur de charge</th></tr></thead>
        <tbody>
          ${g.rows.map(([m, e, b, c]) => `<tr data-filter="${esc(m)}">
            <td>${esc(m)}</td>
            <td class="price">${typeof e === 'number' ? 'dès ' + e + ' €' : esc(e)}</td>
            <td class="price">${typeof b === 'number' ? 'dès ' + b + ' €' : esc(b)}</td>
            <td class="price">${typeof c === 'number' ? 'dès ' + c + ' €' : esc(c)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>`;

  const body = `
${heroSimple({
    badges: `<span class="pill gold">${ICONS.euro}<span>Devis gratuit</span></span><span class="pill">${ICONS.check}<span>Prix ferme, sans surprise</span></span><span class="pill">${ICONS.leaf}<span>QualiRépar −25 €</span></span>`,
    h1a: 'Tarifs de réparation', h1b: 'à Marseille',
    sub: "Nos prix sont affichés parce que nous n'avons rien à cacher. Le diagnostic est gratuit, le devis est ferme, et le prix annoncé est celui que vous payez.",
    ctas: `<a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>Devis immédiat — ${SITE.phone}</span></a>
      <a class="btn btn-ghost btn-lg" href="/contact/">${ICONS.cal}<span>Réserver</span></a>`
  })}
${ticker()}

<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="eyebrow">Grille tarifaire</span>
      <h2>Combien coûte <span class="gr-or">votre réparation</span> ?</h2>
      <p class="lead">Tarifs indicatifs à partir de, hors bonus QualiRépar. Tapez votre modèle pour filtrer la liste.</p>
    </div>
    <div class="field reveal" style="max-width:420px;margin-bottom:2rem">
      <label for="modelFilter">Rechercher un modèle</label>
      <input type="search" id="modelFilter" placeholder="iPhone 13, Galaxy S23, Redmi Note…" autocomplete="off">
    </div>
    ${PRICING.map(table).join('')}
    <p class="muted" style="font-size:.82rem;margin-top:.5rem">Prix indicatifs susceptibles d'évoluer selon le cours des pièces. Le devis remis en boutique fait foi.</p>
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Autres interventions</span><h2>Les autres réparations</h2></div>
    <div class="table-wrap reveal">
      <table>
        <thead><tr><th>Intervention</th><th>Tarif</th><th>Détail</th></tr></thead>
        <tbody>${PRICING_EXTRA.map(([a, b, c]) => `<tr><td>${esc(a)}</td><td class="price">${esc(b)}</td><td class="muted">${esc(c)}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="grid g2" style="gap:clamp(2rem,5vw,4rem);align-items:start">
      <div class="prose reveal-l">
        <span class="eyebrow">Comprendre le prix</span>
        <h2 style="margin:1rem 0 1.1rem">Pourquoi les prix varient d'un modèle à l'autre</h2>
        <p>Le prix d'une réparation, c'est presque toujours le prix de la pièce. Un écran d'iPhone 8 coûte quelques dizaines d'euros, un bloc OLED de Galaxy S24 Ultra bien davantage : les technologies d'affichage, les capteurs intégrés et la rareté de la pièce font toute la différence.</p>
        <p>Sur la plupart des modèles, nous vous proposons deux options. La <strong>pièce d'origine</strong>, identique à celle montée en usine, et la <strong>pièce de qualité équivalente</strong>, fabriquée selon les mêmes spécifications et nettement moins chère. Nous vous expliquons ce qui change concrètement pour votre modèle, puis vous choisissez.</p>
        <h3>Le bonus QualiRépar</h3>
        <p>Nous sommes réparateur certifié QualiRépar. Sur les réparations éligibles, une remise pouvant atteindre <strong>25 €</strong> est déduite directement de votre facture. Aucune démarche de votre côté, aucun dossier à monter.</p>
        <h3>Réparer ou remplacer ?</h3>
        <p>Si la réparation coûte plus cher que la valeur de votre appareil, nous vous le disons franchement. C'est ce qui nous vaut, depuis vingt ans, des clients qui reviennent.</p>
      </div>
      <div class="reveal-s">
        <div class="card" style="padding:1.9rem;margin-bottom:1.1rem">
          <div class="card-ico">${ICONS.leaf}</div>
          <h3>Bonus QualiRépar</h3>
          <p style="margin-bottom:1rem">Jusqu'à 25 € déduits directement de votre facture sur les réparations éligibles.</p>
          <span class="tag gn">${ICONS.check}Réparateur certifié</span>
        </div>
        <div class="card" style="padding:1.9rem">
          <div class="card-ico">${ICONS.phone}</div>
          <h3>Un devis en 2 minutes</h3>
          <p style="margin-bottom:1.2rem">Donnez-nous votre modèle et la panne, on vous annonce le prix au téléphone.</p>
          <a class="btn btn-primary btn-block" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

${shopsSection()}
${faqSection(faq, 'Tarifs — vos questions')}
${linkCloud()}
${ctaBand('Un prix, tout de suite, sans vous déplacer.')}`;

  return {
    path, file: 'tarifs/index.html',
    html: page({
      path,
      title: 'Tarifs réparation téléphone Marseille — Écran, batterie',
      description: "Tarifs de réparation de téléphone à Marseille : écran dès 49 €, batterie dès 39 €, connecteur dès 45 €. Devis gratuit et bonus QualiRépar jusqu'à 25 €.",
      body, faq, crumbs: [{ label: 'Tarifs', href: path }]
    })
  };
}

/* ═══ À PROPOS ════════════════════════════════════════════════════ */
export function apropos() {
  const path = '/a-propos/';
  const faq = [
    ['Depuis quand existe Mistral Phone ?', "Depuis " + SITE.since + ". Plus de vingt ans de réparation de téléphones à Marseille."],
    ['Combien avez-vous de boutiques ?', "Trois : deux dans le 4e arrondissement et une dans le 12e, à Saint-Barnabé."],
    ['Vendez-vous aussi des téléphones ?', "Oui, des téléphones reconditionnés et des accessoires, principalement dans notre boutique de la rue Maréchal Fayolle."]
  ];
  const body = `
${heroSimple({
    badges: `<span class="pill gold">${ICONS.wind}<span>Marseillais depuis ${SITE.since}</span></span><span class="pill">${ICONS.star}<span>${SITE.reviewsCount}+ avis Google</span></span>`,
    h1a: 'Vingt ans à réparer', h1b: 'les téléphones des Marseillais',
    sub: "Mistral Phone, ce sont trois boutiques, un atelier, et des techniciens qui ouvrent des téléphones toute la journée. Pas un comptoir qui envoie vos appareils ailleurs.",
    ctas: `<a class="btn btn-primary btn-lg magnetic" href="/boutiques/">${ICONS.pin}<span>Trouver ma boutique</span></a>
      <a class="btn btn-ghost btn-lg" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>`
  })}
${ticker()}

<section class="sec">
  <div class="wrap">
    <div class="grid g2" style="gap:clamp(2rem,5vw,4rem);align-items:start">
      <div class="prose reveal-l">
        <span class="eyebrow">Notre histoire</span>
        <h2 style="margin:1rem 0 1.1rem">Une boutique, puis deux, puis trois</h2>
        <p>Tout a commencé en ${SITE.since}, avenue du Maréchal Foch, dans le 4e arrondissement. À l'époque, réparer un téléphone voulait surtout dire changer une coque ou débloquer un appareil. Les smartphones sont arrivés, les écrans se sont mis à coûter aussi cher que les appareils eux-mêmes, et le métier a changé du tout au tout.</p>
        <p>Nous avons suivi. Investi dans du matériel de micro-soudure, des bains à ultrasons, des stations de séparation à chaleur contrôlée. Formé des techniciens. Puis ouvert une deuxième boutique rue Maréchal Fayolle, à quelques minutes, avec un positionnement plus accessible. Et enfin une troisième à Saint-Barnabé, dans le 12e, pour couvrir tout l'est marseillais.</p>
        <h3>Ce qui n'a pas changé</h3>
        <p>Le diagnostic est gratuit. Le prix annoncé est le prix payé. Et quand une réparation ne vaut pas le coup, nous le disons. C'est probablement ce qui explique nos notes : <strong>4,9/5</strong> à Maréchal Foch, <strong>4,8/5</strong> à Maréchal Fayolle et <strong>4,9/5</strong> à Saint-Barnabé, sur plus de mille avis cumulés.</p>
        <h3>Réparer, c'est écologique</h3>
        <p>Fabriquer un smartphone neuf représente l'essentiel de son empreinte carbone totale. Prolonger la vie d'un appareil de deux ans, c'est diviser cette empreinte presque par deux. C'est le sens de notre certification <strong>QualiRépar</strong>, qui vous fait bénéficier d'une remise officielle allant jusqu'à 25 €.</p>
        <h3>Pourquoi « Mistral » ?</h3>
        <p>Parce qu'on est à Marseille, et parce que le mistral, ici, c'est ce qui va vite et remet tout en place. Ça nous allait bien.</p>
      </div>
      <div class="reveal-s">
        <div class="card" style="padding:0;overflow:hidden;margin-bottom:1.1rem">
          <img src="/images/repair_1.jpg" alt="Atelier de réparation Mistral Phone à Marseille" width="600" height="400" loading="lazy" style="width:100%;height:auto">
        </div>
        <div class="grid g2" style="gap:1.1rem;margin-bottom:1.1rem">
          <div class="card" style="padding:0;overflow:hidden"><img src="/images/repair_2.jpg" alt="Réparation d'écran de smartphone" width="400" height="400" loading="lazy" style="width:100%;height:auto"></div>
          <div class="card" style="padding:0;overflow:hidden"><img src="/images/repair_3.jpg" alt="Technicien Mistral Phone en intervention" width="400" height="400" loading="lazy" style="width:100%;height:auto"></div>
        </div>
        <div class="card" style="padding:1.9rem">
          <div class="card-ico">${ICONS.shield}</div>
          <h3>Nos engagements</h3>
          <ul class="shop-list" style="margin-top:.9rem">
            <li>${ICONS.check}<span>Diagnostic et devis gratuits, toujours</span></li>
            <li>${ICONS.check}<span>Prix ferme annoncé avant intervention</span></li>
            <li>${ICONS.check}<span>Garantie pièce et main d'œuvre</span></li>
            <li>${ICONS.check}<span>Réparation sur place, à Marseille</span></li>
            <li>${ICONS.check}<span>Anciennes pièces recyclées en filière agréée</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div style="margin-top:2.6rem">${statsRow()}</div>
  </div>
</section>

<section class="sec sec-alt">
  <div class="wrap">
    <div class="sec-head center reveal"><span class="eyebrow">Nos valeurs</span><h2>Ce sur quoi on ne transige pas</h2></div>
    ${uspGrid()}
  </div>
</section>

${shopsSection()}
${reviewsSection()}
${faqSection(faq)}
${ctaBand('Vingt ans d’expérience, à votre service aujourd’hui.')}`;

  return {
    path, file: 'a-propos/index.html',
    html: page({
      path,
      title: 'À propos — Réparateur de téléphone à Marseille depuis ' + SITE.since,
      description: "Mistral Phone répare les téléphones des Marseillais depuis " + SITE.since + " : 3 boutiques, un atelier sur place, 1 000+ avis Google et certification QualiRépar.",
      body, faq, crumbs: [{ label: 'À propos', href: path }]
    })
  };
}

/* ═══ CONTACT / RÉSERVATION ═══════════════════════════════════════ */
export function contact() {
  const path = '/contact/';
  const services = [];
  BRANDS.forEach(b => REPAIRS.slice(0, 6).forEach(r => services.push(b.label + ' — ' + r.label)));
  const faq = [
    ['Comment réserver une réparation ?', "Remplissez le formulaire ci-dessus ou appelez-nous au " + SITE.phone + ". Nous vous confirmons le créneau et vérifions que la pièce est en stock."],
    ['Puis-je venir sans réserver ?', "Bien sûr. Nos trois boutiques accueillent sans rendez-vous, 7j/7. La réservation sert surtout à garantir la disponibilité de la pièce."],
    ['Sous quel délai me répondez-vous ?', "Dans la journée pour toute demande envoyée pendant nos horaires d'ouverture. Pour une urgence, appelez-nous directement."]
  ];

  const body = `
${heroSimple({
    badges: `<span class="pill gold">${ICONS.clock}<span>Réponse dans la journée</span></span><span class="pill">${ICONS.check}<span>Devis gratuit</span></span>`,
    h1a: 'Réserver une réparation', h1b: 'ou nous contacter',
    sub: "Dites-nous votre modèle et votre panne : nous vous confirmons le prix, le délai et la disponibilité de la pièce. Pour une urgence, un appel reste le plus rapide.",
    ctas: `<a class="btn btn-primary btn-lg magnetic" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>`
  })}

<section class="sec" style="padding-top:1rem">
  <div class="wrap">
    <div class="grid g2" style="gap:clamp(1.6rem,4vw,3rem);align-items:start">
      <div class="form-card reveal-s">
        <span class="eyebrow">Formulaire</span>
        <h2 style="font-size:clamp(1.5rem,3vw,2rem);margin:.9rem 0 1.4rem">Votre demande de réparation</h2>
        <div class="form-ok" id="formOk">${ICONS.check} Votre message est prêt. Votre application mail vient de s'ouvrir : il ne reste qu'à l'envoyer.</div>
        <form id="bookForm" data-email="${SITE.email}" novalidate>
          <div class="f2">
            <div class="field"><label for="nom">Prénom &amp; nom <i>*</i></label><input id="nom" name="nom" required placeholder="Marie Dupont"></div>
            <div class="field"><label for="tel">Téléphone <i>*</i></label><input id="tel" name="tel" type="tel" required placeholder="06 12 34 56 78"></div>
          </div>
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="marie@exemple.fr"></div>
          <div class="f2">
            <div class="field"><label for="appareil">Appareil <i>*</i></label><input id="appareil" name="appareil" required placeholder="iPhone 13 Pro, Galaxy S23…"></div>
            <div class="field"><label for="service">Réparation souhaitée <i>*</i></label>
              <select id="service" name="service" required>
                <option value="">Choisir une réparation…</option>
                ${REPAIRS.map(r => `<option>${esc(r.label)}</option>`).join('')}
                <option>Je ne sais pas — diagnostic</option>
                <option>Tablette / iPad</option>
                <option>MacBook / PC portable</option>
              </select></div>
          </div>
          <div class="f2">
            <div class="field"><label for="boutique">Boutique <i>*</i></label>
              <select id="boutique" name="boutique" required>
                <option value="">Choisir une boutique…</option>
                ${SHOPS.map(s => `<option>${esc(s.name)} — ${esc(s.street)}</option>`).join('')}
                <option>Peu importe, la plus rapide</option>
              </select></div>
            <div class="field"><label for="creneau">Créneau souhaité</label><input id="creneau" name="creneau" type="datetime-local"></div>
          </div>
          <div class="field"><label for="message">Décrivez le problème</label><textarea id="message" name="message" placeholder="Écran fissuré en bas à droite, le tactile ne répond plus…"></textarea></div>
          <button class="btn btn-primary btn-lg btn-block" type="submit">${ICONS.cal}<span>Envoyer ma demande</span></button>
          <p class="form-note">Vos informations servent uniquement à traiter votre demande de réparation.</p>
        </form>
      </div>

      <div class="reveal-s">
        <div class="card" style="padding:1.9rem;margin-bottom:1.1rem">
          <div class="card-ico">${ICONS.phone}</div>
          <h3>Le plus rapide : appelez</h3>
          <p style="margin-bottom:1.2rem">Un technicien vous répond et vous donne le prix en deux minutes.</p>
          <a class="btn btn-primary btn-block" href="tel:${SITE.phoneHref}">${ICONS.phone}<span>${SITE.phone}</span></a>
          <p style="margin-top:1rem;font-size:.85rem" class="muted">${esc(SITE.hours)}</p>
        </div>
        <div class="card" style="padding:1.9rem;margin-bottom:1.1rem">
          <div class="card-ico">${ICONS.pin}</div>
          <h3>Nos trois boutiques</h3>
          <ul class="shop-list" style="margin-top:1rem">
            ${SHOPS.map(s => `<li>${ICONS.check}<span><a href="/${s.slug}/" style="color:#fff">${esc(s.short)}</a><br><span class="muted">${esc(s.street)}, ${s.zip} Marseille</span></span></li>`).join('')}
          </ul>
        </div>
        <div class="card" style="padding:1.9rem">
          <div class="card-ico">${ICONS.euro}</div>
          <h3>Email</h3>
          <p style="margin-bottom:1rem">Pour les devis détaillés et les demandes professionnelles.</p>
          <a class="btn btn-ghost btn-block" href="mailto:${SITE.email}"><span>${esc(SITE.email)}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

${shopsSection('Ou passez directement nous voir')}
${faqSection(faq)}
${ctaBand('Une panne aujourd’hui, un rendez-vous aujourd’hui.')}`;

  return {
    path, file: 'contact/index.html',
    html: page({
      path,
      title: 'Contact & réservation — Mistral Phone Marseille',
      description: "Réservez votre réparation de téléphone à Marseille : formulaire en ligne, téléphone " + SITE.phone + " ou passage direct dans nos 3 boutiques du 13004 et 13012.",
      body, faq, crumbs: [{ label: 'Contact', href: path }]
    })
  };
}

/* ═══ MENTIONS LÉGALES ════════════════════════════════════════════ */
export function legal() {
  const path = '/mentions-legales/';
  const body = `
<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Informations légales</span><h1 style="font-size:clamp(2rem,4.5vw,3rem)">Mentions légales</h1></div>
    <div class="prose reveal">
      <h2>Éditeur du site</h2>
      <p>${esc(SITE.legalName)}<br>Téléphone : ${SITE.phone}<br>Email : ${esc(SITE.email)}</p>
      <p><strong>À compléter :</strong> forme juridique, capital social, numéro SIRET, numéro de TVA intracommunautaire, adresse du siège social et nom du directeur de la publication.</p>
      <h2>Établissements</h2>
      <ul>${SHOPS.map(s => `<li>${ICONS.check}<span>${esc(s.name)} — ${esc(s.street)}, ${s.zip} Marseille</span></li>`).join('')}</ul>
      <h2>Hébergement</h2>
      <p><strong>À compléter :</strong> nom, adresse et téléphone de l'hébergeur du site.</p>
      <h2>Propriété intellectuelle</h2>
      <p>L'ensemble des contenus de ce site (textes, images, logo, structure) est la propriété de ${esc(SITE.legalName)}, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.</p>
      <h2>Données personnelles</h2>
      <p>Les informations transmises via le formulaire de contact sont utilisées uniquement pour traiter votre demande de réparation et ne sont ni revendues ni transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données : écrivez à ${esc(SITE.email)}.</p>
      <h2>Cookies</h2>
      <p>Ce site ne dépose aucun cookie de mesure d'audience ni de publicité.</p>
      <h2>Garantie légale</h2>
      <p>Les réparations réalisées bénéficient d'une garantie sur la pièce et la main d'œuvre, dans les conditions remises avec votre facture. Cette garantie ne couvre ni les chutes, ni les contacts avec un liquide postérieurs à l'intervention.</p>
    </div>
  </div>
</section>
${ctaBand()}`;

  return {
    path, file: 'mentions-legales/index.html',
    html: page({
      path, title: 'Mentions légales — Mistral Phone Marseille',
      description: "Mentions légales du site Mistral Phone, réparation de téléphone à Marseille.",
      body, crumbs: [{ label: 'Mentions légales', href: path }]
    })
  };
}

/* ═══ PLAN DU SITE ════════════════════════════════════════════════ */
export function planDuSite() {
  const path = '/plan-du-site/';
  const col = (title, links) => `<div class="card" style="padding:1.7rem"><h3 style="margin-bottom:1rem">${esc(title)}</h3>
    ${links.map(([l, h]) => `<a href="${h}" style="display:block;padding:.36rem 0;color:var(--mut);font-size:.9rem">${esc(l)}</a>`).join('')}</div>`;
  const body = `
<section class="sec">
  <div class="wrap">
    <div class="sec-head reveal"><span class="eyebrow">Navigation</span><h1 style="font-size:clamp(2rem,4.5vw,3rem)">Plan du site</h1></div>
    <div class="grid g4" data-stagger="70">
      ${col('Pages principales', [['Accueil', '/'], ['Réparation téléphone Marseille', '/reparation-telephone-marseille/'], ['Nos réparations', '/nos-reparations/'], ['Nos boutiques', '/boutiques/'], ['Tarifs', '/tarifs/'], ['À propos', '/a-propos/'], ['Contact', '/contact/']])}
      ${col('Par marque', BRANDS.map(b => ['Réparation ' + b.label + ' Marseille', '/' + b.slug + '/']))}
      ${col('Par réparation', REPAIRS.map(r => [r.label, '/' + r.slug + '/']))}
      ${col('Boutiques & secteurs', [...SHOPS.map(s => [s.name, '/' + s.slug + '/']), ['Marseille 13004', '/reparation-telephone-marseille-13004/'], ['Marseille 13012', '/reparation-telephone-marseille-13012/'], ['Mentions légales', '/mentions-legales/']])}
    </div>
  </div>
</section>
${ctaBand()}`;

  return {
    path, file: 'plan-du-site/index.html',
    html: page({
      path, title: 'Plan du site — Mistral Phone Marseille',
      description: "Toutes les pages du site Mistral Phone : réparation par marque, par type de panne, par boutique et par arrondissement à Marseille.",
      body, crumbs: [{ label: 'Plan du site', href: path }]
    })
  };
}
