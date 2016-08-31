import { SessionConstants } from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

export default (state = _defaultState, action) => {
  const currentUser = action.currentUser;
  const errors = action.errors;
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, _defaultState, {currentUser});
    case SessionConstants.RECEIVE_ERRORS:
      return merge({}, _defaultState, {errors});
    case SessionConstants.LOGOUT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};
