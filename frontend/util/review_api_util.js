export const fetchReviews = (businessId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}`,
    success
  });
};
