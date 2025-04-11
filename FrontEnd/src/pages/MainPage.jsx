import React from 'react';
import Header from '../components/Header';
import SpaceCard from '../components/SpaceCard';

const MainPage = ({ setPage }) => (
  <div className="background">
    <Header />
    <span className="help-box">Lịch sử</span>
    <div className="main-container">
      <div className="space-options">
        <SpaceCard
          icon="📜"
          label="Study Space"
          onClick={() => setPage('space')}
        />
        <SpaceCard
          icon="💼"
          label="Setting"
          onClick={() => setPage('space')}
        />
      </div>
    </div>
  </div>
);

export default MainPage;