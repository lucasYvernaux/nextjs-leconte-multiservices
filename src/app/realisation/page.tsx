"use client";

import { createClient } from "@/lib/supabase/client";
import { Realisation } from "@/lib/type";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { object } from "yup";

export default function page() {
  const pathname = usePathname();
  const [resultData, setResultData] = useState<any[]>();
  useEffect(() => {
    const header = document.querySelector("header");
    const main = document.querySelector("main.absolute");
    const arrow = document.querySelector("#arrow");

    function checkScroll() {
      if (
        window.scrollY === 0 &&
        window.location.pathname.endsWith("/realisation")
      ) {
        header?.classList.add("bg-transparent");
        main?.classList.add("absolute");
        main?.classList.add("h-screen");
        arrow?.classList.remove("hidden");
      } else {
        header?.classList.remove("bg-transparent");
        main?.classList.remove("absolute");
        main?.classList.remove("h-screen");
        arrow?.classList.add("hidden");
      }
    }

    async function fetchData() {
      const supabase = await createClient();
      const { data: realisations } = await supabase
        .from("realisation")
        .select();
      const res = JSON.stringify(realisations);
      if (realisations) setResultData(realisations);
      return res;
    }
    fetchData();

    if (pathname.endsWith("/realisation")) {
      window.addEventListener("scroll", checkScroll);
      return () => window.removeEventListener("resize", checkScroll);
    }
  }, []);

  // const placeholderImage: ImageReal = {
  //   url: "/images/travaux.jpg",
  //   description: "test",
  //   type: "image",
  //   title: "placeholder titre",
  // };

  // const placeholderRealisation: Realisation = {
  //   name: "rénovation paris 13",
  //   description: "pose parquet + peinture",
  //   listIllustration: [
  //     {
  //       url: "/images/logo/LECONTE-MULTISERVICES-v2-removebg-preview.png",
  //       description: "travaux rénovation",
  //       title: "travaux rénovation",
  //       type: "image",
  //     },
  //   ],
  // };

  // const listplaceholderRealisation: Array<Realisation> = Array.from(
  //   { length: 5 },
  //   () => placeholderRealisation
  // );

  // const list: Array<ImageReal> = new Array(
  //   {
  //     url: "/images/services-travaux.jpg",
  //     description: "travaux rénovation",
  //     title: "travaux rénovation",
  //     type: "image",
  //   },

  //   {
  //     url: "/images/travaux-mezzanine.jpg",
  //     description: "rénovation mezzanine",
  //     title: "rénovation mezzanine",
  //     type: "image",
  //   },

  //   {
  //     url: "/images/travaux.jpg",
  //     description: "",
  //     title: "travaux",
  //     type: "image",
  //   },

  //   {
  //     url: "/images/video-cuisine-avant-apres.gif",
  //     description: "rénovation cuisine paris 13",
  //     title: "rénovation cuisine paris 13",
  //     type: "image",
  //   },

  //   {
  //     url: "/images/video-serge-renov-comble-ezgif.com-video-to-webp-converter.webp",

  //     description: "rénovation comble",
  //     title: "rénovation comble",
  //     type: "image",
  //   },

  //   {
  //     url: "/images/WhatsApp-sergio-reparation-lave-vaisselle.jpg",
  //     description: "",
  //     title: "réparation lave-vaisselle",
  //     type: "image",
  //   },

  //   {
  //     url: "/images/WhatsAppVido2025-04-24_fb825763-ezgif.com-5fps-0.5speed-after.gif",
  //     description: "",
  //     title: "rénovation salle de bain seine et marne",
  //     type: "image",
  //   }
  // );

  const listRealisation: Array<Realisation> = new Array(
    {
      name: "rénovation mezzanine",
      description: "pose parquet + peinture",
      listIllustration: [
        {
          url: "/images/travaux-mezzanine.jpg",
          description: "rénovation mezzanine",
          title: "rénovation mezzanine",
          type: "image",
        },
      ],
    },
    {
      name: "travaux",
      description: "pose parquet + peinture",
      listIllustration: [
        {
          url: "/images/travaux.jpg",
          description: "",
          title: "travaux",
          type: "image",
        },
      ],
    },
    {
      name: "rénovation cuisine paris 13",
      description: "pose parquet + peinture",
      listIllustration: [
        {
          url: "/images/video-cuisine-avant-apres.gif",
          description: "rénovation cuisine paris 13",
          title: "rénovation cuisine paris 13",
          type: "image",
        },
      ],
    },
    {
      name: "rénovation comble",
      description: "pose parquet + peinture",
      listIllustration: [
        {
          url: "/images/video-serge-renov-comble-ezgif.com-video-to-webp-converter.webp",

          description: "rénovation comble",
          title: "rénovation comble",
          type: "image",
        },
      ],
    },
    {
      name: "réparation lave-vaisselle",
      description: "pose parquet + peinture",
      listIllustration: [
        {
          url: "/images/WhatsApp-sergio-reparation-lave-vaisselle.jpg",
          description: "",
          title: "réparation lave-vaisselle",
          type: "image",
        },
      ],
    },
    {
      name: "rénovation salle de bain",
      description: "pose parquet + peinture",
      listIllustration: [
        {
          url: "/images/WhatsAppVido2025-04-24_fb825763-ezgif.com-5fps-0.5speed-after.gif",
          description: "",
          title: "rénovation salle de bain seine et marne",
          type: "image",
        },
      ],
    }
  );

  return (
    <main className="absolute top-0">
      <section className="section-realisation bg-no-repeat text-white bg-cover bg-center bg-[url('/images/tee-shirt-leconte-multiservices.jpg')] flex py-8 px-4 relative min-h-screen md:p-12">
        <div className="content flex flex-col gap-16 z-2 pt-32 max-w-full w-full">
          <h1 className="text-4xl font-bold uppercase text-center fadein-left md:text-5xl">
            Nos réalisation à Paris et Île-de-France
          </h1>
          <div className="flex items-end justify-center h-full">
            <div
              id="arrow"
              className="flex size-10 animate-bounce rounded-full bg-white p-2 ring-1 ring-gray-900/5"
            >
              <svg
                className="size-6 text-leconte-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col mt-8">
        <div className="w-full flex justify-center">
          <h2 className="text-4xl text-center w-1/2">
            Découvrez quelques une de nos réalisations et projets mise en oeuvre
            pour nos clients
          </h2>
        </div>
        <div className="p-12 grid gap-4 auto-rows-[350px] md:auto-rows-[500px] md:grid-cols-4">
          {listRealisation.map((el, index) => (
            <Link href={`/realisation/${index}`} key={index} title={el.name}>
              <Image
                src={el.listIllustration[0].url}
                alt={el.description}
                className="h-9/10"
                width={1920}
                height={1080}
              />
              <p className="italic text-md">{el.name}</p>
            </Link>
          ))}
        </div>
        {/* <div className="p-12 grid gap-4 auto-rows-[350px] md:auto-rows-[500px] md:grid-cols-4">
          {resultData?.map((el, index) => (
            <Link href={`/realisation/${index}`} key={index} title={el.name}>
              <Image
                src="https://qouclhpwqhhparcklfac.supabase.co/storage/v1/object/public/realisation/tee-shirt-leconte-multisertvices.jpg"
                alt={el.description}
                className="h-9/10"
                width={1920}
                height={1080}
              />
              <p className="italic text-md">{el.name}</p>
            </Link>
          ))}
        </div> */}
      </section>
    </main>
  );
}
