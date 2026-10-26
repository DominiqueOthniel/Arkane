/** Demo catalogue grounded in public Arkane / @arkanedot presence. */

export const LINKS = {
  tiktok: "https://www.tiktok.com/@arkanedot",
  instagram: "https://www.instagram.com/arkanedot",
  soundcloud: "https://soundcloud.com/arkanedot",
  email: "mailto:bookings@arkane.studio",
  emailDisplay: "bookings@arkane.studio",
} as const;

export const PROFILE = {
  handle: "@arkanedot",
  base: "Stockholm",
  lane: "Trap, drill, bass & 808 slides",
  pronunciation: "/ɑːrˈkeɪn/",
} as const;

/** Real releases / flips from SoundCloud @arkanedot */
export const RELEASES = [
  {
    title: "You Wanted More (ARKANE. Flip)",
    credit: "Violent Vira",
    label: "Flip",
    date: "août 2026",
    tags: "bass trap · flip",
  },
  {
    title: "God Complex (ARKANE. Flip)",
    credit: "Violent Vira",
    label: "Flip",
    date: "mai 2025",
    tags: "trap · flip",
  },
  {
    title: "life goes on (flip)",
    credit: "ARKANE.",
    label: "Flip",
    date: "avr. 2025",
    tags: "melodic · flip",
  },
  {
    title: "back2you",
    credit: "ARKANE.",
    label: "Original",
    date: "mars 2025",
    tags: "140 BPM · bass",
  },
  {
    title: "warni warni",
    credit: "ARKANE.",
    label: "Original",
    date: "fév. 2025",
    tags: "drill · 808",
  },
  {
    title: "loveme",
    credit: "ARKANE.",
    label: "Original",
    date: "nov. 2024",
    tags: "trap · hook",
  },
  {
    title: "perfect princess (program me flip)",
    credit: "robopup",
    label: "Flip",
    date: "avr. 2024",
    tags: "hyperpop · flip",
  },
] as const;

/** Kit / pack listings. Octavia is public via Linktree; others are plausible catalogue fillers. */
export const KITS = [
  {
    name: "OCTAVIA Drum Kit Vol. 1",
    tag: "Drum kit",
    status: "Drop public",
    meta: "WAV · 808s, kicks, snares, hats",
    line: "Kit annoncé sur Linktree @arkanedot. Percus trap/drill, 808 slides, one-shots prêts à droper.",
    image: "/images/studio-speakers.jpg",
    source: "linktr.ee/arkanedot",
  },
  {
    name: "808 Slide Bank",
    tag: "Bass pack",
    status: "Studio pack",
    meta: "24 glides · 40–60 Hz focus",
    line: "Banque d’808 pour bass trap et drill. Même logique que les sessions TikTok: slide long, punch court.",
    image: "/images/chrome-flow.jpg",
    source: "catalogue atelier",
  },
  {
    name: "Flip Stems Pack",
    tag: "Stems",
    status: "Pour remix",
    meta: "Drums / bass / lead séparés",
    line: "Stems type flip (réf. God Complex, You Wanted More): layers isolées pour study ou remix.",
    image: "/images/studio-console.jpg",
    source: "catalogue atelier",
  },
  {
    name: "Night Loop Kit",
    tag: "Melodic loops",
    status: "Demo pack",
    meta: "12 loops · 130–150 BPM",
    line: "Pads et hooks sombres pour type beats. Tempo drill/trap, dry WAV, sans FX lourds.",
    image: "/images/night-drops.jpg",
    source: "catalogue atelier",
  },
] as const;

export const STUDIO_OFFERS = [
  {
    title: "Beat from scratch",
    deliverables: "1 beat WAV + MIDI keys · 2 révisions",
    detail: "Trap, drill ou bass. Brief: BPM, 3 refs SoundCloud/TikTok, deadline.",
  },
  {
    title: "Flip / remix",
    deliverables: "1 flip master + stems drums/bass",
    detail: "Comme les flips Violent Vira / robopup sur SoundCloud. Envoie l’acapella ou le lien.",
  },
  {
    title: "Mix & polish",
    deliverables: "Mix stereo + master -14 LUFS",
    detail: "Session sur ton projet FL / Ableton. Focus 808, snare crack, headroom propre.",
  },
] as const;

export const HOME_LATEST = [
  {
    href: "/drops",
    title: "OCTAVIA Vol. 1",
    line: "Drum kit public · Linktree @arkanedot",
    image: "/images/studio-speakers.jpg",
    alt: "Enceintes studio pour le kit Octavia",
  },
  {
    href: "/drops",
    title: "You Wanted More",
    line: "Flip Violent Vira · août 2026 · SoundCloud",
    image: "/images/night-drops.jpg",
    alt: "Ambiance nocturne drop Arkane",
  },
  {
    href: "/atelier",
    title: "Session flip",
    line: "Beat, flip ou mix · brief en 5 lignes",
    image: "/images/studio-console.jpg",
    alt: "Console atelier Arkane",
  },
] as const;
