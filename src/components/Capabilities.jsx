import React from 'react';
import './Capabilities.css';

const Capabilities = () => {
    const items = [
        {
            label: 'Digital Growth',
            title: 'Enterprise Solutions',
            description: 'Our Enterprise Solutions assist organizations to streamline operations, enhance scalability, and drive innovation through state-of-the-art architectures and strategic insights.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
        },
        {
            label: 'Business Acceleration',
            title: 'Small and Medium Business Solutions',
            description: 'Our Small and Medium Business Solutions are designed to help growing companies establish a strong digital presence, attract customers, and scale efficiently through tailored strategies.',
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200'
        }
    ];

    return (
        <div className="capabilities-container">
            {items.map((item, index) => (
                <section key={index} className={`section-dark capability-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                    <div className="container capability-inner">
                        <div className="capability-text">
                            <span className="section-label">{item.label}</span>
                            <h2 className="section-title">{item.title}</h2>
                            <p className="capability-description">{item.description}</p>
                            <button className="btn-electric">Explore Solution</button>
                        </div>
                        <div className="capability-visual">
                            <div className="abstract-shape">
                                <img src={item.image} alt={item.title} className="capability-img" />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Capabilities;
