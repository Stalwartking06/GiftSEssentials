import {
  GiHerbsBundle,
} from "react-icons/gi";

import {
  PiPlant,
  PiScroll,
} from "react-icons/pi";

import {
  LiaHandsHelpingSolid,
} from "react-icons/lia";

import Container from "../../common/Container/Container";

import styles from "./whyDifferent.module.css";

const features = [
  {
    icon: <GiHerbsBundle />,
    title: "Pure\nIngredient",
  },

  {
    icon: <PiPlant />,
    title: "Ethically\nSourced",
  },

  {
    icon: <PiScroll />,
    title: "Scripture\nBacked",
  },

  {
    icon: <LiaHandsHelpingSolid />,
    title: "Handcrafted\nBy Artisan",
  },
];

const WhyDifferent = () => {
  return (
    <section className={styles.section}>
      {/* TOP WAVE */}
      <div className={styles.wave} />

      <Container>
        <div className={styles.wrapper}>
          {/* HEADING */}
          <h2 className={styles.heading}>
            WHAT MAKES US DIFFERENT
          </h2>

          {/* FEATURES */}
          <div className={styles.grid}>
            {features.map((item, index) => (
              <div
                key={index}
                className={styles.item}
              >
                <div className={styles.icon}>
                  {item.icon}
                </div>

                <h3>
                  {item.title
                    .split("\n")
                    .map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                </h3>

                {/* Divider */}
                {index !==
                  features.length - 1 && (
                  <div
                    className={styles.divider}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyDifferent;