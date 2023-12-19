import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('/api/customers/login', {
        username: username,
        password: password,
      });

      // Save the JWT token to local storage
      localStorage.setItem('token', response.data.token);

      // Show the alert message
      alert('Login successful');

      // Redirect the user to the Account Home page
      window.location = '/account-home';
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-sign-in-alt"></i> Customer Login
            </h1>
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
            </form>
            <p className="lead mt-4">
              No account?{' '}
              <Link to="/create-customer">Create one here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
