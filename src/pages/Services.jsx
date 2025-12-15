import React from 'react';

const Services = () => {
    const services = [
        { id: 'svc-consulting', title: 'Digital Consulting', desc: 'Expert advice on your digital transformation.' },
        { id: 'svc-design', title: 'Premium Design', desc: 'Award-winning aesthetics for your brand.' },
        { id: 'svc-dev', title: 'Custom Development', desc: 'Tailored software solutions.' },
        { id: 'svc-audit', title: 'Performance Audits', desc: 'Speed up your existing platforms.' },
    ];

    return (
        <div className="container page-wrapper" id="services-page">
            <h1 className="text-center mb-4" id="services-heading">Our Expertise</h1>
            <div className="grid">
                {services.map((service) => (
                    <div className="card" key={service.id} id={service.id}>
                        <h3 style={{ color: 'var(--primary-color)' }}>{service.title}</h3>
                        <p className="mt-4">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
