import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

class BillHome extends Component {
  render() {
    return (
      <div className="form-wrapper">
        
        <h3 className="centered-paragraph">Welcome to Bill Home</h3>

        
        <div className="centered-paragraph">
          <Link to="/bill-list" className="link-btn">BILL LIST</Link>
        </div>
        
        
        <div className="centered-paragraph">
          <Link to="/create-bill" className="link-btn">CREATE NEW BILL</Link>
        </div>

      </div>
    );
  }
}

export default BillHome;
