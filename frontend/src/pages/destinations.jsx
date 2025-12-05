import pokharaImg from "../assets/images/pokhara.jpg";
import kathmanduImg from "../assets/images/kathmandu.jpg";
import lumbiniImg from "../assets/images/lumbini.jpg";

export default function Destinations() {
  return (
    <section className="destinations-page">
      <h2>All Destinations</h2>

      <div className="dest-grid">
        <div className="dest-card hover-card">
          <img className="hover-img" src={pokharaImg} alt="Pokhara" />
          <h3>Pokhara</h3>
        </div>

        <div className="dest-card hover-card">
          <img className="hover-img" src={kathmanduImg} alt="Kathmandu" />
          <h3>Kathmandu</h3>
        </div>

        <div className="dest-card hover-card">
          <img className="hover-img" src={lumbiniImg} alt="Lumbini" />
          <h3>Lumbini</h3>
        </div>
      </div>
    </section>
  );
}
