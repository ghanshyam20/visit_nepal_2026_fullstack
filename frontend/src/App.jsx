import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Destinations from "./pages/Destinations.js";
import Culture from "./pages/Culture.js";
import Gallery from "./pages/Gallery.js";
import Tips from "./pages/Tips.js";

import Container from "./layout/Container";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tips" element={<Tips />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}
