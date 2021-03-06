import React from 'react';
import SessionFormContainer from './session_form_container';

export default class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 0);
  }

  render() {
    let show = this.state.show ? 'visible' : '';

    return (
      <div className="splash-background-fill">
        <section className="session-splash">
          <h1 className={`splash-text ${show}`}>Discover great businesses that are waiting around the corner!</h1>

          <div className="session card">
            <div className="splash-content">
              <h1 className="splash-title card-title">
                QuickScope
              </h1>
              <p className="splash-description card-content">
                Login or signup to quickly scope out local businesses and post reviews!
              </p>
            </div>

            <SessionFormContainer />
          </div>
        </section>
      </div>
    )
  }
}
