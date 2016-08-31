import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { requestBusinesses } from '../util/business_api_util';

const mapStateToProps = (state, ownProps) => ({
  businesses: state.businesses,
  filterId: ownProps.params.filterId
});

const mapDispatchToProps = dispatch => ({
  requestBusinesses: (filterId) => requestBusinesses(filterId)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessIndex);
