import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestBusinesses } from '../actions/business_actions';

const mapStateToProps = (state, ownProps) => ({
  businesses: state.businesses,
  filterId: ownProps.filterId
});

const mapDispatchToProps = dispatch => ({
  requestBusinesses: (filterId) => dispatch(requestBusinesses(filterId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
