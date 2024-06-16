// components/PayDonateTile.tsx

import React from 'react';
import './style/qr_style.css';
import { PayDonateTileData } from './data/data_qr'; // Importing data from separate file

interface PayDonateTileProps {
  data: PayDonateTileData; // Using an interface for data structure
}

const PayDonateTile: React.FC<PayDonateTileProps> = ({ data }) => {
  const { title, description, imageUrl, linkUrl } = data;

  return (
<div className="pay-donate-tile">
      <img src={imageUrl} alt={title} className="tile-image" />
      <div className="tile-content">
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
        <a href={linkUrl} className="tile-link">
          Donate Now
        </a>
      </div>
    </div>
  );
};

export default PayDonateTile;
