import React, { Component } from "react";
import axios from "axios";

export default class EditOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderid: "",
      itemName: "",
      itemQty: "",
      totalPrice: "",
      customerId: "",
    };
  }

  componentDidMount() {
    // Fetch order details using the ID passed as a parameter in the URL
    axios
      .get(`http://localhost:8000/order/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          orderid: res.data.orderid,
          itemName: res.data.itemName,
          itemQty: res.data.itemQty,
          totalPrice: res.data.totalPrice,
          customerId: res.data.customerId,
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
    const { orderid, itemName, itemQty, totalPrice, customerId } = this.state;

    // Update order details in the database
    axios
      .put(
        `http://localhost:8000/order/edit-order/${this.props.match.params.id}`,
        {
          orderid: orderid || undefined,
          itemName: itemName || undefined,
          itemQty: itemQty || undefined,
          totalPrice: totalPrice || undefined,
          customerId: customerId || undefined,
        }
      )
      .then((res) => {
        
        alert("Order details updated successfully.");
        this.props.history.push("/order-list");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update order details.");
      });
  };

  render() {
    const { orderid, itemName, itemQty, totalPrice, customerId } = this.state;

    return (
      <div className="edit-order-container">
        <h1>Edit Order Details</h1>
        <form onSubmit={this.handleSubmit} className="edit-order-form">
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
            <label htmlFor="itemName">Item Name:</label>
            <input
              type="text"
              name="itemName"
              value={itemName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="itemQty">Item Quantity:</label>
            <input
              type="number"
              name="itemQty"
              value={itemQty}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="totalPrice">Total Price:</label>
            <input
              type="number"
              name="totalPrice"
              value={totalPrice}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="customerId">Customer ID:</label>
            <input
              type="text"
              name="customerId"
              value={customerId}
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit" className="update-button">
            Update
          </button>
        </form>
      </div>
    );
  }
}
