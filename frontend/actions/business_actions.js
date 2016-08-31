export const BusinessConstants = {
  RECEIVE_BUSINESSES: "RECEIVE_BUSINESSES",
  REQUEST_BUSINESSES: "REQUEST_BUSINESSES"
};

export const receiveBusinesses = (businesses) => ({
  type: BusinessConstants.RECEIVE_BUSINESSES,
  businesses
});

export const requestBusinesses = (filters) => ({
  type: BusinessConstants.REQUEST_BUSINESSES,
  filters
});
