import { Section } from "@/components/section";
import Link from "next/link";
import urlImagePlomb from "../../../../public/images/shutterstock.jpg";
import SectionReparation from "@/components/section-reparation";
import { ListStepRepa } from "@/lib/type";
import SectionBesoin from "@/components/sectionBesoin";
import { Metadata } from "next";
import { MetadataPage } from "@/lib/utils";
// import urlImageElec from "../../../public/images/Electricité.jpeg";

export const metadata: Metadata = MetadataPage.DepannagePlombParis;

export default function DepanPlombParis() {
  const listDreoulement: ListStepRepa[] = [
    {
      title: "Appel",
      description: "Décrivez votre problème de plomberie",
    },
    {
      title: "Diagnostic",
      description: "Identification précise de la panne",
    },
    {
      title: "Devis",
      description: "Tarif clair et transparent avant intervention",
    },
    {
      title: "Réparation",
      description: "Travaux réalisés et garantis",
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
              <span className=" font-medium">Dépannage Plomberie</span>
            </div>
          </nav>

          <h1 className="text-4xl font-bold uppercase fadein-left">
            Dépannage Plomberie à Paris
          </h1>
          <p className="content-text fadein-left text-2xl mb-6">
            Fuite · Canalisation · Robinetterie · Chauffe-eau
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
              <span>Travaux garantis</span>
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

              <span>Toutes marques</span>
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
            <b>Urgence fuite : </b> Coupez immédiatement l'arrivée d'eau au
            robinet générale, puis appelez-moi. Chaque minute compte pour
            limiter les dégâts et la facture.
          </p>
        </section>

        <Section
          idPage="depannage"
          name="elec"
          image={{
            alt: "photo d&apos;une personne réparant un aspirateur",
            position: "right",
            url: urlImagePlomb,
          }}
          title="Plombier professionnel à paris"
        >
          <p className="leading-relaxed mb-4">
            Une <b>fuite d'eau</b> ? Une <b>canalisation bouchée</b> ? Ne
            laissez pas ces problèmes perturber votre quotidien. Je suis équipé
            pour intervenir rapidement et assurer des réparations durables. De
            la réparation d&apos;urgence à l&apos;installation complète de votre
            plomberie, je propose des solutions adaptées et durables pour régler
            vos soucis de plomberie, qu&apos;ils soient petits ou complexes. Par
            exemple, changement de robineterie, de sanitaire et de chauffe-eau
            électrique.
          </p>
        </Section>
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Pannes et intervention courantes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">💧</div>
                <h3 className="font-bold">Fuite d'eau robinet ou tuyau</h3>
              </div>
            </div>
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">🔧</div>
                <h3 className="font-bold">Canalisation bouchée</h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">🚽</div>
                <h3 className="font-bold">WC qui fuit ou déborde</h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">🔥</div>
                <h3 className="font-bold">Chauffe-eau en panne</h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">🚿</div>
                <h3 className="font-bold">Robinetterie à remplacer</h3>
              </div>
            </div>{" "}
            <div className="rounded-xl bg-card text-card-foreground shadow border-2 hover:border-leconte-primary transition-colors p-6">
              <div className="flex gap-3 items-center">
                <div className="text-3xl">⚠️</div>
                <h3 className="font-bold">Dégâts des eaux urgent</h3>
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
                  Prestation plomberie
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

                  <h3 className="font-bold mb-2">Fuites et urgences</h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Réparation fuite robinet</li>
                    <li>Fuite de tuyauterie encastrée ou non</li>
                    <li>Remplacement de joints et raccord</li>
                    <li>Intervention dégât des eaux</li>
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

                  <h3 className="font-bold mb-2">Canalisation</h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Débouchage WC et lavabo</li>
                    <li>Débouchage baignoire</li>
                    <li>débouchage évier cuisine</li>
                    <li>Nettoyage haute pression</li>
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

                  <h3 className="font-bold mb-2">Robinetterie et sanitaires</h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Remplacement robinets et mitigeurs</li>
                    <li>Installation sanitaire et mécanisme</li>
                    <li>Pose douche et baignoire</li>
                    <li>Installation lave-mains</li>
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

                  <h3 className="font-bold mb-2">Chauffe-eau</h3>
                </div>
                <div>
                  <ul className="space-y-2 ml-8 list-disc list-inside">
                    <li>Dépannage chauffe-eau électrique</li>
                    <li>Remplacement résistance et thermostat</li>
                    <li>Installation chauffe-eau neuf</li>
                    <li>Chauffe-eau ultra-plat ou thermodynamique</li>
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
