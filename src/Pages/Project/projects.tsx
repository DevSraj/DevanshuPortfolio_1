
import ProjectCard from '../../component/Genral/ProjectCard';
import {projects} from './data_project';
import './style.css';

const Projects: React.FC = () => {
  return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="main-content">
          <h1>Projects</h1>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              duration={project.duration}
              technologies={project.technologies}
            />
          ))}
        </div>
      </main>

    </div>

  );
}

export default Projects;
