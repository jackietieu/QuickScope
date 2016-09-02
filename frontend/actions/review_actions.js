export const ReviewConstants = {
  RECEIVE_REVIEWS: "RECEIVE_REVIEWS",
  REQUEST_REVIEWS: "REQUEST_REVIEWS",
  CREATE_REVIEW: "CREATE_REVIEW",
  RECEIVE_REVIEW: "RECEIVE_REVIEW"
};

export const receiveReviews = (reviews) => ({
  type: ReviewConstants.RECEIVE_REVIEWS,
  reviews
});

export const requestReviews = (businessId) => ({
  type: ReviewConstants.REQUEST_REVIEWS,
  businessId
});

export const createReview = (review) => ({
  type: ReviewConstants.CREATE_REVIEW,
  review
});

export const receiveReview = (review) => ({
  type: ReviewConstants.RECEIVE_REVIEW,
  review
});
