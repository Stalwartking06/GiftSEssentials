"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiUser, FiPackage, FiMapPin, FiHeart } from "react-icons/fi";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import styles from "./accountPage.module.css";

export default function Page() {
  const [user, setUser] = useState({
    name: "Akshat Varma",
    email: "akshat.varma@gmail.com",
    phone: "+91 98765 43210",
  });

  const orders = [
    {
      id: "KC-2026-9281",
      date: "May 28, 2026",
      status: "Delivered",
      total: 640,
      item: "Dhoop Sticks Pack Of 3",
    },
    {
      id: "KC-2026-7712",
      date: "April 15, 2026",
      status: "Delivered",
      total: 1869,
      item: "Shubh Puja Thali",
    },
  ];

  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "ACCOUNT" }]} />

      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <FiUser className={styles.userIcon} />
            <h1>Welcome, {user.name}</h1>
            <p className={styles.desc}>Manage your profile details and view past transactions.</p>
          </div>
        </Container>
      </header>

      <section className={styles.section}>
        <Container>
          <div className={styles.layout}>
            {/* PROFILE DETAILS CARD */}
            <div className={styles.sidebar}>
              <div className={styles.profileCard}>
                <h3>Profile Information</h3>
                <div className={styles.detailRow}>
                  <span>NAME</span>
                  <p>{user.name}</p>
                </div>
                <div className={styles.detailRow}>
                  <span>EMAIL</span>
                  <p>{user.email}</p>
                </div>
                <div className={styles.detailRow}>
                  <span>PHONE</span>
                  <p>{user.phone}</p>
                </div>
                <button className={styles.editBtn}>EDIT PROFILE</button>
              </div>
            </div>

            {/* ORDER HISTORY */}
            <div className={styles.main}>
              <div className={styles.historyCard}>
                <h2>
                  <FiPackage />
                  <span>Recent Sacred Orders</span>
                </h2>

                {orders.length === 0 ? (
                  <p className={styles.noOrders}>No orders placed yet.</p>
                ) : (
                  <div className={styles.ordersList}>
                    {orders.map((ord) => (
                      <div key={ord.id} className={styles.orderItem}>
                        <div className={styles.orderMeta}>
                          <h4>{ord.item}</h4>
                          <p>Order ID: {ord.id} • Date: {ord.date}</p>
                        </div>
                        <div className={styles.orderStatus}>
                          <span className={styles.statusBadge}>{ord.status}</span>
                          <p className={styles.price}>₹{ord.total}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ADDRESS BOOK */}
              <div className={styles.addressCard}>
                <h2>
                  <FiMapPin />
                  <span>Saved Addresses</span>
                </h2>
                <div className={styles.address}>
                  <h4>Home Altar Address</h4>
                  <p>{user.name}</p>
                  <p>12/A Gokul Enclave, Sector 4,</p>
                  <p>Noida, Uttar Pradesh - 201301</p>
                  <p>Mobile: {user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
