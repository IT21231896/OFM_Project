import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default class CreateBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billno: '',
      item: '',
      quantity: '',
      price: '',
      totalprice: '',
    };
  }

  componentDidMount() {
    // Call an API or generate the bill number in your preferred way
    // Here, we are generating the bill number starting from 12001
    const startingBillNumber = 12001;
    const billNumber = startingBillNumber + Math.floor(Math.random() * 1000);
    this.setState({ billno: billNumber.toString() });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'quantity' || name === 'price') {
      const quantity = name === 'quantity' ? parseInt(value) : parseInt(this.state.quantity);
      const price = name === 'price' ? parseInt(value) : parseInt(this.state.price);
      const totalprice = quantity * price;

      this.setState({
        [name]: value,
        totalprice: totalprice.toFixed(2), // assuming you want to display the total with 2 decimal places
      });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("I am Working");
    alert("Form Submitted");

    const billObject = {
      billno: this.state.billno,
      item: this.state.item,
      quantity: this.state.quantity,
      price: this.state.price,
      totalprice: this.state.totalprice,
    };

    axios.post('http://localhost:8000/bill/create-bill', billObject)
      .then(res => console.log(res.data));

    this.setState({
      billno: '',
      item: '',
      quantity: '',
      price: '',
      totalprice: '',
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit}>
          <p className="centered-paragraph">Create Your Bill</p>
  
          <Form.Group controlId="billno">
            <Form.Label>Bill No</Form.Label>
            <Form.Control type="text" name="billno" value={this.state.billno} onChange={this.handleChange} placeholder="Enter Your Bill No" required readOnly />
          </Form.Group>
  
          <Form.Group controlId="item">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" name="item" value={this.state.item} onChange={this.handleChange} placeholder="Enter Item" required />
          </Form.Group>
  
          <Form.Group controlId="quantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} placeholder="Enter Quantity" required />
          </Form.Group>
  
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleChange} placeholder="Enter Price" required />
          </Form.Group>
  
          <Form.Group controlId="totalprice">
            <Form.Label>Total Price</Form.Label>
            <Form.Control type="text" name="totalprice" value={this.state.totalprice} onChange={this.handleChange} placeholder="Enter Total Price" required readOnly />
          </Form.Group>
  
          <Button variant="primary" size="lg" block type="submit">
            Create Bill
          </Button>
        </Form>
      </div>
    );
  }
}  