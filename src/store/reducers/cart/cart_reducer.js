import { CART_ACTION_TYPES } from '../../actions/cart/cart_action';

const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const product = action.payload;
            const index = state.findIndex(cartProduct => cartProduct.product.id === product.id);
            if (index > -1) {
                state[index].quantity = state[index].quantity + 1;
                return [...state];
            }
            return [...state, { product, quantity: 1 }];
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const productId = action.payload;
            return [...state.filter(cartProduct => cartProduct.product.id !== productId)];
        }
        case CART_ACTION_TYPES.UPDATE_QUANTITY: {
            const { productId, quantity } = action.payload;
            const index = state.findIndex(cartProduct => (cartProduct.product.id === productId));
            if (index > -1) {
                state[index].quantity += parseInt(quantity);
                return [...state];
            }
            return state;
        }
        case CART_ACTION_TYPES.CLEAR_CART: {
            return initialState;
        }
        default:
            return state;
    }
}

export default cartReducer;
