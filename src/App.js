import React from "react";
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

function App(history) {
  AOS.init();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vision" element={<Vision />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Why-Us" element={<WhyUs />} />
        <Route path="/Contact-Us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
