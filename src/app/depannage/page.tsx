import { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Section } from "@/components/section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leconte Multiservices - Dépannage à Paris et Île-de-France",
  description:
    "Services de dépannage électricité, plomberie et électroménager à Paris et en Île-de-France. Réponse immédiate, devis gratuit et intervention professionnelle",
  keywords: [
    "dépannage",
    "réparation",
    "électricité",
    "plomberie",
    "électroménager",
    "Paris",
    "Hauts-de-seine",
    "Essonne",
    "Val-de-marne",
    "Yvelines",
    "Seine-et-Marne",
    "Seine-Saint-Denis",
    "Val d'Oise",
  ],
  openGraph: {
    title: "Leconte Multiservices - Dépannage à Paris et Île-de-France",
    description:
      "Services de dépannage électricité, plomberie et électroménager à Paris et en Île-de-France. Réponse immédiate, devis gratuit et intervention professionnelle",
    url: "https://nextjs-leconte-multiservices.vercel.app/depannage",
  },
};

export default function page() {
  return (
    <>
      <section className="section-services flex bg-gradient-to-r from-leconte-primary to-leconte-secondary p-12 md:p-0 md:h-screen">
        <div className="content flex flex-col gap-12 items-center justify-center max-w-full w-full">
          <h1 className="text-4xl mx-auto font-bold uppercase fadein-left">
            Dépannage à domicile rapide et professionnel
          </h1>
          <p className="content-text fadein-left text-3xl">
            Découvrez comment nos services vous accompagnent pour retrouver
            confort et sérénité.
          </p>
          <div className=" content-btn fadein-left">
            <Link
              className="text-2xl rounded-full px-12 py-2 bg-leconte-primary"
              type="button"
              rel=""
              href="tel:0640141937"
              data-page-id="Home"
            >
              Appelez-moi
            </Link>
          </div>
          <div className="content-card flex flex-col gap-4 md:flex-row md:px-12">
            <Card className="bg-leconte-secondary rounded-4xl py-12 flex-1">
              <CardHeader>
                <CardTitle className="text-center capitalize text-[28px] font-medium">
                  électroménager
                </CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">
                Optez pour une réparation professionnelle, économique et
                écologique.
              </CardContent>
            </Card>
            <Card className="bg-leconte-secondary rounded-4xl py-12 flex-1">
              <CardHeader>
                <CardTitle className="text-center capitalize text-[28px] font-medium">
                  électricité
                </CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">
                Services d&apos;électricité pour vos besoins domestiques
                urgents.
              </CardContent>
            </Card>
            <Card className="bg-leconte-secondary rounded-4xl py-12 flex-1">
              <CardHeader>
                <CardTitle className="text-center capitalize text-[28px] font-medium">
                  plomberie
                </CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">
                Interventions rapides pour tous vos problèmes de plomberie.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Section
        idPage="depannage"
        class="test"
        name="electro"
        image={{
          alt: "photo de quelques petit électroménager dans une cuisine",
          position: "right",
          src: "/images/quel-petit-electromenager-choisir-dans-sa-cuisine-6909-1200-630.jpg",
        }}
        title="Dépannage en Électroménager"
      >
        <p className="mb-4">
          Votre appareil électroménager est tombé en panne ? Ne le jetez pas, il
          suffit parfois de remplacer une pièce pour qu’il continue à vivre très
          longtemps. Vous pouvez faire confiance à mon expertise, avec mes 36
          ans d&apos;expérience chez Darty et mon partenariat avec{" "}
          <Link
            href={"https://www.proxiconfort.fr"}
            className="underline"
            target="_blank"
          >
            Proxiconfort
          </Link>
          .
        </p>
        <div className="content-footer flex">
          <div className="flex-1">
            <h3 className="text-3xl">150k appareils</h3>
            <p className="text-base">catalogue Proxiconfort</p>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl">36 ans</h3>
            <p className="text-base">Expérience et fiabilité</p>
          </div>
        </div>
      </Section>

      <Section
        idPage="depannage"
        name="elec"
        image={{
          alt: "photo d'une personne réparant un aspirateur",
          position: "left",
          src: "/images/Electricité.jpeg",
        }}
        title="Dépannage en Électricité"
      >
        <p className="mb-4">
          Votre sécurité est ma priorité. Je propose des solutions adaptées pour
          tous vos besoins électriques : pannes de courant, remplacements de
          tableaux électriques, ajout de prises ou encore installation
          d’éclairage. Je vous garantis une intervention rapide et efficace. Je
          propose des solutions adaptées pour tous vos besoins électriques :
          pannes de courant, remplacements de tableaux électriques, ajout de
          prises ou encore installation d’éclairage
        </p>
      </Section>

      <Section
        idPage="depannage"
        name="plomb"
        image={{
          alt: "photo d'une personne réparant un aspirateur",
          position: "right",
          src: "/images/shutterstock.jpg",
        }}
        title="Dépannage en Plomberie"
      >
        <p className="mb-4">
          Une fuite d&apos;eau ? Une canalisation bouchée ? Ne laissez pas ces
          problèmes perturber votre quotidien. Je suis équipé pour intervenir
          rapidement et assurer des réparations durables. De la réparation
          d’urgence à l’installation complète de votre plomberie, je propose des
          solutions adaptées et durables pour régler vos soucis de plomberie,
          qu’ils soient petits ou complexes.
        </p>
      </Section>
    </>
  );
}
