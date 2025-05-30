import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leconte Multiservices - A Propos",
  description:
    "Chez Leconte Multiservices, nous gérons vos projets de manière assidu et efficace.",
};

export default function page() {
  return (
    <>
      <section className="section-about flex flex-col p-12">
        <div className="content flex gap-[4rem] flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl my-[3rem] font-bold text-leconte-primary">
              Notre histoire
            </h2>
            <p className="mb-[1rem]">
              Depuis 1976, la plomberie est un lien familial fort. Chez Leconte
              Multiservices, nous gérons vos projets de manière assidu et
              efficace. Nous pouvons répondre à tous les besoins de votre
              projet, peu importe ça taille. Nous vous proposons un choix et des
              solutions fonctionnelles, afin de répondre à vos besoins et le
              tout avec un prix raisonnable.
            </p>
          </div>
          <div className="content-image flex-1">
            <Image
              className="fluid rounded-full"
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
          <div className="content-text text-start text-2xl flex flex-col gap-12 fade-in flex-1">
            <h2 className="text-4xl font-bold text-leconte-primary">
              Des conseils de qualité
            </h2>
            <p>
              Nous sommes fiers de satisfaire les besoins de nos clients. Nous
              pouvons également vous recommander des solutions alternatives
              moins coûteuses et plus rapides à mettre en œuvre, sans
              compromettre la qualité de vos projets et investissements.
            </p>
            <div className="content-btn flex justify-center w-full">
              <Link
                className="text-2xl rounded-full px-8 py-2 bg-leconte-primary"
                type="button"
                rel=""
                href="/contact"
                data-page-id="About"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
