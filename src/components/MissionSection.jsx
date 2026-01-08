import React from 'react';
import './AboutUs.css';

const MissionSection = () => {
    return (
        <section className="section-dark mission-section">
            <div className="container">
                <div className="mission-grid">
                    <div className="mission-label">
                        <span className="section-label">Overview</span>
                    </div>
                    <div className="mission-content">
                        <p className="text-press-body">
                            Global Web Production is an IT services and consulting company that partners with businesses to deliver reliable technology solutions, streamline operations, and support digital transformation. With a focus on quality, performance, and client success, we provide scalable services tailored to meet evolving business needs.
                        </p>
                        <div className="divider-thin"></div>
                        <h2 className="mission-statement font-serif">
                            Our mission is to be the strategic partner of choice for businesses seeking to unlock their full digital potential, for generations to come.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
