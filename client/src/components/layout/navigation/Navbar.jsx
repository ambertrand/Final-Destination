import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from './Styles';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0()
  return (
    !isAuthenticated && (
      <div>
        <Button className="m-2 mr-auto" onClick={() => loginWithPopup()}>
          Log in/Sign Up
        </Button>
      </div>

    )
  )
}

const Logout = () => {
  const { isAuthenticated, logout } = useAuth0();
  return (

    isAuthenticated && (
      <div>
        <Row>
          <Col sm={12} md={9} className="navigation-sub">
            <Link to="/home" className="item navbar-brand text-white">Home</Link>
            <Link to="/userinfo" className="item navbar-brand text-white">Profile</Link>
            <Link to="/shopping" className="item navbar-brand text-white">Shopping </Link>
            <Link to="/about" className="item navbar-brand text-white">About Us </Link>

          </Col>
          <Col sm={12} md={3} className="navigation-sub">
            <Button className="m-2 mr-auto" onClick={() => logout()}>
              Log Out
            </Button>

          </Col>
        </Row>
      </div>
    )
  )
}

const Navigation = () => {
  return (
    <div>
      <Navbar className="row" bg="dark" variant="dark">
        <Navbar.Brand className="col" href="#home">
          <Row className="justify-content-center">
            <Col>
            Image or icon here
              {/* <img
                alt="ShoppingCart"
                src="https://static.thenounproject.com/png/1700380-200.png"
                width="30"
                height="30"
                className="bg-light"
              /> */}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              While You're There
            </Col>
          </Row>

        </Navbar.Brand>
        <Nav className="col justify-content-end">
          <LoginButton />
          <Logout />
        </Nav>
      </Navbar>

    </div>

  )
}

export default Navigation
