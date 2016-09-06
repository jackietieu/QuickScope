import React from 'react';

export default ({ review }) => (
  <div className="review-index-item">
    <div className="review-user-info">
      <div className="review-profile-picture">
        <img src={review.user.profile_image_url} />
      </div>
      <div className="review-details">
        {review.user.username}
        <br />
        Rating: {review.rating} / 5
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
