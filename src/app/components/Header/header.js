"use client";

import { useState, useEffect } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.logo}>KOENIGSEGG</div>
      <nav className={styles.nav}>
        <a href="#">MODELS</a>
        <a href="#">INNOVATION</a>
        <a href="#">LIFESTYLE</a>
        <a href="#">COMPANY</a>
      </nav>
    </header>
  );
}