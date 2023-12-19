import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import axios from 'axios';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: '',
    password: '',
    error: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    // Perform admin login logic here
    // Example: validate username and password
    if (username === 'admin' && password === 'password') {
      // Successful login logic
      console.log('Admin login successful');
      // Redirect to admin dashboard or perform other actions
    } else {
      // Failed login logic
      this.setState({ error: 'Invalid username or password' });
    }
  }

  render() {
    const { username, password, error } = this.state;
    return (
      <div className="form-wrapper">
        <h3 className="centered-paragraph">Admin Login</h3>
        {error && <div className="error-message">{error}</div>}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button className="submit-button" type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default AdminLogin;
