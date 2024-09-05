import React from 'react';
import LogeeFulfillment from '../assets/logee-fulfillment.png';
import LogeeOrder from '../assets/logee-order.png'; 
import LogeeSales from '../assets/logee-sales.png'; 
import LogeeTruck from '../assets/logee-truck.png'; 
import LogeePort from '../assets/logee-port.png'; 
import LogeeVisibility from '../assets/logee-visibility.png'; 

const Services = () => {
  return (
    <div className="services-container">
      <h2>Maksimalkan Potensi Logistik dengan Teknologi LOGEE</h2>
      <p>
        Logee hadir sebagai solusi logistik yang menawarkan efisiensi operasional melalui platform andal, layanan operasi menyeluruh, serta kolaborasi bisnis yang disesuaikan dengan kebutuhan Anda.
      </p>
      <div className="services-section">
        <h2>Solusi Distribusi</h2>
        <p>LOGEE menjembatani outlet dan distributor dengan jaringan principal yang tersebar di seluruh wilayah Indonesia.</p>
        <div className="service-card">
          <img src={LogeeFulfillment} alt="Logee Fulfillment" />
          <h3>Logee Fulfillment</h3>
          <p>Platform digital multi-gudang untuk kemudahan pengelolaan pesanan dan stok, serta pengiriman order.</p>
        </div>
        <div className="service-card">
          <img src={LogeeOrder} alt="Logee Order" />
          <h3>Logee Order</h3>
          <p>Platform digital untuk memudahkan principal dan distributor dalam memproses dan memantau order.</p>
        </div>
        <div className="service-card">
          <img src={LogeeSales} alt="Logee Sales" />
          <h3>Logee Sales</h3>
          <p>Platform digital yang mempermudah penjualan produk dan layanan serta akses sales secara real-time.</p>
        </div>
      </div>

      <div className="services-section-trans">
        <h2>Solusi Transportasi</h2>
        <p>Transformasikan cara konvensional menjadi digital dengan LOGEE, mempercepat dan mempermudah pengiriman bagi pemilik muatan dan armada, sehingga lebih praktis dan efisien.</p>
        <div className="service-card-trans">
          <img src={LogeeTruck} alt="Logee Truck" />
          <h3>Logee Truck</h3>
          <p>Platform yang mempertemukan pemilik barang dengan armada untuk pengiriman cepat dengan biaya yang kompetitif.</p>
        </div>
        <div className="service-card-trans">
          <img src={LogeePort} alt="Logee Port" />
          <h3>Logee Port</h3>
          <p>Platform pemesanan muatan kapal dari pemilik armada untuk pengiriman domestik dan Tematik Kemasan.</p>
        </div>
      </div>

      <div className="services-section">
        <h2>Solusi Visibility</h2>
        <p>Kemudahan dalam melacak dan mengelola informasi pengiriman barang, penyimpanan stok di gudang, barang dalam perjalanan, hingga tiba barang di lokasi akhir.</p>
        <div className="service-card">
          <img src={LogeeVisibility} alt="Logee Visibility" />
          <h3>Logee Visibility</h3>
          <p>Mempermudah rescale dan mengelola info pergerakan barang, penyimpanan stok di gudang, barang dalam perjalanan, hingga tiba di lokasi akhir.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
