import { Section } from "./section";

export function Map(props: { idPage: string }) {
  return (
    <Section
      idPage={props.idPage}
      name="map"
      title="Nous Contacter"
      image={{
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674391.7854364198!2d1.843325109378848!3d48.6798081501672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e1c403a68c17%3A0x10b82c3688b2570!2s%C3%8Ele-de-France!5e0!3m2!1sfr!2sfr!4v1741796767722!5m2!1sfr!2sfr",
        position: "right",
        alt: "localisation Leconte Multiservices",
        type: true,
      }}
    >
      <div className="flex flex-col gap-4 md:gap-6">
        <p>
          Je suis là pour vous <b>dépanner</b>, vous <b>conseiller</b> et vous{" "}
          <b>guider</b> pour le mieux dans vos projets de travaux ou de
          rénovation.
          <br />
          J&apos;interviens principalement dans <b>Paris Intra Muros</b>, ainsi
          que sa petite et grande couronne pour tous vos dépannages et
          rénovation.
        </p>
        <p>
          <b>Zones Desservis : </b>
          <br />
          Essone, Haut de Seine, Paris, Seine Saint Denis, Seine et Marne, Val
          de Marne, Val d&apos;Oise,Yvelines.
        </p>
        <p>
          <b>Horaire : </b>
          Lundi - Samedi : 8h - 18h
        </p>
        <p className="flex flex-col truncate md:flex-row md:gap-2">
          <b>Mail : </b>
          <a
            href="mailto:leconte.multiservices.idf@gmail.com"
            className="text-leconte-primary underline"
          >
            leconte.multiservices.idf@gmail.com
          </a>
        </p>
        <p className="flex flex-col md:flex-row md:gap-2">
          <b>Téléphone : </b>
          <a className="underline" href="tel:0640141937">
            +33 6 40 14 19 37
          </a>
        </p>
      </div>
    </Section>
  );
}
