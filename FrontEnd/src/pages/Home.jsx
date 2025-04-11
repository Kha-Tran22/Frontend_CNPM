import React from 'react';
import Header from '../components/Header';

const Home = ({ setPage }) => (
  <div className="background">
    <Header />
    <div className="hero-section">
      <h1>Chào mừng đến với SStudyS</h1>
      <p>Hệ thống không gian học tập thông minh cho sinh viên và cán bộ</p>
      <div className="cta-buttons">
        <button className="button1" onClick={() => setPage('roleSelection')}>
          Đăng nhập
        </button>
        <button className="button1" onClick={() => setPage('space')}>
          Tìm không gian học
        </button>
        <button className="button1" onClick={() => setPage('main')}>
          Khám phá với tư cách khách
        </button>
      </div>
    </div>
  </div>
);

export default Home;