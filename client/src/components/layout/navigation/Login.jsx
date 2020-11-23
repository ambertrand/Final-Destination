import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Styles';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

const LoginButton = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0()
  return (
    !isAuthenticated && (
      <div>
        <Row className="justify-content-end bg-dark">
          {/*  */}
          <Col sm={2}>
            <Button className="m-2" onClick={() => loginWithPopup()}>
              Log in/Sign Up
            </Button>
          </Col>
        </Row>
      </div>

    )
  )
}

export default LoginButton;