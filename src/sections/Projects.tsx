import ProjectCard from "../components/ProjectCard";
import evacuationsystemImg from "../assets/ProjectImages/evacuationsystem.png";
import clockImg from "../assets/ProjectImages/stampclock.png";
import PortfolioImg from "../assets/ProjectImages/portfolioPic.png";



export default function Projects() {
  return ( 
  <section id="projects" className="section">
    <div className="section-inner">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
      
        <ProjectCard
          title="Creative Portfolio"
          description="An interactive personal portfolio built with React and TypeScript, featuring a clean, mobile‑friendly UI. It includes a Node.js backend powering the contact form, allowing visitors to send messages directly through the site."
          image={PortfolioImg}
          github="https://github.com/Namouri"
          tech={["React", "TypeScript", "Javascript", "CSS", "Vite", "Node.js"]}
          status="done"
        />

        <ProjectCard
          title="Stamp Clock System"
          description="A stamp‑clock system designed with Nielsen’s heuristics and Norman’s design principles, focusing on clarity, feedback, and simple user flow. Through iterative prototyping and testing, the interface was refined into an easy, predictable, and user‑friendly time‑tracking tool."
          image={clockImg}
          github="https://github.com/Namouri/Stamp-Clock-System"
          tech={["React", "TypeScript", "CSS", "Vite"]}
          status="done"
        />

        <ProjectCard
          title="Pedestrian Evacuation Simulator"
          description="A pedestrian evacuation simulator running 1000 agents on a 2D map, using BFS pathfinding to guide them toward exits. Agents update every simulation step, with a timer and exit counter tracking progress. The system includes basic control buttons and follows a layered architecture for clarity."
          image={evacuationsystemImg}
          github="https://github.com/Namouri/Pedestrian-Evacuation-Simulator"
          tech={["Java", "Software Architecture", "Object‑oriented design"]}
          status="done"
        />

        <ProjectCard
          title="AI PDF Filler System"
          description="An intelligent system that automatically analyzes, understands, and fills PDF forms using AI."
          image={""}
          github=""
          tech={["Python", "PostgreSQL", "React", "TypeScript"]}
          status="in-progress"
        />
      </div>
    </div>

  </section>

  );

}

