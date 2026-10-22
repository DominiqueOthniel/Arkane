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

Config dans `netlify.toml` (build `npm run build`, Node 22, publish `.next`).
Netlify applique automatiquement l’adaptateur Next.js (OpenNext). Pas de variables d’environnement requises pour ce site.

1. Sur [app.netlify.com](https://app.netlify.com), **Add new site** → **Import an existing project**.
2. Connecte le dépôt GitHub `DominiqueOthniel/Arkane`.
3. Branche de production: `main` (ou la branche PR pour un deploy preview).
4. Laisse Netlify lire `netlify.toml` (ne change pas le build command ni le publish directory).
5. Déploie. Aucune env var obligatoire.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Canvas liquid metal + curseur chrome + boutons magnétiques
- Netlify (`netlify.toml`)
