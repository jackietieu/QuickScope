import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Header from './header';
import { requestBusinesses } from '../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
  filterId: state.filters.filterId,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestBusinesses: (filters) => dispatch(requestBusinesses(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
