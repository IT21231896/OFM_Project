import React, { Component } from "react";
import axios from "axios";

export default class EditSupplier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      supplierid: "",
      mobileno: "",
      company: "",
      username: ""
    };
  }

  componentDidMount() {
    // Fetch supplier details using the ID passed as a parameter in the URL
    axios
      .get(`http://localhost:8000/supplier/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          supplierid: res.data.supplierid,
          mobileno: res.data.mobileno,
          company: res.data.company,
          username: res.data.username
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
    const { name, email, supplierid, mobileno } = this.state;

    // Update supplier details in the database
    axios
      .put(
        `http://localhost:8000/supplier/edit-supplier/${this.props.match.params.id}`,
        {
          name: name || undefined,
          email: email || undefined,
          supplierid: supplierid || undefined,
          mobileno: mobileno || undefined,
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Supplier details updated successfully.");
        this.props.history.push("/supplier-list");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update supplier details.");
      });
  };

  render() {
    const { name, email, supplierid, mobileno } = this.state;
  
    return (
      <div className="edit-supplier-container">
        <h1>Edit Supplier Details</h1>
        <form onSubmit={this.handleSubmit} className="edit-supplier-form">
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
            <label htmlFor="supplierid">Supplier ID:</label>
            <input
              type="text"
              name="supplierid"
              value={supplierid}
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
          <button type="submit" className="update-button">Update</button>
        </form>
      </div>
    );
  }
}  