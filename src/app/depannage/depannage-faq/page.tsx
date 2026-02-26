import SectionBesoin from "@/components/sectionBesoin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function FAQDepan() {
  return (
    <>
      <section className="section-depan-electro flex text-white bg-linear-to-b sm:bg-linear-to-r to-leconte-primary from-[#2a9dd6] py-16 px-6 h-full">
        <div className="content space-y-6 w-full sm:max-w-6xl sm:mx-auto">
          <nav className="flex items-center gap-2 text-sm text-leconte-gray">
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
              <span className=" font-medium">FAQ Dépannage</span>
            </div>
          </nav>

          <h1 className="text-4xl font-bold uppercase fadein-left">
            ❔Questions Fréquentes
          </h1>
          <p className="content-text fadein-left text-2xl mb-6">
            Toutes les réponses sur le dépannage électroménager à Paris
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <section className="introduction flex gap-4 flex-col justify-center items-center">
          <p className="text-lg">
            Vous ne trouvez pas la réponse à votre question ? Contactez-moi
            directement :
          </p>
          <Link
            className="inline-flex gap-2 items-center rounded-lg font-bold transition-colors shadow text-white hover:bg-primary/80 bg-leconte-primary text-lg py-3 px-6"
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
              className="size-5 mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            06 40 14 19 37
          </Link>
        </section>
        <section className="space-y-8">
          <Card className="mx-auto w-full max-w-6xl p-6">
            <CardTitle className="pl-6 font-semibold tracking-tight text-2xl text-leconte-primary">
              Tarifs et devis
            </CardTitle>
            <CardContent>
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Combien coûte un dépannage électroménager à Paris ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Le tarif varie selon la panne et l'appareil. En moyenne,
                    comptez entre 80€ et 150€ tout compris (déplacement + main
                    d'œuvre). Je fournis toujours un devis détaillé et
                    transparent avant toute intrvention, sans engagement
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Y a-t-il des frais de déplacement ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Les frais de déplacement sont inclus dans le tarif de
                    l'intervention pour Paris intra-muros et l'Île-de-France.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Le devis est-il gratuit ? (A voir)
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Oui, le diagnostic et le devis sont entièrement gratuits et
                    sans engagement. Je me déplace à votre domicile, j'identifie
                    la panne et vous fournis un devis détaillé. Vous êtes libre
                    d'accepter ou de refuser.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              {/* <Separator className="mt-4" /> */}
            </CardContent>
          </Card>
          <Card className="mx-auto w-full max-w-6xl p-6">
            <CardTitle className="pl-6 font-semibold tracking-tight text-2xl text-leconte-primary">
              Intervention et délais
            </CardTitle>
            <CardContent>
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Quel est le délai d'intervention ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    J'interviens généralement sous 24h à 48h à Paris et en
                    Île-de-France. Pour les urgences (fuite importante, panne de
                    avec risque alimentaire), je peux intervenir le jour même
                    selon mes disponibilités.{" "}
                    <Link
                      title="Appeler Leconte Multiservices"
                      href="tel:0640141937"
                      className="underline underline-offset-2 decoration-leconte-primary"
                    >
                      Contactez-moi
                    </Link>{" "}
                    au plus vite.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Intervenez-vous le week-end ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Oui, j'interviens du lundi au samedi de 8h à 20h. Pour les
                    urgences le dimanche, contactez-moi, je ferai mon possible
                    pour vous dépanner rapidement.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Dans quelles zones intervenez-vous ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    J'interviens dans tout Paris intra-muros (tous les
                    arrondissements) ainsi que dans l'Essonne (91,) les
                    Hauts-de-Seine (92), la Seine-Saint-Denis (93), le
                    Val-de-Marne (94), la Seine-et-Marne (77), le Val-d'Oise
                    (95) et les Yvelines (78).
                  </p>
                </CollapsibleContent>
              </Collapsible>
              {/* <Separator className="my-4" /> */}
            </CardContent>
          </Card>{" "}
          <Card className="mx-auto w-full max-w-6xl p-6">
            <CardTitle className="pl-6 font-semibold tracking-tight text-2xl text-leconte-primary">
              Réparation
            </CardTitle>
            <CardContent>
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Réparez-vous toutes les marques d'électroménager ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Oui je répare toutes les grandes marques: Bosch, Siemens,
                    Samsung, Lg, Whirpool, Miele, Candy, Electrolux, Beko,
                    Brandt, Listo, etc. Mon expérience de 34 ans chez Darty m'a
                    permis de maîtriser tous les modèles.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Avez-vous les pièces détachées en stock ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Grâce à notre partenaire je dispose d'un stock de pièce de
                    réparation conséquente. Ce qui me permet de dépanner vos
                    appareils dans les plus bref délais.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Faut-il mieux réparer ou remplacer mon appareil ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    C'est une question légitime. En règle générale, si le coût
                    de la réparation dépasse 60% du prix d'un appareil neuf
                    équivalent, je vous conseille honnêtementle remplacement.
                    Dans la plupart des cas, la réparation est plus économique
                    et écologique.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Les réparations sont-elles garantie ? (a voir)
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Oui, toutes mes réparations sont garanties. Les pièces
                    détachés d'origine bénificie de leurs garantie constructeur
                    (généralement 3 à 12 mois). et la main d'œuvre est garantie
                    3 mois
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>{" "}
          <Card className="mx-auto w-full max-w-6xl p-6">
            <CardTitle className="pl-6 font-semibold tracking-tight text-2xl text-leconte-primary">
              Pannes courantes
            </CardTitle>
            <CardContent>
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Mon lave-linge fuit, est-ce grave ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Une fuite peut avoir plusieurs origines: joint de porte usé,
                    durite percée, pompe défectueuse, problème de bac à produit
                    .... Ce n'est généralement pas très grave et se répare
                    facilement. Arrêtez l'appareil et contactez-moi rapidement
                    pour éviter un dégât des eaux.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Mon lave-vaisselle ne lave plus correctement, pourquoi ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Plusieurs causes possibles : bras de lavage bouché, filtre
                    encrassé, résistance entartrée, pompes HS. Commencez par
                    nettoyer les filtres et les bras de lavages. Si cela ne
                    suffit, je peux intervenir pour un diagnostic complet
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
              <Collapsible className="data-open:bg-muted rounded-md">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full text-base h-auto">
                    <span className="text-wrap">
                      Mon sèche-linge ne sèche plus ?
                    </span>
                    <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <p>
                    Les raisons peuvent être multiples : tambour bloqué,
                    résistance défaillante, porte fermant mal, etc. Je maîtrise
                    les pannes courantes et j'interviens rapidement.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              <Separator className="my-4" />
            </CardContent>
          </Card>
        </section>
        <SectionBesoin />
      </div>
    </>
  );
}
