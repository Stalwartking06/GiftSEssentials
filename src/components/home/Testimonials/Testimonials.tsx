"use client";

import React from "react";
import Container from "../../common/Container/Container";
import styles from "./testimonials.module.css";

const reviews = [
  {
    rating: 5,
    quote: "The Loban incense sticks have changed my meditation practice. The aroma is incredibly pure, earthy, and soothing. I love that they are completely bamboo-free.",
    author: "Shanti Devi",
    location: "Rishikesh",
    verified: true
  },
  {
    rating: 5,
    quote: "The brass Shubh Puja Thali is heavy, well-polished, and beautifully crafted. It has added a divine golden shine to our home mandir. Perfect packaging!",
    author: "Rahul Krishnan",
    location: "Chennai",
    verified: true
  },
  {
    rating: 5,
    quote: "Kushal Creation's gift boxes are my go-to choice for festival gifting now. The Ganesha idol is stunning and the fragrance of the incense cones is premium.",
    author: "Sneha Kapur",
    location: "Mumbai",
    verified: true
  }
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p>TESTIMONIALS</p>
          <h2>Loved By Devotees</h2>
        </div>

        <div className={styles.grid}>
          {reviews.map((rev, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>{"★".repeat(rev.rating)}</div>
              <p className={styles.quote}>"{rev.quote}"</p>
              <div className={styles.meta}>
                <h4 className={styles.author}>{rev.author}</h4>
                <span className={styles.location}>{rev.location}</span>
                {rev.verified && <span className={styles.badge}>VERIFIED BUYER</span>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
