import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import CategoryListingClient from "@/components/category/CategoryListingClient";
import Container from "@/components/common/Container/Container";
import StructuredData from "@/components/common/StructuredData/StructuredData";
import styles from "./categoryPage.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    alternates: {
      canonical: `https://kushalcreations.com/categories/${category.slug}`,
    },
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      url: `https://kushalcreations.com/categories/${category.slug}`,
      siteName: "Kushal Creation's",
      images: [
        {
          url: "https://kushalcreations.com/og-image.png",
          alt: category.title,
        },
      ],
      type: "website",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  // Filter products belonging to this category
  const categoryProducts = products.filter((prod) => prod.categorySlug === category.slug);

  // Map breadcrumbs items for SEO Schema and Component
  const breadcrumbItems = [
    { position: 1, name: "Home", item: "https://kushalcreations.com" },
    { position: 2, name: category.title, item: `https://kushalcreations.com/categories/${category.slug}` }
  ];

  return (
    <MainLayout>
      {/* Dynamic JSON-LD Breadcrumbs Schema */}
      <StructuredData type="BreadcrumbList" items={breadcrumbItems} />

      {/* BREADCRUMBS */}
      <Breadcrumbs items={[{ label: category.title }]} />

      {/* CATEGORY HEADER */}
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <p className={styles.sub}>SACRED COLLECTION</p>
            <h1>{category.title}</h1>
            <p className={styles.desc}>{category.description}</p>
          </div>
        </Container>
      </header>

      {/* PRODUCT LISTING & INTERACTIVE FILTERS */}
      <CategoryListingClient category={category} initialProducts={categoryProducts} />

      {/* CATEGORY SPECIFIC FAQ SECTION */}
      {category.faqs && category.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <Container>
            <div className={styles.faqHeading}>
              <p>HAVE QUESTIONS ABOUT {category.title.toUpperCase()}?</p>
              <h2>Category FAQs</h2>
            </div>
            <div className={styles.accordion}>
              {category.faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </MainLayout>
  );
}
