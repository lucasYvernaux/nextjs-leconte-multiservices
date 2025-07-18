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
      } flex flex-col p-8 w-full h-fit md:max-h-screen overflow-hidden ${
        props.class ? props.class : ""
      } ${props.first ? "md:h-screen" : ""}`}
    >
      <div className="content flex gap-16 flex-col size-full md:max-h-full md:flex-row ">
        {props.image?.position == "left" && (
          <div
            className={`content-image size-full ${
              props.image.top ? "" : "items-center"
            } md:flex-1`}
          >
            {!props.image?.type ? (
              <Image
                className="rounded-4xl h-full w-fit object-contain m-auto"
                src={props.image.src}
                alt={props.image.alt}
                loading="lazy"
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
            className={`text-4xl mb-12 font-bold capitalize text-leconte-primary ${
              props.first && "text-center mt-0"
            }`}
          >
            {props.title}
          </h2>
          <div className="leading-10 md:text-justify">{props.children}</div>
        </div>
        {props.image?.position == "right" && (
          <div
            className={`content-image max-h-full h-full ${
              props.image.top ? "" : "items-center"
            } md:flex-1`}
          >
            {!props.image?.type ? (
              <Image
                className="rounded-4xl h-full w-fit object-contain m-auto"
                src={props.image.src}
                alt={props.image.alt}
                loading="lazy"
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
