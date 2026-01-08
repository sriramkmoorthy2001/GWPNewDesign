import React from 'react';
import './Blogs.css';

const BlogArchive = () => {
    const blogs = [
        { title: 'AI-Powered Web Content Optimizer: Enhancing UX', author: 'Rajalakshmi Santha', date: 'Nov 2024' },
        { title: 'The Importance of Website Performance', author: 'Marty Kneeland', date: 'Oct 2024' },
        { title: 'The Basics of the Software Development Lifecycle', author: 'Byron Prather', date: 'Sep 2024' },
        { title: 'Top Web Development Programs', author: 'Rajalakshmi Santha', date: 'Aug 2024' },
        { title: 'Digital Transformation in 2025', author: 'Marty Kneeland', date: 'Jul 2024' },
        { title: 'Scaling Enterprise Solutions', author: 'Byron Prather', date: 'Jun 2024' },
    ];

    return (
        <section className="section-dark blog-archive">
            <div className="container">
                <span className="section-label">Archive</span>
                <div className="blog-grid-press">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-item-press">
                            <div className="blog-item-meta">
                                <span>{blog.author}</span>
                                <span className="meta-dots"></span>
                                <span>{blog.date}</span>
                            </div>
                            <h3 className="blog-item-title font-serif">{blog.title}</h3>
                            <a href="#read" className="read-more-link">Read →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogArchive;
