import React from 'react';

export default ({ review }) => (
  <div className="review-index-item">
    <p>
      {review.user.username}
      <br />
      {review.rating} stars!
      <br />
      {review.created_at}
      <br />
      {review.content}
    </p>
  </div>
);
