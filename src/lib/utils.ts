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
    title: "Leconte Multiservices - Dépannage électroménager à Paris",
    description:
      "Dépanneur d&apos;électricité, de plomberie et installateur d&apos;électroménager à Paris et en Île-de-France. Réponse immédiate, devis gratuit et intervention professionnelle",
    openGraph: {
      title:
        "Leconte Multiservices - Dépannage électroménager à Paris et Île-de-France",
      description:
        "Services de dépannage électricité, plomberie et électroménager à Paris et en Île-de-France. Réponse immédiate, devis gratuit et intervention professionnelle",
      url: "https://leconte-multiservices.fr/",
    },
  },
  DepannageParis: {
    title: "Dépanneur Électroménager Paris | Intervention rapide",
    description:
      "Panne d'appareil ? Profitez de 34 ans d'expertise pour votre dépannage électroménager à Paris. Réparation rapide : lave-linge, lave-vaisselle, four. Devis clair !",
    openGraph: {
      title: "Dépanneur Électroménager Paris | Intervention rapide",
      description:
        "Panne d'appareil ? Profitez de 34 ans d'expertise pour votre dépannage électroménager à Paris. Réparation rapide : lave-linge, lave-vaisselle, four. Devis clair !",
      url: "https://leconte-multiservices.fr/depannage",
    },
  },
  DepannageElectroParis: {
    title:
      "Dépanneur Électroménager Paris | Intervention rapide à Domicile - 34 ans d'expertise",
    description:
      "Dépanneur électroménager à Paris. Intervention rapide sous 24h. Ancien technicien Darty, 34 ans d'expérience. Lave-linge,frigo,lave-vaisselle - 06 40 14 19 37",
    openGraph: {
      title:
        "Dépanneur Électroménager Paris | Intervention rapide à Domicile - 34 ans d'expertise",
      description:
        "Dépanneur électroménager à Paris. Intervention rapide sous 24h. Ancien technicien Darty, 34 ans d'expérience. Lave-linge,frigo,lave-vaisselle - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris",
    },
  },
  DepannageElectroParis15: {
    title: "Dépannage Électroménager Paris 15 | Intervention Rapide 15ème",
    description:
      "Dépanneur électroménager Paris 15ème. Intervention rapide à Grenelle, Vaugirard, Javel. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 15 | Intervention Rapide 15ème",
      description:
        "Dépanneur électroménager Paris 15ème. Intervention rapide à Grenelle, Vaugirard, Javel. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris15",
    },
  },
  DepannageElectroParis16: {
    title: "Dépannage Électroménager Paris 16 | Intervention Rapide 16ème",
    description:
      "Dépanneur électroménager Paris 16ème. Intervention rapide à Passy, Auteuil, Trocadéro. Réparation lave-linge, frigo, lave-vaisselle, four, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 16 | Intervention Rapide 16ème",
      description:
        "Dépanneur électroménager Paris 16ème. Intervention rapide à Passy, Auteuil, Trocadéro. Réparation lave-linge, frigo, lave-vaisselle, four, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris16",
    },
  },
  DepannageElectroParis17: {
    title: "Dépannage Électroménager Paris 17 | Intervention Rapide 17ème",
    description:
      "Dépanneur électroménager Paris 17ème. Intervention rapide aux Batignolles, Ternes, Épinettes. Réparation sèche-linge, frigo, four, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 17 | Intervention Rapide 17ème",
      description:
        "Dépanneur électroménager Paris 16ème. Intervention rapide aux Batignolles, Ternes, Épinettes. Réparation sèche-linge, frigo, four, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris17",
    },
  },
  DepannageElectroParis18: {
    title: "Dépannage Électroménager Paris 18 | Intervention Rapide 18ème",
    description:
      "Dépanneur électroménager Paris 18ème. Intervention rapide à MontMartre, Abesses, Clignancourt. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 18 | Intervention Rapide 18ème",
      description:
        "Dépanneur électroménager Paris 16ème. Intervention rapide à Passy, Auteuil, Trocadéro. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris18",
    },
  },
  DepannageElectroParis19: {
    title: "Dépannage Électroménager Paris 19 | Intervention Rapide 19ème",
    description:
      "Dépanneur électroménager Paris 19ème. Intervention rapide à Buttes-Chaumont, Villette, Belleville. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 19 | Intervention Rapide 19ème",
      description:
        "Dépanneur électroménager Paris 16ème. Intervention rapide Buttes-Chaumont, Villette, Belleville. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris19",
    },
  },
  DepannageElectroParis20: {
    title: "Dépannage Électroménager Paris 20 | Intervention Rapide 20ème",
    description:
      "Dépanneur électroménager Paris 19ème. Intervention rapide à Ménilmontant, Belleville, Gambetta. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 20 | Intervention Rapide 20ème",
      description:
        "Dépanneur électroménager Paris 16ème. Intervention rapide Ménilmontant, Belleville, Gambetta. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris20",
    },
  },
  DepannageElecParis: {
    title:
      "Dépannage Électricité Paris | Installation Borne Recharge VE - 06 40 14 19 37",
    description:
      "Électricien à Paris : dépannage électrique, installation prises et bornes de recharge pour voitures électriques. Intervention rapide - 06 40 14 19 37",
    openGraph: {
      title:
        "Dépannage Électricité Paris | Installation Borne Recharge VE - 06 40 14 19 37",
      description:
        "Électricien à Paris : dépannage électrique, installation prises et bornes de recharge pour voitures électriques. Intervention rapide - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electricite-paris",
    },
  },
  DepannagePlombParis: {
    title: "Dépannage Plomberie Paris | Intervention Rapide - 06 40 14 19 37",
    description:
      "Plombier à Paris : dépannage fuites, canalisation bouchées, chauffe-eau, robinetterie. Intervention rapide - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Plomberie Paris | Intervention Rapide - 06 40 14 19 37",
      description:
        "Plombier à Paris : dépannage fuites, canalisation bouchées, chauffe-eau, robinetterie. Intervention rapide - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-plomberie-paris",
    },
  },
  DepannageFAQParis: {
    title: "FAQ Dépannage Électroménager Paris - Toutes vos questions",
    description:
      "Questions fréquentes sur le dépannage électroménager à Paris : tarifs, délais, garanties, pannes courantes. Réponses d'un professionnel avec 34 ans d'expérience.",
    openGraph: {
      title: "FAQ Dépannage Électroménager Paris - Toutes vos questions",
      description:
        "Questions fréquentes sur le dépannage électroménager à Paris : tarifs, délais, garanties, pannes courantes. Réponses d'un professionnel avec 34 ans d'expérience.",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-faq",
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
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  },
  Galerie: {
    title:
      "Leconte Multiservices - Galerie réalisation à Paris & Île-de-France",
    description:
      "Entreprise spécialisée en rénovation à Paris et en Île-de-France. De la rénovation complète à la rénovation d'appartement, nos experts vous accompagnent pour tous vos projets.",
    openGraph: {
      title:
        "Leconte Multiservices - Expert Rénovation à Paris & Île-de-France",
      description:
        "Entreprise spécialisée en rénovation à Paris et en Île-de-France. De la rénovation complète à la rénovation d'appartement, nos experts vous accompagnent pour tous vos projets.",
      url: "https://leconte-multiservices.fr/renovation",
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  },
};
