"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiHeart, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useShop } from "@/context/ShopContext";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import styles from "./wishlistPage.module.css";

export default function Page() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "WISHLIST" }]} />

      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <FiHeart className={styles.heartIcon} />
            <h1>Your Sacred Wishlist</h1>
            <p className={styles.desc}>
              Manage your saved spiritual essentials, and move them to your cart when ready.
            </p>
          </div>
        </Container>
      </header>

      <section className={styles.contentSection}>
        <Container>
          {wishlist.length === 0 ? (
            <div className={styles.empty}>
              <p>Your wishlist is empty. Explore our divine collections to add items.</p>
              <Link href="/" className={styles.shopBtn}>
                EXPLORE COLLECTIONS
              </Link>
            </div>
          ) : (
            <div className={styles.grid}>
              {wishlist.map((product) => (
                <article key={product.id} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromWishlist(product.id)}
                      aria-label="Remove item"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                  <div className={styles.content}>
                    <span className={styles.category}>SACRED ESSENTIALS</span>
                    <h3>
                      <Link href={`/products/${product.slug}`}>{product.title}</Link>
                    </h3>
                    <p className={styles.subtitle}>{product.subtitle}</p>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>₹{product.offerPrice}</span>
                      {product.oldPrice > product.offerPrice && (
                        <span className={styles.oldPrice}>₹{product.oldPrice}</span>
                      )}
                    </div>
                    <button
                      className={styles.cartBtn}
                      onClick={() => addToCart(product, 1)}
                    >
                      <FiShoppingBag />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>
    </MainLayout>
  );
}
