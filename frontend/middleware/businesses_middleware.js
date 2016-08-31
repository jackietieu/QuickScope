import { BusinessConstants, receiveBusinesses } from '../actions/business_actions';
import { requestBusinesses } from '../util/business_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = (businesses) => receiveBusinesses(businesses);
  switch (action.type) {
    case BusinessConstants.REQUEST_BUSINESSES:
      requestBusinesses(success);
      break;
    default:
      return next(action);
  }
};