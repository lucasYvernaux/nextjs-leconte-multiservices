import { Section } from "@/components/section";
import Link from "next/link";
import urlImageElec from "../../../../public/images/Electricité.jpeg";
import SectionReparation from "@/components/section-reparation";
import { ListStepRepa } from "@/lib/type";
import SectionBesoin from "@/components/sectionBesoin";
import { Metadata } from "next";
import { MetadataPage } from "@/lib/utils";
// import urlImageElec from "../../../public/images/Electricité.jpeg";

export const metadata: Metadata = MetadataPage.DepannageElecParis;

export default function DepanElecParis() {
  const listDreoulement: ListStepRepa[] = [
    {
      title: "Contact",
      description: "Décrivez votre besoin ou votre panne",
    },
    {
      title: "Diagnostic",
      description:
        "J'identifie précisément la panne et vous fourni un devis transparent",
    },
    {
      title: "Devis",
      description: "Proposition tarifaire détaillé et transparente",
    },
    {
      title: "Réalisation",
      description: "Travaux conformes aux normes NF C 15-100",
    },
  ];
  return (
    <>
      <section className="section-depan-electro flex text-white bg-linear-to-b sm:bg-linear-to-r to-leconte-primary from-[#2a9dd6] py-16 px-6 h-full">
        <div className="content space-y-6 w-full sm:max-w-6xl sm:mx-auto">
          <nav className="flex flex-col md:flex-row items-start gap-2 text-smtext-leconte-gray">
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
                className="hover:text-black flex items-center gap-1"
                href="/depannage"
              >
                Dépannage
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
              <span className=" font-medium">Dépannage Électricité</span>
            </div>
          </nav>

          <h1 className="text-4xl font-bold uppercase fadein-left">
            Dépanneur Électricité à Paris
          </h1>
          <p className="content-text fadein-left text-2xl mb-6">
            Installation bornes de recharge · Prises électrique · Dépannage
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
                <circle cx={12} cy={12} r={10} />
                <polyline points="12 6 12 12 16 14" />
              </svg>

              <span>Intervention rapide</span>
            </div>
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
                className="size-4 mr-2"
              >
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx={7} cy={17} r={2} />
                <path d="M9 17h6" />
                <circle cx={17} cy={17} r={2} />
              </svg>
              <span>Spécialiste bornes VE</span>
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

              <span>Travaux aux normes</span>
            </div>
          </div>
          <Link
            className="inline-flex gap-2 items-center rounded-md font-bold transition-colors shadow text-leconte-primary hover:bg-primary/80 bg-white text-xl py-4 px-8"
            type="button"
            rel=""
            title="Appeler Leconte Multiservices"
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
            <b>Urgence électrique : </b> En cas de coupure générale, de
            court-circuit ou d'odeur de brûlé, coupez immédiatement le
            disjoncteur principal et appelez-moi.
          </p>
        </section>
        <section>
          <div className="rounded-2xl p-8 mb-12 bg-linear-to-r from-green-50 to-emerald-50 border-2 border-green-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-500 text-white p-3 rounded-full">
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
                  className="lucide lucide-car w-8 h-8"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx={7} cy={17} r={2} />
                  <path d="M9 17h6" />
                  <circle cx={17} cy={17} r={2} />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Installation de Bornes de Recharge pour Voitures Électriques
                </h2>
                <p className="text-leconte-gray font-semibold text-lg">
                  Équipez votre domicile d'une solution de recharge adaptée à
                  votre véhicule électrique
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl text-card-foreground shadow bg-white border-2 border-green-200 p-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg size-fit">
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
                      className="lucide lucide-car w-8 h-8"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx={7} cy={17} r={2} />
                      <path d="M9 17h6" />
                      <circle cx={17} cy={17} r={2} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Installation borne murale
                    </h3>
                    <p>
                      Pose de borne Wallbox jusqu'à 22 kW adaptée à vos besoin
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl text-card-foreground shadow bg-white border-2 border-green-200 p-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg size-fit">
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
                      className="lucide lucide-plug w-6 h-6 text-green-600"
                    >
                      <path d="M12 22v-5" />
                      <path d="M9 8V2" />
                      <path d="M15 8V2" />
                      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Prise renforcée Green'up
                    </h3>
                    <p>
                      Installation de prise sécurisée 3.7 kW pour recharge lente
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl text-card-foreground shadow bg-white border-2 border-green-200 p-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg size-fit">
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
                      className="size-8"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Mise aux normes</h3>
                    <p>
                      Vérification et mise en conformité de votre installation
                      électrique
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl text-card-foreground shadow bg-white border-2 border-green-200 p-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg size-fit">
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
                      className="size-8 "
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      Protection différentielle
                    </h3>
                    <p>
                      Pose de borne Wallbox jusqu'à 22 kW adaptée à vos besoin
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl text-card-foreground shadow bg-white border-2 border-green-200 p-6 mt-6">
              <div className="content-title flex gap-4 items-center mb-4">
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
                  className="size-6 text-green-600"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>

                <h3 className="font-bold text-lg mb-2">
                  Pourquoi installer une borne de recharge à domicile ?
                </h3>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="text-green-600 font-bold">✓</span>{" "}
                    <b>Recharge Rapide : </b>Jusqu'à 8x plus rapide qu'une prise
                    classique (22 kW vs 2.3 kW)
                  </li>
                  <li>
                    <span className="text-green-600 font-bold">✓</span>{" "}
                    <b>Économies : </b>Rechargez en heures creuses pour réduire
                    vos coûts
                  </li>
                  <li>
                    <span className="text-green-600 font-bold">✓</span>{" "}
                    <b>Confort : </b>Votre véhicules est rechargé chaque matin
                    sans contrainte
                  </li>
                  <li>
                    <span className="text-green-600 font-bold">✓</span>{" "}
                    <b>Sécurtité : </b>Installation aux normes avec protection
                    adaptées
                  </li>
                  <li>
                    <span className="text-green-600 font-bold">✓</span>{" "}
                    <b>Plus-value : </b>Valorise votre bien immobilier
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Section
          idPage="depannage-elec"
          name="elec"
          image={{
            alt: "photo d&apos;une personne réparant un tableau électrique",
            position: "left",
            url: urlImageElec,
          }}
          title="Dépannage en Électricité"
        >
          <p className="leading-relaxed mb-4">
            Vous rencontrez un <b>problème électrique</b> à votre domicile ?
            Disjoncteur qui saute, panne de courant, besoin d'installer des
            prises supplémentaires ou une borne de recharge pour votre véhicule
            électrique ? J'interviens rapidement à Paris et en Île-de-France.
          </p>
          <p>
            Que vous ayez besoin d'un simple dépannage, d'une installation de
            prises, d'une mise aux normes de votre tableau électrique ou d'une
            borne Tesla, je vous accompagne avec un service de qualité.
          </p>
        </Section>
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Services électrique courants
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">⛈️</div>
                <h3 className="font-bold">Panne électrique générale</h3>
              </div>
            </div>
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">🔌</div>
                <h3 className="font-bold">Changement de ballon électrique</h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">🔌</div>
                <h3 className="font-bold">Installation prises électrique</h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">📊</div>
                <h3 className="font-bold">
                  Mise aux normes tableau électrique
                </h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">💡</div>
                <h3 className="font-bold">Dépannage éclairage</h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">⚠️</div>
                <h3 className="font-bold">Problème de tension</h3>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="rounded-2xl p-8 mb-12 bg-linear-to-r from-blue-50 to-cyan-50 border-2 border-leconte-primary">
            <div className="flex items-center gap-4 mb-6">
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
                className="size-6 text-leconte-primary"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Installation Électriques
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-card-foreground">
                <div className="content-title flex gap-4 items-center mb-4">
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
                    className="size-6 text-green-600"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>

                  <h3 className="font-bold mb-2">Dépannage et réparation</h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Recherche de panne électrique</li>
                    <li>Remplacement de disjoncteur</li>
                    <li>Réparation de court-circuit</li>
                    <li>Dépannage d'urgence 6j/7</li>
                  </ul>
                </div>
              </div>
              <div className="text-card-foreground">
                <div className="content-title flex gap-4 items-center mb-4">
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
                    className="size-6 text-green-600"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>

                  <h3 className="font-bold mb-2">
                    Installation et mise aux normes
                  </h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Pose de prises et interrrupteurs</li>
                    <li>Installation éclairage LED</li>
                    <li>Mise en conformité tableau électrique</li>
                    <li>Câblage et raccordement</li>
                  </ul>
                </div>
              </div>
              <div className="text-card-foreground">
                <div className="content-title flex gap-4 items-center mb-4">
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
                    className="size-6 text-green-600"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>

                  <h3 className="font-bold mb-2">Véhicules électriques</h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Borne de recharge allant de 7.4 kW jusqu'à 22 kW</li>
                    <li>Prise renforcée allant jusqu'à 3.7kW</li>
                    <li>Étude de faisabilité</li>
                    <li>Installation certifiée IRVE</li>
                  </ul>
                </div>
              </div>
              <div className="text-card-foreground">
                <div className="content-title flex gap-4 items-center mb-4">
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
                    className="size-6 text-green-600"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>

                  <h3 className="font-bold mb-2">
                    Ballon d'eau chaude électrique
                  </h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Installation Ballon 200 / 300 litres</li>
                    <li>
                      Réparation ballon électrique (résistance, thermostat)
                    </li>
                    <li>Remplacement ballon d'eau chaude</li>
                    <li>Mise aux normes et raccordement électrique</li>
                  </ul>
                </div>
              </div>
              <div className="text-card-foreground">
                <div className="content-title flex gap-4 items-center mb-4">
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
                    className="size-6 text-green-600"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>

                  <h3 className="font-bold mb-2">Sécurité électrique</h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Installation parafoudre</li>
                    <li>Mise à la terre</li>
                    <li>Protection différentielle (30mA)</li>
                    <li>Diagnostique électrique</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionReparation
          title="Déroulement de l'intervention"
          listRepa={listDreoulement}
          hover
          colorHover="leconte-primary"
        />
        <SectionBesoin />
      </div>
    </>
  );
}
