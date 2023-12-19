import React, { Component } from "react";
import axios from "axios";

export default class EditFinance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeeId: "",
      employeeName: "",
      dateOfWorked: "",
      salaryAmount: "",
    };
  }

  componentDidMount() {
    // Fetch finance details using the ID passed as a parameter in the URL
    axios
      .get(`http://localhost:8000/finance/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          employeeId: res.data.employeeId,
          employeeName: res.data.employeeName,
          dateOfWorked: res.data.dateOfWorked,
          salaryAmount: res.data.salaryAmount,
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
    const { employeeId, employeeName, dateOfWorked, salaryAmount } = this.state;

    // Update finance details in the database
    axios
      .put(
        `http://localhost:8000/finance/edit-finance/${this.props.match.params.id}`,
        {
          employeeId: employeeId || undefined,
          employeeName: employeeName || undefined,
          dateOfWorked: dateOfWorked || undefined,
          salaryAmount: salaryAmount || undefined,
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("Finance details updated successfully.");
        this.props.history.push("/finance-list");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to update finance details.");
      });
  };

  render() {
    const { employeeId, employeeName, dateOfWorked, salaryAmount } = this.state;

    return (
      <div className="edit-finance-container">
        <h1>Edit Finance Details</h1>
        <form onSubmit={this.handleSubmit} className="edit-finance-form">
          <div className="form-field">
            <label htmlFor="employeeId">Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={employeeId}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="employeeName">Employee Name:</label>
            <input
              type="text"
              name="employeeName"
              value={employeeName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="dateOfWorked">Date of Worked:</label>
            <input
              type="date"
              name="dateOfWorked"
              value={dateOfWorked}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="salaryAmount">Salary Amount:</label>
            <input
              type="text"
              name="salaryAmount"
              value={salaryAmount}
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
