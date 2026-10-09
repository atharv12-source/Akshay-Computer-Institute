import React, { useState } from 'react';
import './EnquiryForm.css';
import { courses, institute, batchOptions as siteBatchOptions, formConfig } from '../data/siteData';
import { FaPhone, FaWhatsapp, FaCheckCircle, FaExclamationTriangle, FaPaperPlane } from 'react-icons/fa';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    batch: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const batchOptions = siteBatchOptions || institute?.batchOptions || [
    'Morning (7:00 AM – 9:00 AM)',
    'Afternoon (1:00 PM – 3:00 PM)',
    'Evening (5:00 PM – 7:00 PM)',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) setSubmitError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Student Name is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    // ── Build the email payload ──────────────────
    const payload = {
      access_key: formConfig.accessKey,
      subject: `${formConfig.subjectPrefix}: ${formData.name}`,
      from_name: 'Akshay Computer Institute Website',
      to: formConfig.recipientEmail,

      // Form fields (sent in the email body)
      'Student Name': formData.name,
      'Mobile Number': formData.mobile,
      'Email': formData.email || 'Not provided',
      'Course': formData.course || 'Not selected',
      'Preferred Batch': formData.batch || 'Not selected',
      'Message': formData.message || 'No message',
    };

    // ── If no access key is configured, fall back to mailto ──
    if (!formConfig.accessKey) {
      // Construct a mailto link as fallback
      const mailBody = Object.entries(payload)
        .filter(([key]) => !['access_key', 'subject', 'from_name', 'to'].includes(key))
        .map(([key, val]) => `${key}: ${val}`)
        .join('\n');

      const mailtoLink =
        `mailto:${formConfig.recipientEmail}` +
        `?subject=${encodeURIComponent(payload.subject)}` +
        `&body=${encodeURIComponent(mailBody)}`;

      window.open(mailtoLink, '_blank');
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', mobile: '', email: '', course: '', batch: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
      return;
    }

    // ── Send via Web3Forms API ────────────────────
    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', mobile: '', email: '', course: '', batch: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="enquiry-section">
      <div className="container">
        <div className="section-header">
          <h2>Enquire Now</h2>
          <p>Fill the form below and we will get back to you</p>
        </div>

        <div className="enquiry-grid">
          <div className="form-container">
            {submitted ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Thank you!</h3>
                <p>Your enquiry has been submitted successfully. We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                <div className="form-group">
                  <label htmlFor="name">Student Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                  />
                  {errors.mobile && <span className="error-text">{errors.mobile}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="course">Course Selection</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                  >
                    <option value="">Select a course</option>
                    {courses && courses.map(course => (
                      <option key={course.id} value={course.name}>{course.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="batch">Preferred Batch</label>
                  <select
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                  >
                    <option value="">Select preferred timing</option>
                    {batchOptions.map((batch, index) => (
                      <option key={index} value={batch}>{batch}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific query?"
                    rows="3"
                  ></textarea>
                </div>

                {submitError && (
                  <div className="submit-error">
                    <FaExclamationTriangle /> {submitError}
                  </div>
                )}

                <button type="submit" className="submit-btn" disabled={submitting}>
                  {submitting ? (
                    <>Sending...</>
                  ) : (
                    <><FaPaperPlane style={{ marginRight: 8 }} /> Submit Enquiry</>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="info-container">
            <div className="info-card">
              <h3>Need Quick Help?</h3>
              <p>Reach out to us directly for any immediate assistance regarding our courses or admission process.</p>

              <div className="contact-methods">
                <a href={`tel:${institute.phone1}`} className="contact-link">
                  <FaPhone className="contact-icon" />
                  <span>{institute.phone1}</span>
                </a>

                <a href={`https://wa.me/${institute.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20your%20courses.`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                  <FaWhatsapp className="wa-icon" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="timings-info">
                <h4>Institute Timings</h4>
                <p>{institute.timings.weekdays}</p>
                <p>{institute.timings.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
