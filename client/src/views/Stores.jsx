import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/card';



function Stores() {
    return (
        <div>
        <Row className="justify-content-center">
            <Col sm="auto">
                <Button>Add Store</Button>
            </Col>
            <Col sm="auto">
                <Button>Edit Store</Button>
            </Col>
            <Col sm="auto">
                <Button>Delete Store</Button>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col sm="auto">
                <p>Store Options list that populate to screen. Socket.io</p>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col sm="auto">
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                store 1
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                store 2
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body> <p>Store list via socket.io. Should be seperate component</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </Col>
        </Row>

    </div>

    )
}

export default Stores;