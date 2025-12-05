import img1 from "../assets/images/ilam.jpg";
import img2 from "../assets/images/lumbini.jpg";
import img3 from "../assets/images/pokhara.jpg";
import img4 from "../assets/images/kathmandu.jpg";

export default function Gallery() {
  return (
    <section className="gallery-page">
      <h2>Photo Highlights</h2>

      <div className="gallery-grid">
        <img className="hover-img hover-card" src={img1} />
        <img className="hover-img hover-card" src={img2} />
        <img className="hover-img hover-card" src={img3} />
        <img className="hover-img hover-card" src={img4} />
      </div>
    </section>
  );
}
