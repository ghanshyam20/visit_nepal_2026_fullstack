import img1 from "../assets/images/tharu.jpg";
import img2 from "../assets/images/trek.jpg";
import img3 from "../assets/images/rhino.jpg";
import img4 from "../assets/images/janaki.jpg";
import { Link } from "react-router-dom";

export default function GalleryPreview() {
  return (
    <section className="gallery-preview">
      <h2>Photo Highlights</h2>

      <div className="gallery-grid">
        <img className="hover-img hover-card" src={img1} alt="" />
        <img className="hover-img hover-card" src={img2} alt="" />
        <img className="hover-img hover-card" src={img3} alt="" />
        <img className="hover-img hover-card" src={img4} alt="" />
      </div>

      <Link to="/gallery" className="view-more-btn">View Full Gallery →</Link>
    </section>
  );
}
