import React, { useState } from 'react';
import './Gallery.css';
import { galleryItems } from '../data/siteData';
import { FaTimes, FaImage } from 'react-icons/fa';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Extract unique categories dynamically from galleryItems
  const allCategories = galleryItems ? ['All', ...new Set(galleryItems.map(item => item.category))] : ['All'];

  const filteredItems = !galleryItems ? [] : activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const getGradient = (category) => {
    switch(category) {
      case 'Classroom': return 'linear-gradient(135deg, #1565C0, #0D47A1)';
      case 'Computer Lab': return 'linear-gradient(135deg, #00838F, #006064)';
      case 'Practical Sessions': return 'linear-gradient(135deg, #2E7D32, #1B5E20)';
      case 'Parents Meet': return 'linear-gradient(135deg, #FF8C00, #E65100)';
      default: return 'linear-gradient(135deg, #455A64, #263238)';
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Gallery</h2>
          <p>Glimpses of our vibrant learning environment</p>
        </div>

        <div className="gallery-filters">
          {allCategories.map((category, index) => (
            <button 
              key={index} 
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              {item.src ? (
                <div className="gallery-image-wrapper">
                  <img src={item.src} alt={item.title} className="gallery-img" />
                  <span className="category-badge">{item.category}</span>
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ) : (
                <div 
                  className="gallery-placeholder" 
                  style={{ background: getGradient(item.category) }}
                >
                  <FaImage className="placeholder-icon" />
                  <span className="category-badge">{item.category}</span>
                  <div className="gallery-overlay">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close Lightbox">
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            {selectedImage.src ? (
              <div className="lightbox-image-wrapper">
                <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-img" />
                <div className="lightbox-caption">
                  <span className="lightbox-badge">{selectedImage.category}</span>
                  <h3>{selectedImage.title}</h3>
                </div>
              </div>
            ) : (
              <div 
                className="lightbox-placeholder" 
                style={{ background: getGradient(selectedImage.category) }}
              >
                <span className="lightbox-badge">{selectedImage.category}</span>
                <h2>{selectedImage.title}</h2>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
