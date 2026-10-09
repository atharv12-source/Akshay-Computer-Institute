import React from 'react';
import './Footer.css';
import { institute, courses } from '../data/siteData';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col brand-col">
            <h2>{institute.name}</h2>
            <h4>"{institute.tagline}"</h4>
            <p>{institute.description}</p>
          </div>

          <div className="footer-col links-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
              <li><a href="#courses" onClick={(e) => handleScrollTo(e, 'courses')}>Courses</a></li>
              <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</a></li>
              <li><a href="#why-us" onClick={(e) => handleScrollTo(e, 'why-us')}>Why Us</a></li>
              <li><a href="#gallery" onClick={(e) => handleScrollTo(e, 'gallery')}>Gallery</a></li>
              <li><a href="#reviews" onClick={(e) => handleScrollTo(e, 'reviews')}>Reviews</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col courses-col">
            <h3>Our Courses</h3>
            <ul>
              {courses.map(course => (
                <li key={course.id}><a href="#courses" onClick={(e) => handleScrollTo(e, 'courses')}>{course.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt className="li-icon" />
                <span>{institute.address.full}</span>
              </li>
              <li>
                <FaPhoneAlt className="li-icon" />
                <span>{institute.phone1}</span>
              </li>
              <li>
                <FaPhoneAlt className="li-icon" />
                <span>{institute.phone2}</span>
              </li>
            </ul>

            <div className="social-icons">
              <a href={institute.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href={institute.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {institute.name}. All Rights Reserved.</p>
          <p className="developed-by">Developed By : Atharv Tupsundar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
