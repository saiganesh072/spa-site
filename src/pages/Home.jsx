import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page" id="home-page-container">
            {/* Hero Section */}
            <section className="hero" id="hero-banner">
                <div className="container">
                    <h1 id="hero-heading">Redefining Digital Luxury</h1>
                    <p id="hero-subtext">Experience the future of shopping with our curated collection of premium artifacts.</p>
                    <div className="hero-cta-group">
                        <Link to="/products" className="btn btn-primary" id="hero-cta-primary">
                            Shop Now
                        </Link>
                        <Link to="/about" className="btn btn-outline" id="hero-cta-secondary" style={{ marginLeft: '1rem' }}>
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Items */}
            <section className="container" style={{ paddingBottom: '4rem' }}>
                <h2 className="text-center mb-4" id="featured-heading">Featured Collections</h2>
                <div className="grid" id="featured-grid">
                    <div className="card" id="featured-item-1">
                        <h3 className="mb-2">Summer Edition</h3>
                        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Lightweight styling for the modern era.</p>
                        <Link to="/product-detail-a" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>View Collection</Link>
                    </div>
                    <div className="card" id="featured-item-2">
                        <h3 className="mb-2">Tech Essentials</h3>
                        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Upgrade your daily workflow.</p>
                        <Link to="/product-detail-b" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>Explore Gadgets</Link>
                    </div>
                    <div className="card" id="featured-item-3">
                        <h3 className="mb-2">Premium Audio</h3>
                        <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Immerse yourself in sound.</p>
                        <Link to="/products" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>Listen Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
