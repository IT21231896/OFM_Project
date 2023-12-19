import React, { Component } from "react";
import axios from "axios";

export default class EditCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      custid: "",
      mobileno: "",
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    // Fetch customer details using the ID passed as a parameter in the URL
    axios
      .get(`http://localhost:8000/cust/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          custid: res.data.custid,
          mobileno: res.data.mobileno,
          username: res.data.username,
          password: res.data.password
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
    const { name, email, custid, mobileno, username, password } = this.state;

    // Update customer details in the database
    axios
      .put(`http://localhost:8000/cust/edit-customer/${this.props.match.params.id}`, {
        name: name || undefined,
        email: email || undefined,
        custid: custid || undefined,
        mobileno: mobileno || undefined,
        username: username || undefined,
        password: password || undefined
      })
      .then((res) => {
        console.log(res.data);
        alert("Customer details updated successfully.");
        this.props.history.push("/customer-list");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update customer details.");
      });
  };

  render() {
    const { name, email, custid, mobileno, username, password } = this.state;

    return (
      <div className="edit-customer-container">
        <h1>Edit Customer Details</h1>
        <form onSubmit={this.handleSubmit} className="edit-customer-form">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="custid">Customer ID:</label>
            <input
              type="text"
              name="custid"
              value={custid}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="mobileno">Mobile No:</label>
            <input
              type="text"
              name="mobileno"
              value={mobileno}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              value={password}
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
