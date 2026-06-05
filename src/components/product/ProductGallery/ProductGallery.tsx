"use client";

import React, { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./productGallery.module.css";

interface Props {
  images: StaticImageData[];
  title: string;
}

const ProductGallery = ({ images, title }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.container}>
      {/* MAIN LARGE IMAGE */}
      <div className={styles.mainImageWrapper}>
        <Image
          src={images[activeIndex]}
          alt={`${title} - view ${activeIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
          priority
          placeholder="blur"
        />
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                className={`${styles.thumbBtn} ${isActive ? styles.active : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={img}
                  alt={`${title} thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  style={{ objectFit: "cover" }}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
