import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Styles';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';

import JumboSection from "../../components/welcomeJumbotron.jsx";
import AboutUs from "../../components/aboutUs.js";
import SignUp from "../../components/signUp.js";


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

        {/* <Row>
          <Col sm={12}>
            <JumboSection />

            <AboutUs />

            <SignUp />
          </Col>
        </Row> */}
      </div>

    )
  )
}

export default LoginButton;