import React, { useState, useEffect } from 'react';
import '../App.css';
import LogoLogee from '../assets/LogoLogee.png';
import ArrowDown from '../assets/ArrowDown.png';
import ArrowUp from '../assets/ArrowUp.png';
import SearchCard from './SearchCard';
import { useSearch } from '../services/Search';

const Navbar = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ID');
  const [showTicker, setShowTicker] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { results, loading } = useSearch(searchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClearSearch = () => {
    setSearchTerm('');
  };


  useEffect(() => {
    const handleScroll = () => {
      setShowTicker(window.scrollY === 0);
      setScrolled(window.scrollY > 0);
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
      <div className={`scrolling-ticker ${scrolled ? 'hidden' : ''}`}>
        <div className="ticker-wrapper">
          <div className="ticker-content">
            <span> Gathering Transport Logee 16/07/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> INABUYER 19/06/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> Gathering Transport Logee 16/07/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> INABUYER 19/06/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> Gathering Transport Logee 16/07/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> INABUYER 19/06/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
          </div>
          <div className="ticker-content">
            <span> Gathering Transport Logee 16/07/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> INABUYER 19/06/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> Gathering Transport Logee 16/07/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> INABUYER 19/06/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> Gathering Transport Logee 16/07/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
            <span> INABUYER 19/06/2024 Jakarta</span>
            <img src={require('../assets/LogeeKecil.png')} alt="Separator" />
          </div>
        </div>
      </div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
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
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
          <button onClick={handleClearSearch} className="clear-button">x</button>
        )}
        </div>
        <div className="nav-buttons">
          <button className="btn-daftar">Daftar</button>
          <button className="btn-masuk">Masuk</button>
        </div>
      </nav>
      <div className={`search-results ${searchTerm || results.length > 0 ? 'active' : ''}`}>
        {loading && <div>Loading...</div>}
        {Array.isArray(results) && results.length > 0 ? (
          results.map((result, index) => (
            <SearchCard
              key={index}
              result={result}
            />
          ))
        ) : (
          !loading && searchTerm && <p>No results found</p>
        )}

      </div>
    </>
  );
};

export default Navbar;