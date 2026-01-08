import React from 'react';
import './BlogPostDetails.css';

const BlogPostDetails = ({ blog, setView }) => {
    if (!blog) return null;

    const blogContent = {
        'AI-Powered Web Content Optimizer: Enhancing UX': {
            tags: ['Accessibility', 'Artificial Intelligence', 'Content Services', 'Digital Experience'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600',
            content: (
                <>
                    <p className="intro-text">In today's competitive digital landscape, creating optimized content that resonates with audiences while meeting technical requirements has become increasingly complex. Organizations face challenges in maintaining readability, SEO effectiveness, and audience engagement across their digital properties. This case study explores how an AI-powered web content optimizer transformed the content creation process for a Fortune 500 company.</p>

                    <h3>The Solution: AI-Powered Content Optimization</h3>
                    <p>The Webpage Content Optimizer leverages bespoke AI technologies to analyze and enhance web content across multiple dimensions. Built on a foundation of advanced natural language processing, the tool provides comprehensive analysis and suggestions for improvement through a user-friendly interface.</p>

                    <h4>Key Capabilities include:</h4>
                    <ul>
                        <li>Readability scoring and enhancement using metrics like Flesch Reading Ease.</li>
                        <li>Sentiment analysis to align content tone with brand voice.</li>
                        <li>SEO keyword optimization using GPT-4 for semantic analysis.</li>
                        <li>Content structure analysis for improved accessibility.</li>
                        <li>Regional and cultural nuance adaptation.</li>
                    </ul>

                    <div className="article-image-box">
                        <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1200" alt="AI Interface" />
                        <span className="image-caption">The AI dashboard streamlines content workflows.</span>
                    </div>

                    <h3>Implementation: From POC to Enterprise Integration</h3>
                    <p>What began as a proof of concept quickly demonstrated significant value. Working closely with the client's content team, the solution evolved from an exploratory phase to a fully integrated Adobe Experience Manager (AEM) toolkit. This transformation followed a structured approach:</p>
                    <ol>
                        <li>Initial assessment and use case identification during early GCo adoption.</li>
                        <li>Development of targeted POCs focusing on accessibility compliance.</li>
                        <li>Selection of the AI-Powered SDLC tool and AI Text Generator as the primary focus.</li>
                        <li>Full integration with AEM to streamline content workflows.</li>
                        <li>Progressive expansion to include broader content optimization capabilities.</li>
                    </ol>

                    <blockquote className="article-quote">
                        "The AI Content Optimizer has reduced our content production time by 40% while simultaneously improving our organic search performance."
                    </blockquote>
                </>
            )
        },
        'The Importance of Website Performance': {
            tags: ['Development', 'Performance', 'Strategy'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
            content: (
                <>
                    <p className="intro-text">One of the services that we offer is website optimization, otherwise known as page load time (PLT). It raises a major area of concern: Why should you be concerned about page load time? Many studies of this subject. It shown for many developers it truly the core of any firm's success. Page load time, and the impact on website an early stage of fast PLT, refers to the time it takes for a web page to fully load and the impact it has on user experience.</p>

                    <h3>User Experience: The First Impression</h3>
                    <p>User Experience The primary reason for focusing on page load time is to provide a positive user experience. Slow-loading pages frustrate users and can lead to high bounce rates, where visitors leave your site without interacting with any content. In today's fast-paced digital world, users expect quick and seamless interactions. A fast-loading website improves user satisfaction, encourages engagement, and increases the likelihood of users staying on your site for longer. Conversely, slow page load times can have a negative impact on conversion rates.</p>

                    <h3>SEO and Search Engine Rankings</h3>
                    <p>Search Engine Rankings: Search engines like Google consider page load time as a ranking factor. Websites that load quickly are more likely to rank higher in search engine results pages (SERPs). Google's algorithms prioritize user experience, and slow-loading pages alter that user experience. As a result, providing a poor user experience can lead to lower search engine visibility and decreased organic traffic. Improving page load time can contribute to better search engine optimization (SEO).</p>

                    <div className="article-image-box">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Performance Graph" />
                        <span className="image-caption">Faster load times directly correlate with higher user retention.</span>
                    </div>

                    <h3>Competitive Advantage</h3>
                    <p>Competitive Edge In today's competitive online landscape, a faster website can give you a competitive advantage. If your website loads quickly while your competitors' sites are slow, users are more likely to choose your site over theirs. This can lead to increased brand engagement and customer loyalty.</p>
                </>
            )
        },
        'The Basics of the Software Development Lifecycle': {
            tags: ['SDLC', 'Software Engineering', 'Best Practices'],
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600',
            content: (
                <>
                    <p className="intro-text">In the realm of technology, where innovation and efficiency reign supreme, the Software Development Lifecycle (SDLC) is the cornerstone of successful software creation. From the conception of an idea to the final deployment of a functional application, the SDLC is a structured process that ensures the development of high-quality software that meets consumer requirements and professional standards.</p>

                    <h3>What is the Software Development Lifecycle?</h3>
                    <p>The Software Development Lifecycle is a framework that outlines the various stages involved in creating software, from its inception to its retirement. This structured approach aims to minimize development costs, enhance software quality, reduce turnaround time, and ultimately deliver a product that meets the client's requirements and expectations.</p>

                    <h3>Key Phases of the SDLC</h3>
                    <div className="phase-grid">
                        <div className="phase-item">
                            <h4>1. Requirement Gathering</h4>
                            <p>The journey begins with understanding the client's needs and objectives. This phase involves detailed discussions, brainstorming sessions, and documentation of the functional and technical requirements. Clear communication is key.</p>
                        </div>
                        <div className="phase-item">
                            <h4>2. Planning</h4>
                            <p>In the planning phase, the development team creates a roadmap for the project. This involves defining project timelines, allocating resources, and identifying potential obstacles before development starts.</p>
                        </div>
                        <div className="phase-item">
                            <h4>3. Design</h4>
                            <p>The design phase involves creating a blueprint for the software's architecture, user interface, and overall functionality. This stage translates gathered requirements into technical specifications.</p>
                        </div>
                        <div className="phase-item">
                            <h4>4. Implementation</h4>
                            <p>This is where the actual coding happens. Developers write the code based on the design specifications and integrate various modules to form the core software functionality.</p>
                        </div>
                        <div className="phase-item">
                            <h4>5. Testing</h4>
                            <p>Testing is a critical phase where the developed software is rigorously checked for bugs, errors, and inconsistencies. Different testing methodologies are employed to ensure reliability.</p>
                        </div>
                    </div>

                    <blockquote className="article-quote">
                        "The SDLC is not just a process for building software; it's a philosophy of quality and predictability in a world of high-risk innovation."
                    </blockquote>
                </>
            )
        },
        'Top Web Development Programs': {
            tags: ['Education', 'Tech Trends', 'Career'],
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600',
            content: (
                <>
                    <p className="intro-text">In today's digital age, web development is a dynamic field that has seen exponential growth. With businesses and individuals alike requiring an effective online presence, the demand for skilled web developers continues to rise. This article explore the top web development programs and technologies that are setting the standard for 2025.</p>

                    <h3>The Rise of Full-Stack Mastery</h3>
                    <p>Modern developers are no longer siloed into "front-end" or "back-end". The most successful programs now focus on full-stack proficiency, enabling developers to build complete, end-to-end solutions using modern frameworks like React, Next.js, and advanced cloud infrastructures.</p>

                    <h3>Key Technologies to Watch</h3>
                    <ul>
                        <li>AI-Assisted Development: GitHub Copilot and similar tools.</li>
                        <li>Edge Computing: Transforming how we deliver content.</li>
                        <li>WebAssembly: Bringing high-performance code to the browser.</li>
                        <li>Serverless Architectures: Scaling without managing servers.</li>
                    </ul>

                    <div className="article-image-box">
                        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200" alt="Code on Screen" />
                        <span className="image-caption">Modern development requires a diverse set of technical skills.</span>
                    </div>

                    <h3>Continuous Learning</h3>
                    <p>The only constant in web development is change. The best programs emphasize "learning how to learn" rather than just memorizing syntax, preparing developers for the technologies of 2030 and beyond.</p>
                </>
            )
        }
    };

    const currentBlog = blogContent[blog.title] || {
        tags: ['Article'],
        image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1600',
        content: <p>Full content for this article is being finalized. Please check back soon.</p>
    };

    return (
        <div className="blog-post-page">
            <header className="blog-post-header section-dark">
                <div className="container">
                    <button className="back-to-library" onClick={() => setView('blogs')}>
                        ← Back to Library
                    </button>

                    <div className="post-header-content">
                        <div className="post-tags">
                            {currentBlog.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <h1 className="post-headline font-serif">{blog.title}</h1>
                        <div className="post-meta">
                            <span className="author">By {blog.author}</span>
                            <span className="divider">•</span>
                            <span className="date">{blog.date}</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="blog-post-body">
                <div className="container">
                    <div className="main-image-wrapper">
                        <img src={currentBlog.image} alt={blog.title} className="main-featured-image" />
                    </div>

                    <div className="article-layout">
                        <aside className="article-sidebar">
                            <div className="share-links">
                                <span>Share</span>
                                <div className="icons">
                                    <i className="social-icon">f</i>
                                    <i className="social-icon">t</i>
                                    <i className="social-icon">in</i>
                                </div>
                            </div>
                        </aside>

                        <div className="article-content">
                            {currentBlog.content}
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-content-section section-dark">
                <div className="container">
                    <h2 className="section-title">Related Content</h2>
                    <div className="related-grid">
                        <div className="related-card">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" alt="Related" />
                            <h4 className="font-serif">The Core of Enterprise UI</h4>
                            <span className="read-btn">Read More →</span>
                        </div>
                        <div className="related-card">
                            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400" alt="Related" />
                            <h4 className="font-serif">Scaling Dev Teams</h4>
                            <span className="read-btn">Read More →</span>
                        </div>
                        <div className="related-card">
                            <img src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=400" alt="Related" />
                            <h4 className="font-serif">The AI Workflow</h4>
                            <span className="read-btn">Read More →</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPostDetails;
