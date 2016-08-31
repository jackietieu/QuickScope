import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BusinessesMiddleware from './businesses_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BusinessesMiddleware
);

export default RootMiddleware;
