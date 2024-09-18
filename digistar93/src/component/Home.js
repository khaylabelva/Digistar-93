import React, { useState, useEffect, useRef } from 'react';
import QuestionMark from '../assets/QuestionMark.png';
import '../App.css';

const Home = ({ id }) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const contentRef = useRef(null);

  const handleButtonClick = () => {
    setShowChat(!showChat);
    
    if (!showChat) {
      setMessages([{ text: "Halo! Apakah ada yang bisa kami bantu?", sender: "admin" }]);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id={id} className="home">
      <div className="home-content" ref={contentRef}>
        <h1>Solusi Digital Bisnis Logistik</h1>
        <p>
          LOGEE hadir sebagai jembatan untuk menghubungkan semua pemain logistik menjadi satu ekosistem yang memberikan solusi dan keuntungan bagi bisnis Anda.
        </p>
        <button className="btn-butuh-bantuan" onClick={handleButtonClick}>
          <img src={QuestionMark} alt="Question Mark" className="question-mark" />
          Butuh Bantuan?
        </button>
      </div>

      {showChat && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Mimin Logee</span>
            <button className="close-chatbox" onClick={handleButtonClick}>✖</button>
          </div>
          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chatbox-message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input-container">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Enter a message..."
              className="chatbox-input"
            />
            <button onClick={handleSendMessage} className="chatbox-send-button">➤</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;