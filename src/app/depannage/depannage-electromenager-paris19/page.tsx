import SectionArrandissement from "@/components/section-arrondissement";
import SectionTypeAppareil from "@/components/section-type-appareil";
import SectionBesoin from "@/components/sectionBesoin";
import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.DepannageElectroParis19;

export default function DepanElectroParis() {
  const listQuartier = [
    "Vilette",
    "buttes-chaumont",
    "Pont-de-Flandre",
    "Amerique",
    "Parc de la Vilette",
    "Belleville",
    "Jourdain",
  ];
  return (
    <>
      <section className="section-depan-electro flex text-white bg-linear-to-b sm:bg-linear-to-r to-leconte-primary from-[#2a9dd6] py-16 px-6 h-full">
        <div className="content space-y-6 w-full sm:max-w-6xl sm:mx-auto">
          <nav className="flex flex-col md:flex-row items-start gap-2 text-smtext-leconte-gray">
            <Link
              className="hover:text-black flex items-center gap-1"
              href="/depannage"
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
                className="lucide lucide-house w-4 h-4"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Accueil
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href={"/depannage/depannage-electromenager-paris"}
                className="hover:text-black flex items-center gap-1"
              >
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
                Dépannage Électroménager
              </Link>
            </div>
            <div className="flex items-center gap-2">
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
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span className="text-gray-900 font-medium">Paris 19</span>
            </div>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold capitalize fadein-left">
            Dépannage Électroménager Paris 19
          </h1>
          <p className="content-text fadein-left text-2xl mb-6">
            Intervention rapide dans tous le 19ème arrondissement
          </p>
          <div className="content-btn fadein-left flex flex-wrap gap-4 text-leconte-primary">
            <div className="btn-avis inline-flex gap-2 items-center rounded-md font-semibold transition-colors shadow cursor-default bg-white text-base py-2 px-4">
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
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <span>5/5 avis sur Google (50 avis)</span>
            </div>{" "}
            <div className="btn-avis inline-flex gap-2 items-center rounded-md font-semibold transition-colors shadow cursor-default bg-white text-base py-2 px-4">
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
                <circle cx={12} cy={12} r={10} />
                <polyline points="12 6 12 12 16 14" />
              </svg>

              <span>Intervention rapide</span>
            </div>{" "}
            <div className="btn-avis inline-flex gap-2 items-center rounded-md font-semibold transition-colors shadow cursor-default bg-white text-base py-2 px-4">
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
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>

              <span>34 ans d'expérience</span>
            </div>
          </div>
          <Link
            className="inline-flex gap-2 items-center rounded-md font-bold transition-colors shadow text-leconte-primary hover:bg-primary/80 bg-white text-xl py-4 px-8"
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
        <section className="max-w-none">
          <h2 className="text-3xl font-bold  mb-6">
            Votre dépanneur électroménager dans le 19ème arrondissement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            J'interviens régulièrement dans le <b>19ème arrondissement</b> pour
            tous vos <b>dépannage d'électroménager</b>. Que vous soyze situé à
            la Villette, aux Buttes-Chaumont ou près du Pont-de-Flandre, je me
            déplace rapidement chez vous.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Mon objectif : <b>réparer plutôt que remplacer</b>. Dans 80% des
            cas, un simple remplacement de pièce permet de prolonger la durée de
            vie de votre appareil et vous fait économiser des centaines d'euros.
          </p>
        </section>

        <SectionTypeAppareil title="Appareils réparés dans le Paris 19" />

        <SectionArrandissement num={19} listQuartier={listQuartier} />

        <section>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="flex-1 rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-all hover:shadow-lg">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-clock w-8 h-8 text-leconte-primary"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Proximité</h3>
                <p className="text-gray-600 text-sm">
                  Intervention rapide dans tout le 19éme
                </p>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-all hover:shadow-lg">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-circle-check-big w-8 h-8 text-leconte-primary"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Toutes marques</h3>
                <p className="text-gray-600 text-sm">
                  Réparation de tous les appareils
                </p>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-all hover:shadow-lg">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-award w-8 h-8 text-leconte-primary"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx={12} cy={8} r={6} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">34 ans d'expérience</h3>
                <p className="text-gray-600 text-sm">
                  Ancien technicien Darty, expertise reconnue
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionBesoin />
      </div>
    </>
  );
}
