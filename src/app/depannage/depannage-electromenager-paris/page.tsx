import SectionTypeAppareil from "@/components/section-type-appareil";
import SectionBesoin from "@/components/sectionBesoin";
import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.DepannageParis;

export default function DepanElectroParis() {
  return (
    <>
      <section className="section-depan-electro flex text-white bg-linear-to-b sm:bg-linear-to-r to-leconte-primary from-[#2a9dd6] py-16 px-6 h-full">
        <div className="content space-y-6 w-full sm:max-w-6xl sm:mx-auto">
          <nav className="flex flex-col md:flex-row items-start gap-2 text-smtext-leconte-gray">
            <a
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
              <span className=" font-medium">Dépannage Électroménager</span>
            </div>
          </nav>

          <h1 className="text-4xl font-bold uppercase fadein-left">
            Dépanneur Électroménager à Paris
          </h1>
          <p className="content-text fadein-left text-2xl mb-6">
            Intervention rapide sous 24h - 34 ans d'expérience chez Darty
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

              <span>Disponible 6j/7</span>
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
            Votre dépanneur électroménager à Paris et Île-de-France
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
          <h2 className="text-3xl font-bold sm:text-center mb-10 ">
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
                    className="lucide lucide-clock w-8 h-8 text-leconte-primary"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <polyline points="12 6 12 12 16 14" />
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
                    className="lucide lucide-shield w-8 h-8 text-leconte-primary"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
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
          </div>
        </section>
        <SectionTypeAppareil
          title="Réparation de tous type d'appareils"
          center
        />
        <section>
          <div className="my-16">
            <h2 className="text-3xl font-bold  mb-8">
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

        <section className="section-arrondissement bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">
            Intervention dans tous les arrondissement de Paris
          </h2>
          <div className="content grid md:grid-cols-3 gap-4">
            <Link
              href={"depannage-electromenager-paris15"}
              className="cursor-pointer transition-colors font-medium hover:text-leconte-primary"
            >
              &rarr; Dépannage Paris 15
            </Link>
            <Link
              href={"depannage-electromenager-paris16"}
              className="cursor-pointer transition-colors font-medium hover:text-leconte-primary"
            >
              &rarr; Dépannage Paris 16
            </Link>{" "}
            <Link
              href={"depannage-electromenager-paris17"}
              className="cursor-pointer transition-colors font-medium hover:text-leconte-primary"
            >
              &rarr; Dépannage Paris 17
            </Link>{" "}
            <Link
              href={"depannage-electromenager-paris18"}
              className="cursor-pointer transition-colors font-medium hover:text-leconte-primary"
            >
              &rarr; Dépannage Paris 18
            </Link>{" "}
            <Link
              href={"depannage-electromenager-paris19"}
              className="cursor-pointer transition-colors font-medium hover:text-leconte-primary"
            >
              &rarr; Dépannage Paris 19
            </Link>{" "}
            <Link
              href={"depannage-electromenager-paris20"}
              className="cursor-pointer transition-colors font-medium hover:text-leconte-primary"
            >
              &rarr; Dépannage Paris 20
            </Link>
          </div>
        </section>

        <section>
          <div className="my-16">
            <h2 className="text-3xl font-bold mb-8">
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
        <SectionBesoin />
        <section>
          <div className="my-16">
            <h2 className="text-3xl font-bold  mb-8">Questions fréquentes</h2>
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
                    systématiquement un devis détaillé et transparent avant
                    toute intervention. En moyenne, comptez entre 80€ et 150€
                    selon la complexité.
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
          <div className="flex justify-center">
            <Link
              className="text-xl rounded-full text-white px-8 py-2 border bg-leconte-primary w-fit hover:bg-leconte-secondary
              "
              href="/depannage/depannage-faq"
              title="Aller à la page dépannage électricité"
            >
              Voir d'autre question &rarr;
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
