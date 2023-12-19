import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import CreateBill from './Bill/CreateBill';
import BillList from './Bill/BillList';
import BillHome from './Bill/BillHome';
import EditBill from './Bill/EditBill';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from '../components/HomePage';


function BillApp() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <a href='/' className='nav-link'>O F M - Online Food City</a>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/bill-home'} className="nav-link">
                    Home For Bills
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/create-bill'} className="nav-link">
                    Create New Bill
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={'/bill-list'} className="nav-link">
                    Bill List
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

              <Route exact path="/create-bill" component={CreateBill}></Route>
              <Route exact path="/bill-list" component={BillList}></Route>
              <Route exact path="/bill-home" component={BillHome}></Route>
              <Route exact path="/edit-bill/:id" component={EditBill}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default BillApp;
