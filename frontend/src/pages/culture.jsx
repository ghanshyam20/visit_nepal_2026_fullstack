import "../components/WhyNepal.css";

export default function Culture() {
  return (
    <section className="why-section" style={{ paddingTop: "120px" }}>
      <h2>Nepali Culture</h2>

      <div className="why-grid">
        <div className="why-card">
          <h3>Festivals</h3>
          <p>Dashain, Tihar, Holi, Teej — celebrations throughout the year.</p>
        </div>

        <div className="why-card">
          <h3>Traditional Foods</h3>
          <p>Momos, Dal-Bhat, Newari cuisine — delicious and diverse.</p>
        </div>

        <div className="why-card">
          <h3>Languages</h3>
          <p>Nepali is the official language; 120+ regional languages exist.</p>
        </div>
      </div>
    </section>
  );
}
