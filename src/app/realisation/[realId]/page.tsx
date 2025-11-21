"use client";
// import { Section } from "@/components/section";
// import { createClient, supabase } from "@/lib/supabase/client";
// import { listAllFile } from "@/lib/supabase/functions";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

export default function Page() {
  // const params = useParams();
  // const { realId } = params;
  // const id = parseInt(String(realId)) + 1;
  // const [real, setReal] = useState<any[]>([]);

  // const { data } = supabase.storage
  //   .from("realisation")
  //   .getPublicUrl("paris/shutterstock.jpg", {
  //     transform: {
  //       width: 500,
  //       height: 600,
  //     },
  //   });
  // console.log("lucas");
  // const test = listAllFile({ bucket: "realisation", folder: "par" });
  // console.log(JSON.stringify(test, null, 2));

  // const urlIMage = data.publicUrl;

  // useEffect(() => {
  //   async function fetchData() {
  //     const supabase = await createClient();
  //     const { data } = await supabase.from("realisation").select().eq("id", id);
  //     if (data) setReal(data);
  //   }

  //   fetchData();
  // }, []);
  return (
    <>
      {/* {real.map((element) => (
        <div key={String(realId)}>
          <Section
            idPage="realisation"
            name="real"
            title={element.name}
            animation
            image={{
              position: "left",
              src: urlIMage,
              alt: element.name,
              top: true,
            }}
          >
            <p>{element.description}</p>
          </Section>
        </div>
      ))} */}
    </>
  );
}
