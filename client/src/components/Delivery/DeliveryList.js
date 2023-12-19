import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class DeliveryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deliveries: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchDeliveries();
  }

  fetchDeliveries = () => {
    axios
      .get("http://localhost:8000/delivery")
      .then((res) => {
        this.setState({ deliveries: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditClick = (deliveryId) => {
    console.log("Edit button clicked for delivery id:", deliveryId);
    // Redirect to edit delivery page, passing the delivery ID as a parameter
    this.props.history.push(`/edit-delivery/${deliveryId}`);
  };

  handleDeleteClick = (deliveryId) => {
    console.log("Delete button clicked for delivery id:", deliveryId);
    // Show confirmation alert before deleting delivery
    if (window.confirm("Are you sure you want to delete this delivery?")) {
      // Delete delivery from the database
      axios
        .delete(`http://localhost:8000/delivery/${deliveryId}`)
        .then((res) => {
          console.log(res.data);
          // Fetch updated delivery list
          this.fetchDeliveries();
          alert("Delivery deleted successfully.");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete delivery.");
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
    const topicText = "Delivery Details";
    const textWidth = doc.getTextWidth(topicText);
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    const y = 10;
    doc.text(topicText, x, y);

    const tableColumn = [
      "Order ID",
      "Customer Name",
      "Address Line 1",
      "Address Line 2",
      "City",
      "State",
      "Region",
      "Postal Code",
      "Country",
    ];
    const tableRows = [];

    this.state.deliveries.forEach((delivery) => {
      const deliveryData = [
        delivery.orderid,
        delivery.customerName,
        delivery.addressLine1,
        delivery.addressLine2,
        delivery.city,
        delivery.state,
        delivery.region,
        delivery.postalCode,
        delivery.country,
      ];
      tableRows.push(deliveryData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("delivery-details.pdf");
  };

  render() {
    const { deliveries, searchTerm } = this.state;
  
    // Filter deliveries based on search term
    const filteredDeliveries = deliveries.filter((delivery) =>
      delivery.orderid.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Delivery List</h1>
  
        {/* Search bar */}
        <div className="customer-search">
          <input
            type="text"
            placeholder="Search by customer name"
            onChange={this.handleSearch}
          />
        </div>
  
        {/* Download report button */}
        <button className="download-button" onClick={this.generatePDF}>
          Download Report
        </button>
  
        {/* Delivery table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Region</th>
              <th>Postal Code</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>
          </thead>
  
          <tbody>
            {filteredDeliveries.map((delivery) => (
              <tr key={delivery._id}>
                <td>{delivery.orderid}</td>
                <td>{delivery.customerName}</td>
                <td>
                  {delivery.addressLine1}
                  <br />
                  {delivery.addressLine2}
                </td>
                <td>{delivery.city}</td>
                <td>{delivery.state}</td>
                <td>{delivery.region}</td>
                <td>{delivery.postalCode}</td>
                <td>{delivery.country}</td>
                <td>
                  {/* Edit button */}
                  <button
                    className="edit-button"
                    onClick={() => this.handleEditClick(delivery._id)}
                  >
                    Edit
                  </button>
  
                  {/* Delete button */}
                  <button
                    className="delete-button"
                    onClick={() => this.handleDeleteClick(delivery._id)}
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