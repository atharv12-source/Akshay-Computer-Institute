import React from 'react';
import './Contact.css';
import { institute } from '../data/siteData';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with us for admissions and general queries</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="card-icon" />
            </div>
            <h3>Our Location</h3>
            <p className="card-text">
              {institute.address.line1},<br />
              {institute.address.line2},<br />
              {institute.address.line3},<br />
              {institute.address.city}, {institute.address.state}
            </p>
          </div>

          <div className="contact-card">
            <div className="icon-wrapper">
              <FaPhoneAlt className="card-icon" />
            </div>
            <h3>Phone Numbers</h3>
            <a href={`tel:${institute.phone1}`} className="contact-link">{institute.phone1}</a>
            <a href={`tel:${institute.phone2}`} className="contact-link">{institute.phone2}</a>
            <a href={`tel:${institute.phone1}`} className="card-btn blue-btn">Call Now</a>
          </div>

          <div className="contact-card">
            <div className="icon-wrapper">
              <FaClock className="card-icon" />
            </div>
            <h3>Institute Timings</h3>
            <p className="card-text">{institute.timings.weekdays}</p>
            <p className="card-text">{institute.timings.sunday}</p>
          </div>
        </div>

        <div className="cta-row">
          <a href={`tel:${institute.phone1}`} className="action-btn call-btn">
            <FaPhoneAlt /> Call Now
          </a>
          <a href={`https://wa.me/${institute.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20your%20computer%20courses.`} target="_blank" rel="noopener noreferrer" className="action-btn wa-btn">
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>

        <div className="map-container">
          <iframe
            src={institute.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Akshay Computer Institute Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
