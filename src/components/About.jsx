import React, { useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { institute } from '../data/siteData';
import './About.css';

const About = () => {
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
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const bullets = [
    'Practical Learning',
    'Skill Development',
    'Career Preparation',
    'Individual Attention',
    'Beginner-Friendly Teaching'
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal slide-right">
            <h2 className="section-title">About Our Institute</h2>
            <div className="title-underline-left"></div>
            <p className="about-desc">
              {institute?.description || "Welcome to our institute. We specialize in providing practical, career-oriented education that prepares students for the modern digital landscape. Our comprehensive courses are designed to bridge the gap between theoretical knowledge and industry requirements, ensuring our students are job-ready from day one."}
            </p>
            <ul className="about-bullets">
              {bullets.map((bullet, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="about-visual reveal slide-left">
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Years of Excellence (Since 2001)</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Students Trained</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Courses Offered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Practical Approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
