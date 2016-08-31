import React from 'react';
import BusinessIndexItem from './business_index_item';
import { withRouter } from 'react-router';

class BusinessIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestBusinesses(this.props.filterId);
  }
  //
  // componentWillReceiveProps(){
  //   this.businesses = this.props.businesses;
  // }

  render(){
    let businesses;
    const businessIds = Object.keys(this.props.businesses);

    if (businessIds.length > 0) {
      businesses = businessIds.map(businessId => (
        <BusinessIndexItem
          key={this.props.businesses[businessId].address}
          business={this.props.businesses[businessId]} />
      ));
    }

    console.log(businesses);
    return (
      <section className="business-index">
        <ul className="business-index-list">
          {businesses}
        </ul>
      </section>
    );
  }
}

export default BusinessIndex;
