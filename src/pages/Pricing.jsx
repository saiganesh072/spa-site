import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="container page-wrapper" id="pricing-page">
            <h1 className="text-center mb-4" id="pricing-heading">Choose Your Plan</h1>
            <div className="grid">
                {/* Basic Tier */}
                <div className="card pricing-card" id="pricing-basic">
                    <h3 className="mb-2">Basic</h3>
                    <h2 className="mb-4">$9<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></h2>
                    <ul className="mb-4" style={{ listStyle: 'none', padding: 0 }}>
                        <li className="mb-2">✓ Essential Access</li>
                        <li className="mb-2">✓ standard Support</li>
                        <li className="mb-2" style={{ color: '#cbd5e1' }}>✕ No Advanced Features</li>
                    </ul>
                    <Link to="/checkout?plan=basic" className="btn btn-outline" style={{ width: '100%' }} id="btn-select-basic">Select Basic</Link>
                </div>

                {/* Pro Tier */}
                <div className="card pricing-card" id="pricing-pro" style={{ border: '2px solid var(--primary-color)', transform: 'scale(1.05)' }}>
                    <div style={{ background: 'var(--primary-color)', color: 'white', padding: '0.25rem', borderRadius: '4px', display: 'inline-block', fontSize: '0.8rem', marginBottom: '0.5rem' }}>MOST POPULAR</div>
                    <h3 className="mb-2">Pro</h3>
                    <h2 className="mb-4">$29<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></h2>
                    <ul className="mb-4" style={{ listStyle: 'none', padding: 0 }}>
                        <li className="mb-2">✓ All Basic Features</li>
                        <li className="mb-2">✓ Priority Support</li>
                        <li className="mb-2">✓ Analytics Dashboard</li>
                    </ul>
                    <Link to="/checkout?plan=pro" className="btn btn-primary" style={{ width: '100%' }} id="btn-select-pro">Select Pro</Link>
                </div>

                {/* Enterprise Tier */}
                <div className="card pricing-card" id="pricing-enterprise">
                    <h3 className="mb-2">Enterprise</h3>
                    <h2 className="mb-4">$99<span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/mo</span></h2>
                    <ul className="mb-4" style={{ listStyle: 'none', padding: 0 }}>
                        <li className="mb-2">✓ Unlimited Access</li>
                        <li className="mb-2">✓ 24/7 Dedicated Support</li>
                        <li className="mb-2">✓ Custom API Integration</li>
                    </ul>
                    <Link to="/checkout?plan=enterprise" className="btn btn-outline" style={{ width: '100%' }} id="btn-select-enterprise">Contact Sales</Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
