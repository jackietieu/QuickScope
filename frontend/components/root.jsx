import React from 'react';
import { Provider } from 'react-redux';
import AppRouterContainer from './router_container';

const Root = ({store}) => (
  <Provider store={store}>
    <AppRouterContainer />
  </Provider>
);

export default Root;
