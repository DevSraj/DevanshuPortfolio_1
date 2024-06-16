
import SkillCard from '../../component/Genral/SkillCard';
import {skillsData} from './data_skill';
import './style.css';

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="main-content">
          <h1>Skills</h1>
          {skillsData.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </main>

    </div>
  );
}

export default Skills;
