import { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { institute } from './data/siteData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ReviewsSection from './components/Reviews/ReviewsSection';
import EnquiryForm from './components/EnquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleCourseClose = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Hero />
        <Highlights />
        <Courses onCourseSelect={handleCourseSelect} />
        <WhyChooseUs />
        <About />
        <Benefits />
        <Gallery />
        <ReviewsSection />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />

      {/* Course Detail Modal */}
      <CourseDetail course={selectedCourse} onClose={handleCourseClose} />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${institute.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20your%20computer%20courses.%20Please%20share%20details.`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
