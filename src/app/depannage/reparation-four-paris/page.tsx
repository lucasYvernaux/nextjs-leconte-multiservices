import SectionBesoin from "@/components/sectionBesoin";
import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.DepannageParis;

export default function RepaFour() {
  return (
    <main className="bg-[#FAFAFA]">
      <section className="flex bg-linear-to-r from-cyan-600 to-leconte-primary text-white py-16 px-6">
        <div className="content flex flex-col gap-8 items-start justify-start max-w-6xl mx-auto">
          <nav className="flex flex-col md:flex-row items-start gap-2 text-smtext-gray-600 mb-6">
            <a className="hover:text-black flex items-center gap-1" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
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
              <span className="text-gray-900 font-medium">Réparation Four</span>
            </div>
          </nav>

          <h1 className="text-5xl font-bold  fadein-left">
            Réparation Four et Cuisinière à Paris
          </h1>
          <p className="content-text fadein-left text-2xl">
            Dépannage four électrique, gaz et micro-ondes
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
              Spécialiste de la reparation de four à Paris
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                Votre <b>four ne chauffe plus</b> ? La <b>porte est cassée</b> ?
                Le thermostat est défaillant ? Je répare tous types de fours à
                Paris : <b>four électrique</b>, <b>four à gaz</b>,{" "}
                <b>four combiné</b> et <b>micro-ondes</b>
              </p>
              <p>
                Je répare également tous type de cuisinière : <b>électrique</b>,{" "}
                <b>gaz</b>, <b>induction</b>, <b>halogène</b>.
              </p>
              <p>
                Les pannes courantes que je traite : résistance grillée,
                thermostat HS, joint de porte usé, ventilateur de chaleur
                tournante en panne, problème de pyrolyse, porte qui ne ferme
                plus...
              </p>
            </div>
          </div>
        </section>

        <SectionBesoin />
      </div>
    </main>
  );
}
