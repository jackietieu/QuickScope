export const BusinessConstants = {
  RECEIVE_BUSINESSES: "RECEIVE_BUSINESSES",
  REQUEST_BUSINESSES: "REQUEST_BUSINESSES"
};

export const receiveBusinesses = (businesses) => ({
  type: BusinessConstants.RECEIVE_BUSINESSES,
  businesses
});

export const requestBusinesses = (filterId) => ({
  type: BusinessConstants.REQUEST_BUSINESSES,
  filterId
});
