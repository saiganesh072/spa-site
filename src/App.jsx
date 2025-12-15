import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import ProductCategory from './pages/ProductCategory';
import ProductDetailA from './pages/ProductDetailA';
import ProductDetailB from './pages/ProductDetailB';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  return (
    <Router basename="/spa-site">
      <Navbar />
      <div className="main" style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<ProductCategory />} />
          <Route path="/product-detail-a" element={<ProductDetailA />} />
          <Route path="/product-detail-b" element={<ProductDetailB />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
