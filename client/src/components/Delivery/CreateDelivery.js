import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderid: '',
      customerName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      region: '',
      postalCode: '',
      country: '',
    };
  }

  onChangeOrderID = (e) => {
    this.setState({
        orderid: e.target.value,
    });
  };

  onChangeCustomerName = (e) => {
    this.setState({
      customerName: e.target.value,
    });
  };

  onChangeAddressLine1 = (e) => {
    this.setState({
      addressLine1: e.target.value,
    });
  };

  onChangeAddressLine2 = (e) => {
    this.setState({
      addressLine2: e.target.value,
    });
  };

  onChangeCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  onChangeState = (e) => {
    this.setState({
      state: e.target.value,
    });
  };

  onChangeRegion = (e) => {
    this.setState({
      region: e.target.value,
    });
  };

  onChangePostalCode = (e) => {
    this.setState({
      postalCode: e.target.value,
    });
  };

  onChangeCountry = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const delivery = {
      orderid: this.state.orderid,
      customerName: this.state.customerName,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      region: this.state.region,
      postalCode: this.state.postalCode,
      country: this.state.country,
    };

    console.log(delivery);

    axios
      .post('http://localhost:8000/delivery/create-delivery', delivery)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      orderid: '',
      customerName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      region: '',
      postalCode: '',
      country: '',
    });
  };

  render() {
    return (
        <div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <p className="centered-paragraph">Create Delivery</p>

                <Form.Group controlId="orderid">
                    <Form.Label>Order ID</Form.Label>
                    <Form.Control type="text" value={this.state.orderid} onChange={this.onChangeOrderID} placeholder="Enter Order ID" required/>
                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" value={this.state.customerName} onChange={this.onChangeCustomerName} placeholder="Enter Customer Name" required/>
                </Form.Group>

                <Form.Group controlId="AddressLine1">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control type="text" value={this.state.addressLine1} onChange={this.onChangeAddressLine1} placeholder="Enter Address Line 1" required/>
                </Form.Group>

                <Form.Group controlId="AddressLine2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control type="text" value={this.state.addressLine2} onChange={this.onChangeAddressLine2} placeholder="Enter Address Line 2"/>
                </Form.Group>

                <Form.Group controlId="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" value={this.state.city} onChange={this.onChangeCity} placeholder="Enter City" required/>
                </Form.Group>

                <Form.Group controlId="State">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" value={this.state.state} onChange={this.onChangeState} placeholder="Enter State" required/>
                </Form.Group>

                <Form.Group controlId="Region">
                    <Form.Label>Region</Form.Label>
                    <Form.Control type="text" value={this.state.region} onChange={this.onChangeRegion} placeholder="Enter Region" required/>
                </Form.Group>

                <Form.Group controlId="PostalCode">
                    <Form.Label>Zip/Postal Code</Form.Label>
                    <Form.Control type="text" value={this.state.postalCode} onChange={this.onChangePostalCode} placeholder="Enter Zip/Postal Code" required/>
                </Form.Group>

                <Form.Group controlId="Country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" value={this.state.country} onChange={this.onChangeCountry} placeholder="Enter Country" required/>
                </Form.Group>

                <Button variant="primary" size="lg" block="block" type="submit">
                    Create Delivery
                </Button>
            </Form>
        </div>
    );
}

}