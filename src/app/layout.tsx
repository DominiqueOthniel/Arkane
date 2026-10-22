import type { Metadata } from "next";
import { Syne, Sora } from "next/font/google";
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
  title: "Arkane | Maison de production musicale",
  description:
    "Arkane sculpte des sons chrome: production, mix et identité sonore. Noir absolu, argent liquide.",
  openGraph: {
    title: "Arkane",
    description: "Maison de production musicale. Le son qui frappe.",
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
        {children}
      </body>
    </html>
  );
}
