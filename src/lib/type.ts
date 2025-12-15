import { StaticImageData } from "next/image";

export type ImageReal = {
  url: StaticImageData;
  type: "image" | "video" | "gif";
};

export type Realisation = {
  name: string;
  listIllustration: Array<ImageReal>;
  description: string;
};

export type RealisationSupabase = {
  id: number;
  created_at: string;
  name: string;
  description: string;
};
