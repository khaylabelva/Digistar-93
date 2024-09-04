import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Review from './component/Review';
import Benefit from './component/Benefit';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Review />
      <Benefit />
    </div>
  );
};

export default App;