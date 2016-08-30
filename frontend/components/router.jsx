import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import App from './app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        </Route>
      </Router>
    );
  }
}

export default withRouter(AppRouter);
