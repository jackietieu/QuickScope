import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import App from './app';
import Session from './session';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    // this._redirectUser = this._redirectUser.bind(this);
  }

  // _redirectUser(nextState, replace){
  //   debugger;
  //   router.push("/session");
  // }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Session } />
        </ Route>
      </Router>
    );
  }
}

export default withRouter(AppRouter);
