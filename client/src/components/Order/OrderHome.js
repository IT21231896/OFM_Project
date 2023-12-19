import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

class OrderHome extends Component {
  render() {
    return (
      <div className="form-wrapper">
        
        <h3 className="centered-paragraph">Welcome to Order Home</h3>

        
        <div className="centered-paragraph">
          <Link to="/order-list" className="link-btn">ORDER LIST</Link>
        </div>
        
        
        <div className="centered-paragraph">
          <Link to="/create-order" className="link-btn">CREATE NEW ORDER</Link>
        </div>

      </div>
    );
  }
}

export default OrderHome;
