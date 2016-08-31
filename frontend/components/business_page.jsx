import React from 'react';
import BusinessIndexContainer from './business_index_container';
import { Link } from 'react-router';

export default ({ filterId, businesses }) => (
  <section className="main-page">
    <header className="header-nav">
      <div className="header-nav-logo">
        ProjectTitle
      </div>
      <div className="header-links">
        <Link to="/" className="header-link">Logout</Link>
      </div>
    </header>

    <section className="businesses-content">
      <BusinessIndexContainer filterId={filterId} businesses={businesses} />
    </section>
  </section>
);
