import Image from "next/image";
import { ReactNode } from "react";

export function Section(props: {
  name: string;
  idPage: string;
  animation?: boolean;
  class?: string;
  image?: {
    position: string;
    src: string;
    alt: string;
    type?: boolean;
    top?: boolean;
  };
  title: string;
  first?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className={`section-${props.idPage}-${
        props.name
      } flex flex-col p-12 md:max-h-screen ${props.class ? props.class : ""} ${
        props.first ? "md:h-screen" : ""
      }`}
    >
      <div className="content flex gap-16 flex-col md:flex-row ">
        {props.image?.position == "left" && (
          <div
            className={`content-image flex ${
              props.image.top ? "" : "items-center"
            } md:flex-1`}
          >
            {!props.image?.type ? (
              <Image
                className="rounded-4xl w-full"
                src={props.image.src}
                alt={props.image.alt}
                width={1920}
                height={1080}
              />
            ) : (
              <iframe
                src={props.image.src}
                className="size-full min-h-[50vh]"
                loading="lazy"
                title={props.image.alt}
              />
            )}
          </div>
        )}

        <div
          className={`content-text text-start text-2xl ${
            props.animation ? "fade-in" : ""
          } md:flex-1`}
        >
          <h2
            className={`text-4xl mb-12 font-bold text-leconte-primary ${
              props.first && "text-center mt-0"
            }`}
          >
            {props.title}
          </h2>
          {props.children}
        </div>
        {props.image?.position == "right" && (
          <div
            className={`content-image flex ${
              props.image.top ? "" : "items-center"
            } md:flex-1`}
          >
            {!props.image?.type ? (
              <Image
                className="rounded-4xl w-full"
                src={props.image.src}
                alt={props.image.alt}
                width={1920}
                height={1080}
              />
            ) : (
              <iframe
                src={props.image.src}
                className="size-full min-h-[50vh]"
                loading="lazy"
                title={props.image.alt}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
