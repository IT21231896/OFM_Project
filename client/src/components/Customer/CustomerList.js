import React, { Component } from "react";
import axios from "axios";
/* eslint-disable-next-line */
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class CustomerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchCustomers();
  }

  fetchCustomers = () => {
    axios
      .get("http://localhost:8000/cust")
      .then((res) => {
        this.setState({ customers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditClick = (customerId) => {
    console.log("Edit button clicked for customer id:", customerId);
    // Redirect to edit customer page, passing the customer ID as a parameter
    this.props.history.push(`/edit-customer/${customerId}`);
  };

  handleDeleteClick = (customerId) => {
    console.log("Delete button clicked for customer id:", customerId);
    // Show confirmation alert before deleting customer
    if (window.confirm("Are you sure you want to delete this customer?")) {
      // Delete customer from the database
      axios
        .delete(`http://localhost:8000/cust/${customerId}`)
        .then((res) => {
          console.log(res.data);
          // Fetch updated customer list
          this.fetchCustomers();
          alert("Customer deleted successfully.");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete customer.");
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
    const topicText = "Customer Details";
    const textWidth = doc.getTextWidth(topicText);
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    const y = 10;
    doc.text(topicText, x, y);

    const tableColumn = ["Name", "Email", "Customer ID", "Mobile No", "Username"];
    const tableRows = [];

    this.state.customers.forEach((customer) => {
      const customerData = [
        customer.name,
        customer.email,
        customer.custid,
        customer.mobileno,
        customer.username,
      ];
      tableRows.push(customerData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("customer-details.pdf");
  };

  render() {
    const { customers, searchTerm } = this.state;

    //for Search by using customer NAME
    const filteredCustomers = customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
      <div>
        <h1>Customer List</h1>
    
        {/*for Search menu */}
        <div className="customer-search">
          <input type="text" placeholder="Search By Name" onChange={this.handleSearch} />
        </div>

        <button className="download-button" onClick={this.generatePDF}>Download Report</button>

    
        {/*for displaying the table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Customer ID</th>
              <th>Mobile No</th>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
    
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.custid}</td>
                <td>{customer.mobileno}</td>
                <td>{customer.username}</td>
                <td>{customer.password}</td>
    
                <td>
                  <button
                    className="edit-button"
                    onClick={() => this.handleEditClick(customer._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => this.handleDeleteClick(customer._id)}
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