import React from 'react';
import Header from '../components/Header';

const RoleSelection = ({ setPage }) => (
  <div className="background">
    <Header />
    <div className="login-box">
      <h2>Smart Study Space</h2>
      <p>Hệ thống không gian học tập thông minh</p>
      <button className="button1" onClick={() => setPage('login')}>
        Nhân viên
      </button>
      <button className="button1" onClick={() => setPage('login')}>
        Cán bộ / Sinh viên
      </button>
      <button className="button1" onClick={() => setPage('main')}>
        Người dùng khách
      </button>
    </div>
  </div>
);

export default RoleSelection;