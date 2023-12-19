import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class CreateFinance extends Component {
  constructor(props) {
    super(props);
    this.state = {
        employeeId: '',
        employeeName: '',
        dateOfWorked: '',
        salaryAmount: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("I am Working");
    alert("Finance Details Submitted");

    const financeObject = {
      employeeId: this.state.employeeId,
      employeeName: this.state.employeeName,
      dateOfWorked: this.state.dateOfWorked,
      salaryAmount: this.state.salaryAmount,
    };

    axios.post('http://localhost:8000/finance/create-finance', financeObject)
      .then(res => console.log(res.data));

    this.setState({
        employeeId: '',
        employeeName: '',
        dateOfWorked: '',
        salaryAmount: '',
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <p className="centered-paragraph">Enter Finance Details</p>

          <Form.Group controlId="employeeId">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control type="text" name="employeeId" value={this.state.employeeId} onChange={this.handleChange} placeholder="Enter Employee ID" required />
          </Form.Group>

          <Form.Group controlId="employeeName">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control type="text" name="employeeName" value={this.state.employeeName} onChange={this.handleChange} placeholder="Enter Employee Name" required />
          </Form.Group>

          <Form.Group controlId="dateOfWorked">
            <Form.Label>Date of Worked</Form.Label>
            <Form.Control type="date" name="dateOfWorked" value={this.state.dateOfWorked} onChange={this.handleChange} placeholder="Enter Date of Worked" required />
          </Form.Group>

          <Form.Group controlId="salaryAmount">
            <Form.Label>Salary Amount</Form.Label>
            <Form.Control type="text" name="salaryAmount" value={this.state.salaryAmount} onChange={this.handleChange} placeholder="Enter Salary Amount" required />
          </Form.Group>

          <Button variant="primary" size="lg" block type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
