export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

export const addToCart = (product) => dispatch => {
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });
}

export const removeFromCart = (productId) => dispatch => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: productId });
}

export const updateQuantity = (productId, quantity ) => dispatch => {
    dispatch({ type: CART_ACTION_TYPES.UPDATE_QUANTITY, payload: { productId, quantity } });
}

export const clearCart = () => dispatch => {
    dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });
}
