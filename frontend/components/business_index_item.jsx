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
          <div className="business-index-item-data-field">
            <div className="business-index-item-profile-picture">
              <img src={this.props.business.profile_image_url} />
            </div>
            <div className="business-index-item-name-ratings">
              <div className="business-index-item-id-name">
                {this.props.business.id}. {this.props.business.name}
              </div>
              <div className="business-rating-reviews">
                <div className="business-rating">{this.props.business.avg_rating} Stars!</div>
                <div className="business-reviews">{this.props.business.reviews} Reviews!</div>
              </div>
            </div>
            <div className="business-index-item-data-field">
              {this.props.business.address}
            </div>
          </div>

          <div className="business-index-item-description">
            Description: {this.props.business.description}
          </div>
      </li>
    );
  }
}

export default BusinessIndexItem;
