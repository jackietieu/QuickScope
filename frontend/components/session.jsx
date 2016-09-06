import React from 'react';
import SessionFormContainer from './session_form_container';

export default () => (
  <div className="splash-background-fill">
    <section className="session-splash">
      <div className="session">
        <div className="splash-content">
          <h1 className="splash-title">
            TitleTBD
          </h1>
          <p className="splash-description">
            Discover great businesses that are waiting around the corner!
          </p>
        </div>

        <SessionFormContainer />
      </div>
    </section>
  </div>
);
