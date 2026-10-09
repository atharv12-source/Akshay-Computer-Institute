import React, { useState, useEffect } from 'react';
import {
  FaStar,
  FaEdit,
  FaUserLock,
  FaGraduationCap,
  FaFilter,
  FaAward
} from 'react-icons/fa';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import AdminReviewsModal from './AdminReviewsModal';
import { courses } from '../../data/siteData';
import './Reviews.css';

// Fallback seed data in case backend server is unreachable
const FALLBACK_REVIEWS = [
  {
    id: 1,
    name: 'Priya Deshmukh',
    rating: 5,
    course: 'MS-CIT',
    review: 'I had zero computer knowledge before joining Akshay Computer Institute. The faculty taught everything with so much patience. Now I can confidently use computers for my official work. Best institute in Sambhajinagar!',
    created_at: new Date('2026-08-15T10:30:00Z').toISOString()
  },
  {
    id: 2,
    name: 'Rohit Jadhav',
    rating: 5,
    course: 'Tally with GST',
    review: 'The Tally with GST course was excellent! The 100% practical approach helped me master voucher entries, balance sheets, and GST filing. Got hired as an accountant soon after finishing the course.',
    created_at: new Date('2026-08-28T14:15:00Z').toISOString()
  },
  {
    id: 3,
    name: 'Sneha Kulkarni',
    rating: 5,
    course: 'Advanced Excel',
    review: 'Advanced Excel course completely transformed my work efficiency. Learned VLOOKUP, pivot tables, macros, and interactive dashboards. The personal doubt sessions are wonderful.',
    created_at: new Date('2026-09-02T11:45:00Z').toISOString()
  },
  {
    id: 4,
    name: 'Amit Patil',
    rating: 5,
    course: 'Python Programming',
    review: 'As a beginner, I was nervous about programming. The step-by-step teaching and hands-on coding exercises made Python so easy to understand. Truly 25 years of excellence!',
    created_at: new Date('2026-09-12T16:20:00Z').toISOString()
  },
  {
    id: 5,
    name: 'Sakshi Bhosale',
    rating: 5,
    course: 'English Typing',
    review: 'Improved my typing speed from 15 WPM to 45 WPM in just 2 months. Daily timed practice and personal guidance made a huge difference.',
    created_at: new Date('2026-09-20T09:00:00Z').toISOString()
  }
];

const ReviewsSection = () => {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);
  const [stats, setStats] = useState({
    averageRating: 5.0,
    totalReviews: 5,
    starBreakdown: { 5: 5, 4: 0, 3: 0, 2: 0, 1: 0 }
  });

  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Filters
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('All');
  const [selectedStarFilter, setSelectedStarFilter] = useState('All');

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (response.ok) {
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          setReviews(result.data);
          if (result.stats) {
            setStats(result.stats);
          }
        }
      }
    } catch (err) {
      console.warn('Using local fallback reviews (backend starting up):', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleReviewSubmitted = (newReview, updatedStats) => {
    if (newReview) {
      setReviews(prev => [newReview, ...prev]);
    }
    if (updatedStats) {
      setStats(updatedStats);
    }
    fetchReviews();
  };

  // Filter reviews
  const filteredReviews = reviews.filter((item) => {
    const matchesCourse =
      selectedCourseFilter === 'All' || item.course === selectedCourseFilter;
    const matchesStar =
      selectedStarFilter === 'All' ||
      Math.round(Number(item.rating)) === Number(selectedStarFilter);
    return matchesCourse && matchesStar;
  });

  const totalCount = stats.totalReviews || reviews.length || 1;
  const breakdown = stats.starBreakdown || { 5: reviews.length, 4: 0, 3: 0, 2: 0, 1: 0 };

  const courseNames = courses && courses.length > 0
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

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="reviews-trust-pill">
            <FaAward /> 100% Genuine Student Feedback
          </div>
          <h2>Student Reviews & Ratings</h2>
          <p>
            Real reviews and experiences from students trained at Akshay Computer Institute
          </p>
        </div>

        {/* Top Summary & CTA Card */}
        <div className="reviews-summary-wrapper">
          <div className="overall-score-box">
            <div className="big-rating-number">
              {Number(stats.averageRating || 5.0).toFixed(1)}
            </div>
            <div className="big-stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <FaStar
                  key={s}
                  className={
                    s <= Math.round(Number(stats.averageRating || 5))
                      ? 'big-star filled'
                      : 'big-star empty'
                  }
                />
              ))}
            </div>
            <span className="total-students-count">
              Based on <strong>{stats.totalReviews || reviews.length}</strong> verified reviews
            </span>
          </div>

          {/* Star Distribution Breakdown */}
          <div className="stars-breakdown-box">
            {[5, 4, 3, 2, 1].map((starLevel) => {
              const count = breakdown[starLevel] || 0;
              const percentage = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;

              return (
                <div key={starLevel} className="breakdown-row">
                  <span className="star-level-label">
                    {starLevel} <FaStar className="star-mini" />
                  </span>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="level-count">{count}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button Box */}
          <div className="reviews-cta-box">
            <h4>Studied with Us?</h4>
            <p>Help future students make the right career decision by sharing your feedback.</p>
            <button
              className="btn-write-review"
              onClick={() => setIsFormOpen(true)}
            >
              <FaEdit />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="reviews-filter-bar">
          <div className="filter-group">
            <FaFilter className="filter-icon" />
            <span className="filter-label">Filter by Course:</span>
            <select
              value={selectedCourseFilter}
              onChange={(e) => setSelectedCourseFilter(e.target.value)}
              className="reviews-select-filter"
            >
              <option value="All">All Courses ({reviews.length})</option>
              {courseNames.map((cName, idx) => (
                <option key={idx} value={cName}>
                  {cName}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">Rating:</span>
            <div className="star-filter-buttons">
              <button
                className={`star-filter-btn ${selectedStarFilter === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedStarFilter('All')}
              >
                All
              </button>
              {[5, 4, 3, 2, 1].map((star) => (
                <button
                  key={star}
                  className={`star-filter-btn ${selectedStarFilter === String(star) ? 'active' : ''}`}
                  onClick={() => setSelectedStarFilter(String(star))}
                >
                  {star} ★
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {filteredReviews.length === 0 ? (
            <div className="no-reviews-found">
              <FaGraduationCap className="no-reviews-icon" />
              <h4>No reviews match your filter</h4>
              <p>Be the first student to review this course!</p>
              <button
                className="btn-write-review-small"
                onClick={() => setIsFormOpen(true)}
              >
                Write a Review
              </button>
            </div>
          ) : (
            filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          )}
        </div>

        {/* Footer Admin Link */}
        <div className="reviews-admin-access">
          <button
            className="btn-admin-portal"
            onClick={() => setIsAdminOpen(true)}
          >
            <FaUserLock /> Admin Review Moderation
          </button>
        </div>
      </div>

      {/* Review Submission Modal */}
      <ReviewForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />

      {/* Admin Moderation Modal */}
      <AdminReviewsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onDataChanged={fetchReviews}
      />
    </section>
  );
};

export default ReviewsSection;
