"use client";

import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Filters from "./Filters/Filters";
import { Product } from "@/types/product";
import { Category } from "@/types/category";
import styles from "./categoryListingClient.module.css";
import Container from "../common/Container/Container";

interface Props {
  category: Category;
  initialProducts: Product[];
}

const CategoryListingClient = ({ category, initialProducts }: Props) => {
  const highestPrice = initialProducts.reduce((max, p) => Math.max(max, p.offerPrice), 0);

  const [maxPrice, setMaxPrice] = useState<number>(highestPrice || 5000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured");

  // Filtering
  const filteredProducts = initialProducts.filter((product) => {
    const priceMatch = product.offerPrice <= maxPrice;
    const stockMatch = !inStockOnly || product.stock > 0;
    return priceMatch && stockMatch;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-high") {
      return a.offerPrice - b.offerPrice;
    }
    if (sortBy === "price-high-low") {
      return b.offerPrice - a.offerPrice;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0; // "featured" maintains initial layout order
  });

  return (
    <div className={styles.section}>
      <Container>
        <div className={styles.layout}>
          {/* SIDEBAR FILTERS */}
          <aside className={styles.sidebar}>
            <Filters
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              inStockOnly={inStockOnly}
              setInStockOnly={setInStockOnly}
              sortBy={sortBy}
              setSortBy={setSortBy}
              highestPrice={highestPrice}
            />
          </aside>

          {/* MAIN PRODUCT LIST */}
          <main className={styles.main}>
            <div className={styles.resultsCount}>
              <p>Showing {sortedProducts.length} of {initialProducts.length} spiritual items</p>
            </div>

            {sortedProducts.length === 0 ? (
              <div className={styles.noResults}>
                <h3>No Sacred Items Found</h3>
                <p>Try clearing your price slider or checking back later.</p>
              </div>
            ) : (
              <div className={styles.grid}>
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </Container>
    </div>
  );
};

export default CategoryListingClient;
