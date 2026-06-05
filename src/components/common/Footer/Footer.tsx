import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

import Container from "../Container/Container";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* TOP ART */}
      <div className={styles.topArt}>
        <div className={styles.house} />
      </div>

      <Container>
        <div className={styles.wrapper}>
          {/* LOGO */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <div className={styles.logoCircle} />

              <h2>Kushal Creation's</h2>
            </div>
          </div>

          {/* SHOP */}
          <div className={styles.column}>
            <h3>SHOP</h3>

            <ul>
              <li>View All</li>
              <li>Spiritual Combos</li>
              <li>Incense</li>
              <li>Puja Essentials</li>
              <li>God Idols</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className={styles.column}>
            <h3>ABOUT</h3>

            <ul>
              <li>Our Story</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Returned & Refund</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={styles.column}>
            <h3>CONTACT</h3>

            <ul>
              <li>
                Email:
                support@kushalcreations.com
              </li>

              <li>
                Email:
                orders@kushalcreations.com
              </li>

              <li>
                Phone:
                +91 98765 43210
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className={styles.socials}>
            <div>
              <FiFacebook />
            </div>

            <div>
              <FiInstagram />
            </div>

            <div>
              <FiLinkedin />
            </div>

            <div>
              <FiYoutube />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          © 2026 Kushal Creation's. All Rights
          Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;