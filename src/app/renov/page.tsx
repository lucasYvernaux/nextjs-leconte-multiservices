import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leconte Multiservices - Rénov",
  description:
    "Chez Leconte Multiservices, vous avez comme projet de rénover.Rénovation appartement maison intérieur extéireur dans toutes l&apos;ile de france y compris Paris",
};

export default function page() {
  return (
    <>
      <section className="section-rennov flex flex-col p-12 w-3/4 m-auto">
        <div className="content flex flex-col gap-12">
          <div className="content-text text-2xl">
            <h1 className="text-4xl text-center mb-12 font-bold text-leconte-primary">
              Rénovation Intérieure et Extérieure
            </h1>

            <p className="mb-4">
              La rénovation qu’elles soit intérieure ou extérieure, est une
              opportunité de mettre en valeur votre chez vous. Elle doit faire
              le lien entre la modernité et son authenticité. Tout cela doit
              être articulé de manière intelligente et réfléchis. Nous avons
              pour mission d&apos;embellir votre chez vous tout en
              s&apos;adapdant à votre budget. Nous avons la même motivation pour
              toutes les rénovations qu’elles soient de petite ou grande
              envergure. Nous avons une équipe spécialiste tous corps de
              métiers. Vous aurez l’assurance d’un accompagnement et d’une
              expertise efficace tout au long de votre projet et le tout sans
              passer par des dizaines d&apos;interlocuteurs.
            </p>

            <Link
              className="text-2xl block w-fit mx-auto mt-12 rounded-full px-8 py-2 bg-leconte-primary"
              type="button"
              rel=""
              href="tel:0640141937"
              data-page-id="Home"
            >
              Demander votre devis
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
              Rénovation appartement à Paris
            </h2>
            <p className="mb-[1rem]">
              Vous avez un petit espace ou un appartement plus grand ? Rénover
              votre appartement, c’est souvent repenser l’organisation des
              espaces, planter un nouveau décor, mais aussi remettre les
              installations aux normes. Vous ne savez pas par où commencer ?
              L’entreprise Leconte Multiservices vous propose de prendre en main
              les travaux de rénovation de votre appartement avec des solutions
              adaptées à vos besoins et votre budget.
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
              Rénovation salle de bain
            </h2>
            <p className="mb-[1rem]">
              Votre salle de bain est vieillissante ou plus du tout adaptée à
              vos besoins ? Vous souhaitez la rendre plus moderne ou plus
              fonctionnelle ? De l'installation de plomberie au remplacement du
              carrelage, en passant par les finitions haut de gamme, notre
              équipe d'artisans tout corps de métier qualifiés assure un travail
              soigné et conforme aux normes actuelles. Nous vous proposons des
              solutions adaptées comme l'installation de douche à l'italienne,
              de baignoire, de toilette, de bidet ou de meuble ergonomique
              parfaitement adapté à votre salle de bain.
            </p>
          </div>
        </div>
      </section>

      <section className="section-about-tips flex flex-col p-12">
        <div className="content flex gap-[4rem] flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary">
              Rénovation cuisine à Paris
            </h2>
            <p className="mb-[1rem]">
              Que vous souhaitiez rénover votre cuisine ou la créer, nous vous
              proposons des solutions adaptées. Allant du simple montage de
              meubles de cuisine en kit à la réalisation d'une cuisine sur
              mesure avec raccordement à la plomberie, électricité et gaz. Le
              tout toujours avec le respect de votre budget, de vos délais et de
              l'environnement. Et nous vous accompagnons du début à la fin de
              votre projet, à chaque étape du processus. De la prise de mesure à
              la mise en service de l'électroménager.
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
