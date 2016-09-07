import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default ({ review }) => (
  <div className="review-index-item">
    <div className="review-user-info">
      <div className="review-profile-picture">
        <img src={review.user.profile_image_url} />
      </div>
      <div className="review-details">
        {review.user.username}
        <br />
          <StarRatingComponent
              name="user-review-rating"
              key={"user-review".concat(review.id.toString())}
              editing={false}
              starCount={5}
              value={review.rating}
          />
        <br />
        {review.created_at}
        <br />
      </div>
    </div>
    <div className="review-content">
    {review.content}
    </div>
  </div>
);
