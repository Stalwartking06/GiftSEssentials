import React from "react";
import Link from "next/link";
import styles from "./breadcrumbs.module.css";
import Container from "../Container/Container";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <nav aria-label="Breadcrumb" className={styles.nav}>
          <ol className={styles.list}>
            <li>
              <Link href="/" className={styles.link}>
                HOME
              </Link>
            </li>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className={styles.item}>
                  <span className={styles.separator}>/</span>
                  {isLast || !item.url ? (
                    <span className={styles.active} aria-current="page">
                      {item.label.toUpperCase()}
                    </span>
                  ) : (
                    <Link href={item.url} className={styles.link}>
                      {item.label.toUpperCase()}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
