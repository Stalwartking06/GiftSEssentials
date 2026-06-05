"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard/ProductCard";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import Filters from "@/components/category/Filters/Filters";
import { SkeletonGrid } from "@/components/common/Skeleton/SkeletonProductCard";
import styles from "./searchPage.module.css";

// MAIN SEARCH RESULTS COMPONENT (needs Suspense wrapping)
const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Initial filtering by query match
  const matchedProducts = products.filter((product) => {
    const term = query.toLowerCase();
    return (
      product.title.toLowerCase().includes(term) ||
      product.subtitle.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  const highestPrice = matchedProducts.reduce((max, p) => Math.max(max, p.offerPrice), 0);
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>("featured");

  useEffect(() => {
    if (highestPrice > 0) {
      setMaxPrice(highestPrice);
    }
  }, [highestPrice]);

  // Filtering
  const filteredProducts = matchedProducts.filter((product) => {
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
    return 0;
  });

  return (
    <div className={styles.contentSection}>
      <Container>
        <header className={styles.header}>
          <p className={styles.sub}>SEARCH RESULTS</p>
          <h1>Results for "{query}"</h1>
          <p className={styles.desc}>
            Showing {sortedProducts.length} spiritual items matching your search parameters.
          </p>
        </header>

        {matchedProducts.length === 0 ? (
          <div className={styles.empty}>
            <h3>No Divine Items Match Your Query</h3>
            <p>Try searching for "incense", "thali", or "combo".</p>
          </div>
        ) : (
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
                highestPrice={highestPrice || 5000}
              />
            </aside>

            {/* PRODUCT LIST */}
            <main className={styles.main}>
              <div className={styles.grid}>
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </main>
          </div>
        )}
      </Container>
    </div>
  );
};

// EXPORT WITH SUSPENSE
export default function Page() {
  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "SEARCH" }]} />
      <Suspense fallback={
        <div className={styles.contentSection}>
          <Container>
            <header className={styles.header} style={{ borderBottom: "none" }}>
              <p className={styles.sub}>SEARCHING</p>
              <h1>Connecting with divine items...</h1>
            </header>
            <SkeletonGrid />
          </Container>
        </div>
      }>
        <SearchResults />
      </Suspense>
    </MainLayout>
  );
}
