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
    if (this.props.loggedIn === false) {
      replace('/session');
    }
  }

  _redirectIfLoggedIn(nextState, replace){
    if (this.props.loggedIn === true) {
      replace('/businesses');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRedirect to="/businesses" />
          <Route
            path="/session"
            onEnter={this._redirectIfLoggedIn}
            component={ Session } />
          <Route
            path="/businesses"
            onEnter={this._redirectIfNotLoggedIn}
            component={ BusinessPageContainer }>
            <Route path="/businesses/:businessId" component={ BusinessPageContainer } />
          </ Route>
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
