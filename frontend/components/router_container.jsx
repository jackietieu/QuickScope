import { connect } from 'react-redux';
import AppRouter from './router';

const mapStateToProps = state => ({
  loggedIn: !!state.session.currentUser,
  state: state
});

export default connect(
  mapStateToProps
)(AppRouter);
