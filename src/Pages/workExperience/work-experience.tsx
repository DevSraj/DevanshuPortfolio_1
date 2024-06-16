
import ExperienceCard from '../../component/Genral/ExperienceCard';
import {experiences} from './data_work_experience';
import './style.css';

const WorkExperience: React.FC = () => {
  return (
   <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="main-content">
          <h1>Work Experience</h1>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </main>

    </div>
  );
}

export default WorkExperience;
