import React, { useEffect, useState } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  AOS.init();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.screen.width < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/Vision" element={<Vision isMobile={isMobile} />} />
        <Route path="/Mission" element={<Mission isMobile={isMobile} />} />
        <Route path="/Clients" element={<Clients isMobile={isMobile} />} />
        <Route path="/Services" element={<Services isMobile={isMobile} />} />
        <Route path="/Why-Us" element={<WhyUs isMobile={isMobile} />} />
        <Route path="/Contact-Us" element={<ContactUs isMobile={isMobile} />} />
      </Routes>
    </>
  );
}

export default App;
