import HeroSection from "../components/HeroSection";
import Highlights from "../components/Highlights";
import DestinationsPreview from "../components/DestinationsPreview";
import GalleryPreview from "../components/GalleryPreview";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <Highlights />
      <DestinationsPreview />
      <GalleryPreview />
      <CTASection />
    </div>
  );
}
