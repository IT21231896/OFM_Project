import React, { Component } from "react";
import axios from "axios";
/* eslint-disable-next-line */
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class OrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders = () => {
    axios
      .get("http://localhost:8000/order")
      .then((res) => {
        this.setState({ orders: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEditClick = (orderId) => {
    console.log("Edit button clicked for order id:", orderId);
    // Redirect to edit order page, passing the order ID as a parameter
    this.props.history.push(`/edit-order/${orderId}`);
  };

  handleDeleteClick = (orderId) => {
    console.log("Delete button clicked for order id:", orderId);
    // Show confirmation alert before deleting order
    if (window.confirm("Are you sure you want to delete this order?")) {
      // Delete order from the database
      axios
        .delete(`http://localhost:8000/order/${orderId}`)
        .then((res) => {
          console.log(res.data);
          // Fetch updated order list
          this.fetchOrders();
          alert("Order deleted successfully.");
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to delete order.");
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
    const topicText = "Order Details";
    const textWidth = doc.getTextWidth(topicText);
    const pageWidth = doc.internal.pageSize.width;
    const x = (pageWidth - textWidth) / 2;
    const y = 10;
    doc.text(topicText, x, y);
  
    // Add the table data
    const tableColumn = ["Order ID", "Item Name", "Quantity", "Total Price", "Customer ID"];
    const tableRows = [];
    this.state.orders.forEach((order) => {
      const orderData = [
        order.orderid,
        order.itemName,
        order.itemQty,
        order.totalPrice,
        order.customerId
      ];
      tableRows.push(orderData);
    });
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save("order-details.pdf");
  };
  

  render() {
    const { orders, searchTerm } = this.state;
  
    // Filter orders based on search term
    const filteredOrders = orders.filter(order =>
      order.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Order List</h1>
  
        {/* Search bar */}
        <div className="customer-search">
          <input type="text" placeholder="Search by Item Name" onChange={this.handleSearch} />
        </div>
  
        <button className="download-button" onClick={this.generatePDF}>Download Report</button>
  
        {/* Table */}
        <table className="customer-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order._id}>
                <td>{order.orderid}</td>
                <td>{order.customerId}</td>
                <td>{order.itemName}</td>
                <td>{order.itemQty}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <button className="edit-button" onClick={() => this.handleEditClick(order._id)}>Edit</button>
                  <button className="delete-button" onClick={() => this.handleDeleteClick(order._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}  