import React from 'react';
import './Insights.css';

const Insights = () => {
    const articles = [
        {
            title: 'Transforming U.S. Real Estate with an AI Chatbot Agent',
            category: 'Case Study',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'AI-Powered Web Content Optimizer: Enhancing UX',
            category: 'Insights',
            image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800'
        },
        {
            title: 'The Importance of Website Performance',
            category: 'Technical',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section className="section-dark insights-section">
            <div className="container">
                <span className="section-label">Insights</span>
                <div className="insights-header">
                    <h2 className="section-title">Industry Articles</h2>
                    <button className="btn-view-all">View All Articles</button>
                </div>
                <div className="insights-grid">
                    {articles.map((article, index) => (
                        <div key={index} className="insight-card">
                            <div className="insight-image-wrapper">
                                <img src={article.image} alt={article.title} className="insight-img" />
                            </div>
                            <div className="insight-content">
                                <span className="insight-category">{article.category}</span>
                                <h3 className="insight-title">{article.title}</h3>
                                <a href="#read" className="read-article">Read More →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
