import { ReviewConstants } from '../actions/review_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case ReviewConstants.RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};
