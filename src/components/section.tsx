"use client";
import useIsMobile from "@/lib/useIsMobile";
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
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <section
          className={`section-${props.idPage}-${
            props.name
          } flex flex-col p-8 w-full ${props.class ? props.class : ""}`}
        >
          <div className="content flex gap-16 flex-col size-full ">
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
              <div className="leading-10">{props.children}</div>
            </div>
            {props.image && (
              <div
                className={`content-image max-h-full h-full ${
                  props.image.top ? "" : "items-center"
                }`}
              >
                {!props.image?.type ? (
                  <Image
                    className="rounded-4xl max-h-screen h-full m-auto"
                    src={props.image.src}
                    alt={props.image.alt}
                    style={{ maxHeight: 600 }}
                    loading="lazy"
                    width={1920}
                    height={1080}
                  />
                ) : (
                  <iframe
                    src={props.image.src}
                    className="rounded-4xl size-full min-h-[50vh]"
                    loading="lazy"
                    title={props.image.alt}
                  />
                )}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section
          className={`section-${props.idPage}-${
            props.name
          } flex flex-col p-8 w-full h-fit  overflow-hidden ${
            props.class ? props.class : ""
          } ${props.first ? "md:h-screen" : ""}`}
        >
          <div className="content flex gap-16 flex-col size-full md:max-h-full md:flex-row ">
            {props.image?.position == "left" && (
              <div
                className={`content-image max-h-screen h-full m-auto ${
                  props.image.top ? "" : "items-center"
                } md:flex-1`}
              >
                {!props.image?.type ? (
                  <Image
                    className="rounded-4xl max-h-screen h-full m-auto"
                    src={props.image.src}
                    alt={props.image.alt}
                    loading="lazy"
                    width={1920}
                    height={1080}
                  />
                ) : (
                  <iframe
                    src={props.image.src}
                    className="rounded-4xl size-full min-h-[50vh]"
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
                className={`content-image max-h-full h-full m-auto ${
                  props.image.top ? "" : "items-center"
                } md:flex-1`}
              >
                {!props.image?.type ? (
                  <Image
                    className="rounded-4xl max-h-screen h-full m-auto"
                    src={props.image.src}
                    alt={props.image.alt}
                    style={{ maxHeight: 600 }}
                    loading="lazy"
                    width={1920}
                    height={1080}
                  />
                ) : (
                  <iframe
                    src={props.image.src}
                    className="rounded-4xl size-full min-h-[50vh]"
                    loading="lazy"
                    title={props.image.alt}
                  />
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
