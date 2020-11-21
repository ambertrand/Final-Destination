import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginButton from './Login';
import Logout from './Logout';

const Navbar = () => {
  return (
      <Row>
        <Col sm={12}>
        <LoginButton />
        <Logout />
        </Col>
      </Row>  
  )
}

export default Navbar
