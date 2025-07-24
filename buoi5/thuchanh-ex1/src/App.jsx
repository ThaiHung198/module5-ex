import React, { useState } from "react";
import "./App.css";

function App() {
  const MESSAGE_ERROR = {
    username: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Confirm password error"
  };

  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /.{6,}/
  };

  const [form, setForm] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    let error = "";

    if (name !== 'confirmPassword') {
      if (!REGEX[name].test(value)) {
        error = MESSAGE_ERROR[name];
      }
    }

    if (name === 'confirmPassword') {
      if (form.password && value !== form.password.value) {
        error = MESSAGE_ERROR.confirmPassword;
      }
    }
    
    if (name === 'password' && form.confirmPassword && value !== form.confirmPassword.value) {
        setForm(prevForm => ({
            ...prevForm,
            confirmPassword: { ...prevForm.confirmPassword, error: MESSAGE_ERROR.confirmPassword }
        }));
    }

    setForm({
      ...form,
      [name]: { value, error }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const isFilled = form.username?.value && form.email?.value && form.password?.value && form.confirmPassword?.value;
    const isError = form.username?.error || form.email?.error || form.password?.error || form.confirmPassword?.error;

    if (isFilled && !isError) {
      alert("Sign up successfully!!!");
    } else {
      alert("Please fill out all fields correctly!");
    }
  }

  return (
    <div className="container">
      {/* THÊM noValidate VÀO ĐÂY ĐỂ TẮT VALIDATION CỦA TRÌNH DUYỆT */}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h2 className="form-title">Sign up</h2>
        
        <div className={`custom-input ${form.username?.error ? 'error-active' : ''}`}>
          <label>Username</label>
          <input
            name="username"
            value={form.username?.value || ''}
            onChange={handleChange}
          />
          {form.username?.error && <p className="error-message">{form.username.error}</p>}
        </div>

        <div className={`custom-input ${form.email?.error ? 'error-active' : ''}`}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email?.value || ''}
            onChange={handleChange}
          />
          {form.email?.error && <p className="error-message">{form.email.error}</p>}
        </div>

        <div className={`custom-input ${form.password?.error ? 'error-active' : ''}`}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password?.value || ''}
            onChange={handleChange}
          />
          {form.password?.error && <p className="error-message">{form.password.error}</p>}
        </div>

        <div className={`custom-input ${form.confirmPassword?.error ? 'error-active' : ''}`}>
          <label>Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword?.value || ''}
            onChange={handleChange}
          />
          {form.confirmPassword?.error && <p className="error-message">{form.confirmPassword.error}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;