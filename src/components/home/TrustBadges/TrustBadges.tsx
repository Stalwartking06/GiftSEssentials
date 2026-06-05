import React from "react";
import { GiHerbsBundle, GiLotus } from "react-icons/gi";
import { PiPlant, PiScroll } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import styles from "./trustBadges.module.css";
import Container from "../../common/Container/Container";

const items = [
  {
    icon: <GiHerbsBundle />,
    title: "100% PURE INGREDIENTS",
    desc: "Naturally rolled floral petals, essential oils, and herbal extracts."
  },
  {
    icon: <PiPlant />,
    title: "ETHICALLY SOURCED",
    desc: "Fairtrade practices supporting local Himalayan harvesting families."
  },
  {
    icon: <PiScroll />,
    title: "SCRIPTURE BACKED",
    desc: "Bamboo-free and charcoal-free formulas compliant with Vedic rituals."
  },
  {
    icon: <LiaHandsHelpingSolid />,
    title: "ARTISAN HANDCRAFTED",
    desc: "Individually hand-rolled and polished by master regional craftsmen."
  }
];

const TrustBadges = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.badgeItem}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div className={styles.textWrapper}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustBadges;
