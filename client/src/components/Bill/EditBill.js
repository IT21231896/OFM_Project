import React, { Component } from "react";
import axios from "axios";

export default class EditBill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      billno: "",
      item: "",
      quantity: "",
      price: "",
      totalprice: ""
    };
  }

  componentDidMount() {
    // Fetch bill details using the ID passed as a parameter in the URL
    axios
      .get(`http://localhost:8000/bill/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          billno: res.data.billno,
          item: res.data.item,
          quantity: res.data.quantity,
          price: res.data.price,
          totalprice: res.data.totalprice
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
    const { billno, item, quantity, price, totalprice } = this.state;

    // Update bill details in the database
    axios
      .put(`http://localhost:8000/bill/edit-bill/${this.props.match.params.id}`, {
        billno: billno || undefined,
        item: item || undefined,
        quantity: quantity || undefined,
        price: price || undefined,
        totalprice: totalprice || undefined
      })
      .then((res) => {
        console.log(res.data);
        alert("Bill details updated successfully.");
        this.props.history.push("/bill-list");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update bill details.");
      });
  };

  render() {
    const { billno, item, quantity, price, totalprice } = this.state;
  
    return (
      <div className="edit-bill-container">
        <h1>Edit Bill Details</h1>
        <form onSubmit={this.handleSubmit} className="edit-bill-form">
          <div className="form-field">
            <label htmlFor="billno">Bill No:</label>
            <input
              type="text"
              name="billno"
              value={billno}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="item">Item:</label>
            <input
              type="text"
              name="item"
              value={item}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="totalprice">Total Price:</label>
            <input
              type="number"
              name="totalprice"
              value={totalprice}
              onChange={this.handleChange}
            />
          </div>
  
          <button type="submit" className="update-button">Update</button>
        </form>
      </div>
    );
  }
}  