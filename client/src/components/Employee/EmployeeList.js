import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees = () => {
    axios
      .get("http://localhost:8000/employee")
      .then((res) => {
        this.setState({ employees: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditClick = (employeeId) => {
    console.log("Edit button clicked for employee id:", employeeId);
    // Redirect to edit employee page, passing the employee ID as a parameter
    this.props.history.push(`/edit-employee/${employeeId}`);
  };

  handleDeleteClick = (employeeId) => {
    console.log("Delete button clicked for employee id:", employeeId);
    // Show confirmation alert before deleting employee
    if (window.confirm("Are you sure you want to delete this employee?")) {
      // Delete employee from the database
      axios
        .delete(`http://localhost:8000/employee/${employeeId}`)
        .then((res) => {
          console.log(res.data);
          // Fetch updated employee list
          this.fetchEmployees();
          alert("Employee deleted successfully.");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete employee.");
        });
    }
  };

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  generatePDF = () => {
    const doc = new jsPDF();

    // Add the topic name
    doc.setFontSize(16);
    const topicText = "Employee Details";
    const textWidth = doc.getTextWidth(topicText);
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    const y = 10;
    doc.text(topicText, x, y);

    const tableColumn = ["Name", "Employee ID", "Email", "Mobile No", "Salary"];
    const tableRows = [];

    this.state.employees.forEach((employee) => {
      const employeeData = [
        employee.name,
        employee.employeeid,
        employee.email,
        employee.contactno,
        employee.salary,
      ];
      tableRows.push(employeeData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("employee-details.pdf");
  };


  render() {
    const { employees, searchTerm } = this.state;
  
    // Filter employees based on search term
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Employee List</h1>
  
        {/* Search bar */}
        <div className="customer-search">
          <input
            type="text"
            placeholder="Search by Name"
            onChange={this.handleSearch}
          />
        </div>
  
        <button className="download-button" onClick={this.generatePDF}>
          Download Report
        </button>
  
        {/* Table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.employeeid}</td>
                <td>{employee.email}</td>
                <td>{employee.contactno}</td>
                <td>{employee.salary}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => this.handleEditClick(employee._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => this.handleDeleteClick(employee._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}  