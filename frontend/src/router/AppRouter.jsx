import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/about.jsx";
import Culture from "../pages/culture.jsx";
import Destinations from "../pages/destinations.jsx";
import Gallery from "../pages/gallery.jsx";
import TravelTips from "../pages/travel-tips.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/tips" element={<TravelTips />} />
    </Routes>
  );
}
