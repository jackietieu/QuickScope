import React from 'react';
import BusinessIndexItem from './business_index_item';
import BusinessIndexItemDetailed from './business_index_item_detailed.jsx';

class BusinessIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let detailedBusiness;
    let businesses = [];
    const businessIds = Object.keys(this.props.businesses);
    let styleProp;

    if (businessIds.length > 0) {
      businessIds.forEach((businessId, idx) => {
        if (businessId !== this.props.businessId) {
          businesses.push(
            <BusinessIndexItem
              key={this.props.businesses[businessId].streetAddress}
              idx={idx}
              business={this.props.businesses[businessId]}
              filterId={this.props.filters.filterId} />
          );
        } else if (businessId === this.props.businessId) {
            detailedBusiness =
              <BusinessIndexItemDetailed
                idx={idx}
                reviews={this.props.reviews}
                business={this.props.businesses[businessId]}
                filterId={this.props.filters.filterId} />;
          }
        });
    }

    styleProp = (detailedBusiness === undefined ? {"height":"95.5vh"} : {"height":"calc(100vh - 285px)"})

    return (
      <section className="business-index-with-detailed-item">
        {detailedBusiness}
        <section className="business-index">
          <ul className="business-index-list" style={styleProp}>
            {businesses}
          </ul>
        </section>
      </section>
    );
  }
}

export default BusinessIndex;
