import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" id="main-navigation">
            <div className="container nav-content">
                <NavLink to="/" className="nav-logo" id="nav-logo">
                    LuxeStore
                </NavLink>
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} id="nav-home">
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} id="nav-about">
                        About
                    </NavLink>
                    <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} id="nav-services">
                        Services
                    </NavLink>
                    <NavLink to="/pricing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} id="nav-pricing">
                        Pricing
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} id="nav-products">
                        Products
                    </NavLink>
                    <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} id="nav-cart">
                        Cart 🛒
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
