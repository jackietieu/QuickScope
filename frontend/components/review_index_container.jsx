import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { requestReviews, createReview } from '../actions/review_actions';
// import { requestBusinesses } from '../util/business_api_util';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.reviews,
  filterId: state.filters.filterId,
  businessId: ownProps.params.businessId,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  requestReviews: businessId => dispatch(requestReviews(businessId)),
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
