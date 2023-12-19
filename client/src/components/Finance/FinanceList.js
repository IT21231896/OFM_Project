import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class FinanceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      finances: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchFinances();
  }

  fetchFinances = () => {
    axios
      .get("http://localhost:8000/finance")
      .then((res) => {
        this.setState({ finances: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditClick = (financeId) => {
    console.log("Edit button clicked for finance id:", financeId);
    // Redirect to edit finance page, passing the finance ID as a parameter
    this.props.history.push(`/edit-finance/${financeId}`);
  };

  handleDeleteClick = (financeId) => {
    console.log("Delete button clicked for finance id:", financeId);
    // Show confirmation alert before deleting finance
    if (window.confirm("Are you sure you want to delete this finance?")) {
      // Delete finance from the database
      axios
        .delete(`http://localhost:8000/finance/${financeId}`)
        .then((res) => {
          console.log(res.data);
          // Fetch updated finance list
          this.fetchFinances();
          alert("Finance deleted successfully.");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete finance.");
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
    const topicText = "Finance Details";
    const textWidth = doc.getTextWidth(topicText);
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    const y = 10;
    doc.text(topicText, x, y);

    const tableColumn = ["Employee ID", "Employee Name", "Date of Worked", "Salary Amount"];
    const tableRows = [];

    this.state.finances.forEach((finance) => {
      const financeData = [
        finance.employeeId,
        finance.employeeName,
        finance.dateOfWorked,
        finance.salaryAmount,
      ];
      tableRows.push(financeData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("finance-details.pdf");
  };

  render() {
    const { finances, searchTerm } = this.state;
  
    // Filter the list of finances based on the search term
    const filteredFinances = finances.filter((finance) =>
      finance.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Finance List</h1>
  
        {/* Search input */}
        <div className="customer-search">
          <input type="text" placeholder="Search By Employee Name" onChange={this.handleSearch} />
        </div>
  
        {/* Download report button */}
        <button className="download-button" onClick={this.generatePDF}>Download Report</button>
  
        {/* Finance table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Date of Worked</th>
              <th>Salary Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {filteredFinances.map((finance) => (
              <tr key={finance._id}>
                <td>{finance.employeeId}</td>
                <td>{finance.employeeName}</td>
                <td>{finance.dateOfWorked}</td>
                <td>{finance.salaryAmount}</td>
  
                <td>
                  <button className="edit-button" onClick={() => this.handleEditClick(finance._id)}>Edit</button>
                  <button className="delete-button" onClick={() => this.handleDeleteClick(finance._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}             
