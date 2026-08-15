import MatrixRain from "./components/MatrixRain";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scanlines grid-bg w-full min-h-screen">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Main Content */}
      <main className="flex-1 relative z-10 pt-12 lg:pt-0">
        {/* Desktop Sticky Navbar */}
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
