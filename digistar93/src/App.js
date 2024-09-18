import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Review from './component/Review';
import Benefit from './component/Benefit';
import Services from './component/Services';
import Footer from './component/Footer';
import Growth from './component/Growth';
import Partners from './component/Partners';

const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const sectionId = path === '/' ? 'home' : path.substring(1);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Home id="home" />
      <Review id="review" />
      <Benefit id="benefit" />
      <Services id="services" />
      <Growth id="growth" />
      <Partners id="partners" />
      <Footer id="footer" />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
};

export default App;