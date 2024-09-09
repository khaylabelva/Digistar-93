import React from 'react';
import '../App.css';
import MapIndonesia from '../assets/MapIndonesia.png';

const Growth = () => {
  return (
    <div className="section-container">
      <h2>Tumbuh Bersama LOGEE</h2>
      <p>
        Bergabung dengan LOGEE dan manfaatkan layanan serta kolaborasi bisnis yang dapat disesuaikan untuk memaksimalkan keuntungan Anda.
      </p>
      <div className="map-container">
        <img src={MapIndonesia} alt="Map of Indonesia" className="map-image" />
      </div>
      <div className="stats-container">
        <div className="stat-card">
          <h3>450</h3>
          <p>Trucker</p>
        </div>
        <div className="stat-card">
          <h3>51.200</h3>
          <p>Fleet</p>
        </div>
        <div className="stat-card">
          <h3>25.000</h3>
          <p>Outlet</p>
        </div>
        <div className="stat-card">
          <h3>500</h3>
          <p>Distributor</p>
        </div>
      </div>
    </div>
  );
};

export default Growth;
