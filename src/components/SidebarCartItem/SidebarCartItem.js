import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/actions/cart/cart_action';
import { formatPrice } from '../../utils/helper_function';
import './SidebarCartItem.css';

const SidebarCartItem = ({ product, quantity }) => {
    const dispatch = useDispatch();

    const handleRemoveCartItem = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const handleUpdateQuantity = (productId, newQuantity) => {
        if (quantity < 1) {
            return dispatch(removeFromCart(productId));
        }
        dispatch(updateQuantity(productId, newQuantity));
    }

    return (
        <div className="sidebar-cart-item-wrapper">
            <img src={product.image} alt={product.title} className="sidebar-cart-item-wrapper_image" />
            <div className="sidebar-cart-item-wrapper_info">
                <h4 className="sidebar-cart-item-wrapper_info_title">{ product.title }</h4>
                <h4 className="sidebar-cart-item-wrapper_info_price">{ formatPrice(product.price) }</h4>
                <button className="sidebar-cart-item-wrapper_info_remove_button" onClick={() => handleRemoveCartItem(product.id)}>remove</button>
            </div>
            <div className="sidebar-cart-item-wrapper_quantity">
                <button
                    className="sidebar-cart-item-wrapper_quantity_button"
                    onClick={() => handleUpdateQuantity(product.id, -1)}
                >
                    -
                </button>
                <span className="sidebar-cart-item-wrapper_quantity_span">{ quantity }</span>
                <button className="sidebar-cart-item-wrapper_quantity_button" onClick={() => handleUpdateQuantity(product.id, 1)}>+</button>
            </div>
        </div>
    )
}

export default SidebarCartItem;
