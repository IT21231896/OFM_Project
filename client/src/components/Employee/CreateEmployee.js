import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      employeeid : '',
      email: '',
      contactno: '',
      address: '',
      salary: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("I am Working");
    alert("Form Submitted");

    const employeeObject = {
      name: this.state.name,
      employeeid: this.state.employeeid,
      email: this.state.email,
      contactno: this.state.contactno,
      address: this.state.address,
      salary: this.state.salary
    };

    axios.post('http://localhost:8000/employee/create-employee', employeeObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      employeeid: '',
      email: '',
      contactno: '',
      address: '',
      salary: ''
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <p className="centered-paragraph">Create Your Employee Account</p>
  
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Employee Name" required />
          </Form.Group>

          <Form.Group controlId="EmployeeId">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control type="text" name="employeeid" value={this.state.employeeid} onChange={this.handleChange} placeholder="Enter Employee ID" required />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Employee Email" required />
          </Form.Group>
  
          <Form.Group controlId="ContactNo">
            <Form.Label>Contact No</Form.Label>
            <Form.Control type="text" name="contactno" value={this.state.contactno} onChange={this.handleChange} placeholder="Enter Employee Contact No" required />
          </Form.Group>
  
          <Form.Group controlId="Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Enter Employee Address" required />
          </Form.Group>

          <Form.Group controlId="Salary">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" name="salary" value={this.state.salary} onChange={this.handleChange} placeholder="Enter Employee salary" required />
          </Form.Group>
  
          <Button variant="primary" size="lg" block type="submit">
            Create Employee Account
          </Button>
        </Form>
      </div>
    );
  }
}
