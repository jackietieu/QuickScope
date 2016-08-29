API Endpoints

api-endpoints.md
Link to a page that lists your Rails API endpoints. Break these up between HTML and JSON endpoints. Discuss what params, if any, will be needed for each endpoint, and what information will be returned.

# API Endpoints

## HTML API

### Root

- `GET /` - loads application

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Businesses

- `GET /api/businesses`
  - load all businesses relating to 'Food' by default on first visit to main page
  - accepts `filters` query param to return businesses that match specific tag and/or search string in `filters` as selected by the user in the sidebar
  - map will constantly update to add/remove markers so that only the displayed businesses will have markers on the map

### Reviews

- `GET /api/business/:businessId/reviews`
  - lists all reviews for currently selected business
- `POST /api/business/:businessId/reviews`
  - posts new review and re-renders current page to include the review
