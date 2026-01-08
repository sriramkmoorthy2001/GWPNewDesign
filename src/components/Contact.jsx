import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-text">
                        <h1 className="hero-title font-serif">Let's Build the Future Together — <br />Contact Us Today</h1>
                        <p className="hero-subtitle">At Global Web Production, we deliver cutting-edge digital solutions and unparalleled customer support. Whether you are a potential client, a valued partner, or have a question, we'd love to hear from you.</p>
                        <div className="scroll-indicator">
                            <span className="arrow-down"></span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-content-section section-dark">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-card">
                            <h2 className="form-title">Send us a message.</h2>
                            <p className="form-desc">We want to hear from you! Contact our team to learn about the services and language solutions we can provide to aid your business.</p>

                            <form className="message-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First name*</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">👤</span>
                                            <input type="text" placeholder="Your First Name" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Last name*</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">👤</span>
                                            <input type="text" placeholder="Your Last Name" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Company</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">🏢</span>
                                            <input type="text" placeholder="Your Company" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email*</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">✉️</span>
                                            <input type="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Business area*</label>
                                    <div className="input-wrapper">
                                        <span className="input-icon">📁</span>
                                        <select id="subject" name="subject" required defaultValue="" className="form-input">
                                            <option value="" disabled>Select a Subject</option>
                                            <option value="engineering">Engineering</option>
                                            <option value="data-ai">Data & AI</option>
                                            <option value="content-branding">Content & Branding</option>
                                            <option value="strategy">Strategy</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>How can we help you?*</label>
                                    <div className="input-wrapper items-start">
                                        <span className="input-icon mt-2">💬</span>
                                        <textarea placeholder="Your Message" required></textarea>
                                    </div>
                                </div>

                                <button type="submit" className="send-message-btn">
                                    ✈️ Send Message
                                </button>
                            </form>
                        </div>

                        <div className="contact-sidebar">
                            <div className="sidebar-widget featured-widget">
                                <h3 className="widget-title">Featured</h3>
                                <div className="featured-card">
                                    <div className="featured-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800')" }}></div>
                                    <div className="featured-info">
                                        <h4>AI-Powered Web Content Optimizer: Enhancing UX</h4>
                                        <p>Creating optimized content that resonates with audiences while meeting technical requirements...</p>
                                        <a href="#read" className="read-more-link">Read More →</a>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-widget locations-widget">
                                <h3 className="widget-title">GWP Locations</h3>
                                <ul className="locations-list">
                                    <li>
                                        <span className="flag">🇺🇸</span>
                                        <div className="loc-info">
                                            <strong>Temecula, CA, USA</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="flag">🇮🇳</span>
                                        <div className="loc-info">
                                            <strong>Trivandrum, Kerala, INDIA</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sidebar-widget social-widget">
                                <h3 className="widget-title">Stay Connected</h3>
                                <div className="social-links">
                                    <a href="#facebook" className="social-icon">f</a>
                                    <a href="#linkedin" className="social-icon">in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
