import React from 'react';
import { hashHistory } from 'react-router';

class BusinessIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  handleClick(e){
    hashHistory.push(`/businesses/${this.props.filterId}/${this.props.business.id}`);
  }

  render (){
    return (
      <li className="business-index-item" onClick={this.handleClick.bind(this)}>
        <ul className="business-index-item-data-list">
          <li className="business-index-item-data-field">
            {this.props.business.id}. {this.props.business.name}
          </li>
          <li className="business-index-item-data-field">
            <div className="business-rating-reviews">
              Rating: <div className="business-rating">{this.props.business.avg_rating}</div>
            Reviews: <div className="business-reviews">{this.props.business.reviews}</div>
            </div>
          </li>
          <li className="business-index-item-data-field">
            {this.props.business.address}
          </li>
          <li className="business-index-item-data-field">
            Description: {this.props.business.description}
          </li>
        </ul>
      </li>
    );
  }
}

export default BusinessIndexItem;
