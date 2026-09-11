# Mistral Phone — V2 (mistralphone.com)

Site statique généré, orienté SEO local Marseille. 30 pages, aucune dépendance
d'exécution : le build produit du HTML/CSS/JS pur dans `dist/`.

```bash
npm run build     # génère dist/
npm run dev       # build + surveillance de src/ et public/
npm run serve     # build + serveur local sur http://localhost:4321
node build.mjs --list   # liste toutes les routes générées
```

## Structure

```
src/data.js        ← TOUT le contenu éditable (boutiques, marques, réparations, tarifs, avis)
src/layout.js      ← <head>, navigation, pied de page, JSON-LD schema.org
src/ui.js          ← sections réutilisables (grilles, étapes, avis, FAQ, CTA)
src/pages/         ← une fabrique par type de page
public/            ← copié tel quel dans dist/ (assets, images)
build.mjs          ← génère dist/ + sitemap.xml + robots.txt
```

Pour modifier un texte, une adresse, un tarif ou une note Google :
**tout est dans `src/data.js`**, puis `npm run build`.

## Les 30 pages

| Groupe | Routes |
|---|---|
| Accueil | `/` |
| Mot-clé principal | `/reparation-telephone-marseille/` |
| Marques (8) | `/reparation-iphone-marseille/`, `-samsung-`, `-xiaomi-`, `-google-pixel-`, `-huawei-`, `-oppo-`, `-honor-`, `-motorola-` |
| Pannes (8) | écran, batterie, connecteur de charge, vitre arrière, caméra, haut-parleur, désoxydation, ne s'allume plus |
| Secteurs (2) | `/reparation-telephone-marseille-13004/`, `/reparation-telephone-marseille-13012/` |
| Boutiques (4) | `/boutiques/` + une page par boutique |
| Divers | `/nos-reparations/`, `/tarifs/`, `/a-propos/`, `/contact/`, `/mentions-legales/`, `/plan-du-site/` |

## SEO

- Un `<title>` unique de moins de 62 caractères et une meta description de moins
  de 160 caractères par page.
- JSON-LD `@graph` sur chaque page : `Organization`, trois `MobilePhoneStore`
  (adresse, horaires, `aggregateRating`, `hasMap`), `BreadcrumbList` et `FAQPage`.
- `sitemap.xml` et `robots.txt` générés automatiquement, avec autorisation
  explicite des robots d'IA (GPTBot, PerplexityBot, ClaudeBot, OAI-SearchBot).
- Maillage interne dense : chaque page marque renvoie vers les pannes, chaque
  page panne renvoie vers les marques, et toutes renvoient vers les boutiques.

## Déploiement

Vercel : importer le dossier, `vercel.json` fait le reste
(`buildCommand: node build.mjs`, `outputDirectory: dist`).
Le site n'a besoin d'aucun runtime : c'est du statique.

## ⚠️ À valider avant mise en ligne

1. **Horaires de semaine** — `SITE.hours` dans `src/data.js` indique
   « Lun – Sam : 9h30 – 19h30 ». Seul le dimanche (10h–15h) est confirmé.
   Corriger aussi `SITE.schemaHours`, utilisé par le JSON-LD.
2. **Tarifs** — `PRICING` et `PRICING_EXTRA` sont des estimations de marché,
   pas les prix réels de Mistral Phone. À remplacer.
3. **Mentions légales** — SIRET, forme juridique, TVA, directeur de publication
   et hébergeur sont marqués « À compléter » dans `src/pages/static.js`.
4. **Avis clients** — les six témoignages de `REVIEWS` sont des exemples
   rédigés. À remplacer par de vrais avis Google (ou à supprimer).
5. **Formulaire de contact** — il ouvre le client mail du visiteur (`mailto:`).
   Pour recevoir les demandes directement, brancher un endpoint
   (Formspree, Vercel Function, etc.) dans le handler `#bookForm` de
   `public/assets/app.js`.
6. **Redirections depuis mistralphone.fr** — prévoir des 301 vers les nouvelles
   URLs si le .fr est conservé.

## Animations

Toutes désactivées sous `prefers-reduced-motion: reduce`.

- Canvas « vent mistral » dans les hero (mis en pause hors écran).
- Écran qui se fissure puis se répare, en boucle, sur le téléphone du hero.
- Révélations au défilement, compteurs animés, boutons magnétiques,
  halo de curseur, inclinaison 3D du téléphone, bandeaux défilants.
