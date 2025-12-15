import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            navigate('/confirmation');
        }, 1500);
    };

    return (
        <div className="container page-wrapper" id="checkout-page">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 className="text-center mb-4" id="checkout-heading">Checkout</h1>
                <form onSubmit={handleSubmit} className="card" id="checkout-form">

                    <h3 className="mb-4">Shipping Information</h3>

                    <div className="form-group">
                        <label className="form-label" htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" className="form-input" required placeholder="John Doe" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input type="email" id="email" className="form-input" required placeholder="john@example.com" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input type="text" id="address" className="form-input" required placeholder="123 Main St" />
                    </div>

                    <div className="grid" style={{ marginTop: '0' }}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="city">City</label>
                            <input type="text" id="city" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="zip">Zip Code</label>
                            <input type="text" id="zip" className="form-input" required />
                        </div>
                    </div>

                    <h3 className="mb-4 mt-4">Payment Details</h3>
                    <div className="form-group">
                        <label className="form-label" htmlFor="cardNum">Card Number</label>
                        <input type="text" id="cardNum" className="form-input" placeholder="0000 0000 0000 0000" />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} id="btn-place-order" disabled={loading}>
                        {loading ? 'Processing...' : 'Place Order ($878.90)'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
