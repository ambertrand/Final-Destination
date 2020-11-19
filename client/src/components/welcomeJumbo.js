import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function WelcomeJumbo() {
    return (
        <Jumbotron fluid>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h2>Welcome to While You're There</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">

                    <img className="animate__animated animate__bounceInLeft" src="https://static.thenounproject.com/png/1700380-200.png" width="100px" alt="shopping cart" />
                    {/* <img src="./assets/shoppingCart.png" width="100px" alt="shopping cart"/> */}
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default WelcomeJumbo;