"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { generalFAQs } from "@/data/faq";
import Container from "../../common/Container/Container";
import styles from "./faqSection.module.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.heading}>
          <p>HAVE QUESTIONS?</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.accordion}>
          {generalFAQs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                <button className={styles.question} onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                <div className={styles.answerWrapper}>
                  <div className={styles.answer}>{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
