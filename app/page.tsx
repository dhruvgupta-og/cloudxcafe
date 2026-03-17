import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specialties from "./components/Specialties";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="animated-gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Menu />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
