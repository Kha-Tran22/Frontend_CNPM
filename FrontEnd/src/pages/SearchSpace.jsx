import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RoomCard from '../components/RoomCard';

const SearchSpace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const rooms = [
    { court: 'BK.B1', floor: 1, room: '103' },
    { court: 'BK.B1', floor: 1, room: '104' },
    { court: 'BK.B1', floor: 2, room: '205' },
  ];

  const filteredRooms = rooms.filter(
    (room) =>
      room.court.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.room.includes(searchTerm)
  );

  const handleRoomSelect = (room) => {
    navigate('/booking', { state: { room } });
  };

  return (
    <div className="background">
      <h2 className="search-title">Chọn phòng học</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Tìm kiếm phòng..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="room-list">
        {filteredRooms.map((room, index) => (
          <RoomCard
            key={index}
            room={room}
            onClick={() => handleRoomSelect(room)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchSpace;