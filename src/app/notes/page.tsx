import { createClient } from "@/lib/supabase/server";
import Image from "next/image";

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  const { data } = supabase.storage
    .from("realisation")
    .getPublicUrl("tee-shirt-leconte-multisertvices.jpg", {
      transform: {
        width: 500,
        height: 600,
      },
    });

  console.log(data.publicUrl);

  return (
    <>
      <pre>{JSON.stringify(notes, null, 2)}</pre>;
      <Image src={data.publicUrl} width={500} height={600} alt="" />
    </>
  );
}
