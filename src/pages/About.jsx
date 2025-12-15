import React from 'react';

const About = () => {
    return (
        <div className="container page-wrapper" id="about-page">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="mb-4" id="about-heading">About LuxeStore</h1>
                <div className="card" id="about-content">
                    <p className="mb-4" id="about-para-1">
                        Founded in 2024, LuxeStore was built on the principle that digital shopping should be as refined as the products we sell. We believe in minimalism, performance, and aesthetics.
                    </p>
                    <p className="mb-4" id="about-para-2">
                        Our team consists of passionate designers and engineers dedicated to crafting the perfect user experience. We rigorously test every interaction to ensure silky smooth performance.
                    </p>
                    <p id="about-para-3">
                        Join us on our journey to redefine the e-commerce landscape, one pixel at a time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
