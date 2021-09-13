import { combineReducers } from 'redux';
import CartReducer from './cart/cart_reducer';

const rootReducer = combineReducers({
  cart: CartReducer
});

export default rootReducer;
