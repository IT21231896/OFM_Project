import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeliveryHome extends Component {
  render() {
    return (
      <div className="form-wrapper">
        
        <h3 className="centered-paragraph">Welcome to Delivery Home</h3>

        <div className="centered-paragraph">
          <Link to="/delivery-list" className="link-btn">DELIVERY LIST</Link>
        </div>
        
        <div className="centered-paragraph">
          <Link to="/create-delivery" className="link-btn">CREATE NEW DELIVERY</Link>
        </div>

        <div className="centered-paragraph">
          <Link to="/edit-delivery" className="link-btn">EDIT DELIVERY DETAILS</Link>
        </div>

      </div>
    );
  }
}

export default DeliveryHome;
