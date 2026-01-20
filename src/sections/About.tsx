import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";
import { useState } from "react";

export default function About() {
 
   return (
    <section id="about">
    <div className="section-inner">
    <div className="about-layout">
      
      <div className="about-left">
      <h2 className="section-title">About</h2>
      </div>

        {/* RIGHT — CONTENT */}
        <div className="about-right">
          <h3 className="about-heading">
            I'm a <span>final‑year Computer Engineering student</span> at Örebro University with a background in <span>teaching</span>, <span>tech projects</span>, and <span>community work</span> . I enjoy building thoughtful solutions and learning from every experience along the way!
          </h3>

          <div className="experience-cards">
        <ExperienceCard
        title="Teaching Assistant in Databases"
        period="Nov 2025 — Present"
            summary="As a teaching assistant in Databases at Örebro University, I support students in their studies by answering questions 
        related to database theory and guiding them in ER modeling and SQL."
        skills={["SQL", "EER-Modeling", "Problem‑solving", "Leadership", "Collaboration"]}

        description="I also participate in grading assignments and 
        collaborate with other teaching assistants and course professors to ensure clear and fair assessment."
        />
        <ExperienceCard
        title="Teaching Assistant in Mathematics"
        period="Aug 2024-Sep 2024 • Aug 2025-Sep 2025"
            summary="In the role as a teaching assistant in mathematics at Örebro University, I was responsible for a group of engineering students,
        helping them with mathematical questions and guiding them through problem-solving."
        skills={["Mathematics", "Problem‑solving", "Leadership", "Collaboration"]}

        description="I also participated in grading exams and collaborated with both  teaching assistants and professors to coordinate teaching and ensure fair assessments.."
        />
            <ExperienceCard
              title="Test Leader for PIA Project"
              period="Feb 2024 — Jun 2025"
                summary="In my role as test leader for the PIA project, I am responsible for a group of newly arrived youth and leads weekly sessions with 
the aim of encouraging integration and well-being."
  skills={["Leadership", "Mentoring", "Coordination"]}

              description="The sessions are based on various examples from a standardized manual in 
psychological research, which opens the door to numerous discussions. These discussions are designed to strengthen the youths’ 
development and self-confidence in the new country."
            />

            <ExperienceCard
              title="Marketing Manager for FemTek"
              period="Aug 2024 — Dec 2024"
                summary="As marketing manager for FemTek, a women’s network promoting gender equality in technical education at Örebro University, I 
developed strategies to raise awareness of the network’s mission."
  skills={["Project management", "Networking", "Leadership", "Designing", "Adaptability"]}

              description="I promoted events and workshops, created social media content, and worked with the board on projects. Partnering with tech companies increased the network’s visibility and helped build strong professional connections, while the role strengthened my communication, teamwork, and project‑management skills."
           />


          </div>
      </div>
      </div>
      </div>
    </section>
  );
}