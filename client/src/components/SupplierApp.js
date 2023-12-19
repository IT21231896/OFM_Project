import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import CreateSupplier from './Supplier/CreateSupplier';
import SupplierList from './Supplier/SupplierList';
import SupplierHome from './Supplier/SupplierHome';
import EditSupplier from './Supplier/EditSupplier';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from '../components/HomePage';


function SupplierApp() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <a href='/home-page' className='nav-link'>O F M - Online Food City</a>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/supplier-home'} className="nav-link">
                    Home For Supplier
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/create-supplier'} className="nav-link">
                    Register as a Supplier
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={'/supplier-list'} className="nav-link">
                    Supplier List
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
              <Route exact path="/create-supplier" component={CreateSupplier}></Route>
              <Route exact path="/supplier-list" component={SupplierList}></Route>            
              <Route exact path="/supplier-home" component={SupplierHome}></Route>
              <Route exact path="/edit-supplier/:id" component={EditSupplier}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default SupplierApp;
