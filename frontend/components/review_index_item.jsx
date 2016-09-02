import React from 'react';

export default ({ review }) => (
  <div className="review-index-item">
    {review.user.username}
    <br />
    Rating: {review.rating} / 5
    <br />
    {review.created_at}
    <br />
    <div className="review-content">
    {review.content}
    </div>
  </div>
);
