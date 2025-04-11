import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/hcmut.png';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span>SStudyS</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            to="/user-selection"
            className={`nav-link ${location.pathname === '/user-selection' ? 'active' : ''}`}
          >
            Đăng nhập
          </Link>
        </li>
        <li>
          <Link
            to="/space"
            className={`nav-link ${location.pathname === '/space' ? 'active' : ''}`}
          >
            Không gian học
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className={`nav-link ${location.pathname === '/search' ? 'active' : ''}`}
          >
            Tìm phòng
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;