import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmployeeHome extends Component {
  render() {
    return (
      <div className="form-wrapper">
        
        <h3 className="centered-paragraph">Welcome to Employee Home</h3>

        
        <div className="centered-paragraph">
          <Link to="/employee-login" className="link-btn">EMPLOYEE LOGIN</Link>
        </div>
        
        
        <div className="centered-paragraph">
          <Link to="/create-employee" className="link-btn">CREATE NEW ACCOUNT</Link>
        </div>

      </div>
    );
  }
}

export default EmployeeHome;
