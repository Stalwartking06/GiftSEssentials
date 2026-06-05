import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import styles from "./blogPage.module.css";

export const metadata: Metadata = {
  title: "Spiritual Living & Puja Guides | Kushal Creation's Blog",
  description: "Read about clearing negative energy at home, decorating family altars, and picking organic bamboo-free incense. Detailed guides by our experts.",
  alternates: {
    canonical: "https://kushalcreations.com/blog",
  },
  openGraph: {
    title: "Spiritual Living & Puja Guides | Kushal Creation's Blog",
    description: "Read about clearing negative energy at home, decorating family altars, and picking organic incense.",
    url: "https://kushalcreations.com/blog",
    type: "website",
  }
};

export default function Page() {
  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "BLOG" }]} />

      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <p className={styles.sub}>SACRED KNOWLEDGE</p>
            <h1>Spiritual Living Blog</h1>
            <p className={styles.desc}>
              Explore our collection of articles detailing Vedic rituals, incense therapies, and tips to invoke positive vibrations in your living space.
            </p>
          </div>
        </Container>
      </header>

      <section className={styles.blogSection}>
        <Container>
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.content}>
                  <span className={styles.category}>{post.category}</span>
                  <h2 className={styles.cardTitle}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.meta}>
                    <span className={styles.author}>{post.author}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className={styles.readBtn}>
                    READ GUIDE →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
