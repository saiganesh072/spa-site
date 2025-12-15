import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetailB = () => {
    return (
        <div id="pdp-b-page" style={{ paddingTop: '80px' }}>

            {/* Full Width Banner */}
            <div style={{ height: '60vh', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', position: 'relative' }} id="pdp-b-hero">
                <div className="container text-center">
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Smart Watch X</h1>
                    <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>The future on your wrist.</p>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '800px', marginTop: '-4rem', position: 'relative', zIndex: 10, background: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <div className="flex-between mb-4">
                    <h2 id="pdp-b-title">Specification Highlights</h2>
                    <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary-color)' }}>$199</span>
                </div>

                <p className="mb-4" id="pdp-b-desc">
                    Redefine how you interact with your digital world. The Smart Watch X features a retina display,
                    week-long battery life, and comprehensive health monitoring sensors.
                </p>

                <div className="grid mb-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <h3>24h</h3>
                        <p>Battery</p>
                    </div>
                    <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <h3>50m</h3>
                        <p>Water Dept</p>
                    </div>
                </div>

                <Link to="/cart" className="btn btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem' }} id="btn-add-to-cart-b">
                    Buy Now - Safe Checkout
                </Link>
            </div>

            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h3 className="mb-4">See it in action</h3>
                <div style={{ height: '300px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    [ Video Placeholder ]
                </div>
            </div>

        </div>
    );
};

export default ProductDetailB;
