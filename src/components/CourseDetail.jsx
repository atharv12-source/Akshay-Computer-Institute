import React, { useEffect } from 'react';
import './CourseDetail.css';
import { FaTimes, FaCheckCircle, FaDesktop, FaCalculator, FaFileExcel, FaKeyboard, FaCode, FaPython } from 'react-icons/fa';

const iconMap = {
  FaDesktop,
  FaCalculator,
  FaFileExcel,
  FaKeyboard,
  FaCode,
  FaPython,
};

const CourseDetail = ({ course, onClose }) => {
  useEffect(() => {
    if (course) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [course]);

  if (!course) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  const handleEnquireClick = () => {
    onClose();
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const Icon = iconMap[course.icon];

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <div className="header-icon">
            {Icon && <Icon size={40} />}
          </div>
          <h2>{course.name}</h2>
          <p>{course.shortDesc}</p>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <h3>Overview</h3>
            <p>{course.overview || 'This course is designed to provide comprehensive training.'}</p>
          </section>

          <section className="detail-section">
            <h3>Skills Covered</h3>
            <div className="skills-list">
              {course.skills.map((skill, index) => (
                <span key={index} className="skill-pill">{skill}</span>
              ))}
            </div>
          </section>

          {course.practicalTraining && (
            <section className="detail-section">
              <h3>Practical Training</h3>
              <ul className="feature-list">
                {course.practicalTraining.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {course.careerOpportunities && (
            <section className="detail-section">
              <h3>Career Opportunities</h3>
              <ul className="feature-list">
                {course.careerOpportunities.map((item, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-enquire-large" onClick={handleEnquireClick}>
            Enquire About This Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
