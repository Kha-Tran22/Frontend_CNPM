import React, { useState } from 'react';
import './assets/App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import SpaceSelection from './pages/SpaceSelection';
import SearchSpace from './pages/SearchSpace';
import BookingConfirmation from './pages/BookingConfirmation';

const App = () => {
  const [page, setPage] = useState('home');
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="container">
      <NavBar setPage={setPage} currentPage={page} />
      <div className="content">
        {page === 'home' ? (
          <Home setPage={setPage} />
        ) : page === 'roleSelection' ? (
          <RoleSelection setPage={setPage} />
        ) : page === 'login' ? (
          <Login setPage={setPage} />
        ) : page === 'main' ? (
          <MainPage setPage={setPage} />
        ) : page === 'space' ? (
          <SpaceSelection setPage={setPage} />
        ) : page === 'search' ? (
          <SearchSpace setPage={setPage} setSelectedRoom={setSelectedRoom} />
        ) : (
          <BookingConfirmation
            setPage={setPage}
            setPageToSpaceSetting={() => setPage('spaceSetting')}
            room={selectedRoom}
          />
        )}
      </div>
    </div>
  );
};

export default App;