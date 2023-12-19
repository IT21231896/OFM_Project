import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

class AccountHome extends Component {
  render() {
    return (
      <div className="form-wrapper">
        
        <h3 className="centered-paragraph">Welcome to Account Home</h3>

        
        <div className="centered-paragraph">
          <Link to="/customer-login" className="link-btn">CUSTOMER LOGIN</Link>
        </div>
        
        
        <div className="centered-paragraph">
          <Link to="/admin-login" className="link-btn">ADMIN LOGIN</Link>
        </div>
        

        <div className="centered-paragraph">
          <Link to="/create-customer" className="link-btn">CREATE NEW ACCOUNT</Link>
        </div>

      </div>
    );
  }
}

export default AccountHome;