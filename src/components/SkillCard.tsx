type SkillCardProps = {
  title: string
  skills: string[]
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>

      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
    
  )
}
