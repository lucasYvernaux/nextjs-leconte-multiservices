import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MetadataPage = {
  About: {
    title:
      "Leconte Multiservices -  À Propos - Expert en Rénovation et Dépannage à Paris & Île-de-France",
    description:
      "Découvrez Leconte Multiservices : entreprise familiale spécialisée en rénovation et dépannage à Paris. 36 ans d'expérience, artisans certifiés, engagements qualité et satisfaction client.",
    openGraph: {
      title:
        "Leconte Multiservices -  À Propos - Expert en Rénovation et Dépannage à Paris & Île-de-France",
      description:
        "Entreprise rénovation Paris, histoire Leconte Multiservices, équipe artisans Île-de-France, valeurs entreprise dépannage, expertise rénovation 75, certifications professionnelles, engagement qualité",
      url: "https://leconte-multiservices.fr/about",
    },
  },
  Depannage: {
    title: "Leconte Multiservices - Dépannage à Paris et Île-de-France",
    description:
      "Dépanneur d&apos;électricité, de plomberie et installateur d&apos;électroménager à Paris et en Île-de-France. Réponse immédiate, devis gratuit et intervention professionnelle",
    openGraph: {
      title: "Leconte Multiservices - Dépannage à Paris et Île-de-France",
      description:
        "Services de dépannage électricité, plomberie et électroménager à Paris et en Île-de-France. Réponse immédiate, devis gratuit et intervention professionnelle",
      url: "https://leconte-multiservices.fr/depannage",
    },
  },
  PrivacyPolicy: {
    title: "Leconte Multiservices - Mentions Légales",
    description:
      "Découvrer les mentions légales du site internet Leconte Multiservices, dépannage d&apos;urgence plomberie, électricité, électroménager et rénovation sur Paris et l&apos;Ile de France",
    openGraph: {
      title: "Leconte Multiservices - Mentions Légales",
      description:
        "Découvrer les mentions légales du site internet Leconte Multiservices, dépannage d&apos;urgence plomberie, électricité, électroménager et rénovation sur Paris et l&apos;Ile de France",
      url: "https://leconte-multiservices.fr/mentions-legales",
    },
  },
  Sitemap: {
    title: "Leconte Multiservices - Plan du Site",
    description:
      "Découvrez le plan du site Leconte Multiservices afin de découvrir toutes les pages et toutes les prestation proposé par l'entreprise",
    openGraph: {
      title: "Leconte Multiservices - Plan du Site",
      description:
        "Découvrez le plan du site Leconte Multiservices afin de découvrir toutes les pages et toutes les prestation proposé par l'entreprise",
      url: "https://leconte-multiservices.fr/plan-du-site",
    },
  },
  Renovation: {
    title: "Leconte Multiservices - Expert Rénovation à Paris & Île-de-France",
    description:
      "Entreprise spécialisée en rénovation à Paris et en Île-de-France. De la rénovation complète à la rénovation d'appartement, nos experts vous accompagnent pour tous vos projets.",
    openGraph: {
      title:
        "Leconte Multiservices - Expert Rénovation à Paris & Île-de-France",
      description:
        "Entreprise spécialisée en rénovation à Paris et en Île-de-France. De la rénovation complète à la rénovation d'appartement, nos experts vous accompagnent pour tous vos projets.",
      url: "https://leconte-multiservices.fr/renovation",
    },
  },
};
