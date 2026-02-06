import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.DepannageParis;

export default function DepanElectroParis() {
  return (
    <>
      <section className="section-services flex bg-leconte-primary py-16 px-6 h-screen md:h-full">
        <div className="content flex flex-col gap-12 items-start justify-start max-w-6xl mx-auto">
          <h1 className="text-4xl mx-auto font-bold uppercase fadein-left">
            Réparation et Dépannage Électroménager à Paris : L'Expertise à votre
            Service
          </h1>
          <p className="content-text fadein-left text-3xl">
            Intervention rapide sous 24h - 34 ans d'expérience chez Darty
          </p>
          <div className="content-btn fadein-left flex gap-4">
            <div className="btn-avis inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 bg-white text-base py-2 px-4">
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
              <span>5/5 avis sur Google (50 avis)</span>
            </div>{" "}
            <div className="btn-avis inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 bg-white text-base py-2 px-4">
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

              <span>Disponible 7j/7</span>
            </div>{" "}
            <div className="btn-avis inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 bg-white text-base py-2 px-4">
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
                className="lucide lucide-euro w-4 h-4 mr-2"
              >
                <path d="M4 10h12" />
                <path d="M4 14h9" />
                <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
              </svg>

              <span>Devis gratuit</span>
            </div>
          </div>
          <Link
            className="text-2xl rounded-lg inline-block bg-white  px-8 py-4 font-bold  hover:bg-leconte-gray/80 hover:text-white transition-all shadow-lg"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Votre dépanneur électroménager à Paris et Île-deFrance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <b>Leconte Multiservices</b> est votre spécialiste du{" "}
            <b>dépannage électroménager à Paris</b>. Fort de{" "}
            <b>34 ans d'expérience en tant que technicien chez Darty</b>, je
            vous garantis une intervention professionnelle et rapide pour tous
            vos appareils électroménagers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Que ce soit pour une <b>panne de lave-linge</b>, un{" "}
            <b>réfrigérateur qui ne refroidit plus</b>, un{" "}
            <b>lave-vaisselle en panne</b> ou tout autre appareil, j'interviens
            à votre domicile dans
            <b> Paris et toute l'Île-de-France</b> sous 24 à 48h.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mon objectif : <b>réparer plutôt que remplacer</b>. Dans 80% des
            cas, un simple remplacement de pièce permet de prolonger la durée de
            vie de votre appareil et vous fait économiser des centaines d'euros.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Pourquoi choisir Leconte Multiservices ?
          </h2>
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
                <h3 className="font-bold text-lg mb-2">Intervention rapide</h3>
                <p className="text-gray-600 text-sm">
                  Dépannage sous 24-48h à Paris et IDF
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
                <h3 className="font-bold text-lg mb-2">Garantie qualité</h3>
                <p className="text-gray-600 text-sm">
                  Pièce d'origine, travail garanti
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
                <h3 className="font-bold text-lg mb-2">Toutes marques</h3>
                <p className="text-gray-600 text-sm">
                  Réparation de tous les appareils
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Réparation de tous types d'appareils
          </h2>
          <div className="flex gap-6 flex-col md:flex-row">
            <Link
              href={""}
              className="flex-1 rounded-xl bg-card text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-leconte-primary cursor-pointer h-full"
            >
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">🧺</div>
                <h3 className="font-bold text-lg mb-2">Lave-linge</h3>
                <p className="text-leconte-primary text-sm">
                  en savoir plus &rarr;
                </p>
              </div>
            </Link>
            <Link
              href={""}
              className="flex-1 rounded-xl bg-card text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-leconte-primary cursor-pointer h-full"
            >
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">❄️</div>
                <h3 className="font-bold text-lg mb-2">Réfrigérateur</h3>
                <p className="text-leconte-primary text-sm">
                  en savoir plus &rarr;
                </p>
              </div>
            </Link>

            <Link
              href={""}
              className="flex-1 rounded-xl bg-card text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-leconte-primary cursor-pointer h-full"
            >
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">🍽️</div>
                <h3 className="font-bold text-lg mb-2">Lave-vaisselle</h3>
                <p className="text-leconte-primary text-sm">
                  en savoir plus &rarr;
                </p>
              </div>
            </Link>

            <Link
              href={""}
              className="flex-1 rounded-xl bg-card text-card-foreground shadow hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-leconte-primary cursor-pointer h-full"
            >
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="font-bold text-lg mb-2">Four</h3>
                <p className="text-leconte-primary text-sm">
                  en savoir plus &rarr;
                </p>
              </div>
            </Link>
          </div>
        </section>
        <section>
          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Nos prestations de dépannage électroménager
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight flex items-center gap-2">
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
                      className="lucide lucide-wrench w-6 h-6 text-leconte-primary"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    Diagnostic et réparation
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Diagnostic précis de la panne</li>
                    <li>✓ Devis transparent et détaillé</li>
                    <li>✓ Réparation sur place dans 90% des cas</li>
                    <li>✓ Utilisation de pièces d'origine</li>
                    <li>✓ Garantie sur les réparations</li>
                    <li>✓ Partenariat avec Proxiconfort</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold leading-none tracking-tight flex items-center gap-2">
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
                      className="lucide lucide-map-pin w-6 h-6 text-leconte-primary"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                    Zone d'intervention
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Paris intra-muros (tous arrondissements)</li>
                    <li>✓ Hauts-de-Seine (92)</li>
                    <li>✓ Seine-Saint-Denis (93)</li>
                    <li>✓ Val-de-Marne (94)</li>
                    <li>✓ Seine-et-Marne (77)</li>
                    <li>✓ Yvelines (78)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Pourquoi faire appel à un dépanneur professionnel ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Face à une <strong>panne d'électroménager</strong>, il est
                tentant d'essayer de réparer soi-même ou d'acheter un nouvel
                appareil. Pourtant, faire appel à un{" "}
                <strong>réparateur professionnel à Paris</strong> présente de
                nombreux avantages :
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Économies importantes :</strong> Une réparation coûte
                  en moyenne 3 à 5 fois moins cher qu'un remplacement
                </li>
                <li>
                  <strong>Rapidité d'intervention :</strong> Votre appareil est
                  réparé sous 24-48h maximum
                </li>
                <li>
                  <strong>Écologie :</strong> Prolonger la durée de vie des
                  appareils réduit les déchets électroniques
                </li>
                <li>
                  <strong>Expertise :</strong> Diagnostic précis et réparation
                  durable par un professionnel expérimenté
                </li>
                <li>
                  <strong>Garantie :</strong> Les pièces et la main d'œuvre sont
                  garanties
                </li>
              </ul>
              <p>
                Avec <strong>34 années d'expérience chez Darty</strong>, je
                connais parfaitement tous les modèles et toutes les marques.
                Cette expertise me permet d'identifier rapidement la panne et de
                vous proposer la solution la plus adaptée et économique.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-linear-to-r from-leconte-primary to-leconte-secondary  py-12 px-6 rounded-lg shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Besoin d'un dépannage urgent ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Intervention rapide à Paris et en Île-de-France - Devis gratuit
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
        <section>
          <div className="my-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold tracking-tight text-lg">
                    Quel est le délai d'intervention pour un dépannage à Paris ?
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-700">
                    J'interviens sous 24 à 48h pour tous les dépannages à Paris
                    et en Île-de-France. Pour les urgences (fuite, panne totale
                    de frigo), je peux intervenir le jour même selon mes
                    disponibilités.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold tracking-tight text-lg">
                    Combien coûte un dépannage électroménager ?
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-700">
                    Le tarif dépend de la panne et de l'appareil. Je fournis
                    systématiquement un devis gratuit et transparent avant toute
                    intervention. En moyenne, comptez entre 80€ et 200€ selon la
                    complexité.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold tracking-tight text-lg">
                    Réparez-vous toutes les marques d'électroménager ?
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-700">
                    Oui, je répare toutes les marques : Bosch, Siemens, Samsung,
                    LG, Whirlpool, Miele, Electrolux, Candy, Indesit, etc. Mon
                    expérience chez Darty m'a permis de maîtriser tous les
                    modèles.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="font-semibold tracking-tight text-lg">
                    Faut-il mieux réparer ou remplacer son appareil ?
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-700">
                    Dans 80% des cas, la réparation est plus économique. Je vous
                    conseille honnêtement : si le coût de réparation dépasse 60%
                    du prix d'un appareil neuf, je vous recommande le
                    remplacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
