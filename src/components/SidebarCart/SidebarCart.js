import React, { useMemo, useRef } from "react";
import { GrClose } from 'react-icons/gr';
import { connect, useDispatch } from 'react-redux';
import { useModalState } from '../../hooks/useModalState';
import { OutsideClick } from '../../hooks/useOutsideClick';
import './SidebarCart.css';
import SidebarCartItem from '../SidebarCartItem/SidebarCartItem';
import { formatPrice } from '../../utils/helper_function';
import { clearCart } from '../../store/actions/cart/cart_action';
import { useHistory } from 'react-router-dom';

function SidebarCart({ cart }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { cartOpen, toggleCart } = useModalState();

    const boxRef = useRef(null);
    const boxOutsideClick = OutsideClick(boxRef);

    const handleClickSideBarCart = () => {
        boxOutsideClick && toggleCart();
    }

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, curr) => acc + (curr.quantity * parseFloat(curr?.product?.price)), 0);
    }, [cart]);

    const handleCheckoutClick = async () => {
        const date = new Date();
        const response = await fetch('https://fakestoreapi.com/carts', {
            method: 'POST',
            body: JSON.stringify({
                userId: 1,
                date,
                products: cart.map(cartItem => ({
                    productId: cartItem.product.id,
                    quantity: cartItem.quantity
                }))
        })});

        const jsonResponse = await response.json();
        if (jsonResponse) {
            toggleCart();
            dispatch(clearCart());
            history.push({
                pathname: '/order-completed',
                state: { date: date.toLocaleDateString(), orderId: jsonResponse.id }
            });
        }
    }

    return (
        <div className={`${cartOpen ? 'sidebar-cart-wrapper' : '' }`} onClick={handleClickSideBarCart}>
            <aside ref={boxRef} className={`sidebar-cart ${cartOpen ? 'open' : '' }`}>
                <div className="sidebar-cart-header-wrapper">
                    <h3 className="sidebar-cart-header-wrapper_title">Cart</h3>
                    <GrClose className="sidebar-cart-header-wrapper_close_icon" onClick={toggleCart} />
                </div>
                <div className="sidebar-cart-items-wrapper">
                    {!cart.length ?
                        <h2 className="sidebar-cart-items-wrapper_title">Your cart is empty</h2> :
                        cart.map(({ product, quantity }, index) =>
                            (
                                <SidebarCartItem
                                    key={index}
                                    product={product}
                                    quantity={quantity}
                                />
                            )
                        )
                    }
                </div>
                { cart?.length > 0 &&
                    <>
                        <div className="sidebar-cart-items-total-price_wrapper">
                            <p className="sidebar-cart-items-total-price_wrapper_total-price">Total price: { formatPrice(totalPrice) }</p>
                        </div>
                        <div className="sidebar-cart-items-total-checkout_wrapper">
                            <button className="sidebar-cart-items-total-checkout_wrapper-button" onClick={handleCheckoutClick}>Checkout</button>
                        </div>
                    </>
                }
            </aside>
        </div>
    );
}

const mapStateToProps = state => (
  { cart: state.cart }
);

export default connect(
  mapStateToProps,
  null
)(SidebarCart);
