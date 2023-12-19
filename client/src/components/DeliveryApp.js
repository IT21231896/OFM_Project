import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import DeliveryHome from './Delivery/DeliveryHome';
import CreateDelivery from './Delivery/CreateDelivery';
import EditDelivery from './Delivery/EditDelivery';
import DeliveryList from './Delivery/DeliveryList';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from './HomePage';

function DeliveryApp() {
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
                  <Link to={'/delivery-home'} className="nav-link">
                    Delivery Home
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/delivery-list'} className="nav-link">
                    Delivery List
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={'/create-delivery'} className="nav-link">
                    Create Delivery
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
              <Route exact path="/delivery-home" component={DeliveryHome}></Route>
              <Route exact path="/create-delivery" component={CreateDelivery}></Route>
              <Route exact path="/delivery-list" component={DeliveryList}></Route>
              <Route exact path="/edit-delivery/:id" component={EditDelivery}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default DeliveryApp;
