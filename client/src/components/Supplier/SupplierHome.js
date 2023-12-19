import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SupplierHome extends Component {
  render() {
    return (
      <div className="form-wrapper">
        
        <h3 className="centered-paragraph">Welcome to Supplier Home</h3>

        
        <div className="centered-paragraph">
          <Link to="/supplier-login" className="link-btn">SUPPLIER LOGIN</Link>
        </div>
        
        
        <div className="centered-paragraph">
          <Link to="/create-supplier" className="link-btn">CREATE NEW ACCOUNT</Link>
        </div>

      </div>
    );
  }
}

export default SupplierHome;
