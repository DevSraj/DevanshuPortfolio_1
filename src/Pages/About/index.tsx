import HostPage from './About';
import Header from '../../component/Default/Header';
import Footer from '../../component/Default/Footer';
import Education from '../Education/index';
import './index_style.css';
const HostedPage: React.FC = () => {
  return (<>
<Header />
      <section className="page-section">
        <div className="about-section">
          <HostPage />
        </div>
        <div className="education-section">
          <Education />
        </div>
      </section>
      <Footer />
</>
  );
}

export default HostedPage;
