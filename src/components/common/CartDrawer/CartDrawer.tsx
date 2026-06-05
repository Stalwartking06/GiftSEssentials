"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { useShop } from "@/context/ShopContext";
import styles from "./cartDrawer.module.css";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    cartCount,
  } = useShop();

  const FREE_SHIPPING_THRESHOLD = 999;
  const needForFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;
  const progressPercent = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  if (!isCartOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <FiShoppingBag className={styles.bagIcon} />
            <h2>YOUR CART ({cartCount})</h2>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
            <FiX />
          </button>
        </div>

        {/* FREE SHIPPING PROGRESS */}
        <div className={styles.shippingBar}>
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

        {/* CART ITEMS */}
        <div className={styles.itemsList}>
          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Your cart is empty.</p>
              <button className={styles.shopNowBtn} onClick={() => setIsCartOpen(false)}>
                SHOP CURRENT DEALS
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.product.id} className={styles.cartItem}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.title}
                    width={80}
                    height={80}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.details}>
                  <h3>{item.product.title}</h3>
                  <p className={styles.subtitle}>{item.product.subtitle}</p>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>₹{item.product.offerPrice}</span>
                    {item.product.oldPrice > item.product.offerPrice && (
                      <span className={styles.oldPrice}>₹{item.product.oldPrice}</span>
                    )}
                  </div>
                  <div className={styles.actions}>
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
                      className={styles.deleteBtn}
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summaryRow}>
              <span>SUBTOTAL</span>
              <span className={styles.totalPrice}>₹{cartTotal}</span>
            </div>
            <p className={styles.taxNote}>Shipping & taxes calculated at checkout</p>
            <Link
              href="/checkout"
              className={styles.checkoutBtn}
              onClick={() => setIsCartOpen(false)}
            >
              PROCEED TO SECURE CHECKOUT
            </Link>
            <button className={styles.continueBtn} onClick={() => setIsCartOpen(false)}>
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
