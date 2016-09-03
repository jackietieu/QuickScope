import { connect } from 'react-redux';
import AppRouter from './router';
import { requestReviews } from '../actions/review_actions';
import { logout } from '../actions/session_actions';

const mapStateToProps = ( state ) => ({
  loggedIn: !!state.session.currentUser,
  state: state
});

const mapDispatchToProps = dispatch => ({
  requestReviews: (businessId) => dispatch(requestReviews(businessId)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
