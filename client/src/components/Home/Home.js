import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './home1css/homeP.css'

import Slider from 'react-slick';


//imgs
import img1 from './imagesHome/img1.jpg'
import img2 from './imagesHome/img2.jpg'
import img3 from './imagesHome/img3.jpg'
import img4 from './imagesHome/img4.jpeg'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function HomePage() {

  // settings for the image slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

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
              <Link to={'/login'} className="nav-link">
                Admin Login
              </Link>
            </Nav>

            <Nav>
              <Link to={'/user-login'} className="nav-link">
                User Login
              </Link>
            </Nav>

            

          </Nav>
        </Container>
      </Navbar>



      <Slider {...settings}>
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img2} alt="img2" />
        </div>
        <div>
          <img src={img3} alt="img3" />
        </div>
        <div>
          <img src={img4} alt="img4" />
        </div>
      </Slider>

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
                <Link to="/orderhome" className="btn btn-primary">
                  View Orders
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
