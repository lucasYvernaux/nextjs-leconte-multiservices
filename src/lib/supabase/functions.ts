import { supabase } from "./client";

export async function listAllFile(props: { bucket: string; folder: string }) {
  const { data } = await supabase.storage
    .from("realisation")
    .list(props.folder);
  console.log("pedro");
  console.log(data);
  return data;
}
