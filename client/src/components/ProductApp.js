import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import AddProduct from './ProductManagement/AddProduct'
import ViewProduct from './ProductManagement/AddProduct'
import updateProduct from './ProductManagement/AddProduct'
import ProductManagement from './ProductManagement/AddProduct'


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from './HomePage';


function ProductApp() {
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
                  <Link to={'/getProducts'} className="nav-link">
                    Product Lists
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/addProduct'} className="nav-link">
                    Add Product
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

              <Route exact path="/addProduct" component={AddProduct}></Route>
              <Route exact path="/getProducts" component={ViewProduct}></Route>
              <Route exact path="/delete-product/:id" component={ProductManagement}></Route>
              <Route exact path="/update-product/:id" component={updateProduct}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default ProductApp;
