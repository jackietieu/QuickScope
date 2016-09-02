import { ReviewConstants } from '../actions/review_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case ReviewConstants.RECEIVE_REVIEW:
    console.log('recieve review');
      const newReview = {[action.review.id]: action.review};
      return merge({}, state, newReview);
    case ReviewConstants.RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};
