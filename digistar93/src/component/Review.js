import React, { useRef} from 'react';
import KAILogistik from '../assets/KAILogistik.png';
import KJM from '../assets/KJM.png';
import Koja from '../assets/Koja.png';
import POSLogistics from '../assets/POSLogistics.png';
import McEasy from '../assets/McEasy.png';
import NLE from '../assets/NLE.png';
import PerkebunanNusantara from '../assets/PerkebunanNusantara.png';
import ButtonRight from '../assets/ButtonRight.png';
import ButtonLeft from '../assets/ButtonLeft.png';

const reviews = [
  {
    company: "KAI Logistik",
    feedback: "KJM telah bekerja sama dengan LOGEE dalam hal sistem bisnis konsinyasi. Kerja sama juga akan berlanjut ke sistem pengorderan by aplikasi.",
    name: "John Mahendra",
    title: "Owner, Distributor KJM Bandung"
  },
  {
    company: "KJM",
    feedback: "KJM telah bekerja sama dengan LOGEE dalam hal sistem bisnis konsinyasi. Kerja sama juga akan berlanjut ke sistem pengorderan by aplikasi.",
    name: "John Mahendra",
    title: "Owner, Distributor KJM Bandung"
  },
  {
    company: "KOJA",
    feedback: "KJM telah bekerja sama dengan LOGEE dalam hal sistem bisnis konsinyasi. Kerja sama juga akan berlanjut ke sistem pengorderan by aplikasi.",
    name: "John Mahendra",
    title: "Owner, Distributor KJM Bandung"
  },
  {
    company: "NLE",
    feedback: "KJM telah bekerja sama dengan LOGEE dalam hal sistem bisnis konsinyasi. Kerja sama juga akan berlanjut ke sistem pengorderan by aplikasi.",
    name: "John Mahendra",
    title: "Owner, Distributor KJM Bandung"
  },
  {
    company: "McEasy",
    feedback: "KJM telah bekerja sama dengan LOGEE dalam hal sistem bisnis konsinyasi. Kerja sama juga akan berlanjut ke sistem pengorderan by aplikasi.",
    name: "John Mahendra",
    title: "Owner, Distributor KJM Bandung"
  },
  {
    company: "POSLogistics",
    feedback: "KJM telah bekerja sama dengan LOGEE dalam hal sistem bisnis konsinyasi. Kerja sama juga akan berlanjut ke sistem pengorderan by aplikasi.",
    name: "John Mahendra",
    title: "Owner, Distributor KJM Bandung"
  },
  {
    company: "Perkebunan Nusantara",
    feedback: "KJM telah bekerja sama dengan LOGEE dalam hal sistem bisnis konsinyasi. Kerja sama juga akan berlanjut ke sistem pengorderan by aplikasi.",
    name: "John Mahendra",
    title: "Owner, Distributor KJM Bandung"
  },
];

const Review = () => {
    const carouselRef = useRef(null);

  const scrollLeft = () => {
    const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const scrollAmount = scrollWidth / 5; // Scroll by a quarter of the total scrollable width
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const scrollAmount = scrollWidth / 3; // Scroll by a quarter of the total scrollable width
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
    
    const companyImages = {
      "KAI Logistik": KAILogistik,
      "KJM": KJM,
      "KOJA": Koja,
      "NLE": NLE,
      "McEasy": McEasy,
      "POSLogistics": POSLogistics,
      "Perkebunan Nusantara": PerkebunanNusantara
    };

    return (
      <div className="review-section">
        <h2>Cerita Sukses dari Mitra LOGEE</h2>
        <p>LOGEE telah menjadi bagian dari aktor logistik yang tumbuh dan berkembang dalam satu ekosistem. Kembangkan bisnis dan usaha logistik Anda bersama ribuan armada dan mitra outlet ekosistem LOGEE. Dapatkan inspirasi dari testimoni mitra kami.</p>
        <div className="carousel-container">
          <button 
            className="carousel-btn left-btn" 
            onClick={scrollLeft} 
            style={{ backgroundImage: `url(${ButtonLeft})` }}
          />
          <div className="review-carousel" ref={carouselRef}>
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <img src={companyImages[review.company]} alt={review.company} className="company-logo" />
                <p>{review.feedback}</p>
                <div className="review-author">
                  <p className="author-name"><strong>{review.name}</strong></p>
                  <p className="author-title">{review.title}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="carousel-btn right-btn" 
            onClick={scrollRight} 
            style={{ backgroundImage: `url(${ButtonRight})` }}
          />
        </div>
      </div>
    );
};

export default Review;