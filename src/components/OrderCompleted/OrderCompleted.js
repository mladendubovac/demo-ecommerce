import { useLocation } from 'react-router';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './OrderCompleted.css';

const OrderCompleted = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <>
            <Header />
            <div className="order-completed-wrapper">
                <h1 className="order-completed_title">Thanks for ordering</h1>
                <p className="order-completed_date">Order date: { data?.date }</p>
                <p className="order-completed_id">Order id: { data?.orderId }</p>
            </div>
            <Footer />
        </>
    )
}

export default OrderCompleted;
