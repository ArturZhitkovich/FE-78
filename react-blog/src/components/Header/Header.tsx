import { useState } from "react";
import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.customHeader}>
      <div className={styles.headerLeft}>
        <button
          className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={styles.headerRight}>
        <span className={styles.iconSearch}>🔍</span>
        <span className={styles.iconProfile}>👤</span>
        <ThemeToggle />
      </div>
    </header>
  );
}
