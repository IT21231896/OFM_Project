import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import CreateCustomer from './Customer/CreateCustomer';
import CustomerList from './Customer/CustomerList';
import AccountHome from './Customer/AccountHome';
import AdminLogin from './Customer/AdminLogin';
import EditCustomer from './Customer/EditCustomer';
import CustomerLogin from './Customer/CustomerLogin';
//import HomePage from './HomePage';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from '../components/HomePage';


function CustomerApp() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                {/*we shoud use a href="" methode for connect othe pages here */}
                <a href='/home-page' className='nav-link'>O F M - Online Food City</a>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/account-home'} className="nav-link">
                    Home For Customer
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/create-customer'} className="nav-link">
                    Create New Account
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={'/customer-list'} className="nav-link">
                    Customer List
                  </Link>
                  
                </Nav>
             
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <div className="wrapper">
            <Switch>
            <Route exact path="/" component={HomePage}></Route>

              <Route exact path="/create-customer" component={CreateCustomer}></Route>
              <Route exact path="/customer-list" component={CustomerList}></Route>
              <Route exact path="/customer-login" component={CustomerLogin}></Route>
              <Route exact path="/admin-login" component={AdminLogin}></Route>
              <Route exact path="/account-home" component={AccountHome}></Route>
              <Route exact path="/edit-customer/:id" component={EditCustomer}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default CustomerApp;
