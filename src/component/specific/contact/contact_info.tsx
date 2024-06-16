import React from 'react';

import './styles/contact_info.css';
import { contactTiles, ContactTile } from './data/data_contact_info';

const Contact = () => {
  return (
  <div className="p-6 border border-gray-300 rounded-lg max-w-md mx-auto text-center bg-white shadow-md">
      <div className="contactContainer">
        {contactTiles.map((tile, index) => (
          <a key={index} href={tile.link} className={`contactTile ${tile.styleClass}`}>
            <img src={tile.icon} alt={tile.title} className="icon" />
            <div className="title">{tile.title}</div>
            {tile.additionalInfo && <div className="additional-info">{tile.additionalInfo}</div>}
          </a>
        ))}
      </div>
    </div>
  );
};
export default Contact;
