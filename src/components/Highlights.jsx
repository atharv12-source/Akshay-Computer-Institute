import React, { useEffect, useRef } from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaUserGraduate, FaDesktop } from 'react-icons/fa';
import { highlights } from '../data/siteData';
import './Highlights.css';

const iconMap = {
  FaLaptopCode: <FaLaptopCode />,
  FaChalkboardTeacher: <FaChalkboardTeacher />,
  FaUserGraduate: <FaUserGraduate />,
  FaDesktop: <FaDesktop />,
};

const Highlights = () => {
  const containerRef = useRef(null);

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

    const cards = containerRef.current.querySelectorAll('.highlight-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="highlights-container" ref={containerRef}>
      <div className="highlights-wrapper">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card" style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="highlight-icon">{iconMap[item.icon] || <FaLaptopCode />}</div>
            <h3 className="highlight-title">{item.title}</h3>
            <p className="highlight-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
