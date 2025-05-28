import { Metadata } from "next";
import Image from "next/image";

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
              Expert renov depan
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
              Conseil
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
