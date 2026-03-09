import { AvisGoogle } from "@/components/avisGoogle";
import { MapSection } from "@/components/Map";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import Image from "next/image";
import urlImgElectro from "../../public/images/Lelectromenager-poursuit-sa-croissance-dans-plusieurs-categories-selon-GFK-pointsdevente.jpg";
import urlImgTravaux from "../../public/images/travaux.jpg";
import urlImgSerge from "../../public/images/WhatsApp-sergio-reparation-lave-vaisselle.jpg";
import { Metadata } from "next";
import { MetadataPage } from "@/lib/utils";

export const metadata: Metadata = MetadataPage.Depannage;

export default function Home() {
  return (
    <>
      <section className="section-home bg-no-repeat text-white flex py-8 px-4 relative md:min-h-screen md:p-12">
        <div className="content flex flex-col gap-16 z-2 max-w-full w-full">
          <h1 className="text-5xl font-bold uppercase sm:text-center md:text-6xl">
            <p className="hidden sm:block">
              Dépannage Électroménager, électricité et plomberie
            </p>
            <div className="block : sm:hidden">
              Dépannage{" "}
              <ul className="text-3xl mt-4 list-disc list-inside">
                <li>électroménager</li>
                <li>électricité</li>
                <li>plomberie</li>
              </ul>
            </div>
          </h1>
          <h2 className="text-5xl font-bold uppercase md:text-center md:text-6xl">
            Rénovation
            <ul className="text-3xl mt-4 list-disc list-inside md:text-4xl md:list-none">
              <li>Tout corps d'état</li>
            </ul>
          </h2>
          <div className="fadein-left flex justify-center">
            <Link
              className="text-2xl text-white h-13 flex items-center rounded-full px-8 py-2 bg-leconte-primary"
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
              <Card className="bg-white/90 p-6 rounded-xl text-center text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-3 border-leconte-secondary hover:border-leconte-primary cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-5xl">🔧</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-bold ">
                  Électroménager
                </CardContent>
                <CardFooter>
                  <p className="text-center w-full text-leconte-primary text-sm font-medium">
                    En savoir plus &rarr;
                  </p>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href={"/depannage/depannage-electricite-paris"}
              className="flex-1"
            >
              <Card className="bg-white/90 p-6 rounded-xl text-center text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-3 border-leconte-secondary hover:border-leconte-primary cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-5xl">🔌</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-bold ">
                  Électricité
                </CardContent>
                <CardFooter>
                  <p className="text-center w-full text-leconte-primary text-sm font-medium">
                    En savoir plus &rarr;
                  </p>
                </CardFooter>
              </Card>
            </Link>
            <Link
              href={"/depannage/depannage-plomberie-paris"}
              className="flex-1"
            >
              <Card className="bg-white/90 p-6 rounded-xl text-center text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-3 border-leconte-secondary hover:border-leconte-primary cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-5xl">💦</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-bold ">
                  Plomberie
                </CardContent>
                <CardFooter>
                  <p className="text-center w-full text-leconte-primary text-sm font-medium">
                    En savoir plus &rarr;
                  </p>
                </CardFooter>
              </Card>
            </Link>
            <Link href={"/renovation"} className="flex-1">
              <Card className="bg-white/90 p-6 rounded-xl text-center text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-3 border-leconte-secondary hover:border-leconte-primary cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-5xl">🏚️</CardTitle>
                </CardHeader>
                <CardContent className="text-lg font-bold ">
                  Rénovation
                </CardContent>
                <CardFooter>
                  <p className="text-center w-full text-leconte-primary text-sm font-medium">
                    En savoir plus &rarr;
                  </p>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-home-services flex p-8 md:p-0">
        <div className="content flex flex-col gap-8 items-center justify-center max-w-full w-full">
          <h2 className="text-4xl font-bold text-leconte-primary mt-12">
            Services de dépannage
          </h2>
          <p className="text-2xl md:mb-8">
            Dépannage électroménager, électricité, plomberie, installation,
            maintenance.
          </p>

          <div className="content-card flex gap-6 text-lg md:text-xl md:w-3/4 flex-col lg:flex-row">
            <Card className="bg-leconte-secondary rounded-none text-start gap-0 p-0 flex-1">
              <CardContent className="md:h-1/2 gap-0 py-4">
                <CardTitle className="font-bold mb-4 ">
                  Dépannage Électroménager
                </CardTitle>
                <p className="text-justify md:pb-8 md:leading-9">
                  Qu&apos;il s&apos;agisse de votre machine à laver, de votre
                  lave-vaisselle, de votre frigo en passant par votre
                  congélateur ou même votre four à micro-ondes, nous savons que
                  la moindre panne est capable de bouleverser votre quotidien.
                  Intervention urgente pour dépannage électroménager à Paris et
                  en Île-de-France. Techniciens qualifiés, réparation express à
                  domicile. 34 ans d&apos;expertise, chez Darty, au services de
                  particuliers et de professionnel
                </p>
              </CardContent>
              <CardDescription className="md:h-1/2">
                <Image
                  className="size-full"
                  src={urlImgElectro}
                  alt="photo d'appareils électroménager"
                  title="photo d'appareils électroménager"
                />
              </CardDescription>
            </Card>
            <Card className="bg-leconte-secondary rounded-none text-start gap-0 p-0 flex-1">
              <CardContent className="md:h-1/2 gap-0 py-4">
                <CardTitle className="font-bold mb-4 ">
                  Dépannage Travaux
                </CardTitle>
                <p className="text-justify md:pb-8 md:leading-9">
                  Une fuite d&apos;eau, une coupure intempestive ? Ne laissez
                  pas ces problèmes perturber votre quotidien. On est là pour
                  vous apportez conseil et intervenir rapidement dans tout Paris
                  et toutes l&apos;Île de France. Dans une maisons il y a
                  toujours des travaux à réaliser. Laissez-nous gérer pour vous
                  petits et gros travaux dans le secteur de la maintenance
                  générale ou de la rénovation d&apos;habitat.
                </p>
              </CardContent>
              <CardDescription className="md:h-1/2">
                <Image
                  className="size-full"
                  src={urlImgTravaux}
                  alt="photo d'un appartement en travaux"
                  title="photo d'un appartement en travaux"
                />
              </CardDescription>
            </Card>
          </div>

          <Link
            className="text-xl rounded-full px-8 py-2 bg-leconte-primary w-fit"
            href="/depannage"
          >
            Voir tous les services
          </Link>
        </div>
      </section>

      <section className="section-renov-apparte flex flex-col p-12">
        <div className="content flex gap-16 flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl md:my-4 font-bold text-leconte-primary">
              Votre expert en electroménager
            </h2>
            <h3 className="text-3xl pb-4">
              Vente, livraison, installation et dépannage
            </h3>
            <p className="leading-10">
              Votre appareil électroménager est tombé en panne ? Ne le jetez
              pas, il suffit parfois de remplacer une pièce pour qu&apos;il
              continue à vivre plus longtemps. Vous pouvez faire confiance à mon
              expertise, avec mes 34 ans d&apos;expérience chez Darty. Je vous
              garantis une intervention professionnelle et rapide pour tous vos
              appareils électroménagers. Mon objectif :{" "}
              <b>réparer plutôt que remplacer</b>. Dans 80% des cas, un simple
              remplacement de pièce permet de prolonger la durée de vie de votre
              appareil et vous fait économiser des centaines d'euros.
            </p>
          </div>
          <div className="content-image flex flex-1 items-center">
            <Image
              className="rounded-4xl w-full m-auto"
              src={urlImgSerge}
              alt="photo de Serge Leconte réparant un lave-vaisselle"
              title="photo de Serge Leconte réparant un lave-vaisselle"
            />
          </div>
        </div>
      </section>

      <section id="Avis" className=" flex items-center p-8 md:h-screen">
        <AvisGoogle />
      </section>
      <MapSection idPage="home" />
    </>
  );
}
