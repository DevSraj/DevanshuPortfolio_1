import  './styles/SkillCard.css';

type SkillCardProps = {
  title: string;
  skills: string[];
};

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
  <div className="skill-card">
      <div className="tile" style={{ top: '10%', left: '5%' }}></div>
      <div className="tile" style={{ top: '20%', right: '10%' }}></div>
      <div className="tile" style={{ bottom: '10%', left: '20%' }}></div>
      <div className="tile" style={{ bottom: '20%', right: '5%' }}></div>
      <h3>{title}</h3>
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default SkillCard;
