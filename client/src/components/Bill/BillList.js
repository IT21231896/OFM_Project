import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class BillList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bills: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchBills();
  }

  fetchBills = () => {
    axios
      .get("http://localhost:8000/bill")
      .then((res) => {
        this.setState({ bills: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditClick = (billId) => {
    console.log("Edit button clicked for bill id:", billId);
    // Redirect to edit bill page, passing the bill ID as a parameter
    this.props.history.push(`/edit-bill/${billId}`);
  };

  handleDeleteClick = (billId) => {
    console.log("Delete button clicked for bill id:", billId);
    // Show confirmation alert before deleting bill
    if (window.confirm("Are you sure you want to delete this bill?")) {
      // Delete bill from the database
      axios
        .delete(`http://localhost:8000/bill/${billId}`)
        .then((res) => {
          console.log(res.data);
          // Fetch updated bill list
          this.fetchBills();
          alert("Bill deleted successfully.");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete bill.");
        });
    }
  };

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  generatePDF = () => {
    const doc = new jsPDF();

    const tableColumn = ["Bill No", "Item", "Quantity", "Price", "Total Price"];
    const tableRows = [];

    this.state.bills.forEach((bill) => {
      const billData = [
        bill.billno,
        bill.item,
        bill.quantity,
        bill.price,
        bill.totalprice,
      ];
      tableRows.push(billData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("bill-details.pdf");
  };


  render() {
    const { bills, searchTerm } = this.state;
  
    // Filter bills based on search term
    const filteredBills = bills.filter((bill) =>
      bill.billno.toString().includes(searchTerm) ||
      bill.item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Bill List</h1>
  
        {/* Search bar */}
        <div className="customer-search">
          <input
            type="text"
            placeholder="Search by Bill No or Item"
            onChange={this.handleSearch}
          />
        </div>
  
        {/* Generate PDF button */}
        <button className="download-button" onClick={this.generatePDF}>
          Download Report
        </button>
  
        {/* Table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Bill No</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBills.map((bill) => (
              <tr key={bill._id}>
                <td>{bill.billno}</td>
                <td>{bill.item}</td>
                <td>{bill.quantity}</td>
                <td>{bill.price}</td>
                <td>{bill.totalprice}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => this.handleEditClick(bill._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => this.handleDeleteClick(bill._id)}
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