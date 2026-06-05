import { StaticImageData } from "next/image";

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  price: number;
  oldPrice: number;
  offerPrice: number;
  discount: string;
  badge?: string;
  categorySlug: string;
  images: StaticImageData[];
  specifications: ProductSpecification[];
  reviews: Review[];
  rating: number;
  stock: number;
  sku: string;
  frequentlyBoughtTogetherSlugs?: string[];
}
