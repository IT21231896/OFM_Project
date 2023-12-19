import React, { Component } from "react";
import axios from "axios";

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      employeeid: "",
      contactno: "",
      address: "",
    };
  }

  componentDidMount() {
    // Fetch employee details using the ID passed as a parameter in the URL
    axios
      .get(`http://localhost:8000/employee/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          employeeid: res.data.employeeid,
          contactno: res.data.contactno,
          address: res.data.address,
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
    const { name, email, employeeid, contactno, address } = this.state;

    // Update employee details in the database
    axios
      .put(
        `http://localhost:8000/employee/edit-employee/${this.props.match.params.id}`,
        {
          name: name || undefined,
          email: email || undefined,
          employeeid: employeeid || undefined,
          contactno: contactno || undefined,
          address: address || undefined,
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Employee details updated successfully.");
        this.props.history.push("/employee-list");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update employee details.");
      });
  };

  render() {
    const { name, email, employeeid, contactno, address } = this.state;
  
    return (
      <div className="edit-employee-container">
        <h1>Edit Employee Details</h1>
        <form onSubmit={this.handleSubmit} className="edit-employee-form">
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
            <label htmlFor="employeeid">Employee ID:</label>
            <input
              type="text"
              name="employeeid"
              value={employeeid}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contactno">Contect No:</label>
            <input
              type="text"
              name="contactno"
              value={contactno}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              value={address}
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
