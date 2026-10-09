import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import { testimonials } from '../data/siteData';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const items = testimonials || [];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Students Say</h2>
          <p>Read about the experiences of our successful students</p>
        </div>

        <div className="testimonials-wrapper">
          <button className="carousel-btn prev-btn" onClick={scrollLeft} aria-label="Previous">
            <FaChevronLeft />
          </button>
          
          <div className="testimonials-carousel" ref={scrollContainerRef}>
            {items.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <div className="testimonial-header">
                  <div className="avatar">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} />
                    ) : (
                      <span className="avatar-initials">{getInitials(testimonial.name)}</span>
                    )}
                  </div>
                  <div className="student-info">
                    <h4>{testimonial.name}</h4>
                    <span className="course-name">{testimonial.course}</span>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? 'star-filled' : 'star-empty'} />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next-btn" onClick={scrollRight} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
        
        <div className="carousel-dots">
          {[...Array(items.length > 2 ? items.length - 2 : items.length)].map((_, i) => (
            <span key={i} className={`dot ${i === 0 ? 'active' : ''}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
