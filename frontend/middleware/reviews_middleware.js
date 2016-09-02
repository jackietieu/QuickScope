import { ReviewConstants, receiveReviews, receiveReview } from '../actions/review_actions';
import { fetchReviews, createReview } from '../util/review_api_util';

export default ({getState, dispatch}) => next => action => {
  let success;

  switch (action.type) {
    case ReviewConstants.REQUEST_REVIEWS:
      success = (reviews) => dispatch(receiveReviews(reviews));
      fetchReviews(action.businessId, success);
      break;
    case ReviewConstants.CREATE_REVIEW:
      success = (review) => dispatch(receiveReview(review));
      createReview(action.review, success);
      break;
    default:
      return next(action);
  }
};
