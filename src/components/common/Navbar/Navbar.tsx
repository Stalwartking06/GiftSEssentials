"use client";

import { useEffect, useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useShop } from "@/context/ShopContext";
import Container from "../Container/Container";
import { navbarLinks } from "../../../constants/navbar";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount, wishlist, setIsCartOpen } = useShop();
  const router = useRouter();

  /* LOCK BODY SCROLL */
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <div className={styles.navbarWrapper}>
      <Container>
        <nav className={styles.navbar}>
          {/* LEFT */}
          <div className={styles.left}>
            {/* MOBILE BTN */}
            <button
              className={styles.mobileBtn}
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle Menu"
            >
              {mobileMenu ? <FiX /> : <FiMenu />}
            </button>

            {/* LOGO */}
            <Link href="/" className={styles.logoWrapper}>
              <div className={styles.logoCircle} />
              <h1 className={styles.logo}>Kushal Creation's</h1>
            </Link>
          </div>

          {/* DESKTOP NAV or SEARCH */}
          <div className={styles.navContainer}>
            {searchOpen ? (
              <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                <input
                  type="text"
                  placeholder="Search divine gifts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  autoFocus
                />
                <button type="submit" className={styles.searchSubmitBtn} aria-label="Submit Search">
                  <FiSearch />
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className={styles.searchCloseBtn}
                  aria-label="Close Search"
                >
                  <FiX />
                </button>
              </form>
            ) : (
              <ul className={styles.navLinks}>
                {navbarLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.path} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            {!searchOpen && (
              <button
                className={styles.iconBtn}
                onClick={() => setSearchOpen(true)}
                aria-label="Open Search"
              >
                <FiSearch />
              </button>
            )}

            <Link href="/wishlist" className={styles.iconLink} aria-label="View Wishlist">
              <span className={styles.iconBtn} style={{ position: "relative" }}>
                <FiHeart />
                {wishlist.length > 0 && (
                  <span className={styles.badge}>{wishlist.length}</span>
                )}
              </span>
            </Link>

            <button
              className={styles.iconBtn}
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Cart"
              style={{ position: "relative" }}
            >
              <FiShoppingBag />
              {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* MOBILE OVERLAY */}
      <div
        className={`${styles.overlay} ${
          mobileMenu ? styles.activeOverlay : ""
        }`}
        onClick={() => setMobileMenu(false)}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`${styles.drawer} ${
          mobileMenu ? styles.activeDrawer : ""
        }`}
      >
        {/* Mobile Search inside drawer */}
        <form onSubmit={handleSearchSubmit} className={styles.mobileSearchForm}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.mobileSearchInput}
          />
          <button type="submit" className={styles.mobileSearchSubmit} aria-label="Search">
            <FiSearch />
          </button>
        </form>

        <ul className={styles.mobileLinks}>
          {navbarLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.path}
                onClick={() => setMobileMenu(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/wishlist" onClick={() => setMobileMenu(false)}>
              Wishlist ({wishlist.length})
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;