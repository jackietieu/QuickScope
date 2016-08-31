import React from 'react';

const BusinessIndexItem = ({ business }) => (
  <li className="business-index-item">
    <ul className="business-index-item-data">
      <li>
        {business.name}
      </li>
      <li>
        {business.address}
      </li>
    </ul>
  </li>
);

export default BusinessIndexItem;
