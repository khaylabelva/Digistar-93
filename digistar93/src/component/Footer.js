import React, { useState } from 'react';
import '../App.css';
import LogoLogee from '../assets/LogoLogee.png';
import GooglePlay from '../assets/GooglePlay.png';
import Instagram from '../assets/Instagram.png';
import Facebook from '../assets/Facebook.png';
import LinkedIn from '../assets/LinkedIn.png';

const Footer = () => {
  // Card content data
  const cards = [
    {
      title: "Fasilitas Logistik: Pengertian dan Jenis-Jenisnya",
      description: "Fasilitas logistik sangat diperlukan bagi hampir semua jenis sektor industri. Entah itu bisnis offline maupun online, keduanya sama-sama membutuhkan logistik untuk menyimpan produk jadi mereka, bahan mentah, dan lain.",
      date: "02 September 2024",
      category: "Acara"
    },
    {
      title: "Transportasi Logistik: Inovasi dan Tantangan",
      description: "Sektor transportasi logistik menghadapi tantangan besar dalam hal efisiensi dan keberlanjutan. Inovasi baru diperlukan untuk menjawab kebutuhan industri di era modern.",
      date: "10 September 2024",
      category: "Berita"
    },
    {
      title: "Manajemen Inventori dalam Logistik",
      description: "Manajemen inventori adalah bagian penting dari rantai pasok. Pengelolaan yang baik akan membantu mengurangi biaya dan meningkatkan efisiensi dalam distribusi barang.",
      date: "15 September 2024",
      category: "Artikel"
    },
    {
      title: "Teknologi dalam Rantai Pasok",
      description: "Teknologi baru seperti AI dan IoT membawa perubahan besar dalam manajemen rantai pasok. Bisnis harus mulai beradaptasi untuk tetap kompetitif.",
      date: "20 September 2024",
      category: "Inovasi"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next card
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Function to handle previous card
  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-articles">
          <h2>Artikel LOGEE</h2>
          <p>Baca berita logistik terkini, tips, dan informasi seputar LOGEE.</p>
          <div className="footer-buttons">
            <button>Acara</button>
            <button>Berita</button>
            <button>Lainnya</button>
          </div>
          <div className="footer-carousel">
            <button className="arrow-btn" onClick={prevCard}>&lt;</button>
            <div className="footer-article-card">
              <h3>{cards[currentIndex].category}</h3>
              <h4>{cards[currentIndex].title}</h4>
              <p>{cards[currentIndex].description}</p>
              <small>{cards[currentIndex].date}</small>
            </div>
            <button className="arrow-btn" onClick={nextCard}>&gt;</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-contact">
          <img src={LogoLogee} alt="LOGEE logo" />
          <p>Jembatan Digital Rantai Pasok</p>
          <p>Email: <a href="mailto:info@logee.id">info@logee.id</a></p>
          <p>Phone: <a href="tel:+628111255250">+62 811 1255 250</a></p>
          <p>Address: Gedung Telkom DBT, Jln. Prof. Dr. Soepomo no. 139, Jakarta Selatan, 12810 - Indonesia</p>
        </div>
        <div className="footer-solutions">
          <h3>Solusi</h3>
          <ul>
            <li><a href="#">Transportasi</a></li>
            <li><a href="#">Distribusi</a></li>
            <li><a href="#">Visibility</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Tautan</h3>
          <ul>
            <li><a href="#">Leap</a></li>
            <li><a href="#">Artikel</a></li>
            <li><a href="#">Karier</a></li>
            <li><a href="#">Hubungi Kami</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://play.google.com/store"><img src={GooglePlay} alt="Google Play" /></a>
          <a href="https://www.instagram.com"><img src={Instagram} alt="Instagram" /></a>
          <a href="https://www.linkedin.com"><img src={LinkedIn} alt="LinkedIn" /></a>
          <a href="https://www.facebook.com"><img src={Facebook} alt="Facebook" /></a>
          <a href="https://www.youtube.com"><img src="/youtube-icon.png" alt="YouTube" /></a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2022 LOGEE. Seluruh hak dilindungi</p>
      </div>
    </footer>
  );
};

export default Footer;
