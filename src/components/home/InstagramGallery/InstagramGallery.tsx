import React from "react";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import HERO from "../../../assets/hero.png";
import Product1 from "../../../assets/Products/Product1.jpeg";
import Product2 from "../../../assets/Products/Product2.jpeg";
import Product3 from "../../../assets/Products/Product3.jpeg";
import styles from "./instagramGallery.module.css";
import Container from "../../common/Container/Container";

const galleryImages = [
  { image: HERO, tag: "@kushalcreations" },
  { image: Product1, tag: "#homepurity" },
  { image: Product2, tag: "#spiritualmandir" },
  { image: Product3, tag: "#bamboofreedhoop" }
];

const InstagramGallery = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p>SHARE THE DIVINE FLOW</p>
          <h2>Mandir Setups on Instagram</h2>
        </div>

        <div className={styles.grid}>
          {galleryImages.map((item, index) => (
            <div key={index} className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt="Spiritual mandir setup"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.overlay}>
                <FiInstagram className={styles.instaIcon} />
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InstagramGallery;
