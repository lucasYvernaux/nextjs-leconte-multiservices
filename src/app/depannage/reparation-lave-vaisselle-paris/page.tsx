import SectionBesoin from "@/components/sectionBesoin";
import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.DepannageParis;

export default function RepaLaveVaisselle() {
  return (
    <main className="bg-[#FAFAFA]">
      <section className="flex bg-linear-to-r from-cyan-600 to-leconte-primary text-white py-16 px-6 h-screen md:h-full">
        <div className="content flex flex-col gap-8 items-start justify-start max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <a className="hover:text-black flex items-center gap-1" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house w-4 h-4"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Accueil
            </a>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right w-4 h-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <a
                className="hover:text-black"
                href="depannage-electromenager-paris"
              >
                Dépannage Électroménager
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right w-4 h-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span className="text-gray-900 font-medium">
                Réparation Lave-Vaisselle
              </span>
            </div>
          </nav>

          <h1 className="text-5xl font-bold  fadein-left">
            Réparation Lave-Vaisselle à Paris
          </h1>
          <p className="content-text fadein-left text-2xl">
            Dépannage professionnel - Intervention urgente sous 24h
          </p>

          <Link
            className="text-xl rounded-lg inline-block bg-white text-leconte-primary px-8 py-4 font-bold  hover:bg-leconte-gray hover:text-white transition-all shadow-lg"
            type="button"
            rel=""
            href="tel:0640141937"
            data-page-id="Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone inline w-6 h-6 mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            06 40 14 19 37
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section>
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Réparateur lave-vaisselle professionnel à Paris
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Votre <b>lave-vaisselle ne lave plus correctement</b> ? Il
              présente une <b>fuite d'eau</b> ? La porte ne se ferme plus ? Je
              suis spécialisé dnas la{" "}
              <b>réparation de lave-vaisselle à Paris</b> et interviens
              rapidement pour résoudre tous types de pannes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fort de mon expérience chez Darty, je connais parfaitement les
              pannes courantes des lave-vaisselle : pompe de vidange bouchée,
              résistance défectueuse, électrovanne HS, bras de lavage cassé...
              Je dispose des pièces détachées pour réparer votre appareil le
              jour même.
            </p>
          </div>
        </section>

        <SectionBesoin />
      </div>
    </main>
  );
}
