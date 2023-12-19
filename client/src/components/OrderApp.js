import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import CreateOrder from './Order/CreateOrder';
import OrderList from './Order/OrderList';
import OrderHome from './Order/OrderHome';
//import AdminLogin from './Order/AdminLogin';
import EditOrder from './Order/EditOrder';
//import OrderLogin from './Order/OrderLogin';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from '../components/HomePage';


function OrderApp() {
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
                  <Link to={'/order-home'} className="nav-link">
                    Home For Orders
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/create-order'} className="nav-link">
                    Create New Order
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={'/order-list'} className="nav-link">
                    Order List
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

              <Route exact path="/create-order" component={CreateOrder}></Route>
              <Route exact path="/order-list" component={OrderList}></Route>
              <Route exact path="/order-home" component={OrderHome}></Route>
              <Route exact path="/edit-order/:id" component={EditOrder}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default OrderApp;
