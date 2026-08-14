import MatrixRain from "./components/MatrixRain";
import Sidebar from "./components/Sidebar";
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
    <div className="scanlines grid-bg">
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Navigation */}
      <Sidebar />
      <MobileNav />

      {/* Main Content */}
      <main className="flex-1 lg:ml-56 xl:ml-64 relative z-10 pt-12 lg:pt-0">
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
