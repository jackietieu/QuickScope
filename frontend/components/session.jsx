import React from 'react';
import SessionFormContainer from './session_form_container';

export default () => (
  <div className="splash-background-fill">
    <section className="session-splash">
      <div className="splash-text">Discover great businesses that are waiting around the corner!</div>

      <div className="session">
        <div className="splash-content">
          <h1 className="splash-title">
            QuickScope
          </h1>
          <p className="splash-description">
            Login or signup to quickly scope out local businesses and post reviews!
          </p>
        </div>

        <SessionFormContainer />
      </div>
    </section>
  </div>
);
