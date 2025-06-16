import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTACall } from "@/components/BtnBeRecalled";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leconte Multiservices - Dépannage & Rénov - Paris et Île-de-France",
  description:
    "Faites appel à Leconte Multiservices, professionnels du dépannage et de la rénovation pour tous travaux (éléctroménager, électricité, plomberie, salle de bain, cuisine) à Paris.",
  robots: "index, follow",
  openGraph: {
    title: "Leconte Multiservices - Dépannage & Rénov",
    type: "website",
    siteName: "Leconte Multiservices",
    url: "https://nextjs-leconte-multiservices.vercel.app/",
    locale: "fr_FR",
    description:
      "Faites appel à Leconte Multiservices, pour vos rénovation et vos depannages électroménager, électricité et plomberie d'urgence dans toutes l'ile de France et Paris",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <CTACall />
        {children}
        <Footer />
      </body>
    </html>
  );
}
