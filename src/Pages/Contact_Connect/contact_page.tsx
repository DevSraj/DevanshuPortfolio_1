import InfoPage from '../../component/specific/contact/contact_info';
import FormPage from '../../component/specific/contact/contact_form_comp';

import './style.css';
const ContactMeTile: React.FC = () => {
   return (
    <div className="contact_container">
      <section className="contact_info_page">
        <InfoPage />
      </section>
      <section className="contact_main_page_form">
        <FormPage />
      </section>
    </div>
  );
};

export default ContactMeTile;
