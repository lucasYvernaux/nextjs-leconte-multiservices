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
    alternates: { canonical: "https://leconte-multiservices.fr/about" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage" },
  },
  ReparationLaveLingeParis: {
    title: "Réparation Lave-Linge Paris | Dépannage à Domicile",
    description:
      "Réparation de lave-linge à Paris : panne de vidange, d'essorage, fuite, tambour bloqué. Intervention rapide à domicile, 34 ans d'expérience - 06 40 14 19 37",
    openGraph: {
      title: "Réparation Lave-Linge Paris | Dépannage à Domicile",
      description:
        "Réparation de lave-linge à Paris : panne de vidange, d'essorage, fuite, tambour bloqué. Intervention rapide à domicile, 34 ans d'expérience - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/reparation-lave-linge-paris",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/reparation-lave-linge-paris" },
  },
  ReparationRefrigerateurParis: {
    title: "Réparation Réfrigérateur Paris | Frigoriste à Domicile",
    description:
      "Frigoriste à Paris : réparation de réfrigérateur et congélateur, panne de froid, givre, bruit, fuite. Intervention rapide à domicile - 06 40 14 19 37",
    openGraph: {
      title: "Réparation Réfrigérateur Paris | Frigoriste à Domicile",
      description:
        "Frigoriste à Paris : réparation de réfrigérateur et congélateur, panne de froid, givre, bruit, fuite. Intervention rapide à domicile - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/reparation-refrigerateur-paris",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/reparation-refrigerateur-paris" },
  },
  ReparationLaveVaisselleParis: {
    title: "Réparation Lave-Vaisselle Paris | Dépannage à Domicile",
    description:
      "Réparation de lave-vaisselle à Paris : ne lave plus, ne vidange pas, fuite, code erreur. Intervention rapide à domicile, 34 ans d'expérience - 06 40 14 19 37",
    openGraph: {
      title: "Réparation Lave-Vaisselle Paris | Dépannage à Domicile",
      description:
        "Réparation de lave-vaisselle à Paris : ne lave plus, ne vidange pas, fuite, code erreur. Intervention rapide à domicile, 34 ans d'expérience - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/reparation-lave-vaisselle-paris",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/reparation-lave-vaisselle-paris" },
  },
  ReparationFourParis: {
    title: "Réparation Four et Cuisinière Paris | Dépannage à Domicile",
    description:
      "Réparation de four et cuisinière à Paris : ne chauffe plus, résistance, thermostat, porte. Intervention rapide à domicile, 34 ans d'expérience - 06 40 14 19 37",
    openGraph: {
      title: "Réparation Four et Cuisinière Paris | Dépannage à Domicile",
      description:
        "Réparation de four et cuisinière à Paris : ne chauffe plus, résistance, thermostat, porte. Intervention rapide à domicile, 34 ans d'expérience - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/reparation-four-paris",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/reparation-four-paris" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris" },
  },
  DepannageElectroParis1: {
    title: "Dépannage Électroménager Paris 1 | Intervention Rapide 1er",
    description:
      "Dépanneur électroménager Paris 1er. Intervention rapide à Place Vendôme, Tuilerie, Les Halles. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 1 | Intervention Rapide 1er",
      description:
        "Dépanneur électroménager Paris 1er. Intervention rapide à Place Vendôme, Tuilerie, Les Halles. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris1",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris1" },
  },
  DepannageElectroParis2: {
    title: "Dépannage Électroménager Paris 2 | Intervention Rapide 2ème",
    description:
      "Dépanneur électroménager Paris 2ème. Intervention rapide à Gaillon, Vivienne, Bonne-Nouvelle. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 2 | Intervention Rapide 2ème",
      description:
        "Dépanneur électroménager Paris 2ème. Intervention rapide à Gaillon, Vivienne, Bonne-Nouvelle. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris2",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris2" },
  },
  DepannageElectroParis3: {
    title:
      "Dépannage Électroménager Paris | Intervention Rapide 3ème arrondissement",
    description:
      "Dépanneur électroménager Paris 3ème. Intervention rapide à Art-et-Métiers, Musée Picasso, centre Pompidou. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title:
        "Dépannage Électroménager Paris | Intervention Rapide 3ème arrondissement",
      description:
        "Dépanneur électroménager Paris 3ème. Intervention rapide à Art-et-Métiers, Musée Picasso, centre Pompidou. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris3",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris3" },
  },
  DepannageElectroParis4: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 4ème",
    description:
      "Dépanneur électroménager Paris 4ème. Intervention rapide à Hôtel-de-Ville, Notre-Dame, Saint-Gervais. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 4ème",
      description:
        "Dépanneur électroménager Paris 4ème. Intervention rapide à Hôtel-de-Ville, Notre-Dame, Saint-Gervais. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris4",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris4" },
  },
  DepannageElectroParis5: {
    title: "Dépannage Électroménager Paris 5 | Intervention Rapide 5ème",
    description:
      "Dépanneur électroménager Paris 5ème. Intervention rapide à Sorbonne, Val-de-Grâce, Saint-Victor. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 5 | Intervention Rapide 5ème",
      description:
        "Dépanneur électroménager Paris 5ème. Intervention rapide à Sorbonne, Val-de-Grâce, Saint-Victor. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris5",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris5" },
  },
  DepannageElectroParis6: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 6ème",
    description:
      "Dépanneur électroménager Paris 6ème. Intervention rapide à Odéon, Notre-Dame-des-Champs, Monnaie. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 6ème",
      description:
        "Dépanneur électroménager Paris 6ème. Intervention rapide à Odéon, Notre-Dame-des-Champs, Monnaie. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris6",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris6" },
  },
  DepannageElectroParis7: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 7ème",
    description:
      "Dépanneur électroménager Paris 7ème. Intervention rapide à Musée d'Orsay, Invalides, Saint-Thomas-d'Aquin. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 7ème",
      description:
        "Dépanneur électroménager Paris 7ème. Intervention rapide à Musée d'Orsay, Invalides, Saint-Thomas-d'Aquin. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris7",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris7" },
  },
  DepannageElectroParis8: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 8ème",
    description:
      "Dépanneur électroménager Paris 8ème. Intervention rapide à Madeleine, Champs-Élysées, Arc-de-Triomphe. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 8ème",
      description:
        "Dépanneur électroménager Paris 8ème. Intervention rapide à Madeleine, Champs-Élysées, Arc-de-Triomphe. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris8",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris8" },
  },
  DepannageElectroParis9: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 9ème",
    description:
      "Dépanneur électroménager Paris 9ème. Intervention rapide à Opéra, Pigalle, Rochechouart. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 9ème",
      description:
        "Dépanneur électroménager Paris 9ème. Intervention rapide à Opéra, Pigalle, Rochechouart. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris9",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris9" },
  },
  DepannageElectroParis10: {
    title: "Dépannage Électroménager Paris 10 | Intervention Rapide 10ème",
    description:
      "Dépanneur électroménager Paris 10ème. Intervention rapide à Gare du Nord, Porte Saint-Denis, Villemin. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris 10 | Intervention Rapide 10ème",
      description:
        "Dépanneur électroménager Paris 10ème. Intervention rapide à Gare du Nord, Porte Saint-Denis, Villemin. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris10",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris10" },
  },
  DepannageElectroParis11: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 11ème",
    description:
      "Dépanneur électroménager Paris 11ème. Intervention rapide à Roquette, Charonne, Folie-Méricourt. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 11ème",
      description:
        "Dépanneur électroménager Paris 11ème. Intervention rapide à Roquette, Charonne, Folie-Méricourt. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris11",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris11" },
  },
  DepannageElectroParis12: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 12ème",
    description:
      "Dépanneur électroménager Paris 12ème. Intervention rapide à Bel-Air, Quinze-Vingts, Bercy. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 12ème",
      description:
        "Dépanneur électroménager Paris 12ème. Intervention rapide à Bel-Air, Quinze-Vingts, Bercy. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris12",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris12" },
  },
  DepannageElectroParis13: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 13ème",
    description:
      "Dépanneur électroménager Paris 13ème. Intervention rapide à Salpêtrière, Maison-Blanche, Gobelins. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 13ème",
      description:
        "Dépanneur électroménager Paris 13ème. Intervention rapide à Salpêtrière, Maison-Blanche, Gobelins. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris13",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris13" },
  },
  DepannageElectroParis14: {
    title: "Dépannage Électroménager Paris | Intervention Rapide 14ème",
    description:
      "Dépanneur électroménager Paris 14ème. Intervention rapide à Montparnass, Denfer-Rochereau, Cité Universitaire. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
    openGraph: {
      title: "Dépannage Électroménager Paris | Intervention Rapide 14ème",
      description:
        "Dépanneur électroménager Paris 14ème. Intervention rapide à Montparnass, Denfer-Rochereau, Cité Universitaire. Réparation lave-linge, frigo, lave-vaisselle, etc - 06 40 14 19 37",
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris14",
    },
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris14" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris15" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris16" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris17" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris18" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris19" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris20" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electricite-paris" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-plomberie-paris" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/depannage/depannage-electromenager-faq" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/mentions-legales" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/plan-du-site" },
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
    alternates: { canonical: "https://leconte-multiservices.fr/renovation" },
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
