import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

function JumboSection() {
    return (
        <Jumbotron fluid className="jumbo">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <h2 >While You're There</h2>
                    {/* className="display-4" */}
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto">
                <img src="https://static.thenounproject.com/png/1700380-200.png" width="100px" alt="shopping cart"/>
                {/* <img src="./assets/shoppingCart.png" width="100px" alt="shopping cart"/> */}
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default JumboSection;