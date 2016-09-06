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
    const button = <button className="logout-button"
                           type="submit"
                           id="logout"
                           onClick={this.handleClick.bind(this)}>Logout</button>;

    return (
      <section className="main-page">
        <header className="header-nav">
          <div className="header-nav-logo">
            Clever Yelp Title TBD
          </div>
          <div className="header-links">
            <div className="header-user-profile">
              Welcome, {this.props.currentUser.username}!
              <img src={this.props.currentUser.profile_image_url} />
              {button}
            </div>
          </div>
        </header>

        <section className="businesses-content">
          <SidebarContainer filterId={this.props.filterId} businessId={this.props.params.businessId} />
          <BusinessIndexContainer filterId={this.props.filterId} />
          {this.props.children}
        </section>

        <div id="bg">
        </div>
      </section>
    );
  }
}

export default BusinessPage;
