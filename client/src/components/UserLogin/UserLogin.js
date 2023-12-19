import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import css from '../UserLogin/UserLoginCss/Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    if (!email) {
      setErrorMessage('Email is required.');
      return false;
    }

    if (!password) {
      setErrorMessage('Password is required.');
      return false;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      await axios.post('http://localhost:8000/login/login', user);
      alert('User Logged Successfully');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.form_box}>
        <h2>User Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={css.input_box}>
            <span className={css.icon}>
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email User</label>
          </div>
          <div className={css.input_box}>
            <span className={css.icon}>
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          {errorMessage && <p className={css.error}>{errorMessage}</p>}
          <div>
            <div className={css.remember_forgot}>
              <label>
                <input type="checkbox" />Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="button" className={css.btn} onClick={handleSubmit}>
              Login
            </button>
            <div className={css.login_register}>
              <p>
                Don't have an account?
                <Link to="/create-customer" className={css.register_link}>
                  {' '}
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
