import Image from "next/image";
import { ReactNode } from "react";

export function Section(props: {
  name: string;
  idPage: string;
  class?: string;
  image?: { position: string; src: string; alt: string };
  title: string;
  first?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`section-${props.idPage}-${props.name} flex flex-col p-12 ${
        props.class ? props.class : ""
      } ${props.first ? "md:h-screen" : ""}`}
    >
      <div className="content flex gap-16 flex-col md:flex-row ">
        {props.image?.position == "left" && (
          <div className="content-image flex flex-1 items-center">
            <Image
              className="rounded-4xl w-full"
              src={props.image.src}
              alt={props.image.alt}
              width={1920}
              height={1080}
            />
          </div>
        )}
        <div className="content-text text-start text-2xl fade-in flex-1">
          <h2 className="text-4xl my-12 font-bold text-leconte-primary">
            {props.title}
          </h2>
          {props.children}
        </div>
        {props.image?.position == "right" && (
          <div className="content-image flex flex-1 items-center">
            <Image
              className="rounded-4xl"
              src={props.image.src}
              alt={props.image.alt}
              width={1920}
              height={1080}
            />
          </div>
        )}
      </div>
    </section>
  );
}
