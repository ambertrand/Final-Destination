import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from './Styles';
import { Link } from 'react-router-dom';
import shoppingCart from '../../../assets/shoppingCart.png';

const LoginButton = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0()
  return (
    !isAuthenticated && (
      <div className="ml-auto">
        <Button className="m-2" onClick={(event) => loginWithPopup()}>
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
          <Col sm={12} md={9} className="navigation-sub pt-2">
            <Link to="/home" className="item navbar-brand text-white">Home</Link>
            <Link to="/userinfo" className="item navbar-brand text-white">Profile</Link>
            <Link to="/shopping" className="item navbar-brand text-white">Shopping</Link>
            <Link to="/about" className="item navbar-brand text-white">About Us</Link>

          </Col>
          <Col sm={12} md={3} className="navigation-sub">
            <Button className="" onClick={() => logout()}>
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
      <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">
                  <img
                    alt="ShoppingCart"
                    src={shoppingCart}
                    width="50"
                    height="50"
                    className="shoppingLogo"
                  />
            </Navbar.Brand>
            <Nav className="ml-auto">
              <LoginButton />
              <Logout />
            </Nav>
      </Navbar>

    </div>

  )
}

export default Navigation
