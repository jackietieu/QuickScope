# Redux Structure

## Auth Cycles

### Session API Request Actions

* `signup`
  0. invoked from `AuthForm` when `signup` selected
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `login`
  0. invoked from `AuthForm` when `login` selected
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logout`
  0. invoked from `Logout` `onClick` from `Header`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `Root` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback.
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback.
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Business Cycles

### Business API Request Actions

* `requestAllBusinesses`
  0. invoked from `BusinessIndex` `didMount`
  0. `GET /api/businesses` is called.
  0. `receiveAllBusinesses` is set as the success callback.

* `requestFilteredBusinesses`
  0. invoked from `Filters` `<select>` `<option>` `onChange`
  0. `GET /api/businesses` is called with state.filters passed as data parameter.
  0. `receiveFilteredBusinesses` is set as the callback.

### Business API Response Actions

* `receiveAllBusinesses`
  0. invoked from an API callback.
  0. the `BusinessReducer` updates `businesses` in the application's state.

* `receiveFilteredBusinesses`
  0. invoked from an API callback.
  0. the `BusinessReducer` updates `businesses` in the application's state.

## Reviews Page Cycles

### Review API Request Actions

* `requestReviews`
  0. invoked from `ReviewIndex` `didUpdate`
  0. `GET /api/businesses/:businessId/reviews` is called.
  0. `receiveReviews` is set as the success callback.

* `newReview`
  0. invoked from `ReviewForm` `onSubmit`
  0. `POST /api/businesses/:businessId/reviews` is called with state.newReviewInput passed as data parameter.
  0. `receiveNewReview` is set as the success callback.

### Review API Response Actions

* `receiveReviews`
  0. invoked from an API callback.
  0. the `ReviewReducer` updates `reviews` in the application's state.

* `receiveNewReview`
  0. invoked from an API callback.
  0. the `ReviewReducer` updates `reviews` in the application's state.
