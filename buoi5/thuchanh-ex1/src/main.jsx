import React from 'react';
import './main.css'; 

const Main = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Đăng nhập</h2>
        <input type="text" placeholder="Tên đăng nhập" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Main;
