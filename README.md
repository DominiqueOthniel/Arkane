# Arkane

Site marketing pour Arkane, maison de production musicale.

Esthétique sombre argent / chrome liquide. Interface et contenus en français.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build (export statique)

```bash
npm run build
```

Génère le dossier `out/` (HTML statique). Pour prévisualiser:

```bash
npx serve out
```

## Déploiement Netlify (site `ark4ne`)

Export Next.js (`output: "export"`). Netlify sert `out/` comme site statique.

Config `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `out`
- Node 22
- `NETLIFY_NEXT_PLUGIN_SKIP=true` (pas de runtime Next)

### Réglages UI pour `ark4ne`

1. Ouvre le site `ark4ne` sur [app.netlify.com](https://app.netlify.com).
2. **Site configuration** → **Build & deploy** → branche de production: `main` (après merge) ou `cursor/arkane-dark-chrome-site-3ce4`.
3. Build command: `npm run build` (ou laisse `netlify.toml`).
4. Publish directory: `out` (pas `.next`).
5. **Deploys** → **Trigger deploy** → **Clear cache and deploy site**.
6. Vérifie https://ark4ne.netlify.app

## Stack

- Next.js (App Router, export statique)
- Tailwind CSS
- Framer Motion
- Canvas liquid metal + curseur chrome + boutons magnétiques
- Netlify (publish `out`)
