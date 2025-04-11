import React from 'react';

const NavBar = ({ setPage, currentPage }) => (
  <nav className="navbar">
    <div className="navbar-brand">
      <span>SStudyS</span>
    </div>
    <ul className="navbar-links">
      <li>
        <button
          className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('home')}
        >
          Trang chủ
        </button>
      </li>
      <li>
        <button
          className={currentPage === 'roleSelection' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('roleSelection')}
        >
          Đăng nhập
        </button>
      </li>
      <li>
        <button
          className={currentPage === 'space' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('space')}
        >
          Không gian học
        </button>
      </li>
      <li>
        <button
          className={currentPage === 'search' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('search')}
        >
          Tìm phòng
        </button>
      </li>
    </ul>
  </nav>
);

export default NavBar;