"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCheckCircle, FiShield, FiCreditCard } from "react-icons/fi";
import { useShop } from "@/context/ShopContext";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import styles from "./checkoutPage.module.css";

export default function Page() {
  const { cart, cartTotal, clearCart } = useShop();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
    payment: "cod",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate placing order
    setIsSuccess(true);
    clearCart();
  };

  const shipping = cartTotal >= 999 ? 0 : 99;

  if (isSuccess) {
    return (
      <MainLayout>
        <div className={styles.successSection}>
          <Container>
            <div className={styles.successCard}>
              <FiCheckCircle className={styles.successIcon} />
              <h1>Order Placed Successfully!</h1>
              <p className={styles.successSub}>
                Thank you for shopping with Kushal Creation's. Your order has been registered.
              </p>
              <div className={styles.receipt}>
                <h3>Transaction Receipt</h3>
                <p><strong>Order ID:</strong> KC-2026-{(Math.random() * 10000).toFixed(0)}</p>
                <p><strong>Customer Name:</strong> {formData.name}</p>
                <p><strong>Shipping Address:</strong> {formData.address}, {formData.city} - {formData.postal}</p>
                <p><strong>Estimated Delivery:</strong> 3 - 5 Business Days</p>
              </div>
              <Link href="/" className={styles.homeBtn}>
                CONTINUE SHOPPING
              </Link>
            </div>
          </Container>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "CHECKOUT" }]} />

      <section className={styles.section}>
        <Container>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p>No items in cart to checkout.</p>
              <Link href="/" className={styles.shopBtn}>
                RETURN TO SHOP
              </Link>
            </div>
          ) : (
            <div className={styles.layout}>
              {/* LEFT: SHIPPING DETAILS FORM */}
              <div className={styles.formCol}>
                <h2>Shipping & Sacred Delivery</h2>
                <form onSubmit={handlePlaceOrder} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Delivery Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter house, apartment and street address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Postal Code (PIN)</label>
                      <input
                        type="text"
                        name="postal"
                        placeholder="Enter PIN code"
                        value={formData.postal}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Payment Method</label>
                    <select
                      name="payment"
                      value={formData.payment}
                      onChange={handleInputChange}
                      className={styles.select}
                    >
                      <option value="cod">Cash on Delivery (COD)</option>
                      <option value="upi">Simulated UPI / Netbanking</option>
                    </select>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    PLACE SACRED ORDER (₹{cartTotal + shipping})
                  </button>
                </form>
              </div>

              {/* RIGHT: ORDER SUMMARY */}
              <div className={styles.summaryCol}>
                <div className={styles.summaryCard}>
                  <h3>Order Summary</h3>
                  <div className={styles.itemsList}>
                    {cart.map((item) => (
                      <div key={item.product.id} className={styles.checkoutItem}>
                        <div className={styles.imgWrapper}>
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.title}
                            width={40}
                            height={40}
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className={styles.itemMeta}>
                          <h4>{item.product.title}</h4>
                          <p>Qty: {item.quantity}</p>
                        </div>
                        <span className={styles.itemPrice}>
                          ₹{item.product.offerPrice * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.summaryRow}>
                    <span>Items Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Shipping Charges</span>
                    <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span>TOTAL PAYABLE</span>
                    <span>₹{cartTotal + shipping}</span>
                  </div>

                  <div className={styles.secureBox}>
                    <FiShield />
                    <span>Secure 256-bit SSL encrypted payments</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </MainLayout>
  );
}
