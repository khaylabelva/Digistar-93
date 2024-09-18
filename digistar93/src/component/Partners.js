import React, { useEffect, useRef } from 'react';
import '../App.css';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
const duplicatedLogos = [...logos, ...logos];

const Partners = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

    return (
      <div className="partners-container" ref={contentRef}>
        <h2>Mitra LOGEE</h2>
        <div className="ticker-container">
          <div className="ticker">
            <div className="ticker-inner">
              {duplicatedLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="ticker-logo"
                />
              ))}
            </div>
          </div>
        </div>
        <button className="contact-button">Hubungi Kami</button>
      </div>
    );
  };
  
  export default Partners;