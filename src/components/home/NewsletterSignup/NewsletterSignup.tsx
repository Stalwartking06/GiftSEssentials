"use client";

import React, { useState } from "react";
import Container from "../../common/Container/Container";
import styles from "./newsletterSignup.module.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.subHeading}>JOIN KUSHAL CREATION'S SANGHA</p>
            <h2>Unlock 15% Off Your First Order</h2>
            <p className={styles.desc}>
              Subscribe to receive sacred aromatherapy guides, festival announcements, and exclusive early access to new divine collections.
            </p>

            {subscribed ? (
              <p className={styles.successMessage}>
                🌸 Namaste! You have successfully subscribed. Check your inbox for your 15% discount code.
              </p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.submitBtn}>
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterSignup;
