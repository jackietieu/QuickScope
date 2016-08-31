import { BusinessConstants } from '../actions/business_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  const businesses = action.businesses;

  switch (action.type) {
    case BusinessConstants.RECEIVE_BUSINESSES:
      return merge({}, state, businesses);
    default:
      return state;
  }
};
