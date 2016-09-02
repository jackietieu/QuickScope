export const fetchReviews = (businessId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/businesses/${businessId}`,
    success
  });
};

export const createReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: `api/businesses/${review.review.businessId}/reviews`,
    data: review,
    success
  });
};
