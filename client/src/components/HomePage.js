import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function HomePage() {
  return (
    <div className="HomePage">
      <Navbar bg="dark" variant="dark">
        <Container>
              
          <Navbar.Brand>
            <Link to={'/'} className="nav-link">
              O F M - Online Food City
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav>
              <Link to={'/account-home'} className="nav-link">
                Customer Home
              </Link>
            </Nav>

            <Nav>
              <Link to={'/order-home'} className="nav-link">
                Order Home
              </Link>
            </Nav>

            <Nav>
              <Link to={'/supplier-home'} className="nav-link">
                Supplier Home
              </Link>
            </Nav>

            <Nav>
              <Link to={'/employee-home'} className="nav-link">
                Employee Home
              </Link>
            </Nav>

            <Nav>
              <Link to={'/bill-home'} className="nav-link">
                Bill Home
              </Link>
            </Nav>

            <Nav>
              <Link to={'/finance-home'} className="nav-link">
                Finance Home
              </Link>
            </Nav>

            <Nav>
              <Link to={'/delivery-home'} className="nav-link">
                Delivery Home
              </Link>
            </Nav>

            <Nav>
              <Link to={'/Addproduct'} className="nav-link">
                Stock Home
              </Link>
            </Nav>
            
            

          </Nav>
          < Nav>
              <Link to={'/login'} className="nav-link logout-btn">
                logout
              </Link>
          </Nav>
        </Container>
      </Navbar>

      
      <div className="jumbotron text-center">
        <h1>Welcome to the Admin Dashboard!</h1>
        <p>Manage and monitor your online food city with ease.</p>
      </div>

      <Container>
      <Row className="my-4">
          <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Customers</Card.Title>
                <Card.Text>
                  View and manage all the customers detailes
                </Card.Text>
                <Link to="/account-home" className="btn btn-primary">
                  View Customers
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Orders</Card.Title>
                <Card.Text>
                  View and manage all the orders made by your customers.
                </Card.Text>
                <Link to="/order-home" className="btn btn-primary">
                  View Orders
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-4">
        <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Supplier</Card.Title>
                <Card.Text>
                  Add, remove, and edit supplier and their roles.
                </Card.Text>
                <Link to="/supplier-home" className="btn btn-primary">
                  View Supplier
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Employee</Card.Title>
                <Card.Text>
                  Add, remove, and edit Employee and their roles.
                </Card.Text>
                <Link to="/employee-home" className="btn btn-primary">
                  Edit Emloyee
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-4">
        <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Bill Home</Card.Title>
                <Card.Text>
                  Add, remove, and edit Bill details.
                </Card.Text>
                <Link to="/bill-home" className="btn btn-primary">
                  View Bill
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Delivery</Card.Title>
                <Card.Text>
                  Add, update or delete Fiancial Deatils
                </Card.Text>
                <Link to="/delivery-home" className="btn btn-primary">
                  View Delivery
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-4">
        <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Fainance</Card.Title>
                <Card.Text>
                  Add, remove, and edit Finance Details.
                </Card.Text>
                <Link to="/finance-home" className="btn btn-primary">
                  View Finance
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Menu</Card.Title>
                <Card.Text>
                  Add, update or delete items from your online menu.
                </Card.Text>
                <Link to="/admin/menu" className="btn btn-primary">
                  Edit Menu
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-4">
        <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Products</Card.Title>
                <Card.Text>
                  Add, remove, and edit products Details.
                </Card.Text>
                <Link to="/product-home" className="btn btn-primary">
                  View Products
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow">
              <Card.Body>
                <Card.Title>Manage Menu</Card.Title>
                <Card.Text>
                  Add, update or delete items from your online menu.
                </Card.Text>
                <Link to="/admin/menu" className="btn btn-primary">
                  Edit Menu
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default HomePage;
