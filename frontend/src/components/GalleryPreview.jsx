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
        <div className="gallery-item hover-card">
          <img className="gallery-img hover-img" src={img1} alt="" />
        </div>

        <div className="gallery-item hover-card">
          <img className="gallery-img hover-img" src={img2} alt="" />
        </div>

        <div className="gallery-item hover-card">
          <img className="gallery-img hover-img" src={img3} alt="" />
        </div>

        <div className="gallery-item hover-card">
          <img className="gallery-img hover-img" src={img4} alt="" />
        </div>
      </div>

      <Link to="/gallery" className="view-more-btn">
        View Full Gallery →
      </Link>
    </section>
  );
}
