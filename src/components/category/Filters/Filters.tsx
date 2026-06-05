"use client";

import React from "react";
import styles from "./filters.module.css";

interface FiltersProps {
  maxPrice: number;
  setMaxPrice: (val: number) => void;
  inStockOnly: boolean;
  setInStockOnly: (val: boolean) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  highestPrice: number;
}

const Filters = ({
  maxPrice,
  setMaxPrice,
  inStockOnly,
  setInStockOnly,
  sortBy,
  setSortBy,
  highestPrice
}: FiltersProps) => {
  return (
    <div className={styles.container}>
      {/* FILTER BY PRICE */}
      <div className={styles.filterGroup}>
        <h3>FILTER BY PRICE</h3>
        <div className={styles.rangeWrapper}>
          <input
            type="range"
            min={0}
            max={highestPrice}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className={styles.rangeInput}
          />
          <div className={styles.rangeLabels}>
            <span>₹0</span>
            <span>Max: ₹{maxPrice}</span>
          </div>
        </div>
      </div>

      {/* FILTER BY AVAILABILITY */}
      <div className={styles.filterGroup}>
        <h3>AVAILABILITY</h3>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className={styles.checkbox}
          />
          <span>In Stock Only</span>
        </label>
      </div>

      {/* SORT BY */}
      <div className={styles.filterGroup}>
        <h3>SORT BY</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.select}
        >
          <option value="featured">Featured Deals</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
