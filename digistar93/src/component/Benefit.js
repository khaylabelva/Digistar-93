import React from 'react';
import '../App.css';
import card1 from '../assets/card1.png';  // Adjust the path to where your images are stored
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';

const Benefit = () => {
  const benefits = [
    {
      title: 'Solusi Digital Terintegrasi',
      image: card1,
      className: 'card-one',
    },
    {
      title: 'Kecerdasan Buatan dan Automasi',
      image: card2,
      className: 'card-two',
    },
    {
      title: 'Bisnis Terus Berkembang',
      image: card3,
      className: 'card-three',
    },
    {
      title: 'Pembiayaan Rantai Pasok',
      image: card4,
      className: 'card-four',
    },
  ];

  return (
    <div className="benefit-container">
      <h2>Bisnis Lebih Produktif Bersama LOGEE</h2>
      <p>
        LOGEE adalah platform digital logistik yang memiliki keunggulan untuk memajukan bisnis Anda dengan berdasarkan pada empat nilai berikut.
      </p>
      <div className="benefit-cards">
        {benefits.map((benefit, index) => (
          <div className={`benefit-card ${benefit.className}`} key={index}>
            <h3>{benefit.title}</h3>
            <img src={benefit.image} alt={benefit.title} />
          </div>
        ))}
      </div>
    </div>
  );  
};

export default Benefit;