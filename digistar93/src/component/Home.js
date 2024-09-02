import React, { useState } from 'react';
import QuestionMark from '../assets/QuestionMark.png';

const Home = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleButtonClick = () => {
    setShowChat(!showChat);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage(""); // Clear the input field after sending
    }
  };

  return (
    <section className="home">
      <h1>Solusi Digital Bisnis Logistik</h1>
      <p>
        LOGEE hadir sebagai jembatan untuk menghubungkan semua pemain logistik menjadi satu ekosistem yang memberikan solusi dan keuntungan bagi bisnis Anda.
      </p>
      <button className="btn-butuh-bantuan" onClick={handleButtonClick}>
        <img src={QuestionMark} alt="Question Mark" className="question-mark" />
        Butuh Bantuan?
      </button>

      {showChat && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Admin BOT Logee</span>
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
              placeholder="Ketik pesan..."
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
