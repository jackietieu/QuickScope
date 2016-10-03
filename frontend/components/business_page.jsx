import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import BusinessIndexContainer from './business_index_container';
import SidebarContainer from './sidebar_container';
import ReviewIndexContainer from './review_index_container';

class BusinessPage extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }

  componentDidMount(){
    document.getElementById("root").style.boxShadow = "inset 0 0 0 1000px rgba(0, 0, 0, 0.33)";
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser === null){
      hashHistory.push("/session");
    }
  }

  handleLogoClick(e){
    this.props.router.push("/businesses/0");
    this.props.requestBusinesses({search:"", filterId:0});
  }

  render(){
    let header =
      <header className="header-nav">
        <div className="header-nav-logo" onClick={this.handleLogoClick.bind(this)}>
          <img src="http://res.cloudinary.com/dnmknegr2/image/upload/c_scale,w_151/v1473377274/noun_581513_cc_pwvcxa.png" />
          <div className="header-logo-name">
            QuickScope
          </div>
        </div>
        <div className="header-links">
          <div className="header-user-profile">
            <div className="header-welcome">
              Welcome, {this.props.currentUser.username}!
            </div>
            <div className="header-profile-image-logout">
              <img src={this.props.currentUser.profile_image_url} />
              <ul className="profile-links">
                <li className="logout"
                  onClick={this.handleClick.bind(this)}>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>;

    return (
      <section className="main-page">
        {header}
        <section className="businesses-content">
          <SidebarContainer filterId={this.props.filterId} businessId={this.props.params.businessId} />
          <BusinessIndexContainer filterId={this.props.filterId} businessId={this.props.params.businessId} />
          {this.props.children}
        </section>
      </section>
    );
  }
}

export default withRouter(BusinessPage);
