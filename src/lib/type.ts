export type ImageReal = {
  url: string;
  description: string;
  type: "image" | "video" | "gif";
  title: string;
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
