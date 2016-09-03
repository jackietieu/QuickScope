import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { requestBusinesses } from '../actions/business_actions';
import { requestFilter } from '../actions/filter_actions';

const mapStateToProps = ( state, ownProps) => ({
  filters: state.filters,
  businesses: state.businesses,
  businessId: ownProps.businessId,
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  requestBusinesses: filters => dispatch(requestBusinesses(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
