import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Services from "./components/Services";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Plans />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
