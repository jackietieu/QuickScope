import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { requestReviews } from '../actions/review_actions';
// import { requestBusinesses } from '../util/business_api_util';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews,
  businessId: ownProps.params.businessId
});

const mapDispatchToProps = dispatch => ({
  requestReviews: businessId => dispatch(requestReviews(businessId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
