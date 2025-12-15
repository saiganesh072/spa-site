import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailA = () => {
    return (
        <div className="container page-wrapper" id="pdp-a-page">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
                {/* Image Section */}
                <div id="pdp-a-image-container">
                    <div style={{ width: '100%', height: '400px', background: '#e2e8f0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src="/spa-site/images/products/sleek-headset.png" alt="Sleek Headset" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '1rem' }}>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} style={{ height: '80px', background: '#f1f5f9', borderRadius: '8px', cursor: 'pointer' }}></div>
                        ))}
                    </div>
                </div>

                {/* Details Section */}
                <div id="pdp-a-details">
                    <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }} className="mb-2">New Arrival</h4>
                    <h1 className="mb-2" id="pdp-a-title">Sleek Headset Pro</h1>
                    <div className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>$299</span>
                        <span style={{ background: '#dcfce7', color: '#166534', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>In Stock</span>
                    </div>

                    <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                        Experience crystal clear audio with our latest noise-cancelling technology.
                        Designed for professionals who demand the best in class performance and comfort.
                    </p>

                    <div className="mb-4">
                        <label className="form-label">Color</label>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0f172a', border: '2px solid var(--primary-color)', cursor: 'pointer' }}></div>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#94a3b8', cursor: 'pointer' }}></div>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#cbd5e1', cursor: 'pointer' }}></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link to="/cart" className="btn btn-primary" style={{ flex: 1 }} id="btn-add-to-cart-a">Add to Cart</Link>
                        <button className="btn btn-outline" style={{ width: '50px' }} id="btn-wishlist-a">♡</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailA;
