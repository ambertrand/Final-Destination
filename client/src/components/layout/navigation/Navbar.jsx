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

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Col sm={12} md={2}>
      <button
        className="logOut mt-1 pr-2"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
          </button>
    </Col>
  );
};

const Logout = () => {
  const { isAuthenticated } = useAuth0();
  return (

    isAuthenticated && (
      <div>
        <Row>
            <Col sm={12} md={10} className="navigation-sub mt-2">
              <Link to="/home" className="item navbar-brand text-white">Home</Link>
              <Link to="/userinfo" className="item navbar-brand text-white">Profile</Link>
              <Link to="/shopping" className="item navbar-brand text-white">Shopping</Link>
              <Link to="/about" className="item navbar-brand text-white">About Us</Link>
            </Col>
            <LogoutButton>
              Log Out
            </LogoutButton>
        </Row>
      </div>
    )
  )
}

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
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
