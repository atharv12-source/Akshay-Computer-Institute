import React, { useEffect, useRef } from 'react';
import { FaProjectDiagram, FaHandsHelping, FaLightbulb, FaUserShield, FaClock, FaCertificate, FaRoute } from 'react-icons/fa';
import { benefits } from '../data/siteData';
import './Benefits.css';

const iconMap = {
  FaProjectDiagram: <FaProjectDiagram />,
  FaHandsHelping: <FaHandsHelping />,
  FaLightbulb: <FaLightbulb />,
  FaUserShield: <FaUserShield />,
  FaClock: <FaClock />,
  FaCertificate: <FaCertificate />,
  FaRoute: <FaRoute />
};

const Benefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll('.benefit-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" className="benefits-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Student Benefits</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="benefit-icon">
                {iconMap[benefit.icon] || <FaLightbulb />}
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
