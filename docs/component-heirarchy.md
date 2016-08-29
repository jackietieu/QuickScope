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

 > "/" defaults to showing businesses relating to 'Food'.
 > This is a pure single page app, where selecting a filter
 > affects which businesses are displayed:
 > selecting a business affects which reviews are displayed.
 > Since everything is always displayed on one page, it made sense
 > to always render the RootContainer which holds all 3 main containers.

 |Path   | Component   |
 |-------|-------------|
 | "/signup" | "AuthFormContainer" |
 | "/signin" | "AuthFormContainer" |
 | "/" | "RootContainer" |
 | "/filters/:tagId/businesses/" | "RootContainer" |
 | "/filters/:tagId/businesses/:businessId/" | "RootContainer" |
 | "/filters/:tagId/businesses/:businessId/new-review" | "RootContainer" |
