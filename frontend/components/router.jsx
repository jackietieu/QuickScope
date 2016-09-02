import React from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import Session from './session';
import BusinessPageContainer from './business_page_container';
import ReviewIndexContainer from './review_index_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfNotLoggedIn = this._redirectIfNotLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  shouldComponentUpdate(){
    return false;
  }

  _redirectIfNotLoggedIn(nextState, replace){
    if (this.props.loggedIn === false) {
      replace('/session');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    if (this.props.loggedIn === true) {
      replace('/businesses');
    }
  }

  refreshReviews( nextState, replace ){
    this.props.requestReviews(nextState.params.businessId);
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRedirect to="/businesses/0" />
          <Route
            path="/session"
            onEnter={this._redirectIfLoggedIn}
            component={ Session } />
          <Route
            path="/businesses/:filterId"
            onEnter={this._redirectIfNotLoggedIn}
            component={ BusinessPageContainer } >
            <Route path="/businesses/:filterId/:businessId" onEnter={ this.refreshReviews.bind(this) } component={ ReviewIndexContainer } />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
