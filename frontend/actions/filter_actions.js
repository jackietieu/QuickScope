export const FilterConstants = {
  RECEIVE_FILTER: "RECEIVE_FILTER"
};

export const receiveFilter = filters => ({
  type: FilterConstants.RECEIVE_FILTER,
  filters
});
