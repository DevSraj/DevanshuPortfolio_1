import QrComp from '../../component/specific/pay/Qr';
import MethodComp from '../../component/specific/pay/_methods';
import { payDonateTileData } from '../../component/specific/pay/data/data_qr'; // Importing data
import './style.css'  ;

const HostedPage: React.FC = () => {
  return (
<div className="container">
      <section className="qr_class_section">
        <QrComp data={payDonateTileData} />
      </section>
      <section className="method_class_section">
        <MethodComp />
      </section>
    </div>
  );
}

export default HostedPage;
