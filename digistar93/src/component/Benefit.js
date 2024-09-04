import React from 'react';
import '../App.css';

const Benefit = () => {
  const benefits = [
    {
      title: 'Solusi Digital Terintegrasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      className: 'card-one',
    },
    {
      title: 'Kecerdasan Buatan dan Automasi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      className: 'card-two',
    },
    {
      title: 'Bisnis Terus Berkembang',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      className: 'card-three',
    },
    {
      title: 'Pembiayaan Rantai Pasok',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
  );  
};

export default Benefit;
