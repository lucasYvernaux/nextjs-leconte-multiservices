import SectionBesoin from "@/components/sectionBesoin";
import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.DepannageParis;

export default function RepaFrigo() {
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
                Réparation Réfrigérateur Paris
              </span>
            </div>
          </nav>

          <h1 className="text-5xl font-bold  fadein-left">
            Frigoriste à Paris | Réparation Réfrigérateur & Congélateur
          </h1>
          <p className="content-text fadein-left text-2xl">
            Expert du froid depuis 34 ans - Intervention urgente sous 24h
          </p>
          <div className="content-btn fadein-left flex gap-4">
            <div className="btn-avis inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow bg-leconte-primary text-base py-2 px-4">
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
                className="lucide lucide-star w-4 h-4 mr-2"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <span>Frigoriste certifié</span>
            </div>{" "}
            <div className="btn-avis inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow bg-leconte-primary text-base py-2 px-4">
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
                className="lucide lucide-clock w-4 h-4 mr-2"
              >
                <circle cx={12} cy={12} r={10} />
                <polyline points="12 6 12 12 16 14" />
              </svg>

              <span>Toutes marques</span>
            </div>
          </div>
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
            Appel d'urgence : 06 40 14 19 37
          </Link>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="flex gap-4 items-center p-4 mb-8 rounded-lg border border-red-500 bg-red-50">
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
            className="lucide lucide-triangle-alert h-5 w-5 text-red-600"
          >
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
          </svg>
          <p className="text-sm text-red-800">
            <b>Panne de frigo = Urgence !</b> J'interviens en priorité pour
            éviter que vos aliments ne se gâtent. Contactez-moi immédiatement
            pour une intervention le jour même si possible.
          </p>
        </section>

        <section>
          <div className="bg-linear-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12 border-2 border-leconte-primary">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-cyan-600 p-3 rounded-full">
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
                  className="lucide lucide-award w-8 h-8 text-white"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                  <circle cx={12} cy={8} r={6} />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Frigoriste professionnel à Paris
                </h2>
                <p className="text-leconte-gray font-semibold text-lg">
                  Expert en réfrigération et climatisation depuis plus de 34 ans
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              En tant que <strong>frigoriste qualifié</strong>, je possède une
              expertise approfondie des systèmes de réfrigération domestiques et
              commerciaux. Ma formation spécialisée me permet d'intervenir sur
              tous types de réfrigérateurs et congélateurs :{" "}
              <strong>réparation de circuits frigorifiques</strong>,
              <strong>recharge en gaz réfrigérant</strong>, remplacement de
              compresseurs, thermostat, condenseur...
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fort de 34 ans d'expérience chez Darty, je maîtrise toutes les
              marques et tous les modèles. Mon expertise de frigoriste me permet
              de <strong>diagnostiquer précisément</strong> l'origine de la
              panne et d'intervenir rapidement pour éviter que vos aliments ne
              se gâtent.
            </p>
          </div>
        </section>

        <section>
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interventions frigoriste à Paris
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Votre <strong>réfrigérateur ne refroidit plus</strong> ? Votre{" "}
              <strong>congélateur est en panne</strong> ? Je comprends l'urgence
              de la situation et interviens en priorité à Paris et en
              Île-de-France.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En tant que <strong>frigoriste expert</strong>, j'identifie
              rapidement la cause : thermostat défectueux, compresseur HS, fuite
              de gaz réfrigérant, problème de circuit frigorifique, carte
              électronique... Je répare votre appareil sur place dans la
              majorité des cas avec des pièces de qualité.
            </p>
          </div>
        </section>
        <section>
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="group rounded-xl bg-card text-card-foreground shadow border-2 border-leconte-primary hover:border-leconte-secondary transition-all">
              <div className="p-6 text-center">
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
                  className="lucide lucide-snowflake w-12 h-12 text-leconte-primary group-hover:text-leconte-secondary mx-auto mb-4"
                >
                  <path d="m10 20-1.25-2.5L6 18" />
                  <path d="M10 4 8.75 6.5 6 6" />
                  <path d="m14 20 1.25-2.5L18 18" />
                  <path d="m14 4 1.25 2.5L18 6" />
                  <path d="m17 21-3-6h-4" />
                  <path d="m17 3-3 6 1.5 3" />
                  <path d="M2 12h6.5L10 9" />
                  <path d="m20 10-1.5 2 1.5 2" />
                  <path d="M22 12h-6.5L14 15" />
                  <path d="m4 10 1.5 2L4 14" />
                  <path d="m7 21 3-6-1.5-3" />
                  <path d="m7 3 3 6h4" />
                </svg>
                <h3 className="font-bold text-lg mb-2">Ne refroidit plus</h3>
                <p className="text-gray-600 text-sm">
                  Problème de thermostat, compresseur ou gaz réfrigérant
                </p>
              </div>
            </div>
            <div className="group rounded-xl bg-card text-card-foreground shadow border-2 border-leconte-primary hover:border-leconte-secondary transition-all">
              <div className="p-6 text-center">
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
                  className="lucide lucide-triangle-alert w-12 h-12 text-leconte-primary group-hover:text-leconte-secondary mx-auto mb-4"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
                <h3 className="font-bold text-lg mb-2">Fuite d'eau</h3>
                <p className="text-gray-600 text-sm">
                  Bac d'évaporation, joint de porte ou système de dégivrage
                </p>
              </div>
            </div>
            <div className="group rounded-xl bg-card text-card-foreground shadow border-2 border-leconte-primary hover:border-leconte-secondary transition-all">
              <div className="p-6 text-center">
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
                  className="lucide lucide-snowflake w-12 h-12 text-leconte-primary group-hover:text-leconte-secondary mx-auto mb-4"
                >
                  <path d="m10 20-1.25-2.5L6 18" />
                  <path d="M10 4 8.75 6.5 6 6" />
                  <path d="m14 20 1.25-2.5L18 18" />
                  <path d="m14 4 1.25 2.5L18 6" />
                  <path d="m17 21-3-6h-4" />
                  <path d="m17 3-3 6 1.5 3" />
                  <path d="M2 12h6.5L10 9" />
                  <path d="m20 10-1.5 2 1.5 2" />
                  <path d="M22 12h-6.5L14 15" />
                  <path d="m4 10 1.5 2L4 14" />
                  <path d="m7 21 3-6-1.5-3" />
                  <path d="m7 3 3 6h4" />
                </svg>
                <h3 className="font-bold text-lg mb-2">Givre excessif</h3>
                <p className="text-gray-600 text-sm">
                  Dégivrage automatique défaillant ou joint abîmé
                </p>
              </div>
            </div>
          </div>
        </section>
        <SectionBesoin />
      </div>
    </main>
  );
}
