import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import BlogBook from './BlogBook';
import './Blogs.css';

const BlogShelf = ({ onReadEntry }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const blogs = [
        {
            title: 'AI-Powered Web Content Optimizer: Enhancing UX',
            author: 'Rajalakshmi Santha',
            date: 'Nov 2024',
            description: 'This case study explores how an AI-powered web content optimizer transformed the content creation process for a Fortune 500 company, enhancing UX through automated readability scoring and SEO optimization.',
            color: '#1a5a3a'
        },
        {
            title: 'The Importance of Website Performance',
            author: 'Marty Kneeland',
            date: 'Oct 2024',
            description: 'Why page load time matters for user experience, search engine rankings, and general business success. Learn how speed serves as a competitive edge in today\'s digital landscape.',
            color: '#5a3a1a'
        },
        {
            title: 'The Basics of the Software Development Lifecycle',
            author: 'Byron Prather',
            date: 'Sep 2024',
            description: 'The SDLC is the cornerstone of successful software creation. We break down the essential phases from requirement gathering to maintenance and support.',
            color: '#1a3a5a'
        },
        {
            title: 'Top Web Development Programs',
            author: 'Rajalakshmi Santha',
            date: 'Aug 2024',
            description: 'A curated list of the top web development programs and technologies shaping the future of digital experiences in 2025.',
            color: '#4a4a4a'
        }
    ];

    return (
        <section className="section-dark blog-shelf-section">
            <div className="container">
                <span className="section-label">The Library</span>

                <div className="shelf-container">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className={`shelf-item ${hoveredIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* 3D Book Canvas */}
                            <div className="book-canvas-wrapper">
                                <Canvas
                                    style={{ width: '100%', height: '100%' }}
                                    camera={{ position: [0, 0, 7], fov: 45 }}
                                >
                                    <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />
                                    <ambientLight intensity={1} />
                                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                                    <BlogBook
                                        coverColor={blog.color}
                                        hovered={hoveredIndex === index}
                                        scale={0.8}
                                    />
                                </Canvas>
                            </div>

                            <div className="book-info-panel">
                                <div className="book-info-content">
                                    <span className="book-meta">{blog.author} • {blog.date}</span>
                                    <h3 className="book-title font-serif">{blog.title}</h3>
                                    <p className="book-description">{blog.description}</p>
                                    <button
                                        className="read-more-btn"
                                        onClick={() => onReadEntry(blog)}
                                    >Read Entry →</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogShelf;
