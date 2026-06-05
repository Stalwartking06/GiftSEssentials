import Container from "../../common/Container/Container";

import { categoryItems } from "../../../constants/categoryData";

import Image from "next/image";

import styles from "./categoryShowcase.module.css";

const CategoryShowcase = () => {
  return (
    <section className={styles.section}>
      <Container>
        {/* HEADING */}
        <div className={styles.heading}>
          <p>Explore Sacred Collections</p>

          <h2>Shop By Categories</h2>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {categoryItems.map((item, index) => (
            <article key={index} className={styles.card}>
              <Image
                src={item.image}
                alt={item.title || "Category"}
                className={styles.image}
                fill
              />
              {/* OVERLAY */}
              <div className={styles.overlay} />

              {/* CONTENT */}
              <div className={styles.content}>
                <h3>{item.title}</h3>

                <button>Explore</button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryShowcase;
