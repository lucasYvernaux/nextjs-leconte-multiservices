import { cookies } from "next/headers";
import Link from "next/link";

export default async function page() {
  const myHost = process.env.HOST ?? "example.leconte-multiservices.fr";
  const cookielength = (await cookies()).size;

  return (
    <>
      <section className="section-renov flex flex-col p-12 m-auto">
        <div className="content text-xl">
          <h1 className="text-4xl mb-12">Mentions Légales</h1>
          <div className="content-editor flex flex-col gap-4 mb-8">
            <h2 className="text-leconte-primary text-3xl">Editeur</h2>
            <p>
              Le site {myHost} est édité par la société Leconte Multiservices
              dont le siège est situé au : <br />
              6 RUE DE L EGLISE - 78270 BENNECOURT
              <br />
              du lundi au samedi de 8h00 à 19h00
              <br />
              Mail : leconte.multiservices.idf@gmail.com <br />
              Internet : {myHost}
            </p>
          </div>
          <div className="content-host flex flex-col gap-4 mb-8">
            <h2 className="text-leconte-primary text-3xl">
              Hébergement du site
            </h2>
            <p>
              ENTREPRISE
              <br />
              SIRET : 777 777 777 777 77
              <br />
              RCS : VILLE 111 111 111 11111 <br />
              Siege social : adresse <br />
              Téléphone : 01 23 45 67 89 <br />
              Email : contact@gmail.com
            </p>
          </div>
          <div className="content-real flex flex-col gap-4 mb-8">
            <h2 className="text-leconte-primary text-3xl">
              Réalisation du site
            </h2>
            <p>
              Yvernaux Web Solution
              <br />
              SIRET : 931 391 478 000 19
              <br />
              Siege social : 22 rue de l&apos;église 78270 Bennecourt
              <br />
              Téléphone : 06 51 07 60 91 <br />
              Email : lucas.yvernaux@gmail.com
            </p>
          </div>
          <div className="content-rgpd flex flex-col gap-4 mb-8">
            <h2 className="text-leconte-primary text-3xl">
              Propriété intellectuelle et respect du droit d&apos;image
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site est régi par la législation
              française sur le droit d&apos;auteur et la propriété
              intellectuelle. L&apos;ensemble des informations présentes sur le
              site et quelque soit leur nature telle que : image, texte, logo,
              vidéo, documentation, plaquette commerciale etc est la propriété
              exclusive de la société Leconte Multiservices. Exploiter, publier,
              reproduire ou copier à titre partiel ou total ces éléments est
              strictement interdit conformément aux articles L 335-2 et suivants
              du Code de la propriété intellectuelle sans accord préalable et
              écrit de la société Leconte Multiservices. Des poursuites pourront
              être engagées en cas d&apos;infraction à ces mesures.
            </p>
          </div>
          <div className="content-rgpd flex flex-col gap-4 mb-8">
            <h2 className="text-leconte-primary text-3xl">
              Utilisations des données par la société
            </h2>
            <p>
              Dans le cadre de ses services (Dépôt d&apos;une demande de
              service, Dépôt d&apos;une demande de devis, Dépôt d&apos;une
              question), la société Leconte Multiservices est amené à collecter
              des informations personnelles auprès des utilisateurs : nom,
              prénom, adresse, téléphone et email. <br />
              Ces informations sont collectées car elles sont indispensables
              pour rendre un service adapté à l&apos;utilisateur. Elles sont
              collectées uniquement à ce titre. En aucun cas, ces données
              personnelles peuvent être transférées à des entreprises tierces.
            </p>
          </div>
          {cookielength > 1 && (
            <div className="content-rgpd flex flex-col gap-4 mb-8">
              <h2 className="text-leconte-primary text-3xl">Cookies</h2>
              <p>
                Afin de rendre la navigation du site plus performante et
                optimisée, celle-ci peut engendrer l&apos;installation d&apos;un
                cookie sur l&apos;ordinateur de l&apos;utilisateur. Ce dernier a
                la possibilité de refuser son installation en paramétrant son
                navigateur. Dans ce cas, l&apos;accès à certaines pages ou
                services du site peut devenir inaccessible.
                <br />
                Si vous ne souhaitez pas activer le cookies, il vous suffit de
                paramétrer votre navigateur internet. Voici la marche à suivre
                par navigateur :
              </p>
              <div className="flex flex-col items-center">
                <ul className="list-disc list-inside">
                  <li>
                    Chrome :{" "}
                    <Link
                      href="https://support.google.com/accounts/answer/61416?hl=fr"
                      target="_blank"
                      className="underline"
                    >
                      https://support.google.com/
                    </Link>
                  </li>
                  <li>
                    Safari :{" "}
                    <Link
                      href="https://support.apple.com/kb/PH19214?locale=fr_FR&viewlocale=fr_FR"
                      target="_blank"
                      className="underline"
                    >
                      https://support.apple.com/
                    </Link>
                  </li>
                  <li>
                    Firefox :{" "}
                    <Link
                      href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences?redirectlocale=fr&redirectslug=activer-desactiver-cookies"
                      target="_blank"
                      className="underline"
                    >
                      https://support.mozilla.org/
                    </Link>
                  </li>
                  <li>
                    Chrome :{" "}
                    <Link
                      href="https://help.opera.com/en/latest/web-preferences/#cookies"
                      target="_blank"
                      className="underline"
                    >
                      https://help.opera.com/
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="content-responsabilite">
            <h2 className="text-leconte-primary mb-4 text-3xl">
              Responsabilité
            </h2>
            <p className="editor">
              Leconte Multiservices fait son maximum pour garantir un taux de
              disponibilité élevé de son site internet. En revanche, Leconte
              Multiservices ne saurait être responsable en cas
              d&apos;interruption de la mise en ligne du site, notamment pour
              des problématiques informatiques. L&apos;entreprise
              s&apos;efforcera d&apos;informer au plus vite les utilisateurs de
              l&apos;incident rencontré. Le site
              {myHost} peut contenir des liens hypertextes pouvant renvoyer sur
              d&apos;autres sites internet (partenaire, produit, article de
              presse, réseaux sociaux, etc). Leconte Multiservices ne se porte
              pas garant et ne valide pas leur contenu. Leconte Multiservices ne
              pourra être tenu responsable des contenus proposés par ces mêmes
              sites internet qui seraient contraires à la réglementation et
              législation en vigueur. Leconte Multiservices pourra mettre à mise
              à disposition sur le site un blog et/ou un espace
              d&apos;expression de l&apos;utilisateur comme par exemple un
              endroit pour laisser un avis sur une de nos prestations ou
              produits. En cas de propos injurieux, raciste, diffamatoire ou
              pornographique, Leconte Multiservices pourra supprimer le
              commentaire de l&apos;utilisateur en question et entamer une
              procédure contre cette personne auprès des Autorités Compétentes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
