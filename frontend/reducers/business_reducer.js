import { BusinessConstants } from '../actions/business_actions';
import { ReviewConstants } from '../actions/review_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  const businesses = action.businesses;

  switch (action.type) {
    case BusinessConstants.RECEIVE_BUSINESSES:
      return businesses;
    case ReviewConstants.RECEIVE_REVIEW:
      const newState = merge({}, state);
      const business = newState[action.review.business_id];
      business.reviews += 1;
      business.avg_rating = ((business.avg_rating * (business.reviews - 1)) + action.review.rating) / business.reviews;
      business.avg_rating = Number((business.avg_rating).toFixed(2));
      return newState;
    default:
      return state;
  }
};
