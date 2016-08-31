import React from 'react';

const BusinessIndexItem = ({ business }) => (
  <li className="business-index-item">
    <ul className="business-index-item-data-list">
      <li className="business-index-item-data-field">
        {business.id}. {business.name}
      </li>
      <li className="business-index-item-data-field">
        {business.address}
      </li>
      <li className="business-index-item-data-field">
        {business.description}
      </li>
    </ul>
  </li>
);

export default BusinessIndexItem;
