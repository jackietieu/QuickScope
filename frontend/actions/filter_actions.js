export const FilterConstants = {
  REQUEST_FILTER: "REQUEST_FILTER"
};

export const requestFilter = filters => ({
  type: FilterConstants.REQUEST_FILTER,
  filters
});
