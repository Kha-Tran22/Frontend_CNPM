import React, { useState } from 'react';
import Header from '../components/Header';
import RoomCard from '../components/RoomCard';

const SearchSpace = ({ setPage, setSelectedRoom }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const rooms = [
    { court: 'BK.B1', floor: 1, room: '103' },
    { court: 'BK.B1', floor: 1, room: '104' },
    { court: 'BK.B1', floor: 2, room: '205' },
    { court: 'BK.B1', floor: 2, room: '206' },
    { court: 'BK.B1', floor: 3, room: '304' },
    { court: 'BK.B1', floor: 3, room: '305' },
  ];

  const filteredRooms = rooms.filter(
    (room) =>
      room.court.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.room.includes(searchTerm)
  );

  return (
    <div className="background">
      <Header />
      <h2>Chọn phòng học</h2>
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
            onClick={() => {
              setSelectedRoom(room);
              setPage('booking');
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchSpace;