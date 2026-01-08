import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
    const stats = [
        { number: '150+', label: 'Global Projects Delivered' },
        { number: '12', label: 'Years of Digital Innovation' },
        { number: '50+', label: 'Strategic Tech Partners' },
        { number: '98%', label: 'Client Satisfaction Rate' },
        { number: '24/7', label: 'Support & Maintenance' },
        { number: '100+', label: 'Expert Digital Strategists' },
    ];

    return (
        <section className="section-dark stats-section">
            <div className="container">
                <span className="section-label">GWP at a Glance</span>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h2 className="stat-number">{stat.number}</h2>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
