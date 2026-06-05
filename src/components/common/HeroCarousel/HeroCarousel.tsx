"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "../Container/Container";
import Image from "next/image";

import { heroSlides } from "../../../constants/carouselData";

import styles from "./heroCarousel.module.css";

const HeroCarousel = () => {
  return (
    <section className={styles.heroSection}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1200}
        loop
        className={styles.swiper}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.heroSlide}>
              <Image
                src={slide.image}
                alt={slide.title || "Hero Slide"}
                className={styles.heroImage}
                fill
                priority={index === 0}
              />

              {/* OVERLAY */}
              <div className={styles.overlay} />

              {/* CONTENT */}
              <Container large>
                <div className={styles.contentWrapper}>
                  <div className={styles.content}>
                    <p className={styles.subHeading}>
                      Traditional Collection
                    </p>

                    <h1 className={styles.heading}>
                      {slide.title}
                    </h1>

                    <p className={styles.description}>
                      {slide.subtitle}
                    </p>

                    <button className={styles.shopBtn}>
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;