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

## Déploiement Vercel

Preset framework: **Next.js**. Aucun `vercel.json` requis.

| Réglage | Valeur |
| --- | --- |
| Root Directory | `.` |
| Build Command | `npm run build` (défaut Vercel) |
| Output | géré par Vercel (`.next`) |
| Install Command | `npm install` |
| Node | 20+ (voir `.nvmrc` → 22) |

### Importer le dépôt

1. Sur [vercel.com](https://vercel.com), **Add New** → **Project**.
2. Import Git: `DominiqueOthniel/Arkane`.
3. Framework Preset: **Next.js**.
4. Root Directory: `.`
5. Laisse les commandes par défaut. Aucune variable d’environnement obligatoire.
6. **Deploy**. Branche de production: `main`.

## Pages

- `/` Accueil
- `/atelier` Studio
- `/drops` Kits et drops
- `/signature` Identité
- `/contact` Contact

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Canvas liquid metal + curseur chrome + boutons magnétiques
- Vercel
