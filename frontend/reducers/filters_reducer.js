import { FilterConstants } from '../actions/filter_actions.js';
import { merge } from 'lodash';

const _defaultState = {
  search: "",
  filterId: 0
};

export default (state = _defaultState, action) => {
  const filters = action.filters;

  switch (action.type) {
    case FilterConstants.RECEIVE_FILTER:
      return merge({}, state, filters);
    default:
      return state;
  }
};
