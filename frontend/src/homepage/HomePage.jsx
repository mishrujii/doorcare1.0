import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
// import { useState } from "react";

function HomePage({loggedIn, setLoggedIn}) {
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="bg-slate-500 h-screen">
      <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default HomePage;
