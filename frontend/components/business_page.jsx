import React from 'react';
import { hashHistory } from 'react-router';
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

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser === null){
      hashHistory.push("/session");
    }
  }

  render(){

    return (
      <section className="main-page">
        <header className="header-nav">
          <div className="header-nav-logo">
            Clever Yelp Title TBD
          </div>
          <div className="header-links">
            <div className="header-user-profile">
              Welcome, {this.props.currentUser.username}!
              <div className="header-profile-image-logout">
                <img src={this.props.currentUser.profile_image_url} />
                <div className="logout-symbol"
                     onClick={this.handleClick.bind(this)}>
                  <i className="fa fa-sign-out fa-3x" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="businesses-content">
          <SidebarContainer filterId={this.props.filterId} businessId={this.props.params.businessId} />
          <BusinessIndexContainer filterId={this.props.filterId} businessId={this.props.params.businessId} />
          {this.props.children}
        </section>
      </section>
    );
  }
}

export default BusinessPage;
