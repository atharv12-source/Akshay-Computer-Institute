import React from 'react';
import './Courses.css';
import { courses } from '../data/siteData';
import { FaDesktop, FaCalculator, FaFileExcel, FaKeyboard, FaCode, FaPython } from 'react-icons/fa';

const iconMap = {
  FaDesktop,
  FaCalculator,
  FaFileExcel,
  FaKeyboard,
  FaCode,
  FaPython,
};

const Courses = ({ onCourseSelect }) => {
  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Courses</h2>
          <div className="underline"></div>
          <p>Choose from our range of job-oriented computer courses</p>
        </div>
        <div className="courses-grid">
          {courses.map((course) => {
            const Icon = iconMap[course.icon];
            return (
              <div key={course.id} className="course-card">
                <div 
                  className="icon-container" 
                  style={{ backgroundColor: `${course.color}26`, color: course.color }}
                >
                  {Icon && <Icon size={30} />}
                </div>
                <h3>{course.name}</h3>
                <p className="course-desc">{course.shortDesc}</p>
                <div className="skills-container">
                  {course.skills.map((skill, index) => (
                    <span key={index} className="skill-pill">{skill}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <button 
                    className="btn btn-outline" 
                    onClick={() => onCourseSelect(course)}
                  >
                    View Details
                  </button>
                  <a href="#enquiry" className="btn btn-solid">Enquire Now</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
