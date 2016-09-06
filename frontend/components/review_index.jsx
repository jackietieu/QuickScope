import React from 'react';
import ReviewIndexItem from './review_index_item';
import { hashHistory } from 'react-router';
import StarRatingComponent from 'react-star-rating-component';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      content: "",
      business_id: this.props.businessId,
      user_id: this.props.userId
    };

    this.stars = <StarRatingComponent
      name="review-form-rating"
      starCount={5}
      value={this.state.rating}
      onStarClick={this.onStarClick.bind(this)}
    />;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestReviews(this.props.businessId);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      rating: 0,
      content: "",
      business_id: nextProps.businessId
    });

    this.stars = <StarRatingComponent
      name="review-form-rating"
      starCount={5}
      value={0}
      onStarClick={this.onStarClick.bind(this)}
    />;
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});

    this.stars = <StarRatingComponent
      name="review-form-rating"
      starCount={5}
      value={nextValue}
      onStarClick={this.onStarClick.bind(this)}
    />;
  }

  handleSubmit(e){
    e.preventDefault();
    const review = this.state;
    setTimeout(this.props.createReview({review}), 0);
    setTimeout(this.setState({
      rating: 0,
      content: "",
      business_id: this.props.businessId
    }), 0);
  }

  render(){
    let reviews;
    const reviewIds = Object.keys(this.props.reviews);
    if (reviewIds.length > 0) {
      reviews = reviewIds.map((reviewId, idx) => (
        <ReviewIndexItem
          key={this.props.reviews[reviewId].created_at.concat(idx)}
          review={this.props.reviews[reviewId]} />
      ));
    }

    let disabled = ((this.state.rating > 0) && (this.state.content.length > 0) ? false : true);

    return (
      <section className="review-index-container">
        <form className="new-review-form" onSubmit={this.handleSubmit}>
          Make a review for this business!
          <br />
            {this.stars}
          <label>
            <textarea value={this.state.content}
                      placeholder="Review content..."
                      onChange={this.update('content')}></textarea>
          </label>
          <br />
          <button type="submit" value="Create Review" disabled={disabled}>Create Review</button>
        </form>
        {reviews}
      </section>
    );
  }
}



export default ReviewIndex;
