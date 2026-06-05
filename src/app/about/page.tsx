import React from "react";
import type { Metadata } from "next";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";
import Container from "@/components/common/Container/Container";
import styles from "./aboutPage.module.css";

export const metadata: Metadata = {
  title: "Our Brand Story & Sacred Values | Kushal Creation's",
  description: "Learn about Kushal Creation's history, supporting local Aligarh and Jaipur craftsmen, and why we refuse to use bamboo or chemical binders in our incense.",
  alternates: {
    canonical: "https://kushalcreations.com/about",
  }
};

export default function Page() {
  return (
    <MainLayout>
      <Breadcrumbs items={[{ label: "ABOUT US" }]} />

      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <p className={styles.sub}>ESTABLISHED WITH DEVOTION</p>
            <h1>Our Brand Story</h1>
            <p className={styles.desc}>
              Discover the heritage, principles, and local artisan connections behind every piece of sacred essence and brassware we offer.
            </p>
          </div>
        </Container>
      </header>

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.textBlock}>
              <h2>Preserving Sacred Vedic Traditions</h2>
              <p>
                Kushal Creation's was born out of a simple, profound realization: modern spiritual items have lost their sacred purity. Incense sticks are frequently bound with toxic charcoal and synthetic glue, and chemical binders are burned over bamboo—a wood scripturally forbidden from combustion in Vedic guidelines.
              </p>
              <p>
                We set out to change this. Our core commitment is absolute scriptural integrity. We manufacture incense and dhoops using 100% natural herbs, honey, ghee, and recycled temple flowers. Every stick is hand-rolled by women-led self-help groups in rural districts, ensuring social empowerment alongside spiritual purification.
              </p>

              <h2>Moradabad & Jaipur Brass Heritage</h2>
              <p>
                Every brass puja thali, camphor burner, and god idol in our collection is handpicked from native workshops in Moradabad and Jaipur. We partner directly with artisan lineages who have preserved brassware casting and engraving secrets for generations, bypassing middlemen to pay fair wages.
              </p>
            </div>

            <div className={styles.valuesCard}>
              <h3>OUR SACRED CODE</h3>
              <ul>
                <li>
                  <strong>Bamboo-Free:</strong> We strictly respect Vedic guidelines, refusing to use bamboo in any aromatic product.
                </li>
                <li>
                  <strong>Artisan Support:</strong> Direct fair-trade partnerships supporting over 50 rural Indian carving and rolling households.
                </li>
                <li>
                  <strong>Chemical-Free:</strong> Zero synthetic charcoal, benzene, or artificial scent binders. Pure, clean smoke only.
                </li>
                <li>
                  <strong>Devotional Intent:</strong> Every item is processed with deep meditative focus, bringing positive energy to your altar.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
