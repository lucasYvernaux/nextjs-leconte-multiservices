import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leconte-multiservices.fr",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electricite-paris",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-plomberie-paris",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/reparation-lave-linge-paris",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/reparation-refrigerateur-paris",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/reparation-lave-vaisselle-paris",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/reparation-four-paris",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris15",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris16",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris17",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris18",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris19",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/depannage/depannage-electromenager-paris20",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/renovation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://leconte-multiservices.fr/realisation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: "https://leconte-multiservices.fr/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://leconte-multiservices.fr/mentions-legales",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.1,
    },
    {
      url: "https://leconte-multiservices.fr/plan-du-site",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: "https://leconte-multiservices.fr/favicon.ico",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
