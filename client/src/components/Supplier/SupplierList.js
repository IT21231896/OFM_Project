import React, { Component } from "react";
import axios from "axios";
/* eslint-disable-next-line */
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class SupplierList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suppliers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchSuppliers();
  }

  fetchSuppliers = () => {
    axios
      .get("http://localhost:8000/supplier")
      .then((res) => {
        this.setState({ suppliers: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditClick = (supplierId) => {
    console.log("Edit button clicked for supplier id:", supplierId);
    // Redirect to edit supplier page, passing the supplier ID as a parameter
    this.props.history.push(`/edit-supplier/${supplierId}`);
  };

  //Delete function
  handleDeleteClick = (supplierId) => {
    console.log("Delete button clicked for supplier id:", supplierId);
    // Show confirmation alert before deleting supplier
    if (window.confirm("Are you sure you want to delete this supplier?")) {
      // Delete supplier from the database
      axios
        .delete(`http://localhost:8000/supplier/${supplierId}`)
        .then((res) => {
          console.log(res.data);
          // Fetch updated supplier list
          this.fetchSuppliers();
          alert("Supplier deleted successfully.");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete supplier.");
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
    const topicText = "Supplier Details";
    const textWidth = doc.getTextWidth(topicText);
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    const y = 10;
    doc.text(topicText, x, y);

    const tableColumn = ["Name", "Email", "Supplier ID", "Mobile No", "Username"];
    const tableRows = [];

    this.state.suppliers.forEach((supplier) => {
      const supplierData = [
        supplier.name,
        supplier.email,
        supplier.mobileno,
        supplier.supplierid,
        supplier.company,
        supplier.username,
      ];
      tableRows.push(supplierData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("supplier-details.pdf");
  };

  render() {
    const { suppliers, searchTerm } = this.state;
  
    // Filter suppliers based on search term
    const filteredSuppliers = suppliers.filter(supplier =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Supplier List</h1>
  
        {/* Search bar */}
        <div className="customer-search">
          <input type="text" placeholder="Search by Name" onChange={this.handleSearch} />
        </div>

        <button className="download-button" onClick={this.generatePDF}>Download Report</button>

        {/* Table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Supplier ID</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Company</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map(supplier => (
              <tr key={supplier._id}>
                <td>{supplier.name}</td>
                <td>{supplier.supplierid}</td>
                <td>{supplier.email}</td>
                <td>{supplier.mobileno}</td>
                <td>{supplier.company}</td>
                <td>{supplier.username}</td>
                <td>
                  <button className="edit-button" onClick={() => this.handleEditClick(supplier._id)}>Edit</button>
                  <button className="delete-button" onClick={() => this.handleDeleteClick(supplier._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}  