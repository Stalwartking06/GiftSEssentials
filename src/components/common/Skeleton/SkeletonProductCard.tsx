"use client";

import React from "react";
import styles from "./skeleton.module.css";

export const SkeletonProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageShimmer} />
      <div className={styles.content}>
        <div className={styles.tagShimmer} />
        <div className={styles.titleShimmer} />
        <div className={styles.subtitleShimmer} />
        <div className={styles.priceShimmer} />
      </div>
    </div>
  );
};

export const SkeletonGrid = () => {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 6 }).map((_, i) => (
        <SkeletonProductCard key={i} />
      ))}
    </div>
  );
};
