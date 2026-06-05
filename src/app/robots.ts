import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://kushalcreations.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/categories/", "/products/", "/blog/", "/about", "/contact"],
        disallow: ["/cart", "/checkout", "/account", "/admin", "/search"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
