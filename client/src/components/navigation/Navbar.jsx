import React from 'react';
import { StyledNavbar } from './Styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  return (
    <StyledNavbar>
      <Row>
        <Col sm={10}>
        <LoginButton />
        <LogoutButton />
        </Col>
      </Row>   
    </StyledNavbar>
  )
}

export default Navbar
