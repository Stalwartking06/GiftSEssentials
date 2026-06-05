"use client";

import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { products } from "@/data/products";
import Container from "../../common/Container/Container";
import styles from "./featuredCollections.module.css";

const FeaturedCollections = () => {
  // Filter combos/gift box products
  const featured = products.filter((prod) => prod.categorySlug === "festive-gift-boxes");

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p>SACRED COMBOS & GIFT BOXES</p>
          <h2>Featured Collections</h2>
        </div>

        <div className={styles.grid}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCollections;
