import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderid: '',
      itemName: '',
      itemQty: '',
      totalPrice: '',
      customerId: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("I am Working");
    alert("Form Submitted");

    const orderObject = {
      orderid: this.state.orderid,
      itemName: this.state.itemName,
      itemQty: this.state.itemQty,
      totalPrice: this.state.totalPrice,
      customerId: this.state.customerId
    };

    axios.post('http://localhost:8000/order/create-order', orderObject)
      .then(res => console.log(res.data));

    this.setState({
      orderid: '',
      itemName: '',
      itemQty: '',
      totalPrice: '',
      customerId: ''
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <p className="centered-paragraph">Create Your Order Details</p>

          <Form.Group controlId="Orderid">
            <Form.Label>Order ID</Form.Label>
            <Form.Control type="text" name="orderid" value={this.state.orderid} onChange={this.handleChange} placeholder="Enter Order ID" required />
          </Form.Group>

          <Form.Group controlId="ItemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} placeholder="Enter Item Name" required />
          </Form.Group>

          <Form.Group controlId="ItemQty">
            <Form.Label>Item Quantity</Form.Label>
            <Form.Control type="number" name="itemQty" value={this.state.itemQty} onChange={this.handleChange} placeholder="Enter Item Quantity" required />
          </Form.Group>

          <Form.Group controlId="TotalPrice">
            <Form.Label>Total Price</Form.Label>
            <Form.Control type="number" name="totalPrice" value={this.state.totalPrice} onChange={this.handleChange} placeholder="Enter Total Price" required />
          </Form.Group>

          <Form.Group controlId="CustomerId">
            <Form.Label>Customer ID</Form.Label>
            <Form.Control type="text" name="customerId" value={this.state.customerId} onChange={this.handleChange} placeholder="Enter Customer ID" required />
          </Form.Group>

          <Button variant="primary" size="lg" block type="submit">
            Create Order
          </Button>
        </Form>
      </div>
    );
  }
}
