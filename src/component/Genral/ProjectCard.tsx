import './styles/projectCard.css';

type ProjectCardProps = {
  name: string;
  description: string;
  duration: string;
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, duration, technologies }) => {
  return (
     <div className="project-card">
      <div className="tile" style={{ top: '10%', left: '5%' }}></div>
      <div className="tile" style={{ top: '20%', right: '10%' }}></div>
      <div className="tile" style={{ bottom: '10%', left: '20%' }}></div>
      <div className="tile" style={{ bottom: '20%', right: '5%' }}></div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Technologies:</strong> <span className="technologies">{technologies.join(', ')}</span></p>
    </div>
  );
}

export default ProjectCard;
