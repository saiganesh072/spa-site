import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="container page-wrapper" id="cart-page">
            <h1 className="mb-4" id="cart-heading">Your Shopping Bag</h1>
            <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>

                {/* Cart Items */}
                <div className="card" id="cart-items-container">
                    <div className="flex-between mb-4" style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                        <div>
                            <h3 id="item-1-name">Sleek Headset Pro</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Color: Black</p>
                        </div>
                        <div style={{ fontWeight: 'bold' }} id="item-1-price">$299.00</div>
                    </div>
                    <div className="flex-between" style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                        <div>
                            <h3 id="item-2-name">Design Audit Service</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Date: Dec 20, 2024</p>
                        </div>
                        <div style={{ fontWeight: 'bold' }} id="item-2-price">$500.00</div>
                    </div>
                </div>

                {/* Summary */}
                <div className="card" style={{ height: 'fit-content' }} id="cart-summary">
                    <h3 className="mb-4">Summary</h3>
                    <div className="flex-between mb-2">
                        <span>Subtotal</span>
                        <span>$799.00</span>
                    </div>
                    <div className="flex-between mb-4">
                        <span>Tax</span>
                        <span>$79.90</span>
                    </div>
                    <div className="flex-between mb-4" style={{ fontSize: '1.25rem', fontWeight: 'bold', borderTop: '2px solid #eee', paddingTop: '1rem' }}>
                        <span>Total</span>
                        <span id="cart-total-price">$878.90</span>
                    </div>
                    <Link to="/checkout" className="btn btn-primary" style={{ width: '100%' }} id="btn-checkout">Proceed to Checkout</Link>
                </div>

            </div>
        </div>
    );
};

export default Cart;
