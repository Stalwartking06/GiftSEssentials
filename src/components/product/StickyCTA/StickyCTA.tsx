"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiShoppingBag } from "react-icons/fi";
import { Product } from "@/types/product";
import { useShop } from "@/context/ShopContext";
import styles from "./stickyCTA.module.css";
import Container from "../../common/Container/Container";

interface Props {
  product: Product;
}

const StickyCTA = ({ product }: Props) => {
  const { addToCart } = useShop();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls past 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className={`${styles.bar} ${isVisible ? styles.visible : ""}`}>
      <Container>
        <div className={styles.wrapper}>
          {/* IMAGE & DETAILS */}
          <div className={styles.infoCol}>
            <div className={styles.imgWrapper}>
              <Image
                src={product.images[0]}
                alt={product.title}
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.text}>
              <h3>{product.title}</h3>
              <p className={styles.price}>₹{product.offerPrice}</p>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <button className={styles.cartBtn} onClick={handleAddToCart}>
            <FiShoppingBag />
            <span>ADD TO CART</span>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default StickyCTA;
