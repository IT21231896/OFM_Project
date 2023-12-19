import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FinanceHome extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <h3 className="centered-paragraph">Welcome to Finance Home</h3>


        <div className="centered-paragraph">
          <Link to="/finance-list" className="link-btn">FINANCE LIST</Link>
        </div>

        <div className="centered-paragraph">
          <Link to="/create-finance" className="link-btn">CREATE NEW FINANCE</Link>
        </div>

      </div>
    );
  }
}

export default FinanceHome;
