import React from 'react';
import './Header.css';
import { BsTriangleFill, BsBagFill, BsFillCircleFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import { useModalState } from '../../hooks/useModalState';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
    const { toggleCart } = useModalState();

    return (
        <div className="header">
            <div className="header-wrapper">
                <Link to="/" className="header-wrapper_link">
                    <BsTriangleFill className="header-icon" />
                </Link>
            </div>
            <div className="header-wrapper" onClick={toggleCart}>
                <div className="header-wrapper-icon-container">
                    <BsBagFill className="header-icon" />
                    { cart?.length > 0 && <BsFillCircleFill className="header-icon cart-items" /> }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
  mapStateToProps
)(Header);
