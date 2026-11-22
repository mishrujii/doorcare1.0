import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className="bg-slate-500 h-screen">
      <Navbar/>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default HomePage;
