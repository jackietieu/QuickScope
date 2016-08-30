import React from 'react';
import SessionFormContainer from './session_form_container';

export default () => (
  <section className="session">
    <div className="splash-content">
      <h1 className="splash-title">
        MortYelps!
      </h1>
      <p className="splash-description">
        A Yelp inspired website for businesses that exist within the "Rick and Morty" universe.
      </p>
    </div>

    <SessionFormContainer />
  </section>
);
