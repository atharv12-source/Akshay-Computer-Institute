import React, { useState } from 'react';
import { FaStar, FaTimes, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { courses } from '../../data/siteData';

const RATING_LABELS = {
  1: '1 - Needs Improvement',
  2: '2 - Fair',
  3: '3 - Good',
  4: '4 - Very Good',
  5: '5 - Excellent'
};

const ReviewForm = ({ isOpen, onClose, onReviewSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    course: '',
    review: '',
    website: '' // Honeypot field
  });

  const [hoverRating, setHoverRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  if (!isOpen) return null;

  const defaultCourseList = courses && courses.length > 0
    ? courses.map(c => c.name)
    : [
        'MS-CIT',
        'Tally with GST',
        'Advanced Excel',
        'English Typing',
        'Marathi Typing',
        'C Programming',
        'C++ Programming',
        'Python Programming'
      ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError('');
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters).';
    } else if (formData.name.trim().length > 60) {
      newErrors.name = 'Name cannot exceed 60 characters.';
    }

    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Please select a star rating from 1 to 5.';
    }

    if (!formData.course.trim()) {
      newErrors.course = 'Please select the course you completed.';
    }

    if (!formData.review.trim() || formData.review.trim().length < 10) {
      newErrors.review = 'Please write at least 10 characters describing your experience.';
    } else if (formData.review.trim().length > 1000) {
      newErrors.review = 'Review cannot exceed 1000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          rating: Number(formData.rating),
          course: formData.course.trim(),
          review: formData.review.trim(),
          honeypot: formData.website // Bot detection
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        if (onReviewSubmitted) {
          onReviewSubmitted(result.data, result.stats);
        }
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({ name: '', rating: 5, course: '', review: '', website: '' });
          onClose();
        }, 2200);
      } else {
        setServerError(result.message || 'Unable to submit review. Please try again.');
      }
    } catch (err) {
      console.error('Submit review error:', err);
      setServerError('Connection error. Please make sure the server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-modal-overlay" onClick={onClose}>
      <div
        className="review-modal-content"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="review-form-title"
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        {submitSuccess ? (
          <div className="review-success-state">
            <FaCheckCircle className="success-check-icon" />
            <h3>Thank You for Your Feedback!</h3>
            <p>Your review has been permanently recorded and published on Akshay Computer Institute's website.</p>
          </div>
        ) : (
          <form className="review-form" onSubmit={handleSubmit}>
            <div className="review-form-header">
              <h3 id="review-form-title">Write a Student Review</h3>
              <p>Share your learning experience at Akshay Computer Institute</p>
            </div>

            {/* Honeypot hidden input for spam bots */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Full Name */}
            <div className="form-field">
              <label htmlFor="student-name">Your Full Name *</label>
              <input
                id="student-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Rahul Sharma"
                maxLength={60}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            {/* Star Rating Selection */}
            <div className="form-field">
              <label>Your Overall Rating *</label>
              <div className="interactive-stars-picker">
                {[1, 2, 3, 4, 5].map((star) => {
                  const activeLevel = hoverRating || formData.rating;
                  return (
                    <button
                      type="button"
                      key={star}
                      className={`star-pick-btn ${star <= activeLevel ? 'active' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`${star} star`}
                    >
                      <FaStar />
                    </button>
                  );
                })}
                <span className="rating-text-label">
                  {RATING_LABELS[hoverRating || formData.rating]}
                </span>
              </div>
              {errors.rating && <span className="field-error">{errors.rating}</span>}
            </div>

            {/* Course Selector */}
            <div className="form-field">
              <label htmlFor="course-select">Course Completed / Enrolled *</label>
              <select
                id="course-select"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
              >
                <option value="">Select your course</option>
                {defaultCourseList.map((courseName, idx) => (
                  <option key={idx} value={courseName}>
                    {courseName}
                  </option>
                ))}
              </select>
              {errors.course && <span className="field-error">{errors.course}</span>}
            </div>

            {/* Review Feedback Text */}
            <div className="form-field">
              <div className="label-with-counter">
                <label htmlFor="review-text">Your Review & Experience *</label>
                <span className="char-count">{formData.review.length} / 1000</span>
              </div>
              <textarea
                id="review-text"
                name="review"
                value={formData.review}
                onChange={handleInputChange}
                placeholder="Tell us about the teaching quality, practical sessions, faculty support, and how the course helped you..."
                rows="4"
                maxLength={1000}
              ></textarea>
              {errors.review && <span className="field-error">{errors.review}</span>}
            </div>

            {/* Server Error Message */}
            {serverError && (
              <div className="form-server-error">
                <FaExclamationCircle />
                <span>{serverError}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="button"
                className="btn-cancel"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-submit-review"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Submit Permanent Review</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReviewForm;
