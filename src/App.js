import About from "./components/About";
import Hero from "./components/Hero";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Vision from "./components/Vision";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar />
      <ContactUs />
    </div>
  );
}

export default App;
