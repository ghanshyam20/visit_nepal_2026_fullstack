import "../styles/About.css";

export default function About() {
  return (
    <div className="about-page">

      <div className="container">
        {/* HERO */}
        <section className="about-hero">
          <h1>About Nepal</h1>
          <p>
            Discover the culture, history, and breathtaking landscapes of Nepal —
            from the Himalayas to ancient cities.
          </p>
        </section>

        {/* GRID */}
        <div className="about-grid">
          <div className="about-card">
            <h3>🏛️ History & Heritage</h3>
            <p>
              Nepal is home to ancient temples, royal palaces, and timeless
              traditions preserved for centuries.
            </p>
          </div>

          <div className="about-card">
            <h3>🎉 People & Culture</h3>
            <p>
              Famous for hospitality, festivals, music, arts, and cultural
              diversity.
            </p>
          </div>

          <div className="about-card">
            <h3>🌄 Geography</h3>
            <p>
              Nepal offers unmatched natural beauty — from plains to the Himalayas.
            </p>
          </div>

          <div className="about-card">
            <h3>🛕 Religion & Spirituality</h3>
            <p>
              Birthplace of Buddha and home to deep spiritual traditions.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
