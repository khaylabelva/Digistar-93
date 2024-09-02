import React from 'react';
import QuestionMark from '../assets/QuestionMark.png';

const Home = () => {
    return (
      <section className="home">
        <h1>Solusi Digital Bisnis Logistik</h1>
        <p>
          LOGEE hadir sebagai jembatan untuk menghubungkan semua pemain logistik menjadi satu ekosistem yang memberikan solusi dan keuntungan bagi bisnis Anda.
        </p>
        <button className="btn-butuh-bantuan">
          <img src={QuestionMark} alt="Question Mark" className="question-mark" />
          Butuh Bantuan?
        </button>
      </section>
    );
  };

export default Home;

