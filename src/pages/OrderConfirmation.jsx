import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
    return (
        <div className="container page-wrapper" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} id="confirmation-page">
            <div className="card" style={{ maxWidth: '500px' }}>
                <div style={{ width: '80px', height: '80px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <span style={{ fontSize: '3rem', color: '#166534' }}>✓</span>
                </div>
                <h1 className="mb-2" id="confirmation-heading">Order Confirmed!</h1>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    Thank you for your purchase. Your order #12345 has been processed successfully.
                </p>
                <Link to="/" className="btn btn-primary" id="btn-back-home">Return to Home</Link>
            </div>
        </div>
    );
};

export default OrderConfirmation;
