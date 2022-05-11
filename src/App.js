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
import { AppContextProvider } from "./config/Context";
import LogInPage from "./components/LogInPage";
import Admin from "./components/Admin";
import Quote from "./components/Quote";

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
    <AppContextProvider>
      <div style={{ position: "relative" }}>
        <Navbar isMobile={isMobile} />
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/vision" element={<Vision isMobile={isMobile} />} />
          <Route path="/mission" element={<Mission isMobile={isMobile} />} />
          <Route path="/clients" element={<Clients isMobile={isMobile} />} />
          <Route path="/services" element={<Services isMobile={isMobile} />} />
          <Route path="/why-us" element={<WhyUs isMobile={isMobile} />} />
          <Route
            path="/contact-us"
            element={<ContactUs isMobile={isMobile} />}
          />
          <Route path="/login" element={<LogInPage isMobile={isMobile} />} />
          <Route path="/admin" element={<Admin isMobile={isMobile} />} />
          <Route path="/quote" element={<Quote isMobile={isMobile} />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
