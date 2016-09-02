import { connect } from 'react-redux';
import BusinessPage from './business_page';
import { requestBusinesses } from '../util/business_api_util';

const mapStateToProps = (state, ownProps) => ({
  filterId: ownProps.params.filterId
});

export default connect(
  mapStateToProps
)(BusinessPage);
