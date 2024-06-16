import HomePage_ from './Home';
import QrComp from '../../component/specific/pay/Qr';
import MethodComp from '../../component/specific/pay/_methods';
import { payDonateTileData } from '../../component/specific/pay/data/data_qr'; // Importing data
import ProjectPage from '../Project/projects' ;
import SkillPage from '../Skill/skills';
import WorkPage from '../workExperience/work-experience';
import Education from '../Education/Education';
import AboutPage from '../About/About';

import './preProcess_style.css';
const HostedPage: React.FC = () => {
  return (
    <>
<main>
    <section className="potrait-img">
        <img src="https://" />
    </section>
    <section className="intro">
        <HomePage_ />
    </section>
    <section className="Skill_project_section">
        <section className='Skill_sub_section'>
            <SkillPage />
        </section>
        <section className='Project_sub_section'>
            <ProjectPage />
        </section>
    </section>
    <section className='Work-experience'>
        <WorkPage />
    </section>
     <section className="Combine_About_section">
        <section className='About_sub_section'>
            <AboutPage />
        </section>
        <section className='Education_sub_section'>
            <Education />
        </section>
    </section>
     <section className="Combine_payment_section">
        <section className='Qr_sub_section'>
            <QrComp data={payDonateTileData} />
        </section>
        <section className='method_sub_section'>
            <MethodComp />
        </section>
    </section>
</main>
    </>
  );
}

export default HostedPage;
