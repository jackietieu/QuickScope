import { SearchConstants } from '../actions/search_actions';
import { receiveBusinesses } from '../actions/business_actions';
import { requestSearch } from '../util/search_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = (businesses) => dispatch(receiveBusinesses(businesses));

  switch (action.type) {
    case SearchConstants.REQUEST_SEARCH:
      requestBusinesses(action.filterId, success);
      break;
    default:
      return next(action);
  }
};
