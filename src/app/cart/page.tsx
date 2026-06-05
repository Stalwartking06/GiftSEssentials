"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { useShop } from "@/context/ShopContext";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import styles from "./cartPage.module.css";

export default function Page() {
  const { cart, updateQuantity, removeFromCart, cartTotal, cartCount } = useShop();

  const FREE_SHIPPING_THRESHOLD = 999;
  const needForFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;
  const progressPercent = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "CART" }]} />

      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <FiShoppingBag className={styles.bagIcon} />
            <h1>Shopping Cart</h1>
            <p className={styles.desc}>Review your divine selection before secure checkout.</p>
          </div>
        </Container>
      </header>

      <section className={styles.contentSection}>
        <Container>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p>Your shopping cart is empty.</p>
              <Link href="/" className={styles.shopBtn}>
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className={styles.layout}>
              {/* LEFT: PRODUCTS LIST */}
              <div className={styles.cartItemsCol}>
                {cart.map((item) => (
                  <div key={item.product.id} className={styles.cartItem}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.title}
                        width={100}
                        height={100}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.details}>
                      <h3>
                        <Link href={`/products/${item.product.slug}`}>
                          {item.product.title}
                        </Link>
                      </h3>
                      <p className={styles.subtitle}>{item.product.subtitle}</p>
                      <div className={styles.pricing}>
                        <span className={styles.price}>₹{item.product.offerPrice}</span>
                        {item.product.oldPrice > item.product.offerPrice && (
                          <span className={styles.oldPrice}>₹{item.product.oldPrice}</span>
                        )}
                      </div>
                    </div>
                    <div className={styles.controls}>
                      <div className={styles.quantity}>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT: SUMMARY CARD */}
              <div className={styles.summaryCol}>
                {/* SHIPPING */}
                <div className={styles.shippingBox}>
                  {needForFreeShipping > 0 ? (
                    <p className={styles.shippingText}>
                      Add <span>₹{needForFreeShipping}</span> more for <strong>FREE SHIPPING</strong>
                    </p>
                  ) : (
                    <p className={styles.shippingTextSuccess}>
                      🎉 You qualify for <strong>FREE SHIPPING!</strong>
                    </p>
                  )}
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className={styles.summaryCard}>
                  <h3>Order Summary</h3>
                  <div className={styles.summaryRow}>
                    <span>Items Count</span>
                    <span>{cartCount}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Standard Shipping</span>
                    <span>{needForFreeShipping > 0 ? "₹99" : "FREE"}</span>
                  </div>
                  <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span>ESTIMATED TOTAL</span>
                    <span>
                      ₹{cartTotal + (needForFreeShipping > 0 ? 99 : 0)}
                    </span>
                  </div>
                  <Link href="/checkout" className={styles.checkoutBtn}>
                    PROCEED TO CHECKOUT
                  </Link>
                  <Link href="/" className={styles.continueBtn}>
                    CONTINUE SHOPPING
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </MainLayout>
  );
}
