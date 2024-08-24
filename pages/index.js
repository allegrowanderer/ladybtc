import styles from './index.module.css'; // Import the CSS module

export default function Home() {
  return (
    <div className={styles.background}>
      {/* Top Banner with HOME and WHITELIST Links */}
      <header className="top-banner">
        <div className="logo-container">
          <img src="/ladylogo.png" alt="Logo" className="lady-logo" />
        </div>
        <div className="nav-container">
          <a href="http://ladybtc.io" className="home-link">HOME</a>
          <a href="http://ladybtc.io/whitelist2" className="whitelist-link">WHITELIST</a>
          <a href="https://x.com/ladybtc_" target="_blank" rel="noopener noreferrer">
            <img src="/xlogo.png" alt="Twitter Logo" className="xlogo" />
          </a>
        </div>
      </header>

      {/* Text Section */}
      <section className="text-section">
        <h1>LADY is more than just a collection of artwork.</h1>
        <p>LADY will start a cult on ordinals.</p>
        <p>LADY has no promises, no roadmap.</p>
        <p>Supply: 3333</p>
        <p>Price: 0.001 btc</p>
        <p>Date: TBA</p>
      </section>

      {/* Twitter Link Section */}
      <footer className="footer">
      
      </footer>
    </div>
  );
}