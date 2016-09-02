import { ReviewConstants, receiveReviews } from '../actions/review_actions';
import { fetchReviews } from '../util/review_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = (reviews) => dispatch(receiveReviews(reviews));

  switch (action.type) {
    case ReviewConstants.REQUEST_REVIEWS:
      fetchReviews(action.businessId, success);
      break;
    default:
      return next(action);
  }
};
