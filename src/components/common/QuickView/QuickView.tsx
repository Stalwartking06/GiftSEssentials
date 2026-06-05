"use client";

import React from "react";
import Image from "next/image";
import { FiX, FiShoppingBag, FiHeart } from "react-icons/fi";
import { useShop } from "@/context/ShopContext";
import styles from "./quickView.module.css";

const QuickView = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, addToWishlist, isInWishlist } = useShop();

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, 1);
    setQuickViewProduct(null); // Close modal on add
  };

  const hasDiscount = quickViewProduct.oldPrice > quickViewProduct.offerPrice;

  return (
    <div className={styles.overlay} onClick={() => setQuickViewProduct(null)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* CLOSE BTN */}
        <button className={styles.closeBtn} onClick={() => setQuickViewProduct(null)}>
          <FiX />
        </button>

        <div className={styles.content}>
          {/* LEFT: IMAGE */}
          <div className={styles.imageCol}>
            <div className={styles.badgeWrapper}>
              {hasDiscount && <span className={styles.discountBadge}>{quickViewProduct.discount}</span>}
              {quickViewProduct.badge && <span className={styles.customBadge}>{quickViewProduct.badge}</span>}
            </div>
            <div className={styles.mainImage}>
              <Image
                src={quickViewProduct.images[0]}
                alt={quickViewProduct.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className={styles.detailsCol}>
            <p className={styles.category}>SACRED PRODUCTS</p>
            <h2>{quickViewProduct.title}</h2>
            <p className={styles.subtitle}>{quickViewProduct.subtitle}</p>

            {/* RATINGS */}
            <div className={styles.ratingRow}>
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.reviews}>({quickViewProduct.reviews.length} Customer Reviews)</span>
            </div>

            {/* PRICE */}
            <div className={styles.priceRow}>
              <span className={styles.offerPrice}>₹{quickViewProduct.offerPrice}</span>
              {hasDiscount && (
                <>
                  <span className={styles.oldPrice}>₹{quickViewProduct.oldPrice}</span>
                  <span className={styles.savingText}>Save ₹{quickViewProduct.oldPrice - quickViewProduct.offerPrice}</span>
                </>
              )}
            </div>

            <p className={styles.description}>{quickViewProduct.description}</p>

            {/* QUICK SPECS */}
            <div className={styles.specs}>
              <h4>HIGHLIGHTS:</h4>
              <ul>
                {quickViewProduct.specifications.slice(0, 3).map((spec, i) => (
                  <li key={i}>
                    <strong>{spec.label}:</strong> {spec.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* BUTTONS */}
            <div className={styles.actions}>
              <button className={styles.cartBtn} onClick={handleAddToCart}>
                <FiShoppingBag />
                <span>ADD TO CART</span>
              </button>

              <button
                className={styles.wishlistBtn}
                onClick={() => addToWishlist(quickViewProduct)}
                disabled={isInWishlist(quickViewProduct.id)}
              >
                <FiHeart style={{ fill: isInWishlist(quickViewProduct.id) ? "var(--primary)" : "none" }} />
              </button>
            </div>

            <p className={styles.sku}>SKU: {quickViewProduct.sku}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
