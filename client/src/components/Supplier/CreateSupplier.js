import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class CreateSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      mobileno: '',
      supplierid: '',
      username: '',
      password: '',
      re_password: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("I am Working");
    alert("Form Submitted");

    const supplierObject = {
      name: this.state.name,
      email: this.state.email,
      company: this.state.company,
      mobileno: this.state.mobileno,
      supplierid: this.state.supplierid,
      username: this.state.username,
      password: this.state.password,
      re_password: this.state.re_password
    };

    axios.post('http://localhost:8000/supplier/create-supplier', supplierObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      company: '',
      mobileno: '',
      supplierid: '',
      username: '',
      password: '',
      re_password: ''
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <p className="centered-paragraph">Create Your Supplier Account</p>
  
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Your Name" required />
          </Form.Group>

          <Form.Group controlId="Supplierid">
            <Form.Label>Supplier ID</Form.Label>
            <Form.Control type="text" name="supplierid" value={this.state.supplierid} onChange={this.handleChange} placeholder="Enter Your Supplier ID" required />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Your Email" required />
          </Form.Group>
  
          <Form.Group controlId="Company">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" name="company" value={this.state.company} onChange={this.handleChange} placeholder="Enter Your Company" required />
          </Form.Group>
  
          <Form.Group controlId="Phone">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control type="text" name="mobileno" value={this.state.mobileno} onChange={this.handleChange} placeholder="Enter Your Mobile No" required />
          </Form.Group>
  
          <Form.Group controlId="Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Your Username" required />
          </Form.Group>
  
          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Your Password" required />
          </Form.Group>
  
          <Form.Group controlId="RePassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="re_password" value={this.state.re_password} onChange={this.handleChange} placeholder="Confirm Password" required />
          </Form.Group>
  
          <Button variant="primary" size="lg" block type="submit">
            Create Supplier Account
          </Button>
        </Form>
      </div>
    );
  }
}  