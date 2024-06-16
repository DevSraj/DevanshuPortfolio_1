import Header from '../../component/Default/Header';
import Footer from '../../component/Default/Footer';
import { educationData } from './data_education';
import './style.css';
const Education: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* <Header /> */}
      {/* <main className="flex-grow flex flex-col items-center justify-center"> */}
        <div className="main-content">
          <h1>{educationData.title}</h1>
          {educationData.items.map((item, index) => (
            <div key={index} className="education-item">
              <p><strong>{item.degree}</strong></p>
              <p>{item.institution}</p>
              {item.mainCourse && <p>Main course: {item.mainCourse}</p>}
              {item.specialization && <p>Specialization: {item.specialization}</p>}
            </div>
          ))}
        </div>
      {/* </main> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Education;
