import React from 'react';
// import { StyledNavbar } from './Styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login';
import Logout from './Logout';

const Navbar = () => {
  return (
    // <StyledNavbar>
      <Row>
        <Col sm={12}>
        <Login />
        <Logout />
        </Col>
      </Row>   
    // {/* </StyledNavbar> */}
  )
}

export default Navbar
