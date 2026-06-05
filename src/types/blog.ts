import { StaticImageData } from "next/image";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Spiritual Living" | "Puja Guides" | "Festival Gifts" | "Home Positivity" | "Incense Benefits";
  author: string;
  date: string;
  readTime: string;
  image: StaticImageData;
  seoTitle: string;
  seoDescription: string;
}
