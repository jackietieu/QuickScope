import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BusinessesMiddleware from './businesses_middleware';
import ReviewsMiddleware from './reviews_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BusinessesMiddleware,
  ReviewsMiddleware
);

export default RootMiddleware;
