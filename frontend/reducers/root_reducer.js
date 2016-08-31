import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessesReducer from './business_reducer';

export default combineReducers({
  session: SessionReducer,
  businesses: BusinessesReducer
});
