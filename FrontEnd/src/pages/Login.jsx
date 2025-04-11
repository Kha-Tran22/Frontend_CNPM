import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const Login = ({ setPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(localStorage.getItem('rememberedEmail') || '');
    setPassword(localStorage.getItem('rememberedPassword') || '');
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const request = { email, password };
    axios
      .post('http://127.0.0.1:8000/api/auth/login', request, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => setPage('main'))
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred during login');
      });
  };

  return (
    <div className="background">
      <Header />
      <div className="login-box">
        <h2>Đăng nhập</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Nhớ đăng nhập</label>
          </div>
          <button type="submit">Xác nhận</button>
        </form>
      </div>
    </div>
  );
};

export default Login;