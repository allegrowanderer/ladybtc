export default function Home() {
  return (
    <div>
      {/* Top Banner with HOME and WHITELIST Links */}
      <header className="top-banner">
        <nav className="nav-links">
          <a href="/" className="home-link">HOME</a>
          <a href="/whitelist" className="whitelist-link">WHITELIST</a>
        </nav>
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
    </div>
  );
}
