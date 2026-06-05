"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiShoppingBag, FiEye } from "react-icons/fi";
import { Product } from "@/types/product";
import { useShop } from "@/context/ShopContext";
import styles from "./productCard.module.css";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist, setQuickViewProduct } = useShop();

  const isFav = isInWishlist(product.id);
  const hasDiscount = product.oldPrice > product.offerPrice;

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFav) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    setQuickViewProduct(product);
  };

  return (
    <article className={styles.card}>
      {/* IMAGE CONTAINER */}
      <div className={styles.imageWrapper}>
        <Link href={`/products/${product.slug}`} className={styles.imgLink}>
          <Image
            src={product.images[0]}
            alt={product.title}
            className={styles.image}
            placeholder="blur"
          />
        </Link>
        
        {/* BADGES */}
        <div className={styles.topRow}>
          {hasDiscount && <span className={styles.discount}>{product.discount}</span>}
          {product.badge && <span className={styles.badge}>{product.badge}</span>}
        </div>

        {/* QUICK VIEW HOVER BUTTON */}
        <button className={styles.quickViewBtn} onClick={handleQuickView} aria-label="Quick View">
          <FiEye />
        </button>

        {/* WISHLIST TOGGLE */}
        <button
          className={`${styles.wishlist} ${isFav ? styles.activeWishlist : ""}`}
          onClick={handleWishlistToggle}
          aria-label="Add to wishlist"
        >
          <FiHeart style={{ fill: isFav ? "var(--primary)" : "none" }} />
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <p className={styles.category}>Sacred Essentials</p>

        <h3>
          <Link href={`/products/${product.slug}`}>{product.title}</Link>
        </h3>

        <p className={styles.subtitle}>{product.subtitle}</p>

        {/* PRICE */}
        <div className={styles.priceRow}>
          <span className={styles.price}>₹{product.offerPrice}</span>
          {hasDiscount && <span className={styles.oldPrice}>₹{product.oldPrice}</span>}
        </div>

        {/* REVIEWS */}
        <div className={styles.reviewRow}>
          <span>★★★★★</span>
          <p>{product.reviews.length} reviews</p>
        </div>

        {/* OFFER PRICE */}
        {hasDiscount && (
          <p className={styles.offerPriceText}>Offer Price: ₹{product.offerPrice}</p>
        )}

        {/* CART ACTION */}
        <button className={styles.cartBtn} onClick={handleAddToCart}>
          <FiShoppingBag />
          <span>ADD TO CART</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
