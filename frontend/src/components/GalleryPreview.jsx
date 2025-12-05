import { Link } from "react-router-dom";

export default function GalleryPreview() {
  return (
    <section className="gallery-preview">
      <h2>Photo Highlights</h2>

      <div className="gallery-grid">
        <img src="/src/assets/images/trek.jpg" alt="Trek" />
        <img src="/src/assets/images/ilam.jpg" alt="Ilam" />
        <img src="/src/assets/images/janaki.jpg" alt="Temple" />
        <img src="/src/assets/images/rhino.jpg" alt="Rhino" />
      </div>

      <Link className="view-more-btn" to="/gallery">
        View Full Gallery →
      </Link>
    </section>
  );
}
