# Project Name TBD

## HEROKU LINK:
> http://rmyelp.herokuapp.com/

## Minimum Viable Product
> This full stack project is built using Ruby on Rails on the back-end and React/Redux on the front-end. This project is inspired by Yelp to be a review site for businesses that exist within the "Rick and Morty" universe. Features include:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Fluid display of business pages
- [ ] Search / filter by tags instantly
- [ ] Reviews / ratings
- [ ] Map integration for businesses
- [ ] Bonus: Mark reviews funny, cool, useful etc.
- [ ] Bonus: Profile
- [ ] Bonus: Friends

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-heirarchy.md
[redux-structure]: docs/redux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Fully functional Rails project that allows for account creation and login authentication.

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back-end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] Setup API interaction
- [ ] Redux cycle for front-end authentication
- [ ] User signup/signin components
- [ ] Navigate to Root page after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Constructing business pages (2 days)

**Objective:** Business pages will be rendered

- [ ] `Business` model/migration
- [ ] Seed businesses
- [ ] Create/Index API for `Businesses` controller
- [ ] `Businesses` controller responds to `GET` requests; displays all businesses for now
- [ ] `business_util.js` handles API interaction
- [ ] JBuilder views for `Businesses`
- [ ] Ensure redux cycle updates state accordingly through API call
- Business components and respective Redux loops
  - [ ] `BusinessesIndex`
  - [ ] `BusinessIndexItem`
- [ ] Create `BusinessIndexContainer`; will eventually receive filters from store
- [ ] Nest under the Root route (always display businesses)
- [ ] Ensure router renders appropriate components for each route
- [ ] `BusinessIndexContainer` is rendered in the center of the 3 primary components (`SidebarContainer`, `BusinessIndexContainer`, `ReviewContainer`)
- [ ] Style Business and the nested components
- [ ] Review phase 2

### Phase 3: Connecting reviews with users and business pages (2 days)

**Objective:** Allow users to post reviews for a selected business.

- [ ] `Review` model/migration
- [ ] Seed reviews
- [ ] Establish appropriate associations
- [ ] Create/Index API for `Reviews` controller
- [ ] `Reviews` are nested under `/businesses/:businessId/`
- [ ] `Reviews` controller responds to `GET` requests, returning all reviews for a particular business
- [ ] `review_util.js` handles API interaction
- [ ] JBuilder views for `Reviews`
- Review components and respective Redux loops
  - [ ] `ReviewsIndex`
  - [ ] `ReviewIndexItem`
  - [ ] `ReviewForm` displays `onClick`
- [ ] `ReviewForm` has the appropriate handlers, and packages the inputted data to create a review with the correct associations in rails
- [ ] Ensure router renders appropriate components for each route
- [ ] User should be able to submit a new review and see the page instantaneously update
- [ ] Style Review components
- [ ] Review phase 3

### Phase 4: Implementation of dynamic/instantaneous search/filtering (2 days)

**Objective:** Sidebar is capable of searching for businesses by name or filtering by selected tag.

- [ ] Create `SidebarContainer`
- [ ] `Search`, `Filters`, and `BusinessMap` will go in `SidebarContainer`
- [ ] Create `Tag` model and `Taggings` join table
- [ ] Update business seed data to reflect tags as necessary construction parameter
- [ ] Seed tags with seed data
- [ ] Add tags to businesses
- Implement `filters` route to allow for dynamic searching of businesses
  - [ ] Dispatch action to reflect current selected tag
  - [ ] `BusinessIndexContainer` should now render all businesses returned by `requestFilteredBusinesses` due to subscription to re-render on change of store state through `connect`
- [ ] Style search & filter components in sidebar
- [ ] Review Phase 4

### Phase 5: Map Integration (2 days)

**Objective:** Map updates and will only show markers for businesses currently displayed within the `BusinessIndexContainer`

- [ ] `BusinessMap` component renders `div` with `id='map-container'` and `ref='map'`
- [ ] set `'#map-container'` `width` and `height` to appropriate dimensions (e.g. `300px`)
- [ ] `BusinessMap` is rendered as the last component at the bottom-left of the sidebar
- [ ] Attach google maps script to application.html.erb
- [ ] Instantiate map

## Markers

- [ ] Create `marker_manager.js`
- [ ] Link `BusinessMap` to `MarkerManager`
- [ ] `updateMarkers()` receives businesses currently within `BusinessIndexContainer`

### Bonus Features
- [ ] Mark reviews funny, cool, useful etc.
- [ ] Descriptive User profiles
- [ ] Users can have Friends
- [ ] Map accurately reflects the "Rick and Morty" universe
