import React from 'react';
import BusinessIndexContainer from './business_index_container';

export default ({ filterId, businesses }) => (
  <BusinessIndexContainer filterId={filterId} businesses={businesses} />
);
