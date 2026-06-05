import { MetadataRoute } from "next";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { blogPosts } from "../data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kushalcreations.com";

  // Static routes
  const staticPaths = ["", "/about", "/contact", "/blog", "/wishlist", "/cart"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic category routes
  const categoryPaths = categories.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic product routes
  const productPaths = products.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  // Dynamic blog routes
  const blogPaths = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPaths, ...categoryPaths, ...productPaths, ...blogPaths];
}
