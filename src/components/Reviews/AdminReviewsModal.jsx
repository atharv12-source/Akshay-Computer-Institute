import React, { useState, useEffect } from 'react';
import {
  FaTimes,
  FaLock,
  FaCheck,
  FaBan,
  FaTrash,
  FaStar,
  FaSync,
  FaExclamationCircle,
  FaShieldAlt
} from 'react-icons/fa';

const AdminReviewsModal = ({ isOpen, onClose, onDataChanged }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [actionMessage, setActionMessage] = useState('');

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      fetchAdminReviews();
    }
    if (!isOpen) {
      setActionMessage('');
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoading(true);

    try {
      const response = await fetch('/api/reviews/admin/all', {
        headers: {
          'x-admin-key': passcode.trim()
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsAuthenticated(true);
        setReviews(result.data || []);
      } else {
        setAuthError(result.message || 'Incorrect passcode. Please try again.');
      }
    } catch (err) {
      console.error('Admin login error:', err);
      setAuthError('Connection error. Ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const fetchAdminReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/reviews/admin/all', {
        headers: {
          'x-admin-key': passcode.trim()
        }
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setReviews(result.data || []);
      }
    } catch (err) {
      console.error('Fetch admin reviews error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      const response = await fetch(`/api/reviews/admin/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': passcode.trim()
        },
        body: JSON.stringify({ status })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setActionMessage(result.message || `Review marked as ${status}`);
        fetchAdminReviews();
        if (onDataChanged) onDataChanged();
        setTimeout(() => setActionMessage(''), 3000);
      }
    } catch (err) {
      console.error('Status update error:', err);
    }
  };

  const handleDelete = async (id, studentName) => {
    if (!window.confirm(`Are you sure you want to permanently delete review by "${studentName}"?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/reviews/admin/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-key': passcode.trim()
        }
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setActionMessage(result.message || 'Review permanently deleted');
        fetchAdminReviews();
        if (onDataChanged) onDataChanged();
        setTimeout(() => setActionMessage(''), 3000);
      }
    } catch (err) {
      console.error('Delete review error:', err);
    }
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeTab === 'all') return true;
    return r.status === activeTab;
  });

  return (
    <div className="review-modal-overlay" onClick={onClose}>
      <div
        className="admin-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        {!isAuthenticated ? (
          <div className="admin-auth-card">
            <div className="admin-lock-icon-wrap">
              <FaLock className="admin-lock-icon" />
            </div>
            <h3>Admin Moderation Panel</h3>
            <p>Enter the administrator passcode to manage student reviews.</p>

            <form onSubmit={handleLogin} className="admin-auth-form">
              <div className="form-field">
                <input
                  type="password"
                  placeholder="Enter admin passcode (e.g. admin123)"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  autoFocus
                />
              </div>

              {authError && (
                <div className="form-server-error">
                  <FaExclamationCircle />
                  <span>{authError}</span>
                </div>
              )}

              <button type="submit" className="btn-admin-login" disabled={loading}>
                {loading ? 'Verifying...' : 'Unlock Admin Panel'}
              </button>
            </form>
          </div>
        ) : (
          <div className="admin-panel-body">
            <div className="admin-panel-header">
              <div className="admin-title-row">
                <FaShieldAlt className="shield-icon" />
                <div>
                  <h3>Review Moderation Dashboard</h3>
                  <p>Permanent database storage • Akshay Computer Institute</p>
                </div>
              </div>
              <button
                className="btn-refresh"
                onClick={fetchAdminReviews}
                title="Refresh reviews"
                disabled={loading}
              >
                <FaSync className={loading ? 'spin' : ''} />
              </button>
            </div>

            {actionMessage && (
              <div className="admin-action-notice">
                <FaCheck /> {actionMessage}
              </div>
            )}

            {/* Moderation Filter Tabs */}
            <div className="admin-tabs">
              <button
                className={`admin-tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All ({reviews.length})
              </button>
              <button
                className={`admin-tab ${activeTab === 'approved' ? 'active' : ''}`}
                onClick={() => setActiveTab('approved')}
              >
                Approved ({reviews.filter((r) => r.status === 'approved').length})
              </button>
              <button
                className={`admin-tab ${activeTab === 'pending' ? 'active' : ''}`}
                onClick={() => setActiveTab('pending')}
              >
                Pending ({reviews.filter((r) => r.status === 'pending').length})
              </button>
              <button
                className={`admin-tab ${activeTab === 'rejected' ? 'active' : ''}`}
                onClick={() => setActiveTab('rejected')}
              >
                Rejected ({reviews.filter((r) => r.status === 'rejected').length})
              </button>
            </div>

            {/* Review List in Admin Panel */}
            <div className="admin-reviews-list">
              {filteredReviews.length === 0 ? (
                <div className="admin-empty-state">
                  <p>No reviews found in this category.</p>
                </div>
              ) : (
                filteredReviews.map((r) => (
                  <div key={r.id} className={`admin-review-item status-${r.status}`}>
                    <div className="admin-item-top">
                      <div>
                        <strong>{r.name}</strong>
                        <span className="admin-course-tag">{r.course}</span>
                      </div>
                      <div className="admin-status-badge">
                        <span className={`badge ${r.status}`}>{r.status}</span>
                      </div>
                    </div>

                    <div className="admin-rating-row">
                      <div className="stars-mini">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < r.rating ? 'star-gold' : 'star-muted'}
                          />
                        ))}
                      </div>
                      <small>
                        {new Date(r.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </small>
                    </div>

                    <p className="admin-review-text">"{r.review}"</p>

                    <div className="admin-actions-bar">
                      {r.status !== 'approved' && (
                        <button
                          className="btn-action approve"
                          onClick={() => handleStatusUpdate(r.id, 'approved')}
                          title="Approve Review"
                        >
                          <FaCheck /> Approve
                        </button>
                      )}
                      {r.status !== 'rejected' && (
                        <button
                          className="btn-action reject"
                          onClick={() => handleStatusUpdate(r.id, 'rejected')}
                          title="Reject Review"
                        >
                          <FaBan /> Reject
                        </button>
                      )}
                      <button
                        className="btn-action delete"
                        onClick={() => handleDelete(r.id, r.name)}
                        title="Delete Review"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminReviewsModal;
