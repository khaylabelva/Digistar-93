import React from 'react';
import '../App.css';
import LogoLogee from '../assets/LogoLogee.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={LogoLogee} alt="LOGEE" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><a href="#solusi">Solusi</a></li>
        <li><a href="#produk">Produk</a></li>
        <li><a href="#artikel">Artikel</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="btn-daftar">Daftar</button>
        <button className="btn-masuk">Masuk</button>
      </div>
    </nav>
  );
};

export default Navbar;
