// components/PayDonate/PayDonate.tsx
import React from 'react';
import './style/style.css';
import { paymentMethods, PaymentMethod } from './data/data_pay';

const PayDonate: React.FC = () => {
  return (
     <div className="pay-donate-container">
      <div className="methods">
        {paymentMethods.map((method: PaymentMethod) => (
          <div key={method.id} className="method">
            <img src={method.icon} alt={method.name} />
            <span>{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayDonate;

