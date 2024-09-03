import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Review from './component/Review';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Review />
    </div>
  );
};

export default App;