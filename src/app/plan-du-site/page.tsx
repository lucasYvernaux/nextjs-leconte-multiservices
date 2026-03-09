import { Section } from "@/components/section";
import { MetadataPage } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = MetadataPage.Sitemap;

export default function PlanPage() {
  return (
    <>
      <Section
        idPage="plan-site"
        name="pages"
        title="Plan du Site"
        class="min-h-screen"
      >
        <h2 className="mb-4">Pages</h2>
        <ul className="list-disc list-inside text-lg flex flex-col gap-4">
          <li>
            <Link
              href={"/"}
              title="Accueil"
              className="text-leconte-gray italic hover:text-leconte-primary"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              title="A Propos"
              className="text-leconte-gray italic hover:text-leconte-primary"
            >
              A Propos
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              title="Contact"
              className="text-leconte-gray italic hover:text-leconte-primary"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href={"/depannage"}
              title="Dépannage"
              className="text-leconte-gray italic hover:text-leconte-primary"
            >
              Dépannage
            </Link>
          </li>
          <ul className="list-disc list-inside text-lg flex flex-col gap-4 ml-8 mt-4">
            <li>
              <Link
                href={"/depannage/depannage-electricite-paris"}
                title="Dépannage Électricité Paris"
                className="text-leconte-gray italic hover:text-leconte-primary"
              >
                Dépannage Électricité
              </Link>
            </li>
            <li>
              <Link
                href={"/depannage/depannage-electromenager-paris"}
                title="Dépannage Électroménager Paris"
                className="text-leconte-gray italic hover:text-leconte-primary"
              >
                Dépannage Électroménager
              </Link>
              <ul className="list-disc list-inside text-lg flex flex-col gap-4 ml-8 mt-4">
                <li>
                  <Link
                    href={"/depannage/depannage-electromenager-paris15"}
                    title="Dépannage Électroménager Paris 15"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Dépannage Électroménager Paris 15
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/depannage-electromenager-paris16"}
                    title="Dépannage Électroménager Paris 16"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Dépannage Électroménager Paris 16
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/depannage-electromenager-paris17"}
                    title="Dépannage Électroménager Paris 17"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Dépannage Électroménager Paris 17
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/depannage-electromenager-paris18"}
                    title="Dépannage Électroménager Paris 18"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Dépannage Électroménager Paris 18
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/depannage-electromenager-paris19"}
                    title="Dépannage Électroménager Paris 19"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Dépannage Électroménager Paris 19
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/depannage-electromenager-paris20"}
                    title="Dépannage Électroménager Paris 20"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Dépannage Électroménager Paris 20
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/depannage-electromenager-faq"}
                    title="FAQ Dépannage Électroménager"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    FAQ Dépannage Électroménager
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/reparation-four-paris"}
                    title="Réparation Four"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Réparation Four
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/reparation-lave-linge-paris"}
                    title="Réparation Lave-Linge"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Réparation Lave-Linge
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/reparation-lave-vaisselle-paris"}
                    title="Réparation Lave-Vaisselle"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Réparation Lave-Vaisselle
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/depannage/reparation-refrigerateur-paris"}
                    title="Réparation Réfrigérateur"
                    className="text-leconte-gray italic hover:text-leconte-primary"
                  >
                    Réparation Réfrigérateur
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href={"/depannage/depannage-plomberie-paris"}
                title="Dépannage Plomberie"
                className="text-leconte-gray italic hover:text-leconte-primary"
              >
                Dépannage Plomberie
              </Link>
            </li>
          </ul>

          <li>
            <Link
              href={"/mentions-legales"}
              title="Mentions Légales"
              className="text-leconte-gray italic hover:text-leconte-primary"
            >
              Mentions Légales
            </Link>
          </li>
          <li>Plan du Site</li>
          <li>
            <Link
              href={"/renovation"}
              title="Rénovation"
              className="text-leconte-gray italic hover:text-leconte-primary"
            >
              Rénovation
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
