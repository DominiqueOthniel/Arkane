import Link from "next/link";
import { SLOGAN } from "@/lib/brand";
import { LINKS, PROFILE } from "@/lib/content";
import { navLinks } from "@/lib/nav";

export default function SiteFooter() {
  return (
    <footer className="section-pad relative border-t border-white/10 bg-ink py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-sm tracking-[0.35em] text-chrome-200">
            ARKANE
          </p>
          <p className="mt-2 font-display text-sm tracking-[0.12em] text-chrome-300">
            {SLOGAN}
          </p>
          <p className="mt-3 max-w-xs text-sm text-chrome-400">
            {PROFILE.lane}. {PROFILE.base}. OCTAVIA · flips · sessions.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-chrome-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-xs uppercase tracking-[0.2em] text-chrome-500">
          <p>© {new Date().getFullYear()} Arkane</p>
          <a
            href={LINKS.tiktok}
            className="mt-2 inline-block transition hover:text-chrome-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok {PROFILE.handle}
          </a>
          <a
            href={LINKS.soundcloud}
            className="mt-2 block transition hover:text-chrome-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoundCloud
          </a>
        </div>
      </div>
    </footer>
  );
}
