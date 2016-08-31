import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { requestBusinesses } from '../actions/business_actions';

const mapStateToProps = state => ({

});

export default connect(
  mapStateToProps
)(Sidebar);
