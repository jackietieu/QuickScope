import React from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import Session from './session';
import BusinessIndexContainer from './business_index_container';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectUser = this._redirectUser.bind(this);
  }

  _redirectUser(nextState, replace){
    if (window.currentUser === null) {
      replace('/session');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    if (window.currentUser) {
      replace('/filters/0/businesses');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <indexRoute path="/session" component={ Session } />
        <Route path="/" onEnter={this._redirectUser} component={ App }>
          //remember to implemet routes for filters/businesses/reviews
          <IndexRedirect to='/filters/0/businesses' />
          <Route path="/filters/:filterId/businesses" component={ BusinessIndexContainer } />
          // <Route path="/filters/:filterId/businesses/:businessId" component={ App }/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
