import React from 'react';
import BusinessIndexItem from './business_index_item';
import BusinessIndexItemDetailed from './business_index_item_detailed.jsx';

class BusinessIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let detailedBusiness;
    let scrollIntro;
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
    } else if (this.props.filters.search !== "") {
      businesses = <li>
        <div className="no-business-results">
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
          <br />
          No businesses match your query!
        </div>
      </li>;
    }

    if (this.props.filters.filterId === 0 && this.props.filters.search === "") {
      scrollIntro = <li className="scrollIntro">
        <div className="scrollIntro-text">
          <i className="fa fa-angle-double-down fa-lg" aria-hidden="true"></i>
          Scroll down to see more businesses!
          <i className="fa fa-angle-double-down fa-lg" aria-hidden="true"></i>
        </div>
      </li>;
    }

    styleProp = (detailedBusiness === undefined ? {"height":"94vh", "margin":"10px 0 0 10px"} : {"height":"calc(100vh - 290px"});

    return (
      <section className="business-index-with-detailed-item">
        {detailedBusiness}
        <section className="business-index">
          <ul className="business-index-list" style={styleProp}>
            {scrollIntro}
            {businesses}
          </ul>
        </section>
      </section>
    );
  }
}

export default BusinessIndex;
