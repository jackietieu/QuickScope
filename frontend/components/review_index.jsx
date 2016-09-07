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
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
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
    let reviews = [];
    const reviewIds = Object.keys(this.props.reviews);

    for (let i = reviewIds.length - 1; i >= 0; i--) {
      reviews.push(
        <ReviewIndexItem
          key={this.props.reviews[reviewIds[i]].created_at.concat(i)}
          review={this.props.reviews[reviewIds[i]]}
        />
      );
    }

    let disabled = ((this.state.rating > 0) && (this.state.content.length > 0) ? false : true);

    return (
      <section className="review-index-container">
        <form className="new-review-form" onSubmit={this.handleSubmit}>
          Make a review for this business!
          <br />
            <StarRatingComponent
                name="review-form-rating-0"
                key={this.state.rating}
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
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
