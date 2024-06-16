
import './style.css';
import { homeData } from './data_home';

const Home: React.FC = () => {
  return (
<div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="main-content">
          <h1>{homeData.title}</h1>
          <p>{homeData.description}</p>
          <button className="neon-button">Explore More</button>
        </div>
      </main>

    </div>
  );
}

export default Home;
