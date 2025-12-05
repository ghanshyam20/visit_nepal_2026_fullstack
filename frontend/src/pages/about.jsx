import "../components/WhyNepal.css";

export default function About() {
  return (
    <section className="why-section" style={{ paddingTop: "120px" }}>
      <h2>About Nepal</h2>

      <div className="why-grid">
        <div className="why-card">
          <h3>History & Heritage</h3>
          <p>Nepal is home to ancient temples, old kingdoms, and timeless traditions.</p>
        </div>

        <div className="why-card">
          <h3>People & Culture</h3>
          <p>Famous for hospitality, festivals, music, and cultural diversity.</p>
        </div>

        <div className="why-card">
          <h3>Geography</h3>
          <p>From the Himalayas to the plains—Nepal has every climate and landscape.</p>
        </div>
      </div>
    </section>
  );
}
