"use client";

// import { createClient } from "@/lib/supabase/client";
import { Realisation } from "@/lib/type";

import Image from "next/image";
import urlImage1 from "../../../public/images/travaux-mezzanine.jpg";
import urlImage2 from "../../../public/images/travaux.jpg";
import urlImage3 from "../../../public/images/video-cuisine-avant-apres.gif";
import urlImage4 from "../../../public/images/video-serge-renov-comble-ezgif.com-video-to-webp-converter.webp";
import urlImage5 from "../../../public/images/WhatsApp-sergio-reparation-lave-vaisselle.jpg";
import urlImage6 from "../../../public/images/WhatsAppVido2025-04-24_fb825763-ezgif.com-5fps-0.5speed-after.gif";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const pathname = usePathname();
  // const [resultData, setResultData] = useState<any[]>();

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

    // async function fetchData() {
    //   const supabase = await createClient();
    //   const { data: realisations } = await supabase
    //     .from("realisation")
    //     .select();
    //   const res = JSON.stringify(realisations);
    //   if (realisations) setResultData(realisations);
    //   return res;
    // }
    // fetchData();

    if (pathname.endsWith("/realisation")) {
      window.addEventListener("scroll", checkScroll);
      return () => window.removeEventListener("resize", checkScroll);
    }
  }, []);

  const listRealisation: Array<Realisation> = new Array<Realisation>(
    {
      name: "rénovation mezzanine",
      description: "rénovation mezzanine",
      listIllustration: [
        {
          url: urlImage1,
          type: "image",
        },
      ],
    },
    {
      name: "travaux",
      description: "pose parquet + peinture",
      listIllustration: [
        {
          url: urlImage2,
          type: "image",
        },
      ],
    },
    {
      name: "rénovation cuisine paris 13",
      description: "rénovation cuisine paris 13",
      listIllustration: [
        {
          url: urlImage3,
          type: "image",
        },
      ],
    },
    {
      name: "rénovation comble",
      description: "rénovation comble",
      listIllustration: [
        {
          url: urlImage4,
          type: "image",
        },
      ],
    },
    {
      name: "réparation lave-vaisselle",
      description: "réparation lave-vaisselle",
      listIllustration: [
        {
          url: urlImage5,
          type: "image",
        },
      ],
    },
    {
      name: "rénovation salle de bain",
      description: "rénovation salle de bain seine et marne",
      listIllustration: [
        {
          url: urlImage6,

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
            // <Link href={`/realisation/${index}`} key={index} title={el.name}>
            <div key={index}>
              <Image
                src={el.listIllustration[0].url}
                alt={el.description}
                title={el.description}
                className="h-9/10"
              />
              <p className="italic text-md">{el.name}</p>
            </div>
            // </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
