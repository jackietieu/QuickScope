import React from 'react';
import { hashHistory, withRouter } from 'react-router';
import BusinessIndexContainer from './business_index_container';
import SidebarContainer from './sidebar_container';
import ReviewIndexContainer from './review_index_container';
import HeaderContainer from './header_container';

class BusinessPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.getElementById("root").style.boxShadow = "inset 0 0 0 1000px rgba(0, 0, 0, 0.33)";
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.currentUser === null){
      hashHistory.push("/session");
    }
  }

  render(){
    return (
      <section className="main-page">
        <HeaderContainer props={this.props} />
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
