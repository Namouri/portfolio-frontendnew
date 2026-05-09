
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-name">
          Hi! I'm Nour
        </h1>

        <p className="hero-tagline">
          Computer Engineering student driven by <span>curiosity</span>, <span>problem‑solving</span>, and creating <span>well‑designed digital experiences</span>.
        </p>
        

        <div className="hero-actions">
          <a href="#contact" className="project-btn">Contact me</a>
          <a href="/CV-Nour Amouri.pdf" 
          download
          className="resume-btn">
            Download Resume</a>
        </div>
        {/*<div className="hero-location">
  📍 Örebro, Sweden
</div>*/}

      </div>
    </section>
  );
}
