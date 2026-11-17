import type { Metadata } from "next";

// page.tsx is a client component, so its metadata lives here
export const metadata: Metadata = {
  title: "Contact | Leconte Multiservices - Dépannage Paris & Île-de-France",
  description:
    "Contactez Leconte Multiservices pour un dépannage électroménager, électricité ou plomberie, ou un projet de rénovation. Devis gratuit - 06 40 14 19 37",
  openGraph: {
    title: "Contact | Leconte Multiservices",
    description:
      "Contactez Leconte Multiservices pour un dépannage électroménager, électricité ou plomberie, ou un projet de rénovation. Devis gratuit - 06 40 14 19 37",
    url: "https://leconte-multiservices.fr/contact",
    // child openGraph replaces the root one, so the root image is re-declared
    images: "/opengraph-image.png",
  },
  alternates: { canonical: "https://leconte-multiservices.fr/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
