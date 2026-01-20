import Section from "../components/Section";
import SkillCard from "../components/SkillCard";



export default function Skills() {
  return (<section id="skills">
  <div className="section-inner">
    <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        <SkillCard
          title="Frontend Development"
          skills={["React", "TypeScript","JavaScript", "HTML" ," CSS" ]}
        />

        <SkillCard
          title="Backend/Server Development"
          skills={["Node.js", "Express.js", "REST API"]}
        />
    
        <SkillCard
          title="Programming Languages"
          skills={["C", "C++", "Java", "SQL","Assembly"]}
        />

        <SkillCard
          title="Computer Science Fundamentals"
          skills={["Real‑Time Programming", "Object‑Oriented Programming", "Algorithms", "Data Structures"]}
        />

         <SkillCard
          title="AI / Scientific Computing"
          skills={["Python", "MATLAB", "Machine Learning ", "AI"] }
        />


        <SkillCard
          title="Tools & Workflow"
          skills={["Vite", "npm", "Git"]}
        />
      </div>
      </div>
    </section>
  )
}