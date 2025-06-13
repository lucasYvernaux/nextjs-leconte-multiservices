"use client";

import { Section } from "@/components/section";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Section
        idPage="plan-site"
        name="pages"
        title="Plan du Site"
        class="h-screen"
      >
        <h2 className="mb-4">Pages</h2>
        <ul className="list-disc list-inside text-lg block flex flex-col gap-4">
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
