import React, { Component } from "react";
import axios from "axios";

export default class EditDelivery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderid: "",
      customerName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
      country: ""
    };
  }

  componentDidMount() {
    // Fetch delivery details using the ID passed as a parameter in the URL
    axios
      .get(`http://localhost:8000/delivery/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          orderid: res.data.orderid,
          customerName: res.data.customerName,
          addressLine1: res.data.addressLine1,
          addressLine2: res.data.addressLine2,
          city: res.data.city,
          state: res.data.state,
          postalCode: res.data.postalCode,
          country: res.data.country
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      orderid,
      customerName,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      country
    } = this.state;

    // Update delivery details in the database
    axios
      .put(
        `http://localhost:8000/delivery/edit-delivery/${this.props.match.params.id}`,
        {
          orderid: orderid || undefined,
          customerName: customerName || undefined,
          addressLine1: addressLine1 || undefined,
          addressLine2: addressLine2 || undefined,
          city: city || undefined,
          state: state || undefined,
          postalCode: postalCode || undefined,
          country: country || undefined
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Delivery details updated successfully.");
        this.props.history.push("/delivery-list");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update delivery details.");
      });
  };

  render() {
    const { orderid, customerName, addressLine1, addressLine2, city, state, postalCode, country } = this.state;
  
    return (
      <div className="edit-delivery-container">
        <h1>Edit Delivery Details</h1>
        <form onSubmit={this.handleSubmit} className="edit-delivery-form">
          <div className="form-field">
            <label htmlFor="orderId">Order ID:</label>
            <input
              type="text"
              name="orderid"
              value={orderid}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              name="customerName"
              value={customerName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="addressLine1">Address Line 1:</label>
            <input
              type="text"
              name="addressLine1"
              value={addressLine1}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="addressLine2">Address Line 2:</label>
            <input
              type="text"
              name="addressLine2"
              value={addressLine2}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              name="state"
              value={state}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={postalCode}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={this.handleChange}
              required
            />
          </div>
  
          <button type="submit" className="update-button">Update</button>
        </form>
      </div>
    );
  }
}  