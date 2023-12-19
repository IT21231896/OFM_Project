import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import FinanceHome from './Finance/FinanceHome';
import CreateFinance from './Finance/CreateFinance';
import EditFinance from './Finance/EditFinance';
import FinanceList from './Finance/FinanceList';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from '../components/HomePage';

function FinanceApp() {
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
                  <Link to={'/finance-home'} className="nav-link">
                    Finance Home
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/finance-list'} className="nav-link">
                    Finance List
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={'/create-finance'} className="nav-link">
                    Create Finance
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
              <Route exact path="/finance-home" component={FinanceHome}></Route>
              <Route exact path="/create-finance" component={CreateFinance}></Route>
              <Route exact path="/finance-list" component={FinanceList}></Route>
              <Route exact path="/edit-finance/:id" component={EditFinance}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default FinanceApp;
