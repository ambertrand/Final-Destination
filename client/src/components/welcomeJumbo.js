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
        </Jumbotron>
    )
}

export default WelcomeJumbo;