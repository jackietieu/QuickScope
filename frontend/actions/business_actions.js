export const BusinessConstants = {
  RECEIVE_BUSINESSES: "RECEIVE_BUSINESSES",
  REQUEST_BUSINESSES: "REQUEST_BUSINESSES"
};

export const receiveBusinesses = (businesses) => ({
  type: BusinessConstants,
  businesses
});
