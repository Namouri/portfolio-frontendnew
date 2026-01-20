import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  image:string; 
  github:string;
  tech: string[];
  status?:"in-progress" | "done";

};

export default function ProjectCard({
  title, description, image, github, tech, status }: Props) {

  return (
      <div className="project-card">
      <div className={`project-image ${status === "in-progress" ? "in-progress" : ""}`}>
        <img src={image} alt={title} />
        {status === "in-progress" && (
          <span className="overlay-text">In Progress</span>
        )}
      </div>
  

      {/* IMAGE */}
    
<h3 className="project-title">

      {title}
  {status !== "in-progress" && github && (

    <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-github"
  >
    <FaGithub />
  </a> )}
</h3>

      <p>{description}</p>
      
      <div className="project-tech">
  {tech.map((item) => (
    <span key={item}>{item}</span>
  ))}


</div>


      
    </div>
  );
}
