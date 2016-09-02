export const ReviewConstants = {
  RECEIVE_REVIEWS: "RECEIVE_REVIEWS",
  REQUEST_REVIEWS: "REQUEST_REVIEWS"
};

export const receiveReviews = (reviews) => ({
  type: ReviewConstants.RECEIVE_REVIEWS,
  reviews
});

export const requestReviews = (businessId) => ({
  type: ReviewConstants.REQUEST_REVIEWS,
  businessId
});
