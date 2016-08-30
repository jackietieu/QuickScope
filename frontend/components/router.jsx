import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Session from './session';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectUser = this._redirectUser.bind(this);
  }

  _redirectUser(nextState, replace){
    if (window.currentUser == null) {
      hashHistory.push("session");
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <indexRoute path="/session" component={ Session } />
        <Route path="/" onEnter={this._redirectUser} component={ App }>
          //remember to implemet routes for filters/businesses/reviews
          <Route path="/filters/:filterId/businesses" />
          <Route path="/filters/:filterId/businesses/:businessId" />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
