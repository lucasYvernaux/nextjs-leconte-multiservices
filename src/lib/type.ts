import { ImageProps, StaticImageData } from "next/image";

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

export interface ContactFormState {
  [key: string]: unknown;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface propsInput {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
}

export type ListStepRepa = {
  title: string;
  description: string;
};

export interface SectionReparationProps {
  title: string;
  listRepa?: ListStepRepa[];
}

export type ListTypeApp = {
  title: string;
  picto: string | ImageProps;
  url: string;
};

export interface SectionTypeAppProps {
  title: string;
  center?: boolean;
  listApp?: ListTypeApp[];
}

export interface SectionArrondissementProps {
  num: number;
  listQuartier: string[];
}
