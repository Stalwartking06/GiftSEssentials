import React from "react";

interface OrgSchemaProps {
  type: "Organization";
}

interface WebSiteSchemaProps {
  type: "WebSite";
}

interface BreadcrumbSchemaProps {
  type: "BreadcrumbList";
  items: { position: number; name: string; item: string }[];
}

interface ProductSchemaProps {
  type: "Product";
  name: string;
  image: string;
  description: string;
  sku: string;
  price: number;
  currency: string;
  availability: string;
  ratingValue: number;
  reviewCount: number;
}

type Props = OrgSchemaProps | WebSiteSchemaProps | BreadcrumbSchemaProps | ProductSchemaProps;

const StructuredData = (props: Props) => {
  let schemaData: any = null;

  if (props.type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Kushal Creation's",
      "url": "https://kushalcreations.com",
      "logo": "https://kushalcreations.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98765-43210",
        "contactType": "customer service",
        "email": "support@kushalcreations.com"
      },
      "sameAs": [
        "https://www.facebook.com/kushalcreations",
        "https://www.instagram.com/kushalcreations",
        "https://www.linkedin.com/company/kushalcreations"
      ]
    };
  } else if (props.type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Kushal Creation's",
      "url": "https://kushalcreations.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://kushalcreations.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };
  } else if (props.type === "BreadcrumbList") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": props.items.map((item) => ({
        "@type": "ListItem",
        "position": item.position,
        "name": item.name,
        "item": item.item
      }))
    };
  } else if (props.type === "Product") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": props.name,
      "image": props.image,
      "description": props.description,
      "sku": props.sku,
      "offers": {
        "@type": "Offer",
        "url": `https://kushalcreations.com/products/${props.sku.toLowerCase()}`,
        "priceCurrency": props.currency,
        "price": props.price,
        "availability": props.availability === "InStock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": props.ratingValue,
        "reviewCount": props.reviewCount
      }
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
