import React from "react";
import type { Metadata } from "next";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import styles from "./contactPage.module.css";

export const metadata: Metadata = {
  title: "Contact Our Customer Devotion Team | Kushal Creation's",
  description: "Get in touch with Kushal Creation's. Reach out for corporate orders, bulk custom festive hampers, or tracking queries.",
  alternates: {
    canonical: "https://kushalcreations.com/contact",
  }
};

export default function Page() {
  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "CONTACT US" }]} />

      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <p className={styles.sub}>WE ARE HERE TO HELP</p>
            <h1>Connect With Us</h1>
            <p className={styles.desc}>
              Reach out to our devotion team for support, custom order consultations, and bulk gifting queries.
            </p>
          </div>
        </Container>
      </header>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.grid}>
            {/* CONTACT INFO */}
            <div className={styles.infoCol}>
              <h2>Corporate & Workshop Details</h2>
              <p className={styles.lead}>
                Whether you have tracking queries or want to order bespoke brassware castings, we would love to hear from you.
              </p>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <FiMail className={styles.icon} />
                  <div>
                    <h4>SUPPORT EMAIL</h4>
                    <p>support@kushalcreations.com</p>
                    <p>orders@kushalcreations.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FiPhone className={styles.icon} />
                  <div>
                    <h4>PHONE SUPPORT</h4>
                    <p>+91 98765 43210</p>
                    <p>Mon - Sat (10:00 AM - 6:00 PM)</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <FiMapPin className={styles.icon} />
                  <div>
                    <h4>HEADQUARTERS & WORKSHOP</h4>
                    <p>Kushal Creation's Craft House,</p>
                    <p>Brassware Industrial Area, Moradabad, UP, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className={styles.formCol}>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter email" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Subject</label>
                  <input type="text" placeholder="Enter subject" required />
                </div>

                <div className={styles.formGroup}>
                  <label>Devotional Query / Message</label>
                  <textarea rows={5} placeholder="Write your message here" required />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
