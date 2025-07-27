import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Stars from "./components/Stars";
import ShootingStar from "./components/ShootingStar";

function App() {
  return (
    <>
      <div className="fixed inset-0 aurora-bg -z-20 pointer-events-none"></div>
      <Stars />
      <ShootingStar />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Home />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
