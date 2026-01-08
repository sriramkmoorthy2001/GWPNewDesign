import React from 'react';
import './AboutUs.css';

const ManagementSection = () => {
    const leadership = [
        {
            name: 'Byron Prather',
            role: 'CEO & Founder',
            bio: 'Byron Prather has more than 20 years of experience as a Microsoft senior manager, programming digital experiences and guaranteeing user responsiveness for web development, search engine optimization and responsiveness.\n\nAt Microsoft, he played a pivotal role shaping the company’s digital offerings, driving innovation and creating user experiences that resonated with millions of users worldwide. His pursuit of excellence and dedication to strategic thinking have been instrumental in the success of Microsoft’s digital ventures.',
            image: 'https://www.globalwebproduction.com/Assets/ByronPrather900.webp'
        },
        {
            name: 'Rajalakshmi Santha',
            role: 'Chief Technology Officer',
            bio: 'Rajalakshmi Santha is a distinguished IT leader with a career spanning over 17 years. Her extensive experience and leadership qualities make her an invaluable addition to the Global Web Production team. Known for her ability to solve business problems in a culture of critical thinking, Rajalakshmi’s leadership is grounded in thin-grid-lines and a deep understanding of complex business processes.\n\nRajalakshmi excels in designing and delivering customized products for clients, showcasing her prowess in stakeholder coordination and Salesforce management. Her dedication to continuous improvement and her passion for innovation are evident in her work.',
            image: 'https://www.globalwebproduction.com/Assets/Lekshmi_900.webp'
        },
        {
            name: 'Marty Kneeland',
            role: 'Sr. Director of Enterprise Business Development',
            bio: 'Marty Kneeland is a relationship-driven business development leader with more than twenty years of experience managing account and marketing programs for Microsoft and other global brands. He began his career as a technical program manager supporting large scale mission and test launches, then expanded into consulting roles for leading global recruitment, healthcare, and industrial marketing initiatives across dozens of industrial and markets.\n\nAt Global Web Production, Marty helps enterprises leverage faster and more efficient processes to build trusted partnerships and scale business objectives in the federal industry, and insure user experiences in themes. His background spans across market strategy, marketing automation, and account operations at global scale.',
            image: 'https://www.globalwebproduction.com/Assets/Marty_Kneeland.jpg'
        }
    ];

    return (
        <section className="section-dark management-section">
            <div className="container">
                <span className="section-label">Leadership</span>
                <h2 className="text-press-headline">Management</h2>
                <div className="leadership-list">
                    {leadership.map((member, index) => (
                        <div key={index} className={`leadership-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                            <div className="leadership-image">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="leadership-info">
                                <div className="member-header">
                                    <h3 className="member-name font-serif">{member.name}</h3>
                                    <span className="member-role">{member.role}</span>
                                </div>
                                <div className="divider-thin"></div>
                                <p className="member-bio text-press-body">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManagementSection;
