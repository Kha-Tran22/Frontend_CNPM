import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import UserSelection from './pages/UserSelection';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import SpaceSelection from './pages/SpaceSelection';
import SearchSpace from './pages/SearchSpace';
import BookingConfirmation from './pages/BookingConfirmation';
import './assets/App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-selection" element={<UserSelection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/space" element={<SpaceSelection />} />
            <Route path="/search" element={<SearchSpace />} />
            <Route path="/booking" element={<BookingConfirmation />} />
            <Route path="*" element={<div>404 - Trang không tồn tại</div>} /> {/* Route cho lỗi 404 */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;