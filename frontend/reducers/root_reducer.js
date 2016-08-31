import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BusinessesReducer from './business_reducer';
import FiltersReducer from './filters_reducer';

export default combineReducers({
  session: SessionReducer,
  businesses: BusinessesReducer,
  filters: FiltersReducer
});
