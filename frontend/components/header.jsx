import React from 'react';
import { hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick(e){
    e.preventDefault();
    this.props.logout();
  }

  handleLogoClick(e){
    this.props.router.push("/businesses/0");
    this.props.requestBusinesses({search:"", filterId:0});
  }

  render() {
    return (
      <header className="header-nav">
        <div className="header-nav-logo" onClick={this.handleLogoClick.bind(this)}>
          <img src="http://res.cloudinary.com/dnmknegr2/image/upload/c_scale,w_151/v1473377274/noun_581513_cc_pwvcxa.png" />
          <div className="header-logo-name">
            QuickScope
          </div>
        </div>
        <div className="header-links">
          <div className="header-user-profile">
            <div
              className="header-profile-image-logout"
              onClick={this.handleLogoutClick.bind(this)}>
              Logout
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Header);
