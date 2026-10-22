# Arkane

Site marketing pour Arkane, maison de production musicale.

Esthétique sombre argent / chrome liquide. Interface et contenus en français.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Déploiement Netlify

Config dans `netlify.toml`:
- build: `npm run build`
- publish: `.next`
- plugin: `@netlify/plugin-nextjs` (runtime Next, pas un dossier `.next` servi en statique)
- Node 22

Aucune variable d’environnement requise. Ne pas définir `NETLIFY_NEXT_PLUGIN_SKIP`.

### Site existant (`4ne`)

1. Ouvre le site sur [app.netlify.com](https://app.netlify.com) (slug `4ne`).
2. **Site configuration** → **Build & deploy** → **Continuous deployment**.
3. Branche de production: celle qui contient ce code (`main` après merge, ou `cursor/arkane-dark-chrome-site-3ce4` pour tester).
4. **Build settings**: efface les overrides UI pour Build command et Publish directory (laisse `netlify.toml` décider), ou mets exactement `npm run build` et `.next`.
5. **Environment variables**: retire `NETLIFY_NEXT_PLUGIN_SKIP` si elle existe.
6. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**.
7. Vérifie https://4ne.netlify.app

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Canvas liquid metal + curseur chrome + boutons magnétiques
- Netlify (`netlify.toml`)
