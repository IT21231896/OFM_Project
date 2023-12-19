import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import EmployeeHome from './Employee/EmployeeHome';
//import EmployeeProfile from './Employee/EmployeeProfile';
//import EmployeeTaskList from './Employee/EmployeeTaskList';
import CreateEmployee from './Employee/CreateEmployee';
import EditEmployee from './Employee/EditEmployee';
import EmployeeList from './Employee/EmployeeList';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import HomePage from '../components/HomePage';

function EmployeeApp() {
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
                  <Link to={'/employee-home'} className="nav-link">
                    Home For Employee
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/employee-list'} className="nav-link">
                    Employee List
                  </Link>
                </Nav>
                
                <Nav>
                  <Link to={'/create-employee'} className="nav-link">
                    Create Employee
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
              <Route exact path="/create-employee" component={CreateEmployee}></Route>
              <Route exact path="/employee-home" component={EmployeeHome}></Route>
              <Route exact path="/employee-list" component={EmployeeList}></Route>
              <Route exact path="/edit-employee/:id" component={EditEmployee}></Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </div>
  );
}

export default EmployeeApp;
