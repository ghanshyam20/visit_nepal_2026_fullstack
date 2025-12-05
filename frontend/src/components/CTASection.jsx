import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="cta-section">
      <h2>Ready for Your Nepal Adventure?</h2>
      <p>Start planning your unforgettable journey today.</p>

      <Link className="cta-btn" to="/contact">
        Contact Us
      </Link>
    </section>
  );
}
