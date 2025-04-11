import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

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
      .then((response) => {
        console.log('Login successful:', response.data);
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
        } else {
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
        }
        navigate('/main');
      })
      .catch((error) => {
        console.error('Login error:', error.response || error);
        alert('Đăng nhập thất bại. Vui lòng kiểm tra email/mật khẩu.');
      });
  };

  return (
    <div className="background">
      <div className="login-box">
        <h2 className="login-title">Đăng nhập</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              className="login-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email"
              required
            />
          </div>
          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Nhớ đăng nhập</label>
          </div>
          <button className="login-button" type="submit">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;