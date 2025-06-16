import { Section } from "@/components/section";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leconte Multiservices - Expert Rénovation à Paris & Île-de-France",
  description:
    "Entreprise spécialisée en rénovation à Paris et en Île-de-France. De la rénovation complète à la rénovation d'appartement, nos experts vous accompagnent pour tous vos projets.",
  openGraph: {
    title: "Leconte Multiservices - Expert Rénovation à Paris & Île-de-France",
    description:
      "Entreprise spécialisée en rénovation à Paris et en Île-de-France. De la rénovation complète à la rénovation d'appartement, nos experts vous accompagnent pour tous vos projets.",
    url: "https://nextjs-leconte-multiservices.vercel.app/renovation",
  },
};

export default function page() {
  return (
    <main className="relative">
      <section className="section-renov flex flex-col min-h-screen p-12 md:w-3/4 m-auto">
        <div className="content flex flex-col gap-12">
          <div className="content-text text-2xl">
            <h1 className="text-4xl text-center mb-12 font-bold text-leconte-primary">
              Rénovation Intérieure et Extérieure
            </h1>

            <p className="leading-10 mb-4">
              La rénovation qu&apos;elles soit intérieure ou extérieure, est une
              opportunité de mettre en valeur votre chez vous. Elle doit faire
              le lien entre la modernité et son authenticité. Tout cela doit
              être articulé de manière intelligente et réfléchis. Nous avons
              pour mission d&apos;embellir votre chez vous tout en
              s&apos;adapdant à votre budget. Nous avons la même motivation pour
              toutes les rénovations qu&apos;elles soient de petite ou grande
              envergure. Nous avons une équipe spécialiste tous corps de
              métiers. Vous aurez l&apos;assurance d&apos;un accompagnement et
              d&apos;une expertise efficace tout au long de votre projet et le
              tout sans passer par des dizaines d&apos;interlocuteurs.
            </p>

            <Link
              className="text-2xl block w-fit mx-auto mt-12 rounded-full px-8 py-2 bg-leconte-primary"
              rel=""
              href="/contact"
              data-page-id="Renov"
            >
              Demandez un devis
            </Link>
          </div>
          <div className="content-img">
            <Image
              className="rounded-4xl"
              src="/images/services-travaux.jpg"
              alt="photo d'un appartement en travaux"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      <section className="section-renov-apparte flex flex-col p-12">
        <div className="content flex gap-16 flex-col md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl mb-12 md:my-12 font-bold text-leconte-primary">
              Rénovation appartement à Paris
            </h2>
            <p className="leading-10">
              Vous avez un petit espace ou un appartement plus grand ? Rénover
              votre appartement, c&apos;est souvent repenser l&apos;organisation
              des espaces, planter un nouveau décor, mais aussi remettre les
              installations aux normes. Vous ne savez pas par où commencer ?
              L&apos;entreprise Leconte Multiservices vous propose de prendre en
              main les travaux de rénovation de votre appartement avec des
              solutions adaptées à vos besoins et votre budget.
            </p>
          </div>
          <div className="content-image flex flex-1 items-center">
            <Image
              className="rounded-4xl w-full"
              src="/images/video-serge-renov-comble-ezgif.com-video-to-webp-converter.webp"
              alt="gif d'un appartement sous les combles travaux fini"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>
      <section className="section-renov-sdb flex flex-col p-12">
        <div className="content flex gap-16 flex-col md:flex-row">
          <div className="content-image flex flex-1 items-center justify-center">
            <Image
              className="rounded-4xl max-w-[30rem]"
              src="/images/WhatsAppVido2025-04-24_fb825763-ezgif.com-5fps-0.5speed-after.gif"
              alt="gif d'une salle de bain apres travaux"
              width={1920}
              height={1080}
            />
          </div>
          <div className="content-text  text-start text-2xl fade-in flex-1">
            <h2 className="text-4xl mb-12 md:my-12 font-bold text-leconte-primary">
              Rénovation salle de bain
            </h2>
            <p className="leading-10">
              Votre salle de bain est vieillissante ou plus du tout adaptée à
              vos besoins ? Vous souhaitez la rendre plus moderne ou plus
              fonctionnelle ? De l&apos;installation de plomberie au
              remplacement du carrelage, en passant par les finitions haut de
              gamme, notre équipe d&apos;artisans tout corps de métier qualifiés
              assure un travail soigné et conforme aux normes actuelles. Nous
              vous proposons des solutions adaptées comme l&apos;installation de
              douche à l&apos;italienne, de baignoire, de toilette, de bidet ou
              de meuble ergonomique parfaitement adapté à votre salle de bain.
            </p>
          </div>
        </div>
      </section>
      {/* 
      <section className="section-renov-cuisine max-h-screen flex flex-col px-12">
        <div className="content flex gap-16 flex-col h-fit md:flex-row">
          <div className="content-text  text-start text-2xl fade-in flex-1 h-fit">
            <h2 className="text-4xl mb-12 md:my-12 font-bold text-leconte-primary">
              Rénovation cuisine à Paris
            </h2>
            <p>
              Que vous souhaitiez rénover votre cuisine ou la créer, nous vous
              proposons des solutions adaptées. Allant du simple montage de
              meubles de cuisine en kit à la réalisation d&apos;une cuisine sur
              mesure avec raccordement à la plomberie, électricité et gaz. Le
              tout toujours avec le respect de votre budget, de vos délais et de
              l&apos;environnement. Et nous vous accompagnons du début à la fin
              de votre projet, à chaque étape du processus. De la prise de
              mesure à la mise en service de l&apos;électroménager.
            </p>
          </div>
          <div className="content-image flex flex-1 items-center h-fit">
            <Image
              className="rounded-4xl h-fit"
              src="/images/video-cuisine-avant-apres.gif"
              alt="gif d'une cuisine rénové avant / après"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section> */}
      <Section
        idPage="renovation"
        name="cuisine"
        image={{
          alt: "gif d'une cuisine rénové avant / après",
          position: "right",
          src: "/images/video-cuisine-avant-apres.gif",
          top: true,
        }}
        title="Rénovation cuisine à Paris"
      >
        <p>
          Que vous souhaitiez rénover votre cuisine ou la créer, nous vous
          proposons des solutions adaptées. Allant du simple montage de meubles
          de cuisine en kit à la réalisation d&apos;une cuisine sur mesure avec
          raccordement à la plomberie, électricité et gaz. Le tout toujours avec
          le respect de votre budget, de vos délais et de l&apos;environnement.
          Et nous vous accompagnons du début à la fin de votre projet, à chaque
          étape du processus. De la prise de mesure à la mise en service de
          l&apos;électroménager.
        </p>
      </Section>
    </main>
  );
}
