import React from 'react';
import './ServicesGrid.css';

const ServicesGrid = () => {
    const services = [
        {
            title: 'Application Services & Engineering',
            description: 'Building robust, scalable applications with cutting-edge tech stacks and engineering excellence.'
        },
        {
            title: 'Data, AI & Automation',
            description: 'Harnessing data power through advanced AI/ML models and intelligent automation flows.'
        },
        {
            title: 'Strategy & Transformation Consulting',
            description: 'Guiding enterprises through digital evolution with expert strategic roadmaps and consulting.'
        },
        {
            title: 'Creative & Experience Services',
            description: 'Designing immersive user experiences and creative digital products that captivate users.'
        }
    ];

    return (
        <section className="section-light services-grid-section">
            <div className="container">
                <span className="section-label">Capabilities</span>
                <h2 className="section-title">We offer a wide variety of services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-placeholder"></div>
                            <h3 className="service-card-title">{service.title}</h3>
                            <p className="service-card-desc">{service.description}</p>
                            <a href="#learn" className="learn-more">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
