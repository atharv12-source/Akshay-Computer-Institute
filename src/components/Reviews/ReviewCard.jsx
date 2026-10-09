import React from 'react';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaUserGraduate } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { name, rating, course, review: reviewText, created_at } = review;

  const formatDate = (isoString) => {
    if (!isoString) return '';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return '';
    }
  };

  const getInitials = (fullName) => {
    if (!fullName) return 'S';
    return fullName
      .split(' ')
      .map(part => part[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const renderStars = (num) => {
    const stars = [];
    const clamped = Math.min(5, Math.max(1, Math.round(num || 5)));
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= clamped ? 'star-icon filled' : 'star-icon empty'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="review-card">
      <div className="review-card-header">
        <div className="review-avatar">
          <span className="avatar-initials">{getInitials(name)}</span>
        </div>
        <div className="review-author-info">
          <h4 className="student-name">
            {name}
            <span className="verified-badge" title="Verified Student">
              <FaCheckCircle />
            </span>
          </h4>
          <span className="course-badge">{course}</span>
        </div>
        <FaQuoteLeft className="card-quote-icon" />
      </div>

      <div className="review-rating-row">
        <div className="stars-wrapper">{renderStars(rating)}</div>
        <span className="rating-score">{Number(rating).toFixed(1)} / 5.0</span>
        {created_at && (
          <span className="review-date">{formatDate(created_at)}</span>
        )}
      </div>

      <p className="review-body-text">"{reviewText}"</p>
    </div>
  );
};

export default ReviewCard;
