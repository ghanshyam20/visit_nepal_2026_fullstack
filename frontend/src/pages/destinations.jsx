import pokhara from "../assets/images/pokhara.jpg";
import kathmandu from "../assets/images/kathmandu.jpg";
import lumbini from "../assets/images/lumbini.jpg";
import "../components/Destinations.css";

export default function Destinations() {
  return (
    <section className="dest-section" style={{ paddingTop: "120px" }}>
      <h2 className="dest-title">All Destinations</h2>

      <div className="dest-grid">
        <div className="dest-card">
          <img src={pokhara} className="dest-img" alt="Pokhara" />
          <p className="dest-name">Pokhara</p>
        </div>

        <div className="dest-card">
          <img src={kathmandu} className="dest-img" alt="Kathmandu" />
          <p className="dest-name">Kathmandu</p>
        </div>

        <div className="dest-card">
          <img src={lumbini} className="dest-img" alt="Lumbini" />
          <p className="dest-name">Lumbini</p>
        </div>
      </div>
    </section>
  );
}
