import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import StructuredData from "@/components/common/StructuredData/StructuredData";
import styles from "./blogPostPage.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `https://kushalcreations.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://kushalcreations.com/blog/${post.slug}`,
      images: [
        {
          url: post.image.src,
          alt: post.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get other blog posts as recommendations
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id);

  // Breadcrumbs JSON-LD
  const breadcrumbItems = [
    { position: 1, name: "Home", item: "https://kushalcreations.com" },
    { position: 2, name: "Blog", item: "https://kushalcreations.com/blog" },
    { position: 3, name: post.title, item: `https://kushalcreations.com/blog/${post.slug}` }
  ];

  return (
    <MainLayout>
      {/* JSON-LD Schemas */}
      <StructuredData type="BreadcrumbList" items={breadcrumbItems} />

      {/* BREADCRUMBS */}
      <Breadcrumbs items={[{ label: "BLOG", url: "/blog" }, { label: post.title }]} />

      <article className={styles.postContainer}>
        <Container>
          {/* HEADER */}
          <header className={styles.header}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span className={styles.author}>By {post.author}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.date}>{post.date}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
          </header>

          {/* FEATURED IMAGE */}
          <div className={styles.imageWrapper}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              priority
              placeholder="blur"
            />
          </div>

          {/* BODY CONTENT */}
          <div className={styles.bodyLayout}>
            <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
          </div>
        </Container>
      </article>

      {/* RELATED BLOG POSTS */}
      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <Container>
            <div className={styles.relatedHeading}>
              <h2>Related Spiritual Guides</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((rel) => (
                <div key={rel.id} className={styles.relatedCard}>
                  <h3>
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p>{rel.excerpt}</p>
                  <Link href={`/blog/${rel.slug}`} className={styles.readLink}>
                    READ GUIDE →
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </MainLayout>
  );
}
