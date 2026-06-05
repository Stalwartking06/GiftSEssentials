"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import "swiper/css";

import { topOffers } from "../../../constants/carouselData";

import styles from "./topOfferBar.module.css";

const TopOfferBar = () => {
  return (
    <section className={styles.offerBar}>
      {" "}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        loop
      >
        {topOffers.map((offer, index) => (
          <SwiperSlide key={index}>
            <p className={styles.offerText}>{offer}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TopOfferBar;
