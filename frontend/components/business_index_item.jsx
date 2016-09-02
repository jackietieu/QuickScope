import React from 'react';

const BusinessIndexItem = ({ business }) => (
  <li className="business-index-item">
    <ul className="business-index-item-data-list">
      <li className="business-index-item-data-field">
        {business.id}. {business.name}
      </li>
      <li className="business-index-item-data-field">
        <div className="business-rating-reviews">
          Rating: <div className="business-rating">{business.avg_rating}</div>
          Reviews: <div className="business-reviews">{business.reviews}</div>
        </div>
      </li>
      <li className="business-index-item-data-field">
        {business.address}
      </li>
      <li className="business-index-item-data-field">
        Description: {business.description}
      </li>
    </ul>
  </li>
);

export default BusinessIndexItem;
