import type { Metadata } from "next";
import { Syne, Sora } from "next/font/google";
import ChromeCursor from "@/components/ChromeCursor";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Arkane | Trap, drill & 808",
    template: "%s | Arkane",
  },
  description:
    "ARKANE. (@arkanedot): trap, drill, bass. OCTAVIA Drum Kit, flips SoundCloud, sessions atelier. L’Arkane vaincra.",
  openGraph: {
    title: "Arkane",
    description: "OCTAVIA · flips · sessions. L’Arkane vaincra.",
    images: ["/arkane-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <div className="noise" aria-hidden />
        <ChromeCursor />
        <div className="relative bg-ink text-chrome-50">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
