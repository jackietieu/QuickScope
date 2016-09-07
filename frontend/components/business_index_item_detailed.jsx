import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class BusinessIndexItemDetailed extends React.Component{
  render(){
    let business = this.props.business;
    let imageKeys = Object.keys(business.image_urls);
    let images = imageKeys.map((imgKey, idx) => (
      <img key={business.image_urls[idx].image_url} src={business.image_urls[idx].image_url} />
    ));

    return(
      <li className="business-index-item-detailed">
          <div className="business-index-item-data-field">
            <div className="business-index-item-name-ratings">
              <div className="business-index-item-profile-picture">
                <img src={business.profile_image_url} />
              </div>
              <div className="business-index-item-id-name">
                <div className="business-index-item-name">
                  {this.props.idx + 1}. {business.name}
                </div>
                <div className="business-rating">
                  <StarRatingComponent
                      name="user-review-rating"
                      key={business.name.concat(business.id.toString())}
                      editing={false}
                      starCount={5}
                      value={parseInt(business.avg_rating)}
                  />
                </div>
                <div className="business-reviews">
                  {business.reviews} Reviews!
                </div>
              </div>
            </div>
            <div className="business-index-item-address">
              {business.streetAddress}
              <br />
              {business.cityStateAddress}
            </div>
          </div>

          <div className="business-index-item-detailed-images">
            {images}
          </div>
      </li>
    );
  }
}

export default BusinessIndexItemDetailed;
