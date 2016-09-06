import React from 'react';
import BusinessIndexItem from './business_index_item';

class BusinessIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let businesses;
    const businessIds = Object.keys(this.props.businesses);

    if (businessIds.length > 0) {
      businesses = businessIds.map((businessId, idx) => (
        <BusinessIndexItem
          key={this.props.businesses[businessId].streetAddress}
          idx={idx}
          business={this.props.businesses[businessId]}
          filterId={this.props.filters.filterId} />
      ));
    }

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
