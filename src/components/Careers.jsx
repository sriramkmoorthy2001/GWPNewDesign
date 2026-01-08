import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
    const [activeLocation, setActiveLocation] = useState('India');

    const jobs = [
        { title: 'Technical Project Manager - CRM Cloud', location: 'USA', type: 'Full-time', category: 'Management' },
        { title: 'WordPress Developer', location: 'India', type: 'Full-time', category: 'Development' },
        { title: 'UI/UX Designer', location: 'India', type: 'Full-time', category: 'Design' },
        { title: 'HR Executive', location: 'India', type: 'Full-time', category: 'HR' },
        { title: 'Development QA Intern', location: 'India', type: 'Internship', category: 'QA' },
        { title: 'Full Stack Developer (MERN) Intern', location: 'India', type: 'Internship', category: 'Development' },
        { title: 'HR Recruiting Intern', location: 'India', type: 'Internship', category: 'HR' },
        { title: 'WordPress Developer Intern', location: 'India', type: 'Internship', category: 'Development' },
        { title: 'Full Stack Developer (PHP) Intern', location: 'India', type: 'Internship', category: 'Development' },
        { title: 'Data Science Associate Intern', location: 'India', type: 'Internship', category: 'Data Science' },
        { title: 'Digital Marketing Associate Intern', location: 'India', type: 'Internship', category: 'Marketing' },
        { title: 'Operations Executive Intern', location: 'India', type: 'Internship', category: 'Operations' }
    ];

    const filteredJobs = jobs.filter(job => job.location === activeLocation);

    return (
        <div className="careers-page">
            <section className="careers-hero">
                <div className="hero-overlay"></div>
                <div className="container">
                    <div className="hero-content">
                        <span className="hero-label">Careers</span>
                        <h1 className="hero-title font-serif">Be Part of Something Greater</h1>
                        <p className="hero-subtitle">Be a part of Global Web Production</p>
                    </div>
                </div>
            </section>

            <section className="careers-intro section-light">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text-block">
                            <h2 className="section-title font-serif">We Create the Future Together</h2>
                            <p>Global Web Production Company is more than a digital solutions provider — we're a vibrant community of creators, builders, and visionaries. In our dynamic, collaborative space, we bring together passionate minds from around the world to design, build, and inspire. Whether you're a developer, designer, strategist, or visionary, here you'll find the freedom to explore, create global impact, and shape the digital future. Join us and be part of a global movement where ideas thrive, careers take flight, and bold thinking leads the way.</p>
                            <div className="intro-meta">
                                <strong>Since 2022,</strong>
                                <p>Global Web Production Company has been a launchpad for creators, builders, and innovators. We've reimagined what digital experiences can look like — and now, we're just getting started. Whether you're looking to develop platforms, design eye-catching interfaces, or manage products, you'll be part of a team that's shaping the future of the web for customers worldwide. With every line of code and every pixel, you'll help create experiences that connect, inspire, and transform.</p>
                            </div>
                        </div>
                        <div className="intro-image-block">
                            <div className="abstract-visual">
                                {/* Use an abstract icon or image representing global connectivity/coding */}
                                <div className="code-sphere"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="careers-culture section-dark">
                <div className="container text-center">
                    <h2 className="section-title font-serif">Be You. Make an Impact</h2>
                    <p className="culture-text">We believe there's room for everyone at Global Web Production Company. We are all different, and each of us brings something unique that helps build the community spirit that defines our success. We celebrate diversity, we are always for inclusion, and we know this is a journey that constantly evolves. That's why we keep learning — through workshops, webinars, and events we organize with support from our Global Web Production community and external partners. After all, we are creators, collaborators, and lifelong learners.</p>
                </div>
            </section>

            <section className="jobs-section section-light" id="jobs">
                <div className="container">
                    <div className="jobs-header text-center">
                        <h2 className="section-title font-serif">Jobs</h2>
                        <p className="jobs-subtitle">Working at Global Web Production Company is all about professional challenges, personal growth, career development, and having fun. What makes working here different? We truly care about our people.</p>
                    </div>

                    <div className="jobs-filter-tabs">
                        <button
                            className={`filter-tab ${activeLocation === 'India' ? 'active' : ''}`}
                            onClick={() => setActiveLocation('India')}
                        >India</button>
                        <button
                            className={`filter-tab ${activeLocation === 'USA' ? 'active' : ''}`}
                            onClick={() => setActiveLocation('USA')}
                        >USA</button>
                    </div>

                    <div className="jobs-list">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => (
                                <div key={index} className="job-item">
                                    <div className="job-main-info">
                                        <h3 className="job-title">{job.title}</h3>
                                        <div className="job-meta-row">
                                            <span className="job-location">📍 {job.location}, Remote</span>
                                            <span className="job-type">💼 {job.type}</span>
                                        </div>
                                    </div>
                                    <button className="view-details-btn">View Details</button>
                                </div>
                            ))
                        ) : (
                            <p className="no-jobs">No current openings in this location. Check back soon!</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
