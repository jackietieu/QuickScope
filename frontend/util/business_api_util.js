export const requestBusinesses = (filters, success) => {

  $.ajax({
    method: 'GET',
    url: `api/businesses?search=${filters.search}&filterId=${filters.filterId}`,
    success
  });
};
