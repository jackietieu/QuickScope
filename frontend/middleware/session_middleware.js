import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const success = user => dispatch(receiveCurrentUser(user));
  const errors = xhr => {
    dispatch(receiveErrors(xhr.responseJSON));
  };
  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, success, errors);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, success, errors);
      return next(action);
    default:
      return next(action);
  }
};
