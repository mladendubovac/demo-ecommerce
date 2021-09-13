import React from 'react';
import { useLocation } from 'react-router';
import './OrderCompleted.css';

const OrderCompleted = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div className="order-completed-wrapper">
            <h1 className="order-completed_title">Thanks for ordering</h1>
            <p className="order-completed_date">Order date: { data?.date || 'N/A'}</p>
            <p className="order-completed_id">Order id: { data?.orderId || 'N/A'}</p>
        </div>
    )
}

export default OrderCompleted;
