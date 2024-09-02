import React, { useState, useEffect } from 'react';
import '../App.css';
import LogoLogee from '../assets/LogoLogee.png';
import ArrowDown from '../assets/ArrowDown.png';
import ArrowUp from '../assets/ArrowUp.png';

const Navbar = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ID');
  const [showTicker, setShowTicker] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTicker(window.scrollY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguageOptions(false);
  };

  return (
    <>
      {/* Scrolling ticker */}
      {showTicker && (
        <div className="scrolling-ticker">
          <div className="ticker-wrapper">
            <div className="ticker-content">
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            </div>
            <div className="ticker-content">
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
              <span> Webinar xxx dengan xxx pada xxx di xxx</span>
              <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            </div>
          </div>
        </div>
      )}
      <nav className="navbar">
        <div className="logo">
          <img src={LogoLogee} alt="LOGEE" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><a href="#solusi">Solusi</a></li>
          <li><a href="#produk">Produk</a></li>
          <li><a href="#artikel">Artikel</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#hubungi">Hubungi Kami</a></li>
          <li className="language-dropdown">
            <button 
              className={`btn-language ${showLanguageOptions ? 'active' : ''}`} 
              onClick={toggleLanguageOptions}
            >
              {selectedLanguage} <img src={showLanguageOptions ? ArrowUp : ArrowDown} alt="Arrow" className="arrow"/>
            </button>
            {showLanguageOptions && (
              <div className="language-options">
                <button 
                  className="btn-language-option" 
                  onClick={() => handleLanguageChange('ID')}
                >
                  ID
                </button>
                <button 
                  className="btn-language-option" 
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </button>
              </div>
            )}
          </li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-daftar">Daftar</button>
          <button className="btn-masuk">Masuk</button>
        </div>
      </nav>
    </>
  );  
};

export default Navbar;