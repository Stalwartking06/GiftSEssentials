import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import ProductGallery from "@/components/product/ProductGallery/ProductGallery";
import ProductBuyPanel from "@/components/product/ProductBuyPanel/ProductBuyPanel";
import StickyCTA from "@/components/product/StickyCTA/StickyCTA";
import ProductCard from "@/components/ProductCard/ProductCard";
import Container from "@/components/common/Container/Container";
import StructuredData from "@/components/common/StructuredData/StructuredData";
import styles from "./productPage.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((prod) => prod.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const seoTitle = `${product.title} | Kushal Creation's`;
  const seoDescription = `${product.subtitle}. ${product.description.slice(0, 120)}...`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `https://kushalcreations.com/products/${product.slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `https://kushalcreations.com/products/${product.slug}`,
      siteName: "Kushal Creation's",
      images: [
        {
          url: product.images[0].src,
          alt: product.title,
        },
      ],
      type: "music.song", // Wait, standard type is article/website, let's use 'website'
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = products.find((prod) => prod.slug === slug);

  if (!product) {
    notFound();
  }

  // Get cross-sell / related products
  const relatedProducts = products.filter(
    (p) =>
      p.id !== product.id &&
      (product.frequentlyBoughtTogetherSlugs?.includes(p.slug) ||
        p.categorySlug === product.categorySlug)
  );

  const hasDiscount = product.oldPrice > product.offerPrice;
  const savings = product.oldPrice - product.offerPrice;

  // JSON-LD Breadcrumbs
  const breadcrumbItems = [
    { position: 1, name: "Home", item: "https://kushalcreations.com" },
    { position: 2, name: "Products", item: "https://kushalcreations.com/products" },
    { position: 3, name: product.title, item: `https://kushalcreations.com/products/${product.slug}` }
  ];

  return (
    <MainLayout>
      {/* Dynamic SEO JSON-LD Schemas */}
      <StructuredData type="BreadcrumbList" items={breadcrumbItems} />
      <StructuredData
        type="Product"
        name={product.title}
        image={product.images[0].src}
        description={product.description}
        sku={product.sku}
        price={product.offerPrice}
        currency="INR"
        availability={product.stock > 0 ? "InStock" : "OutOfStock"}
        ratingValue={product.rating}
        reviewCount={product.reviews.length}
      />

      {/* STICKY CTA floated above scroll */}
      <StickyCTA product={product} />

      {/* BREADCRUMBS */}
      <Breadcrumbs items={[{ label: "PRODUCTS", url: "/" }, { label: product.title }]} />

      <section className={styles.pdpSection}>
        <Container>
          <div className={styles.grid}>
            {/* LEFT COLUMN: IMAGES */}
            <div className={styles.leftCol}>
              <ProductGallery images={product.images} title={product.title} />
            </div>

            {/* RIGHT COLUMN: DETAILS */}
            <div className={styles.rightCol}>
              <p className={styles.category}>SACRED ESSENTIALS</p>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.subtitle}>{product.subtitle}</p>

              {/* RATINGS */}
              <div className={styles.ratingRow}>
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.reviewsCount}>
                  ({product.reviews.length} customer reviews)
                </span>
              </div>

              {/* PRICE */}
              <div className={styles.priceRow}>
                <span className={styles.offerPrice}>₹{product.offerPrice}</span>
                {hasDiscount && (
                  <>
                    <span className={styles.oldPrice}>₹{product.oldPrice}</span>
                    <span className={styles.discountBadge}>{product.discount}</span>
                    <span className={styles.savingsText}>Save ₹{savings}</span>
                  </>
                )}
              </div>

              {/* DESCRIPTION */}
              <p className={styles.description}>{product.description}</p>

              {/* BENEFITS */}
              <div className={styles.benefits}>
                <h3>SPIRITUAL BENEFITS & USES:</h3>
                <ul>
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className={styles.lotusIcon}>🌸</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUY PANEL (CLIENT INTERACTIONS) */}
              <ProductBuyPanel product={product} />
            </div>
          </div>
        </Container>
      </section>

      {/* SPECIFICATIONS SECTION */}
      <section className={styles.specsSection}>
        <Container>
          <div className={styles.sectionHeading}>
            <h2>Product Specifications</h2>
          </div>
          <div className={styles.specsTable}>
            {product.specifications.map((spec, index) => (
              <div key={index} className={styles.specRow}>
                <div className={styles.specLabel}>{spec.label}</div>
                <div className={styles.specValue}>{spec.value}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* REVIEWS SECTION */}
      <section className={styles.reviewsSection}>
        <Container>
          <div className={styles.sectionHeading}>
            <h2>Customer Reviews ({product.reviews.length})</h2>
          </div>

          <div className={styles.reviewsList}>
            {product.reviews.map((rev) => (
              <div key={rev.id} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewMeta}>
                    <span className={styles.reviewStars}>{"★".repeat(rev.rating)}</span>
                    <h4>{rev.author}</h4>
                    <span className={styles.reviewDate}>{rev.date}</span>
                  </div>
                  {rev.verified && <span className={styles.verifiedBadge}>VERIFIED BUYER</span>}
                </div>
                <h3 className={styles.reviewTitle}>{rev.title}</h3>
                <p className={styles.reviewContent}>{rev.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CROSS SELLS / RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className={styles.relatedSection}>
          <Container>
            <div className={styles.sectionHeading}>
              <p>FREQUENTLY BOUGHT TOGETHER</p>
              <h2>Complete Your Puja Ritual</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedProducts.slice(0, 3).map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </MainLayout>
  );
}
