import "../styles/contact.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        We’re here to help you plan your unforgettable Nepal adventure.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}
