import React from 'react';
import Header from '../components/Header';
import SpaceCard from '../components/SpaceCard';

const SpaceSelection = ({ setPage }) => (
  <div className="background">
    <Header backButton onBackClick={() => setPage('main')} />
    <span className="help-box">Lịch sử</span>
    <h2>Chọn không gian</h2>
    <div className="space-options">
      <SpaceCard icon="👤" label="Single" onClick={() => setPage('search')} />
      <SpaceCard icon="👥" label="Multiple" onClick={() => setPage('search')} />
      <SpaceCard
        icon="📄"
        label="MeetingRoom"
        onClick={() => setPage('search')}
      />
    </div>
  </div>
);

export default SpaceSelection;