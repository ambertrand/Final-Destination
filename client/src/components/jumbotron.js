import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function JumboSection() {
    return (
        <Jumbotron fluid>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h2>While You're There</h2>
                </Col>

            </Row>
        </Jumbotron>
    )
}

export default JumboSection;