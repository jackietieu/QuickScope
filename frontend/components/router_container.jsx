import { connect } from 'react-redux';
import AppRouter from './router';
import { requestReviews } from '../actions/review_actions';

const mapStateToProps = ( state ) => ({
  loggedIn: !!state.session.currentUser,
  state: state
});

const mapDispatchToProps = dispatch => ({
  requestReviews: (businessId) => dispatch(requestReviews(businessId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
