import { ReviewConstants } from '../actions/review_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case ReviewConstants.RECEIVE_REVIEWS:
      console.log('RECEIVE_REVIEWS');
      console.log(action);
      return action.reviews;
    default:
      return state;
  }
};
