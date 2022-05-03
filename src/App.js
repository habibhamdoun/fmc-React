import About from "./components/About";
import Hero from "./components/Hero";
import AOS from "aos";
import Navbar from "./components/Navbar";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
