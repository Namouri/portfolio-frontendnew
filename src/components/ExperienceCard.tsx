import { useState, useEffect } from "react";
type Props = {
  title: string;
  period: string;
  summary: string;
  skills: string[];
  description: string;
  hint?:boolean;
  

};



export default function ExperienceCard({
 
  title,
  period,
  summary,
  skills,
  description,
  hint=false,
}: Props) {
    const [expanded, setExpanded] = useState(false);
    const [showHint, setShowHint] = useState(hint);

useEffect(() => {
  if (!hint) return;

  const timer = setTimeout(() => {
    setShowHint(false);
  }, 9000); 

  return () => clearTimeout(timer);
}, [hint]);

    function handleClick() {
  setShowHint(false);

    // Only toggle on real touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      setExpanded((prev) => !prev);
    }
  }


  return (
  
  <div
      className={`experience-card expandable ${expanded ? "expanded" : ""}
        ${showHint ? "hint" : ""}
      `}
      onClick={handleClick}
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
        {hint && showHint&& <span className="tap-pulse" />}
      </div>

    
  );
}