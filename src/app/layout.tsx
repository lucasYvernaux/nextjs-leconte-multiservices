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
  title: "Leconte Multiservices - Dépannage & Rénov",
  description:
    "Experts en rénovation et dépannage en électroménager, électricité et plomberie dans toute l'Île-de-France. De la rénovation complète aux interventions urgentes, nous répondons à tous vos besoins.",
  keywords: ["Paris", "Haut de seine", "Val de marne"],
  openGraph: {
    title: "Leconte Multiservices - Dépannage & Rénov",
    type: "website",
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
    <html lang="en">
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
