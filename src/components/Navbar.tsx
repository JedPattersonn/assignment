"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Cantor College
      </Link>
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <Link href="/information-for-staff" className={styles.link}>
          Information for Staff
        </Link>
        <Link href="/information-for-students" className={styles.link}>
          Information for Students
        </Link>
        <Link href="/information-for-businesses" className={styles.link}>
          Information for Businesses
        </Link>
        <Link href="/learning-resources" className={styles.link}>
          Learning Resources
        </Link>
        <Link href="/courses" className={styles.link}>
          Courses
        </Link>
        <Link href="/facilities" className={styles.link}>
          Facilities
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
