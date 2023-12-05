import About from "./components/About";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
      <Hero />
      <About />
      <Projects />
      <Email />
      
      </div>
      <Footer />
      </main>
      
  )
}
