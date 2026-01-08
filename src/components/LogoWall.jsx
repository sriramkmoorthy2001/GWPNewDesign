import React from 'react';
import './LogoWall.css';

const LogoWall = () => {
    // Common tech partners/clients for a production site
    const logos = [
        { name: 'Shopify', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png' },
        { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1024px-Salesforce.com_logo.svg.png' },
        { name: 'Adobe', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Systems_logo_and_wordmark.svg/1024px-Adobe_Systems_logo_and_wordmark.svg.png' },
        { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png' },
        { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png' },
        { name: 'Vercel', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/1024px-Vercel_logo_black.svg.png' },
    ];

    return (
        <section className="section-dark logo-wall">
            <div className="container">
                <div className="logo-grid">
                    {logos.map((logo, index) => (
                        <div key={index} className="logo-item" aria-label={logo.name}>
                            <img src={logo.url} alt={logo.name} className="logo-img" style={{ filter: 'brightness(0) invert(1) opacity(0.5)' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoWall;
