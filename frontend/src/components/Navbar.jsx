import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo-wrap">
        <img src={logo} alt="Visit Nepal Logo" className="nav-logo" />
        <h2 className="logo-text">Visit Nepal 2026</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/tips">Travel Tips</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
