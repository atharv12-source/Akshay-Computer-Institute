import React from 'react';
import { FaGraduationCap, FaPhone, FaArrowRight, FaAward } from 'react-icons/fa';
import { institute } from '../data/siteData';
import './Hero.css';

const Hero = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryPhone = institute.phones?.[0] || '9356301323';

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <div className="hero__shape hero__shape--1"></div>
        <div className="hero__shape hero__shape--2"></div>
        <div className="hero__shape hero__shape--3"></div>
      </div>
      
      <div className="hero__container">
        <div className="hero__content">
          {/* Prominent 25 Years Milestone Badge */}
          <div className="hero__badge">
            <FaAward className="hero__badge-icon" />
            <span className="hero__badge-years">25 YEARS COMPLETED</span>
            <span className="hero__badge-dot">•</span>
            <span className="hero__badge-sub">TRUSTED SINCE 2001</span>
          </div>

          <h1 className="hero__headline">
            {institute?.tagline || 'Build Your Skills. Build Your Career.'}
          </h1>
          
          <p className="hero__subtitle">
            {institute?.subtitle || 'Job-Oriented Computer Courses with 100% Practical Training'}
          </p>

          {/* 25 Years Legacy Trust Strip */}
          <div className="hero__trust-strip">
            <div className="trust-card">
              <span className="trust-big">25+</span>
              <span className="trust-label">Years of Excellence<br /><small>Established in 2001</small></span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-card">
              <span className="trust-big">10,000+</span>
              <span className="trust-label">Successful Students<br /><small>Trained & Certified</small></span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-card">
              <span className="trust-big">100%</span>
              <span className="trust-label">Practical Training<br /><small>Job-Ready Skills</small></span>
            </div>
          </div>
          
          <div className="hero__buttons">
            <button 
              className="hero__btn hero__btn--primary"
              onClick={(e) => handleScroll(e, 'courses')}
            >
              <FaGraduationCap className="hero__btn-icon" />
              Explore Courses
              <FaArrowRight className="hero__btn-icon-right" />
            </button>
            
            <button 
              className="hero__btn hero__btn--secondary"
              onClick={(e) => handleScroll(e, 'enquiry')}
            >
              Enquire Now
            </button>
            
            <a 
              href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
              className="hero__btn hero__btn--outline"
            >
              <FaPhone className="hero__btn-icon" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
