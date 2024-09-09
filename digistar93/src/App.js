import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Review from './component/Review';
import Benefit from './component/Benefit';
import Services from './component/Services';
import Footer from './component/Footer';
import Growth from './component/Growth';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Review />
      <Benefit />
      <Services />
      <Growth />
      <Footer />
    </div>
  );
};

export default App;