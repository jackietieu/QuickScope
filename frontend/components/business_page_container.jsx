import { connect } from 'react-redux';
import BusinessPage from './business_page';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  filterId: state.filters.filterId,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessPage);
