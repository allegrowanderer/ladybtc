import { useState } from 'react';
import styles from './index.module.css'; // Import the CSS module

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={styles.background}>
      {/* Top Banner with HOME and WHITELIST Links */}
      <header className={styles.topBanner}>
        <div className={styles.logoContainer}>
          <img src="/ladylogo.png" alt="Logo" className={styles.ladyLogo} />
        </div>
        <div className={styles.navContainer}>
          <a href="http://ladybtc.io" className={styles.homeLink}>HOME</a>
          <a href="http://ladybtc.io/whitelist2" className={styles.whitelistLink}>WHITELIST</a>
          <a href="https://x.com/ladybtc_" target="_blank" rel="noopener noreferrer">
            <img src="/xlogo.png" alt="Twitter Logo" className={styles.xlogo} />
          </a>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.navMenu} ${menuOpen ? styles.show : ''}`}>
        <a href="http://ladybtc.io" className={styles.homeLink} onClick={toggleMenu}>HOME</a>
        <a href="http://ladybtc.io/whitelist2" className={styles.whitelistLink} onClick={toggleMenu}>WHITELIST</a>
        <a href="https://x.com/ladybtc_" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
          <img src="/xlogo.png" alt="Twitter Logo" className={styles.xlogo} />
        </a>
      </div>

      {/* Centered Image */}
      <div className={styles.centerImageContainer}>
        <img src="/centable.png" alt="Centered Table" className={styles.centerImage} />
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        {/* Content for footer if needed */}
      </footer>
    </div>
  );
}
