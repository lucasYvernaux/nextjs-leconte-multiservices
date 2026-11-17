import SectionReparation from "@/components/section-reparation";
import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.ReparationLaveLingeParis;

export default function RepaLaveLinge() {
  return (
    <main className="bg-gray-50">
      <section className="section-services flex bg-leconte-primary py-16 px-6 h-full">
        <div className="content w-full space-y-4 max-w-6xl mx-auto">
          <nav className="flex flex-col md:flex-row items-start gap-2 text-smtext-gray-600 mb-6">
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
                href="/depannage/depannage-electromenager-paris"
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
                Réparation Lave-Linge Paris
              </span>
            </div>
          </nav>

          <h1 className="text-5xl font-bold  fadein-left">
            Réparation Lave-Linge à Paris
          </h1>
          <p className="content-text fadein-left text-2xl">
            Dépannage rapide de votre machine à laver - Intervention sous 24h
          </p>
          <Link
            className="text-2xl rounded-lg inline-block bg-white px-8 py-4 font-bold text-leconte-gray hover:bg-leconte-gray hover:text-white transition-all shadow-lg"
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
            <b>Votre lave-linge est en panne ?</b> Ne jetez pas votre appareil !
            Dans 85% des cas, une simple réparation suffit.
          </p>
        </section>
        <section className="max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Spécialiste de la réparation de lave-linge à Paris
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Votre <b>lave-linge est tombé en panne à Paris</b> ? En tant que
            <b> réparateur professionnel </b>avec 34 ans d'expérience chez
            Darty, j'interviens rapidement à votre domicile pour diagnostiquer
            et réparer votre <b>machine à laver</b>, quelle que soit la marque.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Fuite d'eau, tambour bloqué, essorage défaillant, code erreur... Je
            maîtrise toutes les pannes courantes et dispose d'un stock de{" "}
            <b>pièces détachées</b> d'origine pour une réparation immédiate dans
            90% des cas.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            Pannes de lave-linge les plus fréquentes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">
                  Machine qui ne démarre plus
                </span>
              </div>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">
                  Tambour bloqué ou qui ne tourne pas
                </span>
              </div>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">
                  Fuite d'eau sous l'appareil
                </span>
              </div>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">
                  Essorage défaillant ou bruyant
                </span>
              </div>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Porte qui ne s'ouvre plus</span>
              </div>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Code erreur sur l'écran</span>
              </div>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Linge qui reste mouillé</span>
              </div>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow border-l-4 border-l-blue-600">
              <div className="p-4 flex items-center gap-3">
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
                  className="lucide lucide-circle-check-big w-5 h-5 text-blue-600 shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-gray-800">Odeurs désagréables</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow my-12">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">
                Toutes marques réparées
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-gray-700 mb-4">
                Je répare les lave-linge de toutes les grandes marques :
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Bosch
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Siemens
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Samsung
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  LG
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Whirlpool
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Miele
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Electrolux
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Candy
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Indesit
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Hotpoint
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Beko
                </span>
              </div>
            </div>
          </div>
        </section>
        <SectionReparation title="Comment se déroule la réparation ?" />

        <section>
          <div className="bg-linear-to-r from-leconte-primary to-leconte-secondary  py-12 px-6 rounded-lg shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un dépannage urgent ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Intervention rapide à Paris et en Île-de-France
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <a href="tel:0640141937">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-10 rounded-md bg-white text-leconte-primary hover:bg-gray-100 text-lg px-8 py-6">
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
                      className="lucide lucide-phone w-5 h-5 mr-2"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    06 40 14 19 37
                  </button>
                </a>
                <a href="mailto:leconte.multiservices.idf@gmail.com">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:text-accent-foreground h-10 rounded-md border-white hover:bg-white/10 text-lg px-8 py-6">
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
                      className="lucide lucide-mail w-5 h-5 mr-2"
                    >
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Demander un devis
                  </button>
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm opacity-90">
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
                  className="lucide lucide-clock w-4 h-4"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Lundi - Samedi : 8h - 20h</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
