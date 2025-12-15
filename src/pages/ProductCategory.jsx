import React from 'react';
import { Link } from 'react-router-dom';

const products = [
    { id: 1, name: 'Sleek Headset', price: '$299', link: '/product-detail-a', category: 'Audio', image: '/spa-site/images/products/sleek-headset.png' },
    { id: 2, name: 'Smart Watch X', price: '$199', link: '/product-detail-b', category: 'Wearables', image: '/spa-site/images/products/smart-watch.png' },
    { id: 3, name: 'Designer Lamp', price: '$89', link: '/product-detail-a', category: 'Home', image: '/spa-site/images/products/lamp.png' },
    { id: 4, name: 'Ergo Chair', price: '$599', link: '/product-detail-b', category: 'Furniture', image: '/spa-site/images/products/chair.png' },
    { id: 5, name: 'Mechanical Keyboard', price: '$149', link: '/product-detail-a', category: 'Tech', image: '/spa-site/images/products/keyboard.png' },
    { id: 6, name: '4K Monitor', price: '$499', link: '/product-detail-b', category: 'Tech', image: '/spa-site/images/products/monitor.png' },
];

const ProductCategory = () => {
    return (
        <div className="container page-wrapper" id="product-category-page">
            <div className="flex-between mb-4">
                <h1 id="category-heading">All Products</h1>
                <select style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} id="sort-select">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>

            <div className="grid" id="product-grid">
                {products.map((p) => (
                    <div className="card" key={p.id} id={`product-card-${p.id}`}>
                        <div style={{ height: '200px', background: '#f1f5f9', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                            <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div className="flex-between mb-2">
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{p.category}</span>
                            <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{p.price}</span>
                        </div>
                        <h3 className="mb-2">{p.name}</h3>
                        <Link to={p.link} className="btn btn-outline" style={{ width: '100%', padding: '0.5rem' }} id={`btn-view-${p.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCategory;
