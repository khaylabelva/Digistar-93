import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import LogoLogee from '../assets/LogoLogee.png';
import GooglePlay from '../assets/GooglePlay.png';
import Instagram from '../assets/Instagram.png';
import Facebook from '../assets/Facebook.png';
import LinkedIn from '../assets/LinkedIn.png';
import EmailIcon from '../assets/EmailIcon.png';
import PhoneIcon from '../assets/PhoneIcon.png';
import AddressIcon from '../assets/AddressIcon.png';
import X from '../assets/X.png';
import ArrowIcon from '../assets/ArrowIcon.png';

const Footer = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const cards = [
    {
      title: "Fasilitas Logistik: Pengertian dan Jenis-Jenisnya",
      description: "Teknologi baru seperti AI dan IoT membawa perubahan besar dalam manajemen rantai pasok. Bisnis harus mulai beradaptasi untuk tetap kompetitif.",
      date: "02 September 2024",
      category: "Acara"
    },
    {
      title: "Fasilitas Logistik: Pengertian dan Jenis-Jenisnya",
      description: "Teknologi baru seperti AI dan IoT membawa perubahan besar dalam manajemen rantai pasok. Bisnis harus mulai beradaptasi untuk tetap kompetitif.",
      date: "10 September 2024",
      category: "Berita"
    },
    {
      title: "Fasilitas Logistik: Pengertian dan Jenis-Jenisnya",
      description: "Teknologi baru seperti AI dan IoT membawa perubahan besar dalam manajemen rantai pasok. Bisnis harus mulai beradaptasi untuk tetap kompetitif.",
      date: "15 September 2024",
      category: "Lainnya"
    },
    {
      title: "Fasilitas Logistik: Pengertian dan Jenis-Jenisnya",
      description: "Teknologi baru seperti AI dan IoT membawa perubahan besar dalam manajemen rantai pasok. Bisnis harus mulai beradaptasi untuk tetap kompetitif.",
      date: "20 September 2024",
      category: "Acara"
    },
    {
      title: "Fasilitas Logistik: Pengertian dan Jenis-Jenisnya",
      description: "Teknologi baru seperti AI dan IoT membawa perubahan besar dalam manajemen rantai pasok. Bisnis harus mulai beradaptasi untuk tetap kompetitif.",
      date: "20 September 2024",
      category: "Acara"
    }
  ];

  const carouselRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current;
      const scrollLeft = carousel.scrollLeft;
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft >= scrollWidth);
    };
  
    const checkIfScrollable = () => {
      const carousel = carouselRef.current;
      if (filteredCards.length <= 1) {
        setIsAtStart(true);
        setIsAtEnd(true);
      } else {
        handleScroll();
      }
    };
  
    const carousel = carouselRef.current;
    carousel.addEventListener('scroll', handleScroll);
  
    checkIfScrollable();
  
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [filteredCards]);

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    const scrollAmount = carousel.clientWidth / 2;
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    const scrollAmount = carousel.clientWidth / 2;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const filterByCategory = (category) => {
    const updatedCards = cards.filter(card => card.category.toLowerCase() === category.toLowerCase());
    setFilteredCards(updatedCards);
    setActiveCategory(category);
  };

  const clearFilter = (e) => {
    e.stopPropagation();
    setFilteredCards(cards);
    setActiveCategory(null);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Artikel LOGEE</h2>
        <p>Baca berita logistik terkini, tips, dan informasi seputar LOGEE.</p>
        <div className="footer-buttons">
          <button className="footer-button" onClick={() => filterByCategory('Acara')}>
            Acara
            {activeCategory === 'Acara' && (
              <span className="clear-button" onClick={clearFilter}>✖</span>
            )}
          </button>
          <button className="footer-button" onClick={() => filterByCategory('Berita')}>
            Berita
            {activeCategory === 'Berita' && (
              <span className="clear-button" onClick={clearFilter}>✖</span>
            )}
          </button>
          <button className="footer-button" onClick={() => filterByCategory('Lainnya')}>
            Lainnya
            {activeCategory === 'Lainnya' && (
              <span className="clear-button" onClick={clearFilter}>✖</span>
            )}
          </button>
        </div>
        <div className="carousel-container-footer">
          {!isAtStart && (
            <button className="carousel-btn left-btn" onClick={scrollLeft}>
              &lt;
            </button>
          )}
          
          <div className="footer-carousel" ref={carouselRef}>
            {filteredCards.map((footer, index) => (
              <div className="footer-card" key={index}>
                <div className={`footer-category ${footer.category.toLowerCase()}`}>
                  <p>{footer.category}</p>
                </div>
                <p><strong>{footer.title}</strong></p>
                <p>{footer.description}</p>
                <div className="footer-date">
                  <p>{footer.date}</p>
                </div>
              </div>
            ))}
          </div>
          {!isAtEnd && (
            <button className="carousel-btn right-btn" onClick={scrollRight}>
              &gt;
            </button>
          )}
        </div>
        <button className="footer-main-button">Selengkapnya</button>
      </div>
      <div className="footer-bottom">
    <div className="footer-logo-section">
        <img src={LogoLogee} alt="LOGEE logo" className="footer-logo" />
        <p className="footer-copyright">Hak Cipta &copy; 2022 LOGEE. Seluruh hak dilindungi</p>
        <div className="footer-social">
            <div className="footer-social-google">
            <a href="https://play.google.com/store/apps/developer?id=logee.id&pli=1"><img src={GooglePlay} alt="Google Play" /></a>
            </div>
            <a href="https://www.instagram.com/logee.id/"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://www.linkedin.com/company/logee-indonesia/"><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href="https://www.facebook.com/people/Logeeid/100084864591594/"><img src={Facebook} alt="Facebook" /></a>
            <div className="footer-social-x">
            <a href="https://x.com/logee_id"><img src={X} alt="X" /></a>
            </div>
        </div>
    </div>
    <div className="footer-links-section">
        <div className="footer-links">
            <h3>Tautan</h3>
            <ul>
                <li><a href="#">Leap</a></li>
                <li><a href="#">Artikel</a></li>
                <li><a href="#">Hubungi Kami</a></li>
                <li><a href="#">Karier</a></li>
                <li><a href="#">Syarat & Ketentuan</a></li>
                <li><a href="#">Kebijakan Privasi</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
        <div className="footer-solutions">
            <h3>Solusi</h3>
            <ul>
                <li><a href="#">Transportasi</a></li>
                <li><a href="#">Distribusi</a></li>
                <li><a href="#">Visibility</a></li>
            </ul>
        </div>
        <div className="footer-contact">
            <h3>Kontak</h3>
            <p>Kantor Pusat</p>
            <p>Gedung Telkom DBT, Jln. Prof. Dr. Soepomo no. 139, Jakarta Selatan, 12810 - Indonesia</p>
            <p><img src={EmailIcon} alt="Email Icon" /><a href="mailto:info@logee.id">info@logee.id</a></p>
            <p><img src={PhoneIcon} alt="Phone Icon" /><a href="tel:+628111255250">+62 811 1255 250</a></p>
            <p>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementrian Perdagangan Republik Indonesia (Ditjen PPKTN)</p>
            <p>Tel: +62 853 1111 11010</p>
        </div>
    </div>
    <div className="footer-up">
        <a href="#"><img src={ArrowIcon} alt="Back to top" /></a>
    </div>
</div>
    </footer>
  );
};

export default Footer;
