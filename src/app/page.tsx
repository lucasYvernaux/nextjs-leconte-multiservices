import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section-home flex bg-linear-to-r from-leconte-primary to-leconte-secondary h-screen p-[3rem] md:p-0">
        <div className="content flex flex-col gap-[4rem] items-center justify-center max-w-full w-full">
          <h1 className="text-4xl mx-auto font-bold uppercase fadein-left">
            Dépannage à Paris et dans toute l&apos;Ile de France
          </h1>
          <p className="fadein-left text-3xl">
            Dépannage d&apos;urgence, réparation, installation ou maintenance.
          </p>
          <div className="fadein-left">
            <Link
              className="text-2xl rounded-full px-[3rem] py-[0.5rem] bg-leconte-primary"
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

      <section className="section-home-services flex p-[3rem] md:p-0">
        <div className="content flex flex-col gap-[2rem] items-center justify-center max-w-full w-full">
          <h2 className="text-4xl font-bold text-leconte-primary mt-[3rem]">
            Services de dépannage
          </h2>
          <p className="text-2xl md:mb-[2rem]">
            Dépannage électroménager, électricité, plomberie, installation,
            maintenance.
          </p>

          <div className="content-card flex gap-[3rem] md:w-3/4 flex-col md:flex-row">
            <Card className="fs-5 bg-leconte-secondary rounded-none text-start p-0 flex-1">
              <CardHeader className="flex-1">
                <CardTitle className="pt-5 font-bold mb-3">
                  Dépannage Général
                </CardTitle>
                <CardContent className="p-0">
                  Nous intervenons rapidement dans toute l&apos;Île-de-France
                  pour toutes types de réparation. Que ce soit de
                  l&apos;électroménager, de l&apos;électricité ou de la
                  plomberie.
                </CardContent>
              </CardHeader>

              <CardDescription className="flex-1">
                <Image
                  className="fluid"
                  src="https://www.darty.com/darty-et-vous/sites/default/files/2022-10/une-reparSEB-494x326.jpg"
                  alt="photo d'une personne réparant un aspirateur"
                  width={300}
                  height={200}
                />
              </CardDescription>
            </Card>
            <Card className="fs-5 bg-leconte-secondary rounded-none text-start p-0 flex-1">
              <CardHeader className="flex-1">
                <CardTitle className="pt-5 font-bold mb-3">
                  Rénovation Complète
                </CardTitle>
                <CardContent className="p-0">
                  Rénovation appartement ou maison que vous soyez particulier ou
                  professionnel. Nous vous accompagnons du début à la fin de
                  votre projet et le tout avec un seul et unique interlocuteur.
                </CardContent>
              </CardHeader>
              <CardDescription>
                <Image
                  className="fluid h-50"
                  src="https://www.darty.com/darty-et-vous/sites/default/files/2022-10/une-reparSEB-494x326.jpg"
                  alt="photo d'une personne réparant un aspirateur"
                  width={300}
                  height={200}
                />
              </CardDescription>
            </Card>
          </div>

          <Link
            className="text-xl rounded-full px-[3rem] py-[0.5rem] bg-leconte-primary"
            style={{ width: "fit-content" }}
            href="/services"
          >
            Voir tous les services
          </Link>
        </div>
      </section>

      <section className="section-home-electro flex flex-col p-[3rem]">
        <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary text-center">
          Votre expert en dépannage électroménager
        </h2>
        <div className="content flex  gap-[4rem] flex-col md:mx-[4rem] md:flex-row">
          <div className="content-text text-start text-2xl fade-in flex-1">
            <p className="mb-[1rem]">
              Votre appareil électroménager est tombé en panne ? Ne le jetez
              pas, il suffit parfois de remplacer une pièce pour qu’il continue
              à vivre très longtemps. Vous pouvez faire confiance à mon
              expertise, avec mes 36 ans d&apos;expérience chez Darty.
            </p>
            <div className="content-footer flex gap-[3rem]">
              <div>
                <h3 className="text-3xl">150+</h3>
                <p className="text-base">Partenaire Proxiconfort</p>
              </div>
              <div>
                <h3 className="text-3xl">36 ans</h3>
                <p className="text-base">Expérience et fiabilité</p>
              </div>
            </div>
          </div>
          <div className="content-image flex-1">
            <Image
              className="fluid"
              src="https://www.darty.com/darty-et-vous/sites/default/files/2022-10/une-reparSEB-494x326.jpg"
              alt="photo d'une personne réparant un aspirateur"
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>
    </>
  );
}
