import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="services-hero-content">
                    <h1 className="services-title">Capabilities & Offerings</h1>
                    <p className="services-subtitle">
                        We blend creative strategy with technical excellence to build industry-defining digital experiences.
                    </p>
                </div>
            </section>

            <section className="bento-section">
                <div className="bento-grid">
                    {/* Card 1: Engineering (Large) */}
                    <div className="bento-card card-large">
                        <div className="card-content">
                            <div className="card-icon">⚡</div>
                            <h3 className="card-title">Engineering</h3>
                            <p className="card-desc">
                                From scalable cloud architectures to pixel-perfect frontends, we build the robust systems that power global businesses.
                            </p>
                            <div className="card-tags">
                                <span className="card-tag">Full Stack</span>
                                <span className="card-tag">DevOps</span>
                                <span className="card-tag">Microservices</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: AI & Data (Standard) */}
                    <div className="bento-card">
                        <div className="card-content">
                            <div className="card-icon">🧠</div>
                            <h3 className="card-title">Data & AI</h3>
                            <p className="card-desc">
                                Leveraging machine learning and predictive analytics to turn raw data into actionable business intelligence.
                            </p>
                            <div className="card-tags">
                                <span className="card-tag">LLMs</span>
                                <span className="card-tag">Analytics</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Strategy (Tall) */}
                    <div className="bento-card card-tall">
                        <div className="card-content">
                            <div className="card-icon">🎯</div>
                            <h3 className="card-title">Strategic Consulting</h3>
                            <p className="card-desc">
                                We help leadership teams navigate digital transformation, identifying high-impact opportunities and execution roadmaps.
                            </p>
                            <div className="card-tags">
                                <span className="card-tag">Discovery</span>
                                <span className="card-tag">Roadmapping</span>
                                <span className="card-tag">Growth</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: UX/Design (Standard) */}
                    <div className="bento-card">
                        <div className="card-content">
                            <div className="card-icon">🎨</div>
                            <h3 className="card-title">Experience Design</h3>
                            <p className="card-desc">
                                User-centric design that balances form and function, ensuring distinct brand identity and intuitive flows.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Cloud (Standard) */}
                    <div className="bento-card">
                        <div className="card-content">
                            <div className="card-icon">☁️</div>
                            <h3 className="card-title">Cloud Native</h3>
                            <p className="card-desc">
                                Modernizing legacy infrastructure for agility, reliability, and security on AWS, Azure, and GCP.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Services;
