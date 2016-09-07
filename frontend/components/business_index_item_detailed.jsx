import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class BusinessIndexItemDetailed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reviews: this.props.business.reviews,
      avgRating: this.props.business.avg_rating,
      businessId: this.props.business.id
    };

    this.stars = <StarRatingComponent
        name="business-review-rating"
        key={this.props.business.name.concat(this.props.business.id.toString())}
        editing={false}
        starCount={5}
        value={parseInt(this.props.business.avg_rating)}
    />;
  }

  componentWillReceiveProps(nextProps){
    let stateReviewIds = Object.keys(nextProps.reviews);
    if ((this.state.businessId === nextProps.business.id && stateReviewIds.length > this.props.business.reviews)) {
      let latestReviewId = stateReviewIds.slice(-1);
      let newAvg = ((this.state.avgRating*(stateReviewIds.length - 1) + nextProps.reviews[latestReviewId].rating)/(stateReviewIds.length));
      this.setState({
        avgRating: newAvg,
        businessId: nextProps.business.id,
        reviews: this.state.reviews + 1
      }, () => {
        this.stars = <StarRatingComponent
          name="updated-business-review-rating"
          key={nextProps.business.name.concat(nextProps.business.id.toString(), stateReviewIds.length)}
          editing={false}
          starCount={5}
          value={Math.round(newAvg)}
        />;
      }
    );
    } else {
      this.setState({
        avgRating: this.props.business.avg_rating,
        reviews: this.props.business.reviews,
        businessId: nextProps.business.id
      }, () => {
        this.stars = <StarRatingComponent
          name="business-review-rating"
          key={this.props.business.name.concat(this.props.business.id.toString())}
          editing={false}
          starCount={5}
          value={Math.round(this.props.business.avg_rating)}
        />;
      });
    }
  }

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
                  {this.stars}
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
