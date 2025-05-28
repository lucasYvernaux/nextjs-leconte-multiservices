import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leconte Multiservices - Dépannage",
  description:
    "Leconte Multiservices, dépannage d'urgence plomberie, électricité, électroménager sur Paris et l'Ile de France",
};

export default function page() {
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
              Appelez-moi
            </Link>
          </div>
          <div className="content-card flex flex-col gap-4 md:flex-row md:px-12">
            <Card className="bg-leconte-secondary rounded-4xl py-12">
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
            <Card className="bg-leconte-secondary rounded-4xl py-12">
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
            <Card className="bg-leconte-secondary rounded-4xl py-12">
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
          </div>
        </div>
      </section>

      <section className="section-services-electro flex flex-col p-12">
        <div className="content flex gap-[4rem] flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary">
              Dépannage électroménager
            </h2>
            <p className="mb-[1rem]">
              Votre appareil électroménager est tombé en panne ? Ne le jetez
              pas, il suffit parfois de remplacer une pièce pour qu’il continue
              à vivre très longtemps. Vous pouvez faire confiance à mon
              expertise, avec mes 36 ans d'expérience chez Darty.
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
              className="fluid rounded-xl"
              src="https://www.darty.com/darty-et-vous/sites/default/files/2022-10/une-reparSEB-494x326.jpg"
              alt="photo d'une personne réparant un aspirateur"
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>

      <section className="section-services-elec flex flex-col p-12">
        <div className="content flex gap-[4rem] flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary">
              Dépannage Electricité
            </h2>
            <p className="mb-[1rem]">
              Votre appareil électroménager est tombé en panne ? Ne le jetez
              pas, il suffit parfois de remplacer une pièce pour qu’il continue
              à vivre très longtemps. Vous pouvez faire confiance à mon
              expertise, avec mes 36 ans d'expérience chez Darty.
            </p>
          </div>
          <div className="content-image flex-1">
            <Image
              className="fluid rounded-xl"
              src="https://www.darty.com/darty-et-vous/sites/default/files/2022-10/une-reparSEB-494x326.jpg"
              alt="photo d'une personne réparant un aspirateur"
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>
      <section className="section-services-plomb flex flex-col p-12">
        <div className="content flex gap-[4rem] flex-col md:flex-row">
          <div className="content-image flex-1">
            <Image
              className="fluid rounded-xl"
              src="https://www.darty.com/darty-et-vous/sites/default/files/2022-10/une-reparSEB-494x326.jpg"
              alt="photo d'une personne réparant un aspirateur"
              width={300}
              height={200}
            />
          </div>
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary">
              Dépannage Plomberie
            </h2>
            <p className="mb-[1rem]">
              Votre appareil électroménager est tombé en panne ? Ne le jetez
              pas, il suffit parfois de remplacer une pièce pour qu’il continue
              à vivre très longtemps. Vous pouvez faire confiance à mon
              expertise, avec mes 36 ans d'expérience chez Darty.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
