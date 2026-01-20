import { useState } from "react";
type Props = {
  title: string;
  period: string;
  summary: string;
  skills: string[];
  description: string;
  onHover?: () => void;
};



export default function ExperienceCard({
 
  title,
  period,
  summary,
  skills,
  description,
  onHover,
}: Props) {
    const [expanded, setExpanded] = useState(false);

  return (
    <div className={`experience-card expandable ${expanded ? "expanded" : ""}`} onMouseEnter={onHover} onClick={() => setExpanded(!expanded)}
    >
        <h4>{title}</h4>
        <span className="period">{period}</span>

        <p className="summary">{summary}</p>
      <div className="full-description">
      <p>{description}</p>
      </div>
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </div>

    
  );
}