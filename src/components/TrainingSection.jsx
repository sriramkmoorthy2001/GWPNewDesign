import React from 'react';
import './TrainingSection.css';

const TrainingSection = () => {
    return (
        <section className="section-dark training-section">
            <div className="container training-inner">
                <div className="training-content">
                    <span className="section-label">Education & Growth</span>
                    <h2 className="section-title">Ladder7 Nextstep Solutions</h2>
                    <p className="training-desc">
                        Ladder7 Nextstep Solutions is a training academy based in India, focused on enhancing the technical skills of their attendees.
                        Through our partnership, we are able to provide opportunities for real-world experience to students and also provide the companies we serve with top talent.
                    </p>
                    <button className="btn-electric">Learn More</button>
                </div>
                <div className="training-image">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" alt="Training" className="training-img" />
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
