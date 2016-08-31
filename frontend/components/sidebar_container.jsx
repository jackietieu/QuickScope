import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { requestBusinesses } from '../actions/business_actions';
import { requestFilter } from '../actions/filter_actions';

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  // requestFilter: filters => dispatch(requestFilter(filters))
  requestBusinesses: filters => dispatch(requestBusinesses(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
