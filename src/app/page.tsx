import { AvisGoogle } from "@/components/avisGoogle";
import { Map } from "@/components/Map";
import { Section } from "@/components/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section-home md:shrink bg-no-repeat relative text-white flex h-screen p-8 md:p-4">
        <div className="content flex flex-col gap-16 z-2 items-center justify-center max-w-full w-full">
          <h1 className="text-4xl text-center mx-auto font-bold uppercase fadein-left">
            Rénovation et Dépannage à Paris et dans toute l&apos;Île de France
          </h1>
          <p className="fadein-left text-3xl md:w-3/4">
            De la rénovation complète aux urgences, nos artisans qualifiés
            interviennent rapidement pour tous vos projets.
          </p>
          <div className="fadein-left">
            <Link
              className="text-2xl text-white rounded-full px-12 py-2 bg-leconte-primary"
              type="button"
              rel=""
              href="tel:0640141937"
              data-page-id="Home"
            >
              Appelez-moi
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

          <div className="content-card flex gap-6 text-lg md:text-xl md:w-3/4 flex-col md:flex-row">
            <Card className="bg-leconte-secondary rounded-none text-start gap-0 p-0 flex-1">
              <CardContent className="md:h-1/2 gap-0 py-4">
                <CardTitle className="font-bold mb-4 ">
                  Dépannage Électroménager
                </CardTitle>
                <p className="text-justify md:pb-8 md:leading-9">
                  Qu’il s’agisse de votre machine à laver, de votre
                  lave-vaisselle, de votre frigo en passant par votre
                  congélateur ou même votre four à micro-ondes, nous savons que
                  la moindre panne est capable de bouleverser votre quotidien.
                  Intervention urgente pour dépannage électroménager à Paris et
                  en Île-de-France. Techniciens qualifiés, réparation express à
                  domicile. 36 ans d&apos;expertise, chez Darty, au services de
                  particuliers et de professionnel
                </p>
              </CardContent>
              <CardDescription className="md:h-1/2">
                <Image
                  className="h-full"
                  src="/images/reparation-aspirateur-electromenager.webp"
                  alt="photo d'un homme réparant un aspirateur"
                  width={1920}
                  height={1080}
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
                  className="h-full"
                  src="/images/travaux.jpg"
                  alt="photo d'un appartement en travaux"
                  width={1920}
                  height={1080}
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
      <Section
        idPage="home"
        name="electromenager"
        title="votre expert en dépannage electroménager"
        image={{
          alt: "photo d&apos;un homme réparant un aspirateur",
          position: "right",
          src: "/images/reparation-aspirateur-electromenager.webp",
        }}
      >
        <p className="">
          Votre appareil électroménager est tombé en panne ? Ne le jetez pas, il
          suffit parfois de remplacer une pièce pour qu&apos;il continue à vivre
          très longtemps. Vous pouvez faire confiance à mon expertise, avec mes
          36 ans d&apos;expérience chez Darty.
        </p>
      </Section>

      <section className=" flex items-center p-8 md:h-screen">
        <AvisGoogle />
      </section>
      <Map idPage="home" />
    </>
  );
}
