export const requestBusinesses = (filterId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/filters/${filterId}/businesses`,
    success
  });
};
