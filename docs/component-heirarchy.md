##Component Heirarchy

**AuthFormContainer**
 - AuthForm

**RootContainer**
 - Header
 - SidebarContainer
 - BusinessIndexContainer
 - ReviewIndexContainer

**SidebarContainer**
 - Search
 - FiltersContainer
 - Map

**FiltersContainer**
 - Filters
   * Tag

**BusinessIndexContainer**
 - BusinessIndex
   * BusinessIndexItem
     + ReviewIndex

**ReviewIndexContainer**
 - ReviewIndex
   * ReviewIndexItem
 - NewReview

 ## Routes

 > "/" defaults to showing businesses relating to tag_id = 0 / 'Food'.
 > This is a pure single page app, where selecting a filter
 > affects which businesses are displayed:
 > selecting a business affects which reviews are displayed.
 > Since everything is always displayed on one page, it made sense
 > to always render the RootContainer which holds all 3 main containers.

 > "/filters/:tagId/businesses/" loads BusinessIndexContianer with businessess matching filter criteria
 > "/filters/:tagId/businesses/:businessId/" loads ReviewIndexContainer with reviews of the selected business
 > "/filters/:tagId/businesses/:businessId/new-review" loads review form for the selected business

 |Path   | Component   |
 |-------|-------------|
 | "/session" | "AuthFormContainer" |
 | "/" | "RootContainer" |
 | "/filters/:tagId/businesses/" | "RootContainer" |
 | "/filters/:tagId/businesses/:businessId/" | "RootContainer" |
 | "/filters/:tagId/businesses/:businessId/new-review" | "RootContainer" |

 ### Alternative

 > I also though about making "/filters/:tagId/businesses/:businessId/" render
 > a separate page where it just displayed the business and its comments.

 |Path   | Component   |
 |-------|-------------|
 | "/signup" | "AuthFormContainer" |
 | "/signin" | "AuthFormContainer" |
 | "/" | "RootContainer" |
 | "/filters/:tagId/businesses/" | "RootContainer" |
 | "/filters/:tagId/businesses/:businessId/" | "BusinessPage" |
 | "/filters/:tagId/businesses/:businessId/new-review" | "BusinessPage" |
