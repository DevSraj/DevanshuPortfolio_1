
import './styles/ExperienceCard.css';


type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, duration, responsibilities }) => {
  return (
    <div className="experience-card">
      <div className="tile" style={{ top: '10%', left: '5%' }}></div>
      <div className="tile" style={{ top: '20%', right: '10%' }}></div>
      <div className="tile" style={{ bottom: '10%', left: '20%' }}></div>
      <div className="tile" style={{ bottom: '20%', right: '5%' }}></div>
      <h3>{role} at {company}</h3>
      <p><strong>Duration:</strong> {duration}</p>
      <ul>
        {responsibilities.map(resp => <li key={resp}>{resp}</li>)}
      </ul>
    </div>
  );
}


export default ExperienceCard;
