import React from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import App from './app';
import Session from './session';
import BusinessPageContainer from './business_page_container';

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
    console.log(this.props);
    if (this.props.loggedIn === false) {
      console.log('linking to session');
      console.log(this.props.state);
      replace('/session');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    if (this.props.loggedIn === true) {
      console.log('redirectifloggedin');
      console.log(this.props.state);
      replace('/filters/0/businesses');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRedirect to="/filters/0/businesses" />
          <Route
            path="/session"
            onEnter={this._redirectIfLoggedIn}
            component={ Session } />
          <Route
            path="/filters/:filterId/businesses"
            onEnter={this._redirectIfNotLoggedIn}
            component={ BusinessPageContainer } />
        </Route>
      </Router>
    );
  }

// render(){
//   return(
//     <Router history={ hashHistory }>
//       <Route path="/" component={ App }>
//         <IndexRedirect to="/filters/0/businesses" />
//         <Route
//           path="/session"
//           onEnter={this._redirectIfLoggedIn}
//           component={ Session } />
//         <Route
//           path="/filters/:filterId/businesses"
//           onEnter={this._redirectIfNotLoggedIn}
//           component={ BusinessPageContainer } />
//       </Route>
//     </Router>
//   );
// }

//   render(){
//     return(
//       <Router history={ hashHistory }>
//         <indexRoute
//           path="/session"
//           component={ Session } />
//         <Route path="/" onEnter={this._redirectUser} component={ App }>
//           //remember to implemet routes for filters/businesses/reviews
//           <IndexRedirect to='/filters/0/businesses' />
//           <Route
//             path="/filters/:filterId/businesses"
//             component={ BusinessPageContainer } />
// // <Route path="/filters/:filterId/businesses/:businessId" component={ App }/>
//         </Route>
//       </Router>
//     );
//   }
}

export default AppRouter;
