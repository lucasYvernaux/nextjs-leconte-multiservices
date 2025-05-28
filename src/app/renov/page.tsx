import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leconte Multiservices - Rénov",
  description:
    "Chez Leconte Multiservices, vous avez comme projet de rénover.Rénovation appartement maison intérieur extéireur dans toutes l'ile de france y compris Paris",
};

export default function page() {
  return (
    <>
      <section className="section-rennov flex flex-col p-12">
        <div className="content flex flex-col gap-12">
          <div className="content-text text-2xl">
            <h1 className="text-4xl text-center mb-12 font-bold text-leconte-primary">
              Renev int et ext
            </h1>

            <p className="mb-4">
              La rénovation qu’elles soit intérieure ou extérieure, est une
              opportunité de mettre en valeur votre chez vous. Elle doit faire
              le lien entre la modernité et son authenticité. Tout cela doit
              être articulé de manière intelligente et réfléchis. Nous avons
              pour mission d'embellir votre chez vous tout en s'adapdant à votre
              budget. Nous avons la même motivation pour toutes les rénovations
              qu’elles soient de petite ou grande envergure. Nous avons une
              équipe spécialiste tous corps de métiers. Vous aurez l’assurance
              d’un accompagnement et d’une expertise efficace tout au long de
              votre projet et le tout sans passer par des dizaines
              d'interlocuteurs.
            </p>

            <Link
              className="text-2xl block w-fit mx-auto mt-12 rounded-full px-12 py-2 bg-leconte-primary"
              type="button"
              rel=""
              href="tel:0640141937"
              data-page-id="Home"
            >
              Devis
            </Link>
          </div>
          <div className="content-img m-auto">
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
      <section className="section-about flex flex-col p-12">
        <div className="content flex gap-[4rem] flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary">
              renov apparte paris
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
      <section className="section-about-renov flex flex-col p-12">
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
              renov salle de bain
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

      <section className="section-about-tips flex flex-col p-12">
        <div className="content flex gap-[4rem] flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary">
              renov cuisine
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
    </>
  );
}
