import React from 'react';
import ReviewIndexItem from './review_index_item';
import { hashHistory } from 'react-router';

class ReviewIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      content: "",
      business_id: this.props.businessId,
      user_id: this.props.userId
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestReviews(this.props.businessId);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const review = this.state;
    this.setState({business_id: this.props.businessId});
    setTimeout(this.props.createReview({review}), 0);
    setTimeout(this.setState({content: "", rating: 0}), 0);
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

    const radioButtons = [1, 2, 3, 4, 5].map(rating => {
      const isChecked = parseInt(this.state.rating) === rating;

      return (
        <label key={"rating-radio-label".concat(rating)}>
          {rating}
          <input type="radio"
            key={"rating-radio-inline ".concat(rating)}
            value={rating}
            checked={isChecked}
            onChange={this.update('rating')} />
        </label>
      );
    }
  );

    return (
      <section className="review-index-container">
        <form className="new-review-form" onSubmit={this.handleSubmit}>
          Make a review for this business!
          <br />
          <label>
            Rating:
            {radioButtons}
          </label>
          <br />
          <label>
            Content:
            <br />
            <textarea value={this.state.content}
                      onChange={this.update('content')}></textarea>
          </label>
          <br />
          <button type="submit" value="Create Review">Create Review</button>
        </form>
        {reviews}
      </section>
    );
  }
}



export default ReviewIndex;
