import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import BlogBook from './BlogBook';
import './Blogs.css';

const BlogHero = ({ onReadArticle }) => {
    const featuredArticle = {
        title: 'Transforming U.S. Real Estate with an AI Chatbot Agent',
        author: 'Byron Prather',
        date: 'December 2024',
        description: 'An in-depth exploration of how artificial intelligence is reshaping the real estate landscape, providing unparalleled efficiency and user engagement through intelligent automation.'
    };

    return (
        <section className="section-dark blog-hero">
            <div className="container blog-hero-inner">
                <div className="blog-hero-text">
                    <span className="section-label">Featured Article</span>
                    <h1 className="text-press-headline">{featuredArticle.title}</h1>
                    <p className="text-press-body">
                        {featuredArticle.description}
                    </p>
                    <div className="blog-meta">
                        <span className="meta-item">{featuredArticle.author}</span>
                        <span className="meta-divider">•</span>
                        <span className="meta-item">{featuredArticle.date}</span>
                    </div>
                    <button className="btn-electric" onClick={() => onReadArticle(featuredArticle)}>Read Article</button>
                </div>

                <div className="blog-hero-visual">
                    <Canvas shadows>
                        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                        <BlogBook position={[0, 0, 0]} rotation={[0, -0.2, 0]} />
                        <Environment preset="city" />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default BlogHero;
