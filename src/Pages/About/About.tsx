
import { aboutData } from './data_about';
import './styles.css';


const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="main-content">
          <h1>{aboutData.title}</h1>
          <p>{aboutData.description}</p>
          <button className="neon-button">Contact Me</button>
        </div>


      </main>

    </div>
  );
}

export default About;
