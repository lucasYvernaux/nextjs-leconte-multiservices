import { Metadata } from "next";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Section } from "@/components/section";
import Link from "next/link";

import urlImageElectro from "../../../public/images/Lelectromenager-poursuit-sa-croissance-dans-plusieurs-categories-selon-GFK-pointsdevente.jpg";
import urlImageElec from "../../../public/images/Electricité.jpeg";
import urlImagePlomb from "../../../public/images/shutterstock.jpg";
import { MetadataPage } from "@/lib/utils";

export const metadata: Metadata = MetadataPage.Depannage;

export default function DepannagePage() {
  return (
    <>
      <section className="section-services flex bg-linear-to-r from-leconte-primary to-leconte-secondary p-12 md:p-0 md:h-screen">
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
              Contactez-moi
            </Link>
          </div>
          <div className="content-card flex flex-col gap-4 md:flex-row md:px-12">
            <Link
              href={"/depannage/depannage-electromenager-paris"}
              className="flex-1"
            >
              <Card className="bg-leconte-primary/90 p-6  rounded-xl text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-black cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-center capitalize text-[28px] font-medium">
                    électroménager
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-2xl md:h-20">
                  Optez pour une réparation professionnelle, économique et
                  écologique.
                </CardContent>
                <CardFooter className="items-center justify-center mt-4 text-xl font-bold">
                  En savoir plus &rarr;
                </CardFooter>
              </Card>
            </Link>
            <Link
              href={"/depannage/depannage-electricite-paris"}
              className="flex-1"
            >
              <Card className="bg-leconte-primary/90 p-6 rounded-xl text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-black cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-center capitalize text-[28px] font-medium">
                    électricité
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-2xl md:h-20">
                  Services d&apos;électricité pour vos besoins domestiques
                  urgents.
                </CardContent>
                <CardFooter className="items-center justify-center mt-4 text-xl font-bold">
                  En savoir plus &rarr;
                </CardFooter>
              </Card>
            </Link>
            <Link
              href={"/depannage/depannage-plomberie-paris"}
              className="flex-1"
            >
              <Card className="bg-leconte-primary/90 p-6 rounded-xl text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-black cursor-pointer h-full">
                <CardHeader className="p-0">
                  <CardTitle className="text-center capitalize text-[28px] font-medium">
                    plomberie
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-2xl md:h-20">
                  Interventions rapides pour tous vos problèmes de plomberie.
                </CardContent>
                <CardFooter className="items-center justify-center mt-4 text-xl font-bold">
                  En savoir plus &rarr;
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Section
        idPage="depannage"
        name="electro"
        image={{
          alt: "photo de quelques petit électroménager dans une cuisine",
          position: "right",
          url: urlImageElectro,
        }}
        title="Dépannage en Électroménager"
      >
        <p className="mb-4">
          Votre appareil électroménager est tombé en panne ? Ne le jetez pas, il
          suffit parfois de remplacer une pièce pour qu&apos;il continue à vivre
          plus longtemps. Vous pouvez faire confiance à mon expertise, avec mes
          34 ans d&apos;expérience chez Darty. Et mon partenariat avec{" "}
          <Link
            href={"https://www.proxiconfort.fr"}
            className="underline"
            target="_blank"
          >
            Proxiconfort.fr
          </Link>{" "}
          pour la vente d&apos;électroménager avec leur catalogue complet.
        </p>
      </Section>

      <Section
        idPage="depannage"
        name="elec"
        image={{
          alt: "photo d&apos;une personne réparant un aspirateur",
          position: "left",
          url: urlImageElec,
        }}
        title="Dépannage en Électricité"
      >
        <p className="mb-4">
          Votre sécurité est ma priorité. Je propose des solutions adaptées pour
          tous vos besoins électriques : pannes de courant, remplacements de
          tableaux électriques, ajout de prises ou encore installation
          d&apos;éclairage. Je vous garantis une intervention rapide et
          efficace. Notamment la vente, l&apos;installation et le dépannage de
          chauffe-eau électrique toutes marques.
        </p>
      </Section>

      <Section
        idPage="depannage"
        name="plomb"
        image={{
          alt: "photo d'une personne réparant un aspirateur",
          position: "right",
          url: urlImagePlomb,
        }}
        title="Dépannage en Plomberie"
      >
        <p className="mb-4">
          Une fuite d&apos;eau ? Une canalisation bouchée ? Ne laissez pas ces
          problèmes perturber votre quotidien. Je suis équipé pour intervenir
          rapidement et assurer des réparations durables. De la réparation
          d’urgence à l’installation complète de votre plomberie, je propose des
          solutions adaptées et durables pour régler vos soucis de plomberie,
          qu’ils soient petits ou complexes. Par exemple, changement de
          robineterie, de sanitaire et de chauffe-eau électrique.
        </p>
      </Section>
    </>
  );
}
