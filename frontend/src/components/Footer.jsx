import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>© 2026 Visit Nepal — Experience the Beauty</p>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
