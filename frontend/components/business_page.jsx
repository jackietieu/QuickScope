import React from 'react';
import { Link } from 'react-router';
import BusinessIndexContainer from './business_index_container';
import SidebarContainer from './sidebar_container';
import ReviewIndexContainer from './review_index_container';

export default ({ filterId, businesses, children, params }) => {

return (
  <section className="main-page">
    <header className="header-nav">
      <div className="header-nav-logo">
        Clever Yelp Title TBD
      </div>
      <div className="header-links">
        <Link to="/logout" className="header-link">Logout</Link>
      </div>
    </header>

    <section className="businesses-content">
      <SidebarContainer filterId={filterId} businessId={params.businessId} />
      <BusinessIndexContainer filterId={filterId} />
      {children}
    </section>
  </section>
);
};
