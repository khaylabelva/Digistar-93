import React from 'react';
import LogeeTruck from '../assets/logee-truck.png'; 
import LogeePort from '../assets/logee-port.png'; 
import LogeeVisibility from '../assets/logee-visibility.png'; 

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Maksimalkan Potensi Logistik dengan Teknologi LOGEE</h2>
      <p className="services-description">
        Logee hadir sebagai solusi logistik yang menawarkan efisiensi operasional melalui platform andal, layanan operasi menyeluruh, serta kolaborasi bisnis yang disesuaikan dengan kebutuhan Anda.
      </p>

      <div className="services-section">
        <h3 className="services-subtitle">Solusi Transportasi</h3>
        <p className="services-desc">Kemudahan dalam melacak dan mengelola informasi pengiriman barang, penyimpanan stok di gudang, barang dalam perjalanan, hingga tiba barang di lokasi akhir. <span className="read-more">Selengkapnya..</span></p>
        <img src={LogeeTruck} alt="Logee Truck" className="service-image"/>
      </div>

      <div className="services-section">
        <h3 className="services-subtitle">Solusi Distribusi</h3>
        <p className="services-desc">Kemudahan dalam melacak dan mengelola informasi pengiriman barang, penyimpanan stok di gudang, barang dalam perjalanan, hingga tiba barang di lokasi akhir. <span className="read-more">Selengkapnya..</span></p>
        <img src={LogeePort} alt="Logee Port" className="service-image"/>
      </div>

      <div className="services-section">
        <h3 className="services-subtitle">Solusi Visibility</h3>
        <p className="services-desc">Kemudahan dalam melacak dan mengelola informasi pengiriman barang, penyimpanan stok di gudang, barang dalam perjalanan, hingga tiba barang di lokasi akhir. <span className="read-more">Selengkapnya..</span></p>
        <img src={LogeeVisibility} alt="Logee Visibility" className="service-image"/>
      </div>
    </div>
  );
};

export default Services;