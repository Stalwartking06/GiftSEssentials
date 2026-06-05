import { StaticImageData } from "next/image";

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  seoTitle: string;
  seoDescription: string;
  faqs: { question: string; answer: string }[];
}
