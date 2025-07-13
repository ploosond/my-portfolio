import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Header />
      {/* About me */}
      <About />
      {/* Services */}
      <Stack />
      {/* Projects */}
      <Projects />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  );
}
