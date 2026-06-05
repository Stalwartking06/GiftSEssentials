import ProductCard from "../ProductCard/ProductCard";
import { products } from "@/data/products";
import styles from "./bestSeller.module.css";
import Container from "../common/Container/Container";

const BestSellerSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <h1>BEST SELLERS</h1>

          <p>
            MOST LOVED SACRED ESSENTIALS
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className={styles.viewAll}>
          <button>VIEW ALL</button>
        </div>
      </Container>
    </section>
  );
};

export default BestSellerSection;