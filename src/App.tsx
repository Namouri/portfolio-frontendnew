import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import { useEffect } from "react";
import "./App.css";


export default function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      const container = document.getElementById("effects-layer");
      container?.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 600); // match animation duration
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [])
  
  



 
  return (
    <>

      <div id="effects-layer"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects/>
        <Skills />
        <Contact/>
    <footer className="footer">
  <p>© 2026 Nour Amouri · Örebro, Sweden</p>
</footer>
      
      </main>
    </>
  );
  

}

