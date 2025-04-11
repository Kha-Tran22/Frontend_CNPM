import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const BookingConfirmation = ({ setPage, room }) => {
  const [name, setName] = useState('');
  const [mssv, setMssv] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState({
    light: false,
    fan: false,
    wifi: false,
    board: false,
    power: false,
  });

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('vi-VN');
    setCurrentDate(formattedDate);
  }, []);

  const handleConfirm = () => {
    if (!name || !mssv) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    alert(
      `Đặt phòng thành công!\nTên: ${name}\nMSSV: ${mssv}\nPhòng: ${room.room}\nNgày: ${currentDate}`
    );
    setPage('spaceSetting');
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  if (!room) return <div>Không có phòng nào được chọn!</div>;

  return (
    <div className="background">
      <Header backButton onBackClick={() => setPage('search')} />
      <h2>Booking confirmation</h2>
      <div className="confirmation-box">
        <div className="input-group">
          <label>Tên:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
            required
          />
        </div>
        <div className="input-group">
          <label>MSSV:</label>
          <input
            type="text"
            value={mssv}
            onChange={(e) => setMssv(e.target.value)}
            placeholder="Nhập MSSV"
            required
          />
        </div>
        <p>
          <strong>Court:</strong> {room.court} | <strong>Floor:</strong>{' '}
          {room.floor} | <strong>Room:</strong> {room.room}
        </p>
        <p>
          <strong>Date:</strong> {currentDate}
        </p>
        <p>
          <strong>Usage time:</strong> 180 phút
        </p>
        <div className="room-features">
          <button
            className={`feature-btn ${selectedFeatures.light ? 'selected' : ''}`}
            onClick={() => toggleFeature('light')}
          >
            <span>💡</span> Light
          </button>
          <button
            className={`feature-btn ${selectedFeatures.fan ? 'selected' : ''}`}
            onClick={() => toggleFeature('fan')}
          >
            <span>🌀</span> Fan
          </button>
          <button
            className={`feature-btn ${selectedFeatures.wifi ? 'selected' : ''}`}
            onClick={() => toggleFeature('wifi')}
          >
            <span>📶</span> WIFI
          </button>
          <button
            className={`feature-btn ${selectedFeatures.board ? 'selected' : ''}`}
            onClick={() => toggleFeature('board')}
          >
            <span>📱</span> Board
          </button>
          <button
            className={`feature-btn power-btn ${
              selectedFeatures.power ? 'selected' : ''
            }`}
            onClick={() => toggleFeature('power')}
          >
            <span>⚡</span> Power outlet
          </button>
        </div>
        <button className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;