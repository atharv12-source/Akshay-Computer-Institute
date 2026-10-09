import React, { useEffect, useRef } from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaUserFriends, FaComments, FaQuestionCircle, FaDesktop, FaRupeeSign, FaBriefcase } from 'react-icons/fa';
import { whyChooseUs } from '../data/siteData';
import './WhyChooseUs.css';

const iconMap = {
  FaLaptopCode: <FaLaptopCode />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaUserFriends: <FaUserFriends />,
  FaComments: <FaComments />,
  FaQuestionCircle: <FaQuestionCircle />,
  FaDesktop: <FaDesktop />,
  FaRupeeSign: <FaRupeeSign />,
  FaBriefcase: <FaBriefcase />,
};

const WhyChooseUs = () => {
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

    const elements = sectionRef.current.querySelectorAll('.why-us-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="why-us-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">What makes us the best choice for your learning journey</p>
          <div className="title-underline"></div>
        </div>
        <div className="why-us-grid">
          {whyChooseUs.map((feature, index) => (
            <div key={index} className="why-us-card" style={{ transitionDelay: `${index * 50}ms` }}>
              <div className="why-us-icon">{iconMap[feature.icon] || <FaLaptopCode />}</div>
              <h3 className="why-us-title">{feature.title}</h3>
              <p className="why-us-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
