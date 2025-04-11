import React from 'react';
import logo from '../assets/hcmut.png';

const Header = ({ backButton, onBackClick }) => (
  <div className="header">
    <span className="title">SStudyS</span>
    <img src={logo} alt="BK TP.HCM" className="logo" />
    {backButton && (
      <button className="back-box" onClick={onBackClick}>
        Quay lại
      </button>
    )}
  </div>
);

export default Header;