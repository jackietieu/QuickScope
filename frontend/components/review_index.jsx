import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestReviews(this.props.businessId);
  }

  render(){
    let reviews;
    const reviewIds = Object.keys(this.props.reviews);
    if (reviewIds.length > 0) {
      reviews = reviewIds.map(reviewId => (
        <ReviewIndexItem
          key={this.props.reviews[reviewId].created_at}
          review={this.props.reviews[reviewId]} />
      ));
    }
    return (
      <section className="review-index-container">
        {reviews}
      </section>
    );
  }
}

export default ReviewIndex;
