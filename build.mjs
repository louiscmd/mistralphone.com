#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════
   MISTRAL PHONE — V2 · générateur de site statique
   node build.mjs           → construit dans dist/
   node build.mjs --watch   → reconstruit à chaque modification
   ═══════════════════════════════════════════════════════════════ */
import { mkdir, writeFile, rm, cp } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');

const { SITE, BRANDS, REPAIRS, SHOPS } = await import('./src/data.js');
const home = (await import('./src/pages/home.js')).default;
const brandPage = (await import('./src/pages/brand.js')).default;
const repairPage = (await import('./src/pages/repair.js')).default;
const shopPage = (await import('./src/pages/shop.js')).default;
const zoneMod = await import('./src/pages/zone.js');
const hubs = await import('./src/pages/hubs.js');
const statics = await import('./src/pages/static.js');
const buyPage = (await import('./src/pages/buy.js')).default;

function collect() {
  return [
    home(),
    hubs.hubReparation(),
    hubs.hubReparations(),
    hubs.hubBoutiques(),
    ...BRANDS.map(brandPage),
    ...REPAIRS.map(repairPage),
    ...SHOPS.map(shopPage),
    ...zoneMod.ZONES.map(zoneMod.default),
    buyPage(),
    statics.tarifs(),
    statics.apropos(),
    statics.contact(),
    statics.legal(),
    statics.planDuSite()
  ];
}

const PRIORITY = (p) => {
  if (p === '/') return '1.0';
  if (p === '/reparation-telephone-marseille/') return '0.95';
  if (/^\/(reparation-iphone|reparation-samsung|reparation-ecran|remplacement-batterie|boutiques)/.test(p)) return '0.9';
  if (/^\/(mentions-legales|plan-du-site)\//.test(p)) return '0.2';
  return '0.8';
};

const sitemap = (pages) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${SITE.domain}${p.path}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>${p.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${PRIORITY(p.path)}</priority>
  </url>`).join('\n')}
</urlset>
`;

const robots = () => `User-agent: *
Allow: /

# Moteurs d'IA — accès explicite
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${SITE.domain}/sitemap.xml
`;

async function build() {
  const t0 = Date.now();
  if (existsSync(OUT)) await rm(OUT, { recursive: true });
  await mkdir(OUT, { recursive: true });
  await cp(join(ROOT, 'public'), OUT, { recursive: true });

  const pages = collect();
  const seen = new Set();
  for (const p of pages) {
    if (seen.has(p.path)) throw new Error('Route dupliquée : ' + p.path);
    seen.add(p.path);
    const dest = join(OUT, p.file);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, p.html, 'utf8');
  }

  await writeFile(join(OUT, 'sitemap.xml'), sitemap(pages));
  await writeFile(join(OUT, 'robots.txt'), robots());
  await writeFile(join(OUT, '_headers'), `/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n/images/*\n  Cache-Control: public, max-age=31536000, immutable\n`);

  const bytes = pages.reduce((n, p) => n + Buffer.byteLength(p.html), 0);
  console.log(`✓ ${pages.length} pages générées dans dist/ (${(bytes / 1024).toFixed(0)} Ko HTML) en ${Date.now() - t0} ms`);
  return pages;
}

const pages = await build();

if (process.argv.includes('--list')) {
  console.log('\nRoutes :');
  pages.map(p => p.path).sort().forEach(p => console.log('  ' + p));
}

if (process.argv.includes('--watch')) {
  const { watch } = await import('node:fs');
  let t = null;
  for (const dir of ['src', 'public']) {
    watch(join(ROOT, dir), { recursive: true }, () => {
      clearTimeout(t);
      t = setTimeout(async () => {
        try {
          const mod = await import('./build.mjs?ts=' + Date.now());
        } catch (e) { console.error('✗', e.message); }
      }, 120);
    });
  }
  console.log('👀 Surveillance de src/ et public/…');
}
