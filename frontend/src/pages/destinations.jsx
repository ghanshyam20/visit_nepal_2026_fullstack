import pokhara from "../assets/images/pokhara.jpg";
import kathmandu from "../assets/images/kathmandu.jpg";
import lumbini from "../assets/images/lumbini.jpg";
import "./Destinations.css";

export default function Destinations() {
  return (
    <section className="dest-section">
      <h2 className="dest-title">Top Destinations</h2>

      <div className="dest-grid">

        <div className="dest-card">
          <img src={pokhara} alt="Pokhara" className="dest-img" />
          <p className="dest-name">Pokhara</p>
        </div>

        <div className="dest-card">
          <img src={kathmandu} alt="Kathmandu" className="dest-img" />
          <p className="dest-name">Kathmandu</p>
        </div>

        <div className="dest-card">
          <img src={lumbini} alt="Lumbini" className="dest-img" />
          <p className="dest-name">Lumbini</p>
        </div>

      </div>
    </section>
  );
}
