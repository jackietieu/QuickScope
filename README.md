#QuickScope

[QuickScope live][heroku]

[heroku]: http://www.qscope.herokuapp.com

QuickScope is a full-stack web site that is inspired by Yelp. This web application makes use of Ruby on Rails on the backend, a PostgreSQL database, and React.js with Redux on the frontend for efficient navigation.

## Features & Implementation

### Single-Page App

The main feature of the site is the ability to browse through businesses and reviews while remaining on a single page. QuickScope runs off of a single static page, and renders the correct information depending on whether or not the user viewing the site is logged in. If the user is logged in, the root html file is bootstrapped to listen for an active user at any time and then subsequently store relevant (i.e. `currentUser.profile_image_url`), non-sensitive  information (i.e. no session tokens or password digests) regarding the current user in the Redux store under the `session` property.

```html.erb
<script type="text/javascript">
  <% if current_user %>
    window.currentUser = <%= render(
      "api/users/user.json.jbuilder",
      user: current_user).html_safe %>
  <% end %>
</script>
```

### Rendering Businesses

  The businesses are stored in the database with columns for the `id`, `name`, `profile_image_url`, `street_address`, and map coordinates (stored as `lat` and `lng`) of the business. Once an active user is detected, an API call is made to the database which returns an index of compact descriptions for all of the businesses stored in the database. The businesses are then stored in the Redux store under the `businesses` property.

### Rendering Reviews

  Clicking on a business within the index list will trigger two actions: 1) the `business-index-item-detailed` will be rendered, causing the selected business to move to the top of the screen and display images that can be zoomed in on when hovered over and 2) an API call is made to join the `reviews` table with the `businesses` table to retrieve and render all of the reviews of the selected business to the right through the rendering of the `review-index-container` component. The average rating of the business, `avg_rating`, is calculated on the backend within Rails once the reviews are retrieved, and the correct rating of the business will be rendered as stars.

### Creating Reviews

  The `review_form` component renders in conjunction with the reviews of the selected business being rendered. Submission is disabled until a rating is chosen and the content is no longer an empty string. Upon submission the  `business-index-item-detailed` component will update accordingly to reflect the changes (i.e. number of reviews increase by 1), and the newly created review will instantly display at the top of the `review-index`.

### Asynchronous Searching

  The primary benefit of the code structure of this site is the ability to maintain a detailed view of any given business and search through different businesses at the same time. The `sidebar-container` holds two different methods of searching businesses: 1) Users can search for a business by typing the name of the business and 2) Users can filter businesses by selecting specific tags. On every keypress within the search input box, an API call is made to the database to return any businesses that match the parameters. The `filter_id` is `0` upon login, which refers to the index of all businesses. Selecting a tag on the sidebar will change the `filter_id` and include it within the parameters as a query string.

  ```Ruby
  def index
    search = params[:search]
    filter_id = params[:filterId]

    if filter_id == "0"
      @businesses = Business.where("name ILIKE ?", "%#{search}%").includes(:reviews)
    else
      @businesses = Business.where("name ILIKE ?", "%#{search}%")
                            .joins(:taggings)
                            .where("taggings.tag_id = ?", filter_id)
                            .includes(:reviews)
    end

    render "api/businesses/index"
  end
  ```
  The results are instant, and the `business-index` reflects any changes. The `business-index-item-detailed` component will remain rendered until it is no longer part of the results returned by the API call.
