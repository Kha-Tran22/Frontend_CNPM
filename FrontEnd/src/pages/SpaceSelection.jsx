import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpaceCard from '../components/SpaceCard';

const SpaceSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="background">
      <span className="help-box">Lịch sử</span>
      <h2 className="space-title">Chọn không gian</h2>
      <div className="space-options">
        <SpaceCard icon="👤" label="Single" onClick={() => navigate('/search')} />
        <SpaceCard icon="👥" label="Multiple" onClick={() => navigate('/search')} />
        <SpaceCard icon="📄" label="MeetingRoom" onClick={() => navigate('/search')} />
      </div>
    </div>
  );
};

export default SpaceSelection;