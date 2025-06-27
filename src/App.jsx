import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Work />
      <Projects />
      <Services />
      <Footer />
    </>
  );
}

export default App;
