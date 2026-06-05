"use client";

import React, { useState } from "react";
import { FiShoppingBag, FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { Product } from "@/types/product";
import { useShop } from "@/context/ShopContext";
import styles from "./productBuyPanel.module.css";

interface Props {
  product: Product;
}

const ProductBuyPanel = ({ product }: Props) => {
  const { addToCart, addToWishlist, isInWishlist, removeFromWishlist } = useShop();
  const [qty, setQty] = useState(1);

  const isFav = isInWishlist(product.id);

  const handleQtyChange = (val: number) => {
    if (val < 1) return;
    setQty(val);
  };

  const handleAddToCart = () => {
    addToCart(product, qty);
  };

  const handleWishlistToggle = () => {
    if (isFav) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className={styles.container}>
      {/* STOCK BADGE */}
      <div className={styles.stockRow}>
        {product.stock > 0 ? (
          <span className={styles.inStock}>● IN STOCK ({product.stock} items left)</span>
        ) : (
          <span className={styles.outOfStock}>● OUT OF STOCK</span>
        )}
        <span className={styles.sku}>SKU: {product.sku}</span>
      </div>

      {/* COUNTER & BUTTONS */}
      {product.stock > 0 && (
        <div className={styles.actionsRow}>
          <div className={styles.counter}>
            <button onClick={() => handleQtyChange(qty - 1)} aria-label="Decrease quantity">
              <FiMinus />
            </button>
            <span>{qty}</span>
            <button onClick={() => handleQtyChange(qty + 1)} aria-label="Increase quantity">
              <FiPlus />
            </button>
          </div>

          <button className={styles.cartBtn} onClick={handleAddToCart}>
            <FiShoppingBag />
            <span>ADD TO CART</span>
          </button>

          <button
            className={`${styles.wishlistBtn} ${isFav ? styles.activeWishlist : ""}`}
            onClick={handleWishlistToggle}
            aria-label="Add to wishlist"
          >
            <FiHeart style={{ fill: isFav ? "var(--primary)" : "none" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductBuyPanel;
