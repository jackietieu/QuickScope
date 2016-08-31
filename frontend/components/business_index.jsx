import React from 'react';
import BusinessIndexItem from './business_index_item';
import { withRouter } from 'react-router';

class BusinessIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestBusinesses(this.props.params.filterId);
  }

  render(){
    return (

      <p>inside business index</p>

    );
  }
}

export default withRouter(BusinessIndex);
